import React from 'react'
import courseComplete from '../../../assets/course-complete.png'

const Victory = () => {
  return (
    <div className="section__padding mt-3">
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-5'>
        <div className='basis-1/2 '>
          <img src={courseComplete} alt="victory" className='pl-8 lg:h-[423px]'/>
        </div>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2>Course Completion  <br className='hidden lg:block' /> NFTs</h2>
          <p className='my-8 p__style'>Rollout NFT certificates for course completion, each user will get a personalized NFT certificate for the courses they complete.</p>
        </div>
      </div>
    </div>
  )
}

export default Victory