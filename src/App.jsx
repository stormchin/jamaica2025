import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Portland from './pages/Portland'
import OchoRios from './pages/OchoRios'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portland" element={<Portland />} />
        <Route path="/ocho-rios" element={<OchoRios />} />
      </Routes>
    </Router>
  )
}