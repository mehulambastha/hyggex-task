import React from 'react'
import styles from '../styles.css'

const HomeLogoPath = "/assets/house.svg"
const ArrowIconPath = "/assets/Arrow.svg"

const Breadcrumb = () => {
  return (
    <div className='flex flex-row items-center justify-start gap-1 w-full px-20 pt-10'>
      <img src={process.env.PUBLIC_URL + HomeLogoPath} alt='Home' width={25}/>
      <img src={process.env.PUBLIC_URL + ArrowIconPath} alt='Home' width={25}/>
      <span className='text-gray-500 p-3'>Flashcard</span>
      <img src={process.env.PUBLIC_URL + ArrowIconPath} alt='Home' width={25}/>
      <span className='text-gray-500 p-3'>Mathematics</span>
      <img src={process.env.PUBLIC_URL + ArrowIconPath} alt='Home' width={25}/>
      <span className='text-indigo-950 p-3'>Relations and Functions</span>
    </div>
  )
}

export default Breadcrumb
