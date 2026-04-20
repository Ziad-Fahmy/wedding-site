import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.navLogo}>
          N<span className={styles.amp}>&</span>M
        </h2>
        <div className={styles.footerDivider} />
        <p className={styles.footerNote}>Made with love for July 2nd, 2026</p>
      </div>
    </footer>
  )
}
