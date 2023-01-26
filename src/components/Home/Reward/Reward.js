import React from 'react'
import NFTRewards from '../NFTRewards/NFTRewards'
import Victory from '../Victory/Victory'
import './Reward.css'

const Reward = () => {
  return (
    <div className="container mx-auto relative">
      <div className="reward__bg">
        <NFTRewards />
        <Victory />
      </div>
    </div>
  )
}

export default Reward