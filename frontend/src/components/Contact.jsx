import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitContact } from '../utils/api'
import confetti from 'canvas-confetti'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await submitContact(formData)
      setSuccess(true)
      confetti()
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-dark-card p-8 rounded-lg border border-primary/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-text-primary font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-text-primary font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-text-primary font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-dark-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/20 text-red-400 rounded-lg">{error}</div>
            )}

            {success && (
              <div className="p-4 bg-green-500/20 text-green-400 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-secondary disabled:opacity-50 transition-colors"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-text-muted text-center mb-6">Or reach out directly:</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <a
                href="mailto:moxitshah.ai@gmail.com"
                className="p-3 bg-dark-bg rounded-lg hover:bg-dark-surface transition-colors"
              >
                <p className="text-sm text-text-muted">Email</p>
                <p className="font-semibold text-primary">moxitshah.ai@gmail.com</p>
              </a>
              <a
                href="tel:+918905923935"
                className="p-3 bg-dark-bg rounded-lg hover:bg-dark-surface transition-colors"
              >
                <p className="text-sm text-text-muted">Phone</p>
                <p className="font-semibold text-primary">+91 8905923935</p>
              </a>
            </div>
            <p className="text-text-muted text-center mt-4 text-sm">
              📍 Surendranagar, Gujarat, India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
