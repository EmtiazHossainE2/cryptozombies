import React from 'react'
import { Link } from 'react-router-dom'
import victory from '../../../assets/zombie-victory.png'

const CourseFormat = () => {
  return (
    <div className='container mx-auto section__padding'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2>Expand the Course Format</h2>
          <p className='my-8 p__style'>We will be expanding the existing course format to a live, and more engaging format that’s hosted in the Metaverse. This will allow you to do live coding events, in which you can easily share your code/screen with an instructor or your peers, and interact with other students using chat, audio, or video.</p>
          <p className='mb-8 p__style'>And you know the best part? Everything is completely free!</p>
          <div className="zombieBtn">
            <Link to='/courses'>
              <button className=''>Courses</button>
            </Link>
          </div>
        </div>
        <div className='basis-1/2 flex justify-center'>
          <img src={victory} alt="victory" className='h-[423px]' />
        </div>
      </div>
    </div>
  )
}

export default CourseFormat