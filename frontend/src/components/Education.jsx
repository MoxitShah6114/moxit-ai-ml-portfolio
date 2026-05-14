import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Education & Certifications
        </motion.h2>

        <motion.div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 bg-dark-card rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">B.Tech in AI & ML</h3>
            <p className="text-secondary mb-2">CHARUSAT University</p>
            <p className="text-text-muted mb-4">Oct 2022 – Apr 2026 | CGPA: 8.27/10</p>
            <p className="text-text-muted">Coursework: Deep Learning, Computer Vision, NLP, MLOps, Statistics for AI, DBMS</p>
          </motion.div>

          <motion.div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
            {[
              { title: 'NVIDIA DLI — Getting Started with AI on Jetson Nano', date: 'Mar 2023' },
              { title: 'IIT Kharagpur NPTEL — Data Structures & Algorithms', date: '2023' },
              { title: 'IIT Madras NPTEL — Introduction to Machine Learning', date: '2023' }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 bg-dark-card rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <p className="font-semibold text-text-primary">{cert.title}</p>
                <p className="text-sm text-text-muted">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
