import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ threshold: 0.1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
            >
              <motion.div
                className="absolute left-[-10px] top-0 w-4 h-4 bg-primary rounded-full"
                whileHover={{ scale: 1.5 }}
              />
              <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
              <p className="text-lg text-secondary">{exp.company}</p>
              <p className="text-sm text-text-muted mb-4">{exp.period} • {exp.location}</p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="text-text-muted flex gap-3">
                    <span className="text-primary">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
