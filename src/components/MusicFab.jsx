import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './MusicFab.module.css'

const MusicFab = forwardRef(function MusicFab(props, ref) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useImperativeHandle(ref, () => ({
    play() {
      const audio = audioRef.current
      if (!audio) return
      audio.volume = 0.35
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }))

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.volume = 0.35
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <>
      <div className={styles.musicFab} onClick={toggle} title="Toggle music">
        <div className={`${styles.musicBars} ${playing ? '' : styles.paused}`}>
          <span /><span /><span /><span />
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src="/muu.mp4" type="audio/mp4" />
      </audio>
    </>
  )
})

export default MusicFab
