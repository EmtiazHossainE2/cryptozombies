import React from 'react'
import './Cta.css'

const Cta = () => {
  return (
    <div className='container mx-auto section__padding'>
      <div className="flex flex-col justify-center items-center ">
        <h2>Stay Updated</h2>
        <p className='p__style text-center lg:text-start'>Join our mailing list to stay in the loop with our newest feature releases</p>
        <div className='Cta'>
          <input type="email" placeholder='Enter your email address' />
          <button type='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Cta