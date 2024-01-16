import React from 'react'
import Tabs from './components/Tabs'
import Flashcard from './components/Flashcard'
import Navigation from './components/Navigation'

const CourseBody = () => {
  return (
    <div className='w-full m-0'>
      <div className=' w-3/5 mx-auto relative flex flex-col gap-8 items-center p-10'>
        <Tabs />
        <Flashcard />
        <Navigation />
      </div>
    </div>
  )
}

export default CourseBody
