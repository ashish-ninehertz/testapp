import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
  },
})

// Database types
export interface Profile {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'demo'
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface AuditLog {
  id: string
  user_id: string
  action: string
  resource?: string
  metadata?: Record<string, any>
  ip_address?: string
  user_agent?: string
  created_at: string
}

export interface Session {
  id: string
  user_id: string
  token: string
  ip_address?: string
  user_agent?: string
  expires_at: string
  created_at: string
  last_active_at: string
}

// Helper functions
export const logAuditEvent = async (
  action: string,
  resource?: string,
  metadata?: Record<string, any>
) => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return

  await supabase.from('audit_logs').insert({
    user_id: user.id,
    action,
    resource,
    metadata,
  })
}

export const getProfile = async (userId: string): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return data
}

export const updateProfile = async (
  userId: string,
  updates: Partial<Profile>
): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) {
    console.error('Error updating profile:', error)
    return null
  }

  await logAuditEvent('profile_updated', 'profiles', { updates })

  return data
}

export const getUserSessions = async (userId: string): Promise<Session[]> => {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('user_id', userId)
    .order('last_active_at', { ascending: false })

  if (error) {
    console.error('Error fetching sessions:', error)
    return []
  }

  return data || []
}

export const revokeSession = async (sessionId: string): Promise<boolean> => {
  const { error } = await supabase
    .from('sessions')
    .delete()
    .eq('id', sessionId)

  if (error) {
    console.error('Error revoking session:', error)
    return false
  }

  await logAuditEvent('session_revoked', 'sessions', { sessionId })

  return true
}
