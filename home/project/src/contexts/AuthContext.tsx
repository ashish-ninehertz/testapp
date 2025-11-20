import React, { createContext, useContext, useState, useEffect } from 'react'
import { User, mockLogin, mockSignup, mockLogout, mockGetSession, USE_MOCK_DATA } from '../lib/mockData'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
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
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        if (USE_MOCK_DATA) {
          const session = await mockGetSession()
          setUser(session)
        }
      } catch (error) {
        console.error('Error checking session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      if (USE_MOCK_DATA) {
        const user = await mockLogin(email, password)
        setUser(user)
        // Store session in localStorage
        localStorage.setItem('mock_session', JSON.stringify({ userId: user.id }))
      }
    } catch (error) {
      throw error
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    try {
      if (USE_MOCK_DATA) {
        const user = await mockSignup(email, password, name)
        setUser(user)
        // Store session in localStorage
        localStorage.setItem('mock_session', JSON.stringify({ userId: user.id }))
      }
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      if (USE_MOCK_DATA) {
        await mockLogout()
        setUser(null)
        localStorage.removeItem('mock_session')
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
