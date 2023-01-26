import React from 'react'

import alchemy from '../../../assets/brand/alchemy.png'
import Chainlink from '../../../assets/brand/Chainlink.png'
import Binance from '../../../assets/brand/Binance.png'
import neo from '../../../assets/brand/neo.png'

import './Brand.css'


const Brand = () => {
  return (
    <div className="container mx-auto section__padding">
      <div className="brand">
        <div><img src={alchemy} alt="alchemy" /></div>
        <div><img src={Chainlink} alt="Chainlink" /></div>
        <div><img src={Binance} alt="Binance" /></div>
        <div><img src={neo} alt="neo" /></div>
      </div>
    </div>
  )
}

export default Brand