import { useEffect, useState } from 'react'

const images = [
  '/images/Beach1.jpeg',
  '/images/Jamaica1.jpg',
  '/images/Scuba2.jpg',
  '/images/MonkeyIsland.jpg',
  '/images/OchoRiosVilla.png',
  '/images/MonkeyIsland2.jpg',
]

export default function Slideshow() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(prev => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: '#111'
    }}>
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt=""
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 1s ease'
          }}
        />
      ))}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(135deg,rgba(12,12,16,0.05) 40%,rgba(0,230,118,0.05) 100%)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '16%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        textAlign: 'center',
        fontSize: '2.7rem',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        textShadow: '0 4px 32px #111'
      }}>
        Welcome to Jamaica!
      </div>
    </div>
  )
}