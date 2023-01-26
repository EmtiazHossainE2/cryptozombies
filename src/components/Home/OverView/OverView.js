import React from 'react'
import students from '../../../assets/students.png'

const OverView = () => {

  return (
    <div className="section__padding">
      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">

        {/************************** Overview Left *************************** */}
        <div className='basis-1/2 mt-10 '>
          <h2>Why CryptoZombies <br className='hidden lg:block' /> is Different</h2>

          <div className='flex flex-col md:flex-row py-8 gap-5 justify-evenly items-center text-center lg:text-start'>
            <div className='lg:basis-1/2'>
              <img src={students} alt="students" />
              <p className='p__style'>Students</p>
            </div>
            <div className='lg:basis-1/2'>
              <h2 className='text-4xl font-bold text-white'>1M+</h2>
              <p className='p__style'>Classes Completed</p>
            </div>
          </div>
        </div>

        {/************************** Overview Right *************************** */}
        <div className='lg:basis-1/2 text-center lg:text-start'>
          <p className='p__style'>CryptoZombies is the largest education platform for blockchain development, it’s been around for 4+ years, with over 400k registered users that have finished multiple courses.</p>
          <p className='p__style mt-6'>CryptoZombies was the first tutorial on the internet for NFTs, and is still very relevant to the new crop of web3 developers looking to enter the industry today. Currently the CryptoZombies curriculum is mostly focused on Ethereum and Solidity development, but is a lot of demand for content targeting other chains such as Binance, TRON, and even projects like Chainlink.</p>
        </div>
      </div>
    </div>
  )
}

export default OverView