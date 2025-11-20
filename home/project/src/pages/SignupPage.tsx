import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, AlertCircle, Loader, CheckCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const SignupPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const passwordStrength = (pass: string) => {
    let strength = 0
    if (pass.length >= 8) strength++
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++
    if (/\d/.test(pass)) strength++
    if (/[^a-zA-Z\d]/.test(pass)) strength++
    return strength
  }

  const strength = passwordStrength(password)
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong']
  const strengthColors = ['bg-error', 'bg-warning', 'bg-secondary', 'bg-success']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await signup(email, password, name)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-text mb-2">Create Account</h1>
          <p className="text-text-secondary">Join testapp and start building secure applications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 rounded-2xl glass"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-error/10 border border-error/20 flex items-start space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                <p className="text-sm text-error">{error}</p>
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="••••••••"
                />
              </div>
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-text-secondary">Password strength:</span>
                    <span className="text-xs font-semibold text-text">{strengthLabels[strength - 1] || 'Too short'}</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strengthColors[strength - 1] || 'bg-border'}`}
                      style={{ width: `${(strength / 4) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="••••••••"
                />
                {confirmPassword && password === confirmPassword && (
                  <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-success" />
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-primary/20"
              />
              <label className="text-sm text-text-secondary">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:text-secondary transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-secondary transition-colors font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignupPage
