import React from 'react'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import PublishOptions from './components/Publish/PublishOptions'
import CourseTitle from './components/Title/CourseTitle'
import CourseBody from './components/Body/CourseBody'


const App = () => {
  return (
    <div className='flex flex-col gap-0 w-full relative'>
      <Breadcrumb />
      <CourseTitle />
      <CourseBody />
      <PublishOptions />
    </div>
  )
}

export default App
