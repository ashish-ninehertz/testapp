export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'demo'
  created_at: string
  avatar_url?: string
}

export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@testapp.com',
    name: 'Admin User',
    role: 'admin',
    created_at: '2024-01-15T10:00:00Z',
    avatar_url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    email: 'user@testapp.com',
    name: 'Regular User',
    role: 'user',
    created_at: '2024-02-20T14:30:00Z',
    avatar_url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    email: 'demo@testapp.com',
    name: 'Demo User',
    role: 'demo',
    created_at: '2024-03-10T09:15:00Z',
    avatar_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '4',
    email: 'john.doe@techcorp.com',
    name: 'John Doe',
    role: 'user',
    created_at: '2024-03-15T11:20:00Z',
    avatar_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '5',
    email: 'sarah.smith@devstudio.io',
    name: 'Sarah Smith',
    role: 'user',
    created_at: '2024-03-18T16:45:00Z',
    avatar_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
]

// Mock authentication functions
export const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const user = MOCK_USERS.find(u => u.email === email)
  
  if (!user) {
    throw new Error('Invalid email or password')
  }
  
  // In mock mode, accept any password for demo purposes
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }
  
  return user
}

export const mockSignup = async (email: string, password: string, name: string): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Check if user already exists
  const existingUser = MOCK_USERS.find(u => u.email === email)
  if (existingUser) {
    throw new Error('User with this email already exists')
  }
  
  // Validate inputs
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }
  
  if (!name || name.length < 2) {
    throw new Error('Name must be at least 2 characters')
  }
  
  // Create new user
  const newUser: User = {
    id: String(MOCK_USERS.length + 1),
    email,
    name,
    role: 'user',
    created_at: new Date().toISOString(),
  }
  
  MOCK_USERS.push(newUser)
  
  return newUser
}

export const mockLogout = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
}

export const mockGetSession = async (): Promise<User | null> => {
  // Check localStorage for session
  const sessionData = localStorage.getItem('mock_session')
  if (!sessionData) return null
  
  try {
    const session = JSON.parse(sessionData)
    const user = MOCK_USERS.find(u => u.id === session.userId)
    return user || null
  } catch {
    return null
  }
}
