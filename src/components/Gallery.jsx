import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Gallery.module.css'

const SLIDES = [
  { src: '/photo1.jpg', title: 'Our Moments',  sub: 'A memory to cherish' },
  { src: '/photo2.jpg', title: 'Together',     sub: 'Every step, side by side' },
  { src: '/photo3.jpg', title: 'The Details',  sub: 'Crafted with love' },
  { src: '/photo4.jpg', title: 'In Bloom',     sub: "Nature's finest touch" },
  { src: '/photo5.jpg', title: 'Forever',      sub: 'A love story begins' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback((idx) => {
    setCurrent(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4000)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section id="gallery" className={`${styles.gallerySection} section`}>
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Moments</h2>
          <div className="divider" />
        </div>

        <div className={`${styles.slideshow} reveal fade-up`}>
          <div className={styles.slideshowTrack}>
            {SLIDES.map((s, i) => (
              <div key={i} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
                <img src={s.src} alt={s.title} />
                <div className={styles.slideCaption}>
                  <span className={styles.slideTitle}>{s.title}</span>
                  <span className={styles.slideSub}>{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.slideshowControls}>
            <button className={styles.slideBtn} onClick={() => goTo(current - 1)} aria-label="Previous">←</button>
            <div className={styles.slideDots}>
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.slideDot} ${i === current ? styles.activeDot : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className={styles.slideBtn} onClick={() => goTo(current + 1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
