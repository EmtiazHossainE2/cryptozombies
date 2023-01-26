import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/zombie-banner.png'

const Banner = () => {
  return (
    <div className='section__padding'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2 className='text-white text-3xl lg:text-5xl font-bold lg:leading-[52px]'>Learn to Code Blockchain DApps by Building Simple Games</h2>
          <p className='text-[#c8c8c8] py-8 text-lg font-[500] '>CryptoZombies is an interactive school that teaches you all things technical about blockchains. Learn to write smart contracts by making your own crypto-collectibles game.</p>
          <div className="zombieBtn">
            <button className=''><Link to='/courses'>Courses</Link></button>
          </div>
        </div>
        <div className='basis-1/2'>
          <img src={banner} alt="zombie-banner" />
        </div>
      </div>
    </div>
  )
}

export default Banner