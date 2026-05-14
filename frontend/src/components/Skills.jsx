import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'AI/ML', items: skills.aiml },
    { title: 'Generative AI', items: skills.generativeai },
    { title: 'Backend', items: skills.backend },
    { title: 'Tools', items: skills.tools },
    { title: 'Data', items: skills.data }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 bg-dark-card rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
