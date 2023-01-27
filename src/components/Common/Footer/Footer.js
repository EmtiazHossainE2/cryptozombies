import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import ChatBox from '../ChatBox/ChatBox'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='container mx-auto section__padding '>
      <div className="footer__section">
        {/* ****************************** * Footer Top ****************************** */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 space-x-5 my-10'>
          <div>
            <div className="flex justify-center lg:justify-start">
              <Link to='/'><img src={logo} alt="logo" className='w-[200px]' /></Link>
            </div>
            <p className='p__style text-center lg:text-start px-5 lg:px-0'>Learn to Code Blockchain DApps by Building Simple Games</p>
          </div>
          <div className='text-center lg:text-start'>
            <h3 className='text-white text-xl font-bold mt-3'>Get Started</h3>
            <div className='flex flex-col gap-2 mt-5 link'>
              <Link to='/blog'>Blog</Link>
              <Link to='/courses'>Course</Link>
              <Link to='/'>What is blockchain ?</Link>
            </div>
          </div>
          <div className='text-center lg:text-start'>
            <h3 className='text-white text-xl font-bold mt-3'>Get In Touch</h3>
            <div className='flex flex-col gap-2 mt-5 link'>
              <Link to='/'>GitHub</Link>
              <Link to='/'>Twitter</Link>
              <Link to='/blog'>Newsletter</Link>
            </div>
          </div>
        </div>

        {/* ****************************** * Footer Bottom ****************************** */}
        <div className='flex flex-col lg:flex-row text-center lg:text-start justify-between items-center gap-5 py-7'>
          <p className='text-[#A2A0B1]'>© Copyright {currentYear} Cryptozombies All Rights Reserved</p>
          <div className='flex justify-center lg:justify-between gap-5 link'>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Cookies</Link>
            <Link to='/'>Terms</Link>
          </div>
        </div>
      </div>

      
      {/* <ChatBox/> */}
    </footer>
  )
}

export default Footer