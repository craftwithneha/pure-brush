import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='w-full h-[80px] md:h-[100px] lg:h-[110px] bg-[#F8F6F2] flex items-center justify-between px-4 md:px-8 lg:px-12 shadow-md'>
      {/* Logo */}
      <Link to='/' className='text-xl md:text-2xl text-gray-900 font-bold'>
        PureBrush
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center justify-center space-x-6'>
        <nav className='flex space-x-6 text-gray-700 font-medium'>
          <Link to='/#categories' className='px-4 py-2 hover:text-black border-b-2 border-transparent hover:border-black'>
            Categories
          </Link>
          <Link to='/#benefits' className='px-4 py-2 hover:text-black border-b-2 border-transparent hover:border-black'>
            Benefits
          </Link>
          <Link to='/#best-sellers' className='px-4 py-2 hover:text-black border-b-2 border-transparent hover:border-black'>
            Best-sellers
          </Link>
        </nav>

        {/* Shop Now Button */}
        <Link to='/shop' className='hidden md:flex px-5 py-2 bg-green-950 text-white rounded hover:bg-green-800'>
          Shop Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-green-950 text-2xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-[#F8F6F2] z-50 shadow-lg flex flex-col items-center justify-center'>
          <button
            className='absolute top-4 right-4 text-3xl text-green-950'
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          <nav className='flex flex-col space-y-6 text-center text-gray-700 font-medium text-2xl'>
            <Link
              to='/#categories'
              className='hover:text-black border-b-2 border-transparent hover:border-black'
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              to='/#benefits'
              className='hover:text-black border-b-2 border-transparent hover:border-black'
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </Link>
            <Link
              to='/#best-sellers'
              className='hover:text-black border-b-2 border-transparent hover:border-black'
              onClick={() => setIsOpen(false)}
            >
              Best-sellers
            </Link>
          </nav>

          {/* Shop Now Button */}
          <Link
            to='/shop'
            className='px-5 py-2 mt-8 bg-green-950 text-white rounded hover:bg-green-800'
            onClick={() => setIsOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
