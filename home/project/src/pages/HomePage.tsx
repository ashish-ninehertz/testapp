import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Zap, Lock, Users, Code, CheckCircle, ArrowRight, Star } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption with SOC 2 Type II compliance and advanced threat protection.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms authentication with global edge network and intelligent caching.',
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Multi-factor authentication, biometric support, and continuous verification.',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Role-based access control, SSO integration, and centralized user administration.',
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'RESTful APIs, SDKs for all major languages, and comprehensive documentation.',
    },
    {
      icon: CheckCircle,
      title: '99.99% Uptime',
      description: 'Redundant infrastructure, automatic failover, and 24/7 monitoring.',
    },
  ]

  const stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '<100ms', label: 'Auth Speed' },
    { value: '150+', label: 'Countries' },
  ]

  const testimonials = [
    {
      quote: 'testapp transformed our authentication infrastructure. The developer experience is exceptional, and the security features give us complete peace of mind.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
      avatar: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote: 'We migrated from our legacy auth system in under a week. The API documentation is crystal clear, and support has been outstanding.',
      author: 'Michael Rodriguez',
      role: 'Lead Engineer, DevStudio',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote: 'The enterprise features like SSO and RBAC are exactly what we needed. testapp scales effortlessly with our growing user base.',
      author: 'Emily Watson',
      role: 'VP Engineering, CloudScale',
      avatar: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ]

  const trustedBy = [
    'TechCorp', 'DevStudio', 'CloudScale', 'DataFlow', 'SecureNet', 'CodeBase'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero background"
            className="w-full h-full object-cover animate-subtle-zoom"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/30">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm text-text-secondary">Trusted by 10M+ developers worldwide</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-text leading-tight">
                Enterprise Authentication
                <span className="block text-gradient">Built for Developers</span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary max-w-2xl">
                Secure, scalable authentication infrastructure with enterprise-grade security, 
                lightning-fast performance, and developer-friendly APIs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 rounded-full gradient-primary text-white text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 rounded-full glass glass-hover text-text text-lg font-semibold transition-all flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>

              {/* Trusted By */}
              <div className="pt-8">
                <p className="text-sm text-text-secondary mb-4">TRUSTED BY LEADING COMPANIES</p>
                <div className="flex flex-wrap gap-6">
                  {trustedBy.map((company) => (
                    <div key={company} className="px-6 py-3 rounded-lg glass">
                      <span className="text-text-secondary font-semibold">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-text-secondary flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-text-secondary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to build secure, scalable authentication for modern applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass glass-hover group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Loved by Developers
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              See what technical leaders are saying about testapp
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl glass"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-text font-semibold">{testimonial.author}</div>
                    <div className="text-text-secondary text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl glass"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of developers building secure applications with testapp. 
              Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 rounded-full gradient-primary text-white text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full glass glass-hover text-text text-lg font-semibold transition-all flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
