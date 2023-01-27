import React from 'react'
import telegram from '../../../assets/telegram.png'

const ChatBox = () => {
  return (
    <div className='fixed bottom-0 right-3 hidden lg:block'>
      <a className="flex justify-between items-center gap-x-2 rounded-tl-lg rounded-tr-lg text-white bg-[#574ef0] uppercase text-[12px] py-2 px-5" target="_blank" href="https://t.me/loomnetworkdev" rel="noreferrer">
        <img src={telegram} width="32" height="32" alt="Open Chat" />
          Open Chat
      </a>
    </div>
  )
}

export default ChatBox