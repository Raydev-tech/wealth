import { Link } from "react-router-dom"

const Navbar= () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0D0B21]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Acera
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2">Login</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;