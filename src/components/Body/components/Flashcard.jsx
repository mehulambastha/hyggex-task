import React from 'react'
import styles from '../../styles.css'

const bulbIconPath = "/assets/bulb.svg"
const speakerIconPath = "/assets/speaker.svg"
// const rightArrowIconPath = "/rightArrow.svg"
// const leftArrowIconPath = "/leftArrow.svg"

const Flashcard = () => {
  return (
    <div className='flashCardBg relative h-96 w-full flex flex-col'>
      <div>
        <img src={process.env.PUBLIC_URL + bulbIconPath} className='absolute top-8 left-8' width={35} alt='hint'/>
        <img src={process.env.PUBLIC_URL + speakerIconPath} className='absolute top-8 right-8' width={35} alt='speaker'/>
      </div>
      <h1 className='text-2xl text-white font-bold text-center m-auto'>9 + 6 + 7x - 2x - 3</h1>
    </div>
  )
}

export default Flashcard
