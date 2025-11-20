import { motion } from 'framer-motion'

const PrivacyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-text mb-4">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-text mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you create an account, 
                use our services, or communicate with us. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communications with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With your consent</li>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud or security issues</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These 
                measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. You can control cookies through your browser settings and other tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and 
                fulfill the purposes outlined in this policy, unless a longer retention period is required 
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: privacy@testapp.com<br />
                Address: San Francisco, CA
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPage
