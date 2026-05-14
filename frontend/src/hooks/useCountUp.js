import { useState, useEffect } from 'react'

export const useCountUp = (target, duration = 1500, shouldCount = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldCount) return

    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, shouldCount])

  return count
}
