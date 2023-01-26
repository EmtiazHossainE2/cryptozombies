import React from 'react'
import codingImg from '../../../assets/codingImg.png'

const CodingLesson = () => {
  return (
    <div className="section__padding mt-3">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2 className='text-white text-4xl md:text-5xl font-bold lg:leading-[52px]'>Interactive Coding Lessons</h2>
          <p className='my-8 p__style'>In-browser step-by-step lessons take you from the very basics of Solidity to creating your own fully-functional blockchain-based game. Even by the end of Lesson 1 (which can be completed in one sitting), you'll know enough to officially call yourself a blockchain developer!</p>
        </div>
        <div className='basis-1/2'>
          <img src={codingImg} alt="codingImg" />
        </div>
      </div>
    </div>
  )
}

export default CodingLesson