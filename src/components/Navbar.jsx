import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav style={{
      background: '#15181b',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 12px 0 #0009'
    }}>
      <Link to="/" style={{
        color: '#00e676',
        fontWeight: 'bold',
        fontSize: '1.6rem',
        textDecoration: 'none',
        letterSpacing: '0.1em'
      }}>Storm + Lucas - 2025 Jamaica Trip</Link>
      <div>
        <Link to="/portland" style={{
          color: location.pathname === '/portland' ? '#00e676' : '#fff',
          marginRight: '1.5rem',
          fontWeight: '500',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>Portland</Link>
        <Link to="/ocho-rios" style={{
          color: location.pathname === '/ocho-rios' ? '#00e676' : '#fff',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '1.1rem'
        }}>Ocho Rios</Link>
      </div>
    </nav>
  )
}