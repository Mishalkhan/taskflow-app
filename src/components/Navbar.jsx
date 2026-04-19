import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
    <div className="w-full bg-gradient-to-r from-gray-200 to-gray-100 border-b">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">GoalFlow</h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-600">
        <a href="#features" className="hover:text-black">Features</a>
        <a href="#about" className="hover:text-black">About</a>
        </div>

        {/* Button */}
        <button
        onClick={() => navigate("/dashboard")}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
        >
        Get Started
        </button>

    </div>
    </div>
    </div>
  )
}

export default Navbar
