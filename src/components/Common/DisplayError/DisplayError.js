import React from 'react'
import { Link } from 'react-router-dom'

const DisplayError = () => {
  return (
    <div className='container mx-auto section__padding'>
      <div className="flex flex-col gap-y-5 justify-center items-center h-screen">
      <h2 className=' text-red-500 font-bold text-4xl text-center'>404 ! Page Not Found</h2>
      <div className='zombieBtn'>
        <Link to='/'><button className=''>Go Home</button></Link>
      </div>
      </div>
    </div>
  )
}

export default DisplayError