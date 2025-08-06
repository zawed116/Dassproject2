// src/App.js
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Categories from './pages/Categories'
import HowItWorks from './pages/HowItWorks'
import FindDesigner from './pages/FindDesigner'
import Inspiration from './pages/Inspiration'
import Studio from './pages/Studio'
import Login from './pages/Login'  // Add this import
import './App.css'






function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/find-designer" element={<FindDesigner />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/login" element={<Login />} />  {/* Add this route */}
      </Routes>
    </div>
  )
}

export default App