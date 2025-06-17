import { Link, useLocation } from 'react-router-dom';
import 'Navbar.css';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Jamaica Trip</Link>
      <div className="navbar-links">
        <Link to="/portland" className={location.pathname === '/portland' ? 'active' : ''}>Portland</Link>
        <Link to="/ocho-rios" className={location.pathname === '/ocho-rios' ? 'active' : ''}>Ocho Rios</Link>
      </div>
    </nav>
  );
}