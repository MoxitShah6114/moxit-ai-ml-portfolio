import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ threshold: 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 bg-dark-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary flex-1">{project.title}</h3>
                {project.hasDemo && (
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded whitespace-nowrap ml-2">
                    Demo
                  </span>
                )}
              </div>

              <p className="text-text-muted mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-secondary font-semibold">{project.metric}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
