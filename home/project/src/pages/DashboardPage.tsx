import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { User, Mail, Calendar, Shield } from 'lucide-react'

const DashboardPage = () => {
  const { user } = useAuth()

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

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
