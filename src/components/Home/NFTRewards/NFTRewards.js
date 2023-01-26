import React from 'react'
import token from '../../../assets/battleGround-cards.png'

const NFTRewards = () => {
  return (
    <div className='section__padding '>
      <div className='lg:px-16 text-center py-10'>
        <h2>NFT Rewards</h2>
        <p className='my-8 p__style'>NFT rewards will encourage engagement and long-term loyalty, helping us to create more active and engaged communities compared to existing education platforms.</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 '>
        <div className='basis-1/2 text-center lg:text-start relative'>
          <div className="gradient__bg">
            <h2>Zombie BattleGround <br className='hidden lg:block' /> Cards</h2>
            <p className='mt-8 p__style'>CryptoZombies will be introducing a token that is going to be utilized in “Play to Earn” strategy.</p>
            <p className='my-8 p__style'>The token will be used to incentivize users to complete courses, and use the CZ site or mobile apps daily to interact with the CZ community.</p>
            <p className='mb-8 p__style'>We intend to expand the current CZ community by moving it from Telegram to our own iOS & Android apps that will let users chat about blockchain development, and ask questions in a StackOverflow type format.</p>
          </div>

        </div>
        <div className='basis-1/2 flex justify-center'>
          <img src={token} alt="reward" className='md:h-[423px]' />
        </div>
      </div>
    </div>
  )
}

export default NFTRewards