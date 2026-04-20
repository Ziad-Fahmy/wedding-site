import styles from './Details.module.css'

export default function Details() {
  return (
    <section id="details" className={`${styles.detailsSection} section`}>
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">When &amp; Where</h2>
          <div className="divider" />
        </div>

        <div className={styles.detailsGrid}>
          <div className={`${styles.detailCard} reveal fade-up`}>
            <h3 className="serif">Wedding Party</h3>
            <p className={styles.date}>July 2, 2026</p>
            <p className={styles.time}>Katb El-Ketab at 7:00 PM · Wedding at 8:00 PM</p>
            <p className={styles.location}>Ain Alhaya Resort — عين الحياة</p>
            <p className={styles.address}>Cairo – Al-Fustat</p>
            <a
              className={styles.mapBtn}
              href="https://maps.app.goo.gl/ChHKkZomJrkpk8Tu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>
        </div>

        <div className={`${styles.mapContainer} reveal fade-up`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4!2d31.2297!3d29.9979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587a3b2d8d7%3A0xabcdef!2sAin%20Alhaya%20Resort!5e0!3m2!1sen!2seg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Map"
          />
        </div>
      </div>
    </section>
  )
}
