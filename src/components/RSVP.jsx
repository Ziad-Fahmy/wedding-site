import { useState } from 'react'
import styles from './RSVP.module.css'

function launchConfetti() {
  const colors = ['#C5A059', '#E3D3B0', '#1B2E22', '#f5ede0', '#d4a96a', '#8fb08a']
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div')
    c.className = 'confetti-piece'
    c.style.cssText =
      `left:${Math.random() * 100}vw;` +
      `background:${colors[Math.floor(Math.random() * colors.length)]};` +
      `width:${Math.random() * 8 + 5}px;height:${Math.random() * 8 + 5}px;` +
      `animation-duration:${Math.random() * 3 + 2}s;animation-delay:${Math.random()}s;` +
      `border-radius:${Math.random() > 0.5 ? '50%' : '2px'};`
    document.body.appendChild(c)
    setTimeout(el => el.remove(), 5500, c)
  }
}

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [form, setForm] = useState({ name: '', attending: '', guests: '1', message: '' })

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      const res = await fetch('https://formspree.io/f/myklkwdw', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setSubmitted(true); launchConfetti() }
      else throw new Error()
    } catch {
      setSending(false)
      alert('Oops... something went wrong. Please try again.')
    }
  }

  return (
    <section id="rsvp" className={styles.rsvpBg}>
      <div className="container">
        <div className={`${styles.glassContainer} reveal fade-up`}>
          <div className="section-header">
            <h2 className="section-title">RSVP</h2>
            <p className={styles.subtitle}>Please respond by June 15th, 2026</p>
            <div className="divider" />
          </div>

          {submitted ? (
            <div className={styles.rsvpSuccess}>
              <p>Thank you — your RSVP has been received!</p>
              <span>We cannot wait to celebrate with you 💐</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Guest Name(s)</label>
                <input type="text" id="name" placeholder="Mr. & Mrs. ..." required
                  value={form.name} onChange={set('name')} />
              </div>

              <div className={styles.formGroup}>
                <label>Will you attend?</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="attending" value="yes" required
                      checked={form.attending === 'yes'} onChange={set('attending')} />
                    Joyfully Accept
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="attending" value="no"
                      checked={form.attending === 'no'} onChange={set('attending')} />
                    Regretfully Decline
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" className={styles.formSelect}
                  value={form.guests} onChange={set('guests')}>
                  <option value="1">Just me (1)</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Leave a lovely note or wish 💕</label>
                <input type="text" id="message" placeholder="..."
                  value={form.message} onChange={set('message')} />
              </div>

              <button type="submit" className={styles.btnSubmit} disabled={sending}>
                {sending ? 'Sending...' : 'Confirm RSVP'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
