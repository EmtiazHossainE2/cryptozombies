import React from 'react'
import { Outlet } from 'react-router-dom'
import ChatBox from '../../components/Common/ChatBox/ChatBox'
import Footer from '../../components/Common/Footer/Footer'
import Navbar from '../../components/Common/Navbar/Navbar'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
      <ChatBox/>
    </div>
  )
}

export default Main