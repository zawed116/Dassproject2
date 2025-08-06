import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link to="/" className="mr-10">
            <img 
              src={logo}
              alt=" Lumina Studios"
              className="h-8" 
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Categories
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              How it works
            </Link>
            <Link to="/find-designer" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Find a designer
            </Link>
            <Link to="/inspiration" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Inspiration
            </Link>
            <Link to="/studio" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
              Studio
            </Link>
          </div>
        </div>

        {/* Right side - Phone and Login */}
        <div className="flex items-center space-x-6">
          <a href="tel:18005131678" className="hidden md:block text-gray-700 hover:text-blue-600 text-sm font-medium">
            +1 800 513 1678
          </a>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;