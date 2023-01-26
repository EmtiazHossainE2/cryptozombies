import React from 'react'
import token from '../../../assets/token.png'

const ImportanceOfToken = () => {
  return (
    <div className="container mx-auto section__padding mt-3">
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-5'>
        <div className='basis-1/2 '>
          <img src={token} alt="token" className='pl-8'/>
        </div>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2>Why token is <br className='hidden lg:block' /> Important</h2>
          <p className='my-8 p__style'>CryptoZombies will be introducing a token that is going to be utilized in “Play to Earn” strategy. The token will be used to incentivize users to complete courses, and use the CZ site or mobile apps daily to interact with the CZ community.</p>
          <p className='mb-8 p__style'>The CZ tokens will be bought back and burned when users pay for courses.</p>
        </div>
      </div>
    </div>
  )
}

export default ImportanceOfToken