import { useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  useEffect(() => {
    const heroContent = document.querySelector(`.${styles.heroContent}`)
    const onScroll = () => {
      if (window.scrollY < window.innerHeight && heroContent) {
        heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`
        heroContent.style.opacity = Math.max(0, 1 - window.scrollY / 600)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="home" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={`${styles.heroContent} reveal fade-up`}>
        <h3 className={styles.heroSubtitle}>Together with their families</h3>
        <h1 className={styles.heroTitle}>
          Nora <br /><span className={styles.amp}>&</span> Maged
        </h1>
        <p className={styles.heroDate}>July 2nd, 2026</p>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </header>
  )
}
