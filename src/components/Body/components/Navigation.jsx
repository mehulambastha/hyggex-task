import React from 'react'

const refreshIconPath = "/assets/refresh.svg"
const leftArrowIconPath = "/assets/leftArrow.svg"
const rightArrowIconPath = "/assets/rightArrow.svg"
const fullscreenIconPath = "/assets/fullscreen.svg"


const Navigation = () => {
  return (
    <div className='flex flex-row items-center justify-around w-full'>
      <img src={process.env.PUBLIC_URL + refreshIconPath} alt='refresh' width={30}/>
      <div className='flex flex-row gap-8 items-center'>
        <img src={process.env.PUBLIC_URL + leftArrowIconPath} alt='refresh' width={40}/>
        <span className='font-bold text-xl text-indigo-950'>1/10</span>
        <img src={process.env.PUBLIC_URL + rightArrowIconPath} alt='refresh' width={40}/>
      </div>
      <img src={process.env.PUBLIC_URL + fullscreenIconPath} alt='refresh' width={30}/>
    </div>
  )
}

export default Navigation
