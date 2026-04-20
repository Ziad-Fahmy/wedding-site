import styles from './WaxSeal.module.css'

export default function WaxSeal({ onOpen, onPlayMusic }) {
  const handleClick = () => {
    if (onPlayMusic) onPlayMusic()
    onOpen()
  }

  return (
    <div className={styles.sealScreen}>
      <p className={styles.sealPre}>You have received a wedding invitation</p>
      <div className={styles.sealWrap}>
        <div className={styles.waxSeal} onClick={handleClick} title="Tap to open">
          <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="100" fill="#1B2E22"/>
            <ellipse cx="68"  cy="205" rx="12" ry="9"  fill="#1B2E22"/>
            <ellipse cx="152" cy="207" rx="10" ry="8"  fill="#1B2E22"/>
            <ellipse cx="110" cy="210" rx="8"  ry="6"  fill="#1B2E22"/>
            <ellipse cx="30"  cy="148" rx="8"  ry="12" fill="#1B2E22"/>
            <ellipse cx="190" cy="148" rx="8"  ry="11" fill="#1B2E22"/>
            <ellipse cx="80"  cy="65"  rx="30" ry="20" fill="#2D4A38" opacity="0.5"/>
            <circle cx="110" cy="110" r="86" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="5 4" opacity="0.7"/>
            <circle cx="110" cy="110" r="70" fill="none" stroke="#C5A059" strokeWidth="0.8" opacity="0.5"/>
            <path d="M110,42 C105,55 95,62 110,70 C125,62 115,55 110,42Z" fill="#C5A059" opacity="0.8"/>
            <path d="M110,178 C105,165 95,158 110,150 C125,158 115,165 110,178Z" fill="#C5A059" opacity="0.8"/>
            <path d="M42,110 C55,105 62,95 70,110 C62,125 55,115 42,110Z" fill="#C5A059" opacity="0.8"/>
            <path d="M178,110 C165,105 158,95 150,110 C158,125 165,115 178,110Z" fill="#C5A059" opacity="0.8"/>
            <rect x="66"  y="60"  width="7" height="7" fill="#C5A059" opacity="0.6" transform="rotate(45,69,63)"/>
            <rect x="146" y="60"  width="7" height="7" fill="#C5A059" opacity="0.6" transform="rotate(45,149,63)"/>
            <rect x="66"  y="148" width="7" height="7" fill="#C5A059" opacity="0.6" transform="rotate(45,69,151)"/>
            <rect x="146" y="148" width="7" height="7" fill="#C5A059" opacity="0.6" transform="rotate(45,149,151)"/>
            <text x="110" y="100"  textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="24" fill="#C5A059" fontWeight="400" letterSpacing="2">N</text>
            <text x="110" y="126"  textAnchor="middle" fontFamily="Georgia,serif"             fontSize="22" fill="#E3D3B0" fontWeight="300">&amp;</text>
            <text x="110" y="152"  textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="24" fill="#C5A059" fontWeight="400" letterSpacing="2">M</text>
          </svg>
        </div>
        <p className={styles.sealHint}>— tap to open —</p>
      </div>
    </div>
  )
}
