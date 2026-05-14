import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function About() {
  const activeSection = useScrollSpy(['about'])
  const isInView = activeSection === 'about'
  const internships = useCountUp(3, 1500, isInView)
  const projects = useCountUp(3, 1500, isInView)
  const accuracy = useCountUp(91, 1500, isInView)
  const teams = useCountUp(200, 1500, isInView)

  const stats = [
    { label: 'Internships', value: internships },
    { label: 'AI/ML Projects', value: projects },
    { label: 'Accuracy', value: accuracy, suffix: '%+' },
    { label: 'Teams Beaten', value: teams, suffix: '+' }
  ]

  return (
    <section id="about-stats" className="py-20 px-6 bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ threshold: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}{stat.suffix || ''}
              </div>
              <div className="text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
