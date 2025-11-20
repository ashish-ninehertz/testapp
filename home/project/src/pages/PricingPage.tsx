import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for side projects and MVPs',
      features: [
        'Up to 1,000 monthly active users',
        'Email & password authentication',
        'Social login (Google, GitHub)',
        'Basic security features',
        'Community support',
        'API access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'per month',
      description: 'For growing startups and teams',
      features: [
        'Up to 10,000 monthly active users',
        'Everything in Starter',
        'Multi-factor authentication',
        'Advanced security rules',
        'Priority email support',
        'Custom branding',
        'Audit logs',
        'Team collaboration',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For large-scale applications',
      features: [
        'Unlimited monthly active users',
        'Everything in Professional',
        'SSO & SAML integration',
        'Dedicated support engineer',
        'SLA guarantee (99.99%)',
        'Custom integrations',
        'Advanced compliance',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      popular: false,
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial. 
            No credit card required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className={`p-8 rounded-2xl glass relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full gradient-primary text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-text">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-text-secondary ml-2">/{plan.period}</span>
                  )}
                </div>
                {plan.price === 'Custom' && (
                  <span className="text-text-secondary text-sm">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'gradient-primary text-white hover:shadow-lg hover:shadow-primary/50'
                    : 'glass glass-hover text-text'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center p-12 rounded-3xl glass"
        >
          <h2 className="text-3xl font-bold text-text mb-4">Need a custom plan?</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We offer flexible pricing for high-volume applications and special requirements. 
            Contact our sales team to discuss your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full gradient-primary text-white text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <span>Contact Sales</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingPage
