import { motion } from 'framer-motion'

const TermsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-text mb-4">Terms of Service</h1>
          <p className="text-text-secondary">Last updated: January 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-8 text-text-secondary">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using testapp ("Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the Service for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and 
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software contained in the Service</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current 
                information. Failure to do so constitutes a breach of the Terms, which may result in 
                immediate termination of your account.
              </p>
              <p className="mt-4">
                You are responsible for safeguarding the password that you use to access the Service and 
                for any activities or actions under your password. You agree not to disclose your password 
                to any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of testapp and its licensors. The Service is protected by copyright, 
                trademark, and other laws of both the United States and foreign countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">5. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms. Upon 
                termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall testapp, nor its directors, employees, partners, agents, suppliers, or 
                affiliates, be liable for any indirect, incidental, special, consequential or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days' notice prior to any new 
                terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                Email: legal@testapp.com<br />
                Address: San Francisco, CA
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsPage
