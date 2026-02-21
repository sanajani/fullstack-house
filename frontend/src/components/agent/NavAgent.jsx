import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavAgent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <Link to="/dashboard" className="hover:bg-blue-700 px-3 py-2 rounded-md transition">
                داشبورد
              </Link>
              <Link to="/properties" className="hover:bg-blue-700 px-3 py-2 rounded-md transition">
                ملک‌ها
              </Link>
              <Link to="/clients" className="hover:bg-blue-700 px-3 py-2 rounded-md transition">
                مشتریان
              </Link>
              <Link to="/profile" className="hover:bg-blue-700 px-3 py-2 rounded-md transition">
                پروفایل
              </Link>
            </div>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition">
                خروج
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${isSidebarOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={toggleSidebar}
        ></div>
        
        {/* Sidebar */}
        <div className={`fixed top-0 right-0 w-64 h-full bg-blue-600 text-white shadow-xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-blue-500 flex justify-between items-center">
            <h2 className="text-xl font-bold">منو</h2>
            <button onClick={toggleSidebar} className="p-1 hover:bg-blue-700 rounded">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/dashboard" 
                className="hover:bg-blue-700 px-4 py-3 rounded-md transition"
                onClick={toggleSidebar}
              >
                داشبورد
              </Link>
              <Link 
                to="/properties" 
                className="hover:bg-blue-700 px-4 py-3 rounded-md transition"
                onClick={toggleSidebar}
              >
                ملک‌ها
              </Link>
              <Link 
                to="/clients" 
                className="hover:bg-blue-700 px-4 py-3 rounded-md transition"
                onClick={toggleSidebar}
              >
                مشتریان
              </Link>
              <Link 
                to="/profile" 
                className="hover:bg-blue-700 px-4 py-3 rounded-md transition"
                onClick={toggleSidebar}
              >
                پروفایل
              </Link>
              
              <div className="border-t border-blue-500 my-4"></div>
              
              <button className="bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-md transition text-right">
                خروج
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default NavAgent;