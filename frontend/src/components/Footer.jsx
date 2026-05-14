import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-12 px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h4 className="font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Demo</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>React + Vite</li>
              <li>FastAPI</li>
              <li>PyTorch & TensorFlow</li>
              <li>Docker & n8n</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/MoxitShah6114" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/moxit-shah6114" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="mailto:moxitshah.ai@gmail.com" className="text-text-muted hover:text-primary transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Location</h4>
            <p className="text-text-muted">Surendranagar, Gujarat, India</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-primary/10 pt-8 text-center text-text-muted"
        >
          <p>© 2026 Moxit Shah. All rights reserved. Built with React, Vite & Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  )
}
