import { useEffect, useState } from 'react'

export const useScrollSpy = (sections) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return activeSection
}
