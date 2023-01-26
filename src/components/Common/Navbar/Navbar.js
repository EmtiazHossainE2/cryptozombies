import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './Navbar.css'
import MobileMenu from './MobileMenu';


//*********************** Navbar ************************************
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar  container mx-auto'>

      {/********************** * For Desktop  ********************* */}
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <Link to="/"><img src={logo} alt="logo" style={{ width: "200px" }} /></Link>
        </div>
      </div>
      <div className="navbar__links-container relative">
        <p><Link to='/blog'>Blog</Link></p>
        <p><Link to='/courses'>Courses</Link></p>
        <p><Link to='/' onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center  gap-x-2">English <AiOutlineCaretDown /></Link></p>
        {isOpen && (
          <div className="absolute right-0 top-5 z-10 bg-white rounded-lg py-2 mt-2">
            <Link to='/' className="block pl-4 pr-8 py-2 text-[#54ada9] font-bold hover:bg-gray-200">English</Link>
            <Link to='/' className="block pl-4 pr-8 py-2 text-gray-800 hover:text-[#54ada9] font-bold hover:bg-gray-200">French</Link>
          </div>
        )}
      </div>
      <div className="courseBtn navbar__sign pl-5">
        <Link to='/courses'><button type="button">Start Course</button></Link>
      </div>

      {/********************** * For Mobile ********************* */}
      <MobileMenu
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />


    </div>
  )
}

export default Navbar