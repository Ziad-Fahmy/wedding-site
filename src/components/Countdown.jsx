import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

export default function Countdown() {
  const [time, setTime] = useState({ days: '—', hours: '—', mins: '—', secs: '—' })

  useEffect(() => {
    function tick() {
      const target = new Date('2026-07-02T19:00:00').getTime()
      const diff = Math.max(0, target - Date.now())
      setTime({
        days:  String(Math.floor(diff / 86400000)),
        hours: String(Math.floor((diff % 86400000) / 3600000)),
        mins:  String(Math.floor((diff % 3600000)  / 60000)),
        secs:  String(Math.floor((diff % 60000)    / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.countdownSection}>
      <div className="container">
        <p className={styles.countdownLabel}>Counting the days to our forever</p>
        <div className={styles.countdownGrid}>
          {[
            [time.days,  'Days'],
            [time.hours, 'Hours'],
            [time.mins,  'Minutes'],
            [time.secs,  'Seconds'],
          ].map(([val, label], i) => (
            <div key={label} className={styles.unitWrapper}>
              {i > 0 && <div className={styles.cSep}>♦</div>}
              <div className={styles.cUnit}>
                <span className={styles.cNum}>{val}</span>
                <span className={styles.cLbl}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
