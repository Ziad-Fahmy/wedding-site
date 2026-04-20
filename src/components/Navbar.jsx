import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (!target) return

    const start = window.scrollY
    const end = target.getBoundingClientRect().top + window.scrollY
    const duration = 2500
    let startTime = null

    const easeInOutCubic = t =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      window.scrollTo(0, start + (end - start) * easeInOutCubic(progress))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navLogo}>
        N <span className={styles.amp}>&</span> M
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home"    onClick={e => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#story"   onClick={e => handleNavClick(e, 'story')}>Our Story</a></li>
        <li><a href="#details" onClick={e => handleNavClick(e, 'details')}>Details</a></li>
        <li><a href="#gallery" onClick={e => handleNavClick(e, 'gallery')}>Gallery</a></li>
        <li><a href="#rsvp"    onClick={e => handleNavClick(e, 'rsvp')} className={styles.btnPrimary}>RSVP</a></li>
      </ul>
    </nav>
  )
}
