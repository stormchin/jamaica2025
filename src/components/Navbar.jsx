import { Link, useLocation } from 'react-router-dom'
import 'src/components/Navbar.css';

/**
 * Navbar component provides site navigation.
 * It displays the site logo which links to the home page
 * and navigation links for different sections of the site.
 */
export default function Navbar() {
  // State to control the visibility of the mobile menu.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state.
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * useLocation hook from react-router-dom.
   * It returns the current location object, which represents the current URL in the browser's address bar.
   * We use this to determine the current active link and apply a different style.
   */
  const location = useLocation()

  return (
    <nav className="navbar">
      {/* Link component from react-router-dom. It renders an accessible anchor tag. */}
      {/* The "to" prop specifies the destination path. */}
      <Link to="/" className="navbar-logo">Jamaica Trip</Link>
      {/* Hamburger icon for mobile view. Clicking it toggles the mobile menu. */}
      <button className="hamburger-icon" onClick={toggleMobileMenu}>☰</button>
      {/* Regular navigation links, hidden on mobile */}
      <div className={\`navbar-links \${isMobileMenuOpen ? 'mobile-menu active' : ''}\`}>
        {/* Navigation link to the Portland page. */}
        {/* Added onClick to close mobile menu on link click */}
        <Link to="/portland" className={\`\${location.pathname === '/portland' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>Portland</Link>
        {/* Navigation link to the Ocho Rios page. */}
        {/* Added onClick to close mobile menu on link click */}
        <Link to="/ocho-rios" className={\`\${location.pathname === '/ocho-rios' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>Ocho Rios</Link>
      </div>
    </nav>
  );
}