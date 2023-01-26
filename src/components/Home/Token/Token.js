import React from 'react'
import reward from '../../../assets/zombie-reward.png'
import './Token.css'

const Token = () => {
  return (
    <div className='section__padding '>
      <div className="container mx-auto">
        <div className=' text-center py-10'>
          <h2>Token Info</h2>
          <p className='my-8 p__style'>The token will be used to incentivize users to complete courses, and interact <br className='hidden lg:block' /> with the CZ community.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-5 relative'>
          <div className='basis-1/2 text-center lg:text-start gradient__bg'>
            <h2>Token Rewards Play <br className='hidden lg:block' /> to Earn</h2>
            <p className='my-8 p__style'>We empower developers to learn and help others, providing the means to earn rewards for your contributions.</p>
            <p className='mb-8 p__style'>We will be expanding the existing course format to a live, and more engaging format that’s hosted in the Metaverse. This will allow users to do live coding events, in which they can easily share their code/screen with an instructor or their peers, and interact with other students using chat, audio, or video.</p>

          </div>
          <div className='basis-1/2 flex justify-center'>
            <img src={reward} alt="reward" className='h-[423px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token