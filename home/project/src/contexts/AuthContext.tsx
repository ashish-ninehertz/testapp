import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase, Profile, getProfile, logAuditEvent } from '../lib/supabase'
import { User, mockLogin, mockSignup, mockLogout, mockGetSession, USE_MOCK_DATA } from '../lib/mockData'

interface AuthContextType {
  user: Profile | User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
  updateUserProfile?: (updates: Partial<Profile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Profile | User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        if (USE_MOCK_DATA) {
          const session = await mockGetSession()
          setUser(session)
        } else {
          const { data: { session } } = await supabase.auth.getSession()
          
          if (session?.user) {
            const profile = await getProfile(session.user.id)
            setUser(profile)
          }
        }
      } catch (error) {
        console.error('Error checking session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()

    if (!USE_MOCK_DATA) {
      // Listen for auth state changes (only in real mode)
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (event === 'SIGNED_IN' && session?.user) {
            const profile = await getProfile(session.user.id)
            setUser(profile)
            await logAuditEvent('user_signed_in', 'auth')
          } else if (event === 'SIGNED_OUT') {
            setUser(null)
          } else if (event === 'USER_UPDATED' && session?.user) {
            const profile = await getProfile(session.user.id)
            setUser(profile)
          }
        }
      )

      return () => {
        subscription.unsubscribe()
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      if (USE_MOCK_DATA) {
        const user = await mockLogin(email, password)
        setUser(user)
        localStorage.setItem('mock_session', JSON.stringify({ userId: user.id }))
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        if (data.user) {
          const profile = await getProfile(data.user.id)
          setUser(profile)
          await logAuditEvent('user_logged_in', 'auth')
        }
      }
    } catch (error: any) {
      console.error('Login error:', error)
      throw new Error(error.message || 'Failed to login')
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    try {
      if (USE_MOCK_DATA) {
        const user = await mockSignup(email, password, name)
        setUser(user)
        localStorage.setItem('mock_session', JSON.stringify({ userId: user.id }))
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role: 'user',
            },
          },
        })

        if (error) throw error

        if (data.user) {
          // Wait a moment for the trigger to create the profile
          await new Promise(resolve => setTimeout(resolve, 1000))
          const profile = await getProfile(data.user.id)
          setUser(profile)
          await logAuditEvent('user_signed_up', 'auth')
        }
      }
    } catch (error: any) {
      console.error('Signup error:', error)
      throw new Error(error.message || 'Failed to create account')
    }
  }

  const logout = async () => {
    try {
      if (USE_MOCK_DATA) {
        await mockLogout()
        setUser(null)
        localStorage.removeItem('mock_session')
      } else {
        await logAuditEvent('user_logged_out', 'auth')
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        setUser(null)
      }
    } catch (error: any) {
      console.error('Logout error:', error)
      throw new Error(error.message || 'Failed to logout')
    }
  }

  const updateUserProfile = async (updates: Partial<Profile>) => {
    if (!user || USE_MOCK_DATA) return

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single()

      if (error) throw error

      setUser(data)
      await logAuditEvent('profile_updated', 'profiles', { updates })
    } catch (error: any) {
      console.error('Update profile error:', error)
      throw new Error(error.message || 'Failed to update profile')
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
