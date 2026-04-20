import { useState, useEffect, useRef } from 'react'
import './shared.css'

import WaxSeal   from './components/WaxSeal.jsx'
import Navbar    from './components/Navbar.jsx'
import Hero      from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Story     from './components/Story.jsx'
import Details   from './components/Details.jsx'
import Gallery   from './components/Gallery.jsx'
import FAQ       from './components/FAQ.jsx'
import RSVP      from './components/RSVP.jsx'
import Footer    from './components/Footer.jsx'
import MusicFab  from './components/MusicFab.jsx'

/* Scroll-reveal observer — runs after invitation mounts */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.13 }
    )
    els.forEach(el => obs.observe(el))
    document.querySelectorAll('.hero .reveal, #home .reveal').forEach(el => el.classList.add('active'))
    return () => obs.disconnect()
  })
}

/* Floating hearts */
function useFloatingHearts() {
  useEffect(() => {
    const id = setInterval(() => {
      const h = document.createElement('div')
      h.className = 'floating-heart'
      h.innerText = '❤'
      h.style.cssText =
        `left:${Math.random() * 100}vw;` +
        `animation-duration:${Math.random() * 3 + 3}s;` +
        `font-size:${Math.random() * 16 + 10}px;` +
        `opacity:${Math.random() * 0.45 + 0.2};`
      document.body.appendChild(h)
      setTimeout(el => el.remove(), 6000, h)
    }, 1200)
    return () => clearInterval(id)
  }, [])
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const musicFabRef = useRef(null)

  useReveal()
  useFloatingHearts()

  // After invitation mounts (opened becomes true), play music on next render
  useEffect(() => {
    if (!opened) return
    // Wait for MusicFab to fully mount then play
    const id = setTimeout(() => {
      if (musicFabRef.current) musicFabRef.current.play()
    }, 300)
    return () => clearTimeout(id)
  }, [opened])

  return (
    <>
      {!opened && (
        <WaxSeal onOpen={() => setOpened(true)} />
      )}

      {opened && (
        <div style={{ animation: 'invitationFadeIn 0.7s ease both' }}>
          <style>{`
            @keyframes invitationFadeIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
          `}</style>

          <Navbar />
          <Hero />
          <Countdown />
          <Story />
          <Details />
          <Gallery />
          <FAQ />
          <RSVP />
          <Footer />
          <MusicFab ref={musicFabRef} />
        </div>
      )}
    </>
  )
}
