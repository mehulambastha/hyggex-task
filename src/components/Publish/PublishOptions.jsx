import React from 'react'

const hyggexLogoPath = "/assets/hyggexLogo.png"
const hyggexIconPath = "/assets/hyggex.svg"
const plusIconPath = "/assets/plus.svg"

const PublishOptions = () => {
  return (
    <div className='w-full flex flex-row items-center justify-around'>
      <div className='flex flex-row gap-1 items-center justify-center py-5'>
        <img src={process.env.PUBLIC_URL + hyggexLogoPath} alt='hyggexLogo' className='rounded-full shadow-lg' width={70}/>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-xs'>Published By</span>
          <img src={process.env.PUBLIC_URL + hyggexIconPath} className='ml-6' width={90} alt='HyggeX'/>
        </div>
      </div>
      <div className='flex flex-row gap-1 items-center justify-center'>
        <img src={process.env.PUBLIC_URL + plusIconPath} width={50} alt='Add'/>
        <span className='text-2xl text-indigo-950 font-bold'>Publish</span>
      </div>
    </div>
  )
}

export default PublishOptions
