import { useState, useRef } from 'react'
import styles from './FAQ.module.css'

const FAQS = [
  {
    q: 'Is parking available at the venue?',
    a: 'Parking is available on site at Ain Alhaya Resort with fees.',
  },
  {
    q: 'Are children welcome?',
    a: "Yes, children are warmly welcome! We'd be happy to celebrate with your little ones as part of our special day.",
  },
  {
    q: 'What is the dress code?',
    a: 'Soirée and Black Tie.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const innerRef = useRef(null)

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className={`${styles.faqArrow} ${open ? styles.open : ''}`}>+</span>
      </button>
      <div
        className={styles.faqA}
        style={{ maxHeight: open ? innerRef.current?.scrollHeight + 'px' : '0' }}
      >
        <div className={styles.faqAInner} ref={innerRef}>{a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className={`${styles.faqSection} section`}>
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Good to Know</h2>
          <div className="divider" />
        </div>
        <div className={styles.faqList}>
          {FAQS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
