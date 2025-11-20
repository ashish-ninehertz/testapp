import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Our team typically responds within 24 hours',
      value: 'support@testapp.com',
      link: 'mailto:support@testapp.com',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available Monday-Friday, 9am-5pm EST',
      value: 'Start a conversation',
      link: '#',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'For urgent enterprise inquiries',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit us at our headquarters',
      value: 'San Francisco, CA',
      link: '#',
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
            Get in Touch
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Have questions about testapp? Our team is here to help. Reach out through 
            any of the channels below or fill out the contact form.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl glass"
          >
            <h2 className="text-2xl font-bold text-text mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-secondary transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-text mb-6">Other ways to reach us</h2>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="block p-6 rounded-2xl glass glass-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text mb-1">{method.title}</h3>
                    <p className="text-sm text-text-secondary mb-2">{method.description}</p>
                    <p className="text-primary font-semibold">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
