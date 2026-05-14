import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const displayedText = useTypewriter(
    ['AI/ML Engineer', 'Generative AI Specialist', 'Computer Vision Developer', 'NLP Practitioner'],
    80,
    2000
  )

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Moxit Shah
          </h1>
          <h2 className="text-2xl md:text-4xl text-primary mb-8 h-16">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Driven by curiosity at the intersection of AI and real-world impact.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <button
              onClick={() => handleScroll('demo')}
              className="px-8 py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-secondary transition-colors"
            >
              Try Live Demo
            </button>
            <button
              onClick={() => handleScroll('projects')}
              className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors"
            >
              View Projects
            </button>
            <a
              href="#"
              className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center text-text-muted"
          >
            <a href="https://github.com/MoxitShah6114" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/moxit-shah6114" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:moxitshah.ai@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
