import { motion } from 'framer-motion'
import { Shield, Users, Zap, Globe } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every decision, implementing industry-leading practices and compliance standards.',
    },
    {
      icon: Users,
      title: 'Developer Experience',
      description: 'Built by developers, for developers. We obsess over API design and documentation quality.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast authentication with global edge network and intelligent caching strategies.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Serving millions of users across 150+ countries with 99.99% uptime SLA.',
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            About testapp
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're building the future of authentication infrastructure for modern applications. 
            Our mission is to make secure authentication accessible to every developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-12 rounded-3xl glass mb-16"
        >
          <h2 className="text-3xl font-bold text-text mb-6">Our Story</h2>
          <div className="space-y-4 text-text-secondary text-lg">
            <p>
              testapp was founded in 2020 by a team of security engineers and developers who were 
              frustrated with the complexity of implementing authentication in modern applications.
            </p>
            <p>
              We believed that secure authentication should be simple, scalable, and accessible to 
              every developer—from solo founders to enterprise teams. That's why we built testapp: 
              a platform that combines enterprise-grade security with developer-friendly APIs.
            </p>
            <p>
              Today, testapp powers authentication for over 10 million users across 150+ countries, 
              helping developers focus on building great products instead of wrestling with auth infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-8 rounded-2xl glass"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center p-12 rounded-3xl glass"
        >
          <h2 className="text-3xl font-bold text-text mb-6">Join Our Team</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers, designers, and security experts 
            who share our passion for building great developer tools.
          </p>
          <button className="px-8 py-4 rounded-full gradient-primary text-white text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
