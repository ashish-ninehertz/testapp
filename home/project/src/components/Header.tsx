import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const navItems = [
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 rounded-lg gradient-primary shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-xl">T</span>
            </motion.div>
            <span className="text-2xl font-bold text-gradient">
              testapp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 rounded-full glass glass-hover text-text-secondary hover:text-text transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-6 py-2.5 rounded-full glass glass-hover text-text transition-all"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2.5 rounded-full gradient-primary text-white hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2.5 rounded-full glass glass-hover text-text transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2.5 rounded-full gradient-primary text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass glass-hover"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg glass glass-hover text-text-secondary hover:text-text transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg glass glass-hover text-text transition-all"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full px-4 py-3 rounded-lg gradient-primary text-white flex items-center justify-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg glass glass-hover text-text transition-all text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg gradient-primary text-white text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
