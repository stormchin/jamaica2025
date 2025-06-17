import { useEffect, useState } from 'react'

// Slideshow component displays a rotating series of images.
// It uses local state to manage the currently displayed image index and a timer to transition between images.

// Array of image paths to be used in the slideshow.
// These paths are relative to the public directory.
// The order of the images in this array determines the order they are displayed in the slideshow.
const images = [
  '/images/MonkeyIsland.jpg',
  '/images/OchoRiosVilla.png',
  '/images/MonkeyIsland2.jpg',
]

// Slideshow component
export default function Slideshow() {
  // State to keep track of the current image index.
  // This index is used to determine which image in the 'images' array is currently visible.
  const [idx, setIdx] = useState(0)

  // useEffect hook to set up an interval timer for changing the image index.
  // The timer updates the index every 3500 milliseconds (3.5 seconds).
  // The effect runs only once after the initial render because of the empty dependency array `[]`.
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(prev => (prev + 1) % images.length)
      // The modulo operator (%) ensures that the index wraps around to 0 when it reaches the end of the image array.
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    // The main container for the slideshow.
    <div style={{
      // Styles to make the slideshow cover the full viewport and hide overflow.
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: '#111'
    }}>
      {images.map((img, i) => (
        <img
          // Unique key for each image element.
          key={img}
          src={img}
          alt=""
          style={{
            position: 'absolute',
            // Position the image to cover the entire container.
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            // Ensure the image covers the container without distortion.
            objectFit: 'cover',
            // Control visibility using opacity. The current image is visible (opacity 1), others are hidden (opacity 0).
            opacity: i === idx ? 1 : 0,
            // Smooth transition for opacity changes.
            transition: 'opacity 1s ease',
          }}
        />
      ))}
      <div style={{
        // Overlay with a gradient for visual effect.
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(135deg,rgba(12,12,16,0.05) 40%,rgba(0,230,118,0.05) 100%)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '16%',
        // Text overlay welcoming the user to Jamaica.
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontFamily: "'Merriweather', serif",
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