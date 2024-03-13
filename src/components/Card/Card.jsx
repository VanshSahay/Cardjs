import React from 'react'
import pfp from '../../assets/me.png'

function Card() {
  return (
    <div className='bg-gradient-to-b from-[#D9D9D9] to-[#737373] absolute w-full h-full flex justify-center items-center'>
      <div className='shadow-[10px_10px_10px_0px_rgba(0,0,0,0.4)] bg-gradient-to-b from-[#5A636A] via-[#132E35] to-[#0D1F23] px-10 flex flex-col justify-center items-center rounded-3xl'>
        <div><img src={pfp} alt="pfp" className='pt-7 pb-7 max-w-[200px]' /></div>
        <div className='font-zet tracking-wide font-semibold pb-5 bg-gradient-to-r from-[#AE67FA] to-[#F49867] inline-block text-transparent bg-clip-text text-[40px] leading-none'>VANSH<br/>SAHAY</div>
        <div className='bg-gradient-to-r from-[#AE67FA] to-[#F49867] min-h-3 min-w-[333px] rounded-full'></div>
        <div className='font-zet font-normal tracking-wide text-sm leading-relaxed text-gray-100 max-w-[425px] text-center pb-16 pt-12'>This is just practice for my knowledge on css and tailwind just trying things out and learning by making things that pique my curiosity.<br/><br/>Thank you for taking the time to check this out!</div>
      </div>
    </div>
  )
}

export default Card