import React from 'react'
import zombieArmy from '../../../assets/zombie-army.png'

const BuildZombieArmy = () => {
  return (
    <div className="container mx-auto section__padding mt-3">
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-5'>
        <div className='basis-1/2 flex justify-center'>
          <img src={zombieArmy} alt="zombie-army" />
        </div>
        <div className='basis-1/2 text-center lg:text-start'>
          <h2>Build a Zombie Army</h2>
          <p className='my-8 p__style'>After completing all lessons and deploying your DApp, pit your zombie army against other players' zombies in one of the world's first blockchain-based games! Half code-school, half MMO crypto-collectible strategy game.</p>
        </div>
      </div>
    </div>
  )
}

export default BuildZombieArmy