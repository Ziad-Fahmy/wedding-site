import styles from './Story.module.css'

export default function Story() {
  return (
    <section id="story" className={`${styles.storySection} section`}>
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">The Story</h2>
          <div className="divider" />
        </div>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} reveal fade-left`}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h3>First Meeting</h3>
              <p className={styles.date}>September 15th</p>
              <p>Our story started on the 15th of September. We weren't searching for love, but love found us in the most unexpected ways.</p>
            </div>
          </div>
          <div className={`${styles.timelineItem} ${styles.right} reveal fade-right`}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h3>Katb El-Ketab</h3>
              <p className={styles.date}>July 2, 2026</p>
              <p>Surrounded by our families and loved ones, we embark on our beginning following the words of Allah.</p>
              <p className={styles.quranVerse}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ<br />
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
