import React from 'react'

const Tabs = () => {
  return (
    <div className='flex flex-row gap-10 text-lg font-semibold'>
      <span className='px-5 py-3 border-b-4 border-indigo-950 text-indigo-950'>Home</span>
      <span className='px-5 py-3 text-gray-600'>Quiz</span>
      <span className='px-5 py-3 text-gray-600'>Test</span>
      <span className='px-5 py-3 text-gray-600'>Game</span>
      <span className='px-5 py-3 text-gray-600'>Others</span>
    </div>
  )
}

export default Tabs
