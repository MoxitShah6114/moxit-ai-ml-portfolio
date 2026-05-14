import { useState, useEffect } from 'react'

export const useTypewriter = (words, speed = 100, delayBetweenWords = 1500) => {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetweenWords)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, speed, delayBetweenWords])

  return displayedText
}
