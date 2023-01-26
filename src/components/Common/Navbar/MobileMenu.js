import React from 'react'
import { HiMenu } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobileMenu = ({toggleMenu,setToggleMenu,isOpen,setIsOpen}) => {
  return (
    <div className="navbar__menu">
      {toggleMenu
        ? <HiMenu className='cursor-pointer font-extrabold' style={{ color: "white" }} size={35} onClick={() => setToggleMenu(false)} />
        : <HiMenu className='cursor-pointer font-extrabold' style={{ color: "white" }} size={35} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="navbar__menu-container scale-up-center relative">
          <div className='absolute top-[46px] right-5'>
            <FaWindowClose className='cursor-pointer font-extrabold ' style={{ color: "white" }} size={35} onClick={() => setToggleMenu(false)} />
          </div>
          <div className="navbar__menu-container_links mt-5 md:mt-8 relative">
            <p><Link to='/blog' onClick={() => setToggleMenu(false)}>Blog</Link></p>
            <p><Link to='/courses' onClick={() => setToggleMenu(false)}>Courses</Link></p>
            <p><Link to='/' onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center  gap-x-2">English <FiChevronDown size={22} className="font-bold" /></Link></p>
            {isOpen && (
              <div className="absolute left-0 bottom-[-83px] z-10 bg-white rounded-lg py-2 mt-2">
                <Link to='/' className="block pl-4 pr-12 py-2 text-[#54ada9] font-bold hover:bg-gray-200" onClick={() => setToggleMenu(false)}>English</Link>
                <Link to='/' className="block pl-4 pr-12 py-2 text-gray-800 hover:text-[#54ada9] font-bold hover:bg-gray-200" onClick={() => setToggleMenu(false)}>French</Link>
              </div>
            )}
          </div>
          <div className={`navbar__menu-container_links-sign courseBtn ${isOpen ? "mt-24" : ""}`}>
            <Link to='/courses'><button type="button" onClick={() => setToggleMenu(false)}>Start Course</button></Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu