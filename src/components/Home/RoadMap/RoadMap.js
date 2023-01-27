import React from 'react'
import './RoadMap.css'

const RoadMap = () => {
  return (
    <div className='container mx-auto section__padding'>
      <div className='flex flex-col text-center justify-center items-center lg:px-8 my-10'>
        <h2>Roadmap</h2>
        <p className='my-8 p__style'>The roadmap illustrates what we're working on. We are continuously updating it based on your feedback.</p>
      </div>

      {/* RoadMap Main Section  */}
      <div>
        <div class="road_map_main_section">

          <div class="road_map_data_box road_map_single_data_box_one">
            <div class="road_map_single_data_box_one_date"><h5>2022 Q3</h5></div>
            <div class="road_map_single_data_box">
              <a class="road_map_list_one">Migrate the CZ Telegram room to our community chat</a>
              <a class="road_map_list_one"><span>Reputation Points</span>
                <span>Participation Rewards</span></a>
              <a class="road_map_list_one">Launch CZ Token on the BNB chain</a>
              <a class="road_map_list_one">Host More Live Events</a>
            </div>
          </div>
          <div class="road_map_data_box road_map_single_data_box_two">
            <div class="road_map_single_data_box_two_date"><h5>2022 Q4</h5></div>
            <div class="road_map_single_data_box">
              <a class="road_map_list_two"><span>Deploy CZ Token bridge</span></a>
              <a class="road_map_list_two">
                <span>Launch "Code Together"</span>
                <span>Expand the CZ Course Offering</span>
                <span>Premium Courses</span>
                <span>NFT Collection</span>
              </a>
              <a class="road_map_list_two">CZ Testnet</a>
            </div>

          </div>
          <div class="road_map_data_box road_map_single_data_box_three">

            <div class="road_map_single_data_box_three_date"><h5>2023 Q5</h5></div>


            <div class="road_map_single_data_box">
              <a class="road_map_list_three">
                NFT Marketplace (Testnet)
              </a>
              <a class="road_map_list_three">CZ Mainnet</a>
              <a class="road_map_list_three">
                <span>Staking</span>
                <span>Token Bridge (Mainnet)</span>
                <span>NFT Bridge (Mainnet)</span>
              </a>

              <a class="road_map_list_three">
                <span>Q&amp;A Board</span>
                <span>Jobs Board</span>
                <span>iPad Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap