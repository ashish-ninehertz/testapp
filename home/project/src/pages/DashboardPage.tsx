import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { User, Mail, Calendar, Shield, Activity, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase, AuditLog, Session } from '../lib/supabase'
import { USE_MOCK_DATA } from '../lib/mockData'

const DashboardPage = () => {
  const { user } = useAuth()
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([])
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      if (USE_MOCK_DATA) {
        // Mock data mode - show sample data
        setAuditLogs([
          {
            id: '1',
            user_id: user.id,
            action: 'user_logged_in',
            resource: 'auth',
            created_at: new Date().toISOString(),
          },
          {
            id: '2',
            user_id: user.id,
            action: 'profile_viewed',
            resource: 'profiles',
            created_at: new Date(Date.now() - 3600000).toISOString(),
          },
        ])
        setSessions([
          {
            id: '1',
            user_id: user.id,
            token: 'mock-token',
            user_agent: 'Chrome on Windows',
            ip_address: '192.168.1.1',
            expires_at: new Date(Date.now() + 86400000).toISOString(),
            created_at: new Date().toISOString(),
            last_active_at: new Date().toISOString(),
          },
        ])
        setLoading(false)
        return
      }

      try {
        // Fetch audit logs
        const { data: logs } = await supabase
          .from('audit_logs')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(10)

        if (logs) setAuditLogs(logs)

        // Fetch active sessions
        const { data: activeSessions } = await supabase
          .from('sessions')
          .select('*')
          .eq('user_id', user.id)
          .gt('expires_at', new Date().toISOString())
          .order('last_active_at', { ascending: false })

        if (activeSessions) setSessions(activeSessions)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user])

  if (!user) return null

  const stats = [
    { label: 'Account Status', value: 'Active', icon: Shield, color: 'text-success' },
    { label: 'Member Since', value: new Date(user.created_at).toLocaleDateString(), icon: Calendar, color: 'text-primary' },
    { label: 'Role', value: user.role.toUpperCase(), icon: User, color: 'text-secondary' },
    { label: 'Email Verified', value: 'Yes', icon: Mail, color: 'text-accent' },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-text-secondary">
            Here's an overview of your testapp account
          </p>
          {USE_MOCK_DATA && (
            <div className="mt-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
              <p className="text-sm text-warning">
                ⚠️ Running in mock data mode. Connect to Supabase to enable real database features.
              </p>
            </div>
          )}
        </motion.div>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <div className="flex items-center space-x-6">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-text mb-2">{user.name}</h2>
              <p className="text-text-secondary mb-1">{user.email}</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full glass border border-primary/30">
                <span className="text-sm text-primary font-semibold">{user.role.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl glass"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-text mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-text">Recent Activity</h3>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : auditLogs.length > 0 ? (
            <div className="space-y-4">
              {auditLogs.map((log) => (
                <div key={log.id} className="flex items-start space-x-4 p-4 rounded-lg glass">
                  <Clock className="w-5 h-5 text-text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-text font-medium">{log.action.replace(/_/g, ' ')}</div>
                    <div className="text-sm text-text-secondary">
                      {new Date(log.created_at).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center py-8">No recent activity</p>
          )}
        </motion.div>

        {/* Active Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-text">Active Sessions</h3>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : sessions.length > 0 ? (
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="flex items-start justify-between p-4 rounded-lg glass">
                  <div className="flex-1">
                    <div className="text-text font-medium">
                      {session.user_agent || 'Unknown Device'}
                    </div>
                    <div className="text-sm text-text-secondary">
                      IP: {session.ip_address || 'Unknown'} • Last active: {new Date(session.last_active_at).toLocaleString()}
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg glass glass-hover text-error text-sm font-medium">
                    Revoke
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center py-8">No active sessions</p>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-8 rounded-2xl glass"
        >
          <h3 className="text-2xl font-bold text-text mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 rounded-lg glass glass-hover text-left transition-all">
              <div className="text-lg font-semibold text-text mb-2">Update Profile</div>
              <div className="text-sm text-text-secondary">Manage your account settings</div>
            </button>
            <button className="p-4 rounded-lg glass glass-hover text-left transition-all">
              <div className="text-lg font-semibold text-text mb-2">Security Settings</div>
              <div className="text-sm text-text-secondary">Configure 2FA and passwords</div>
            </button>
            <button className="p-4 rounded-lg glass glass-hover text-left transition-all">
              <div className="text-lg font-semibold text-text mb-2">API Keys</div>
              <div className="text-sm text-text-secondary">Manage your API credentials</div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage
