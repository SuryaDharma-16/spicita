import React from 'react'
import Stars from '../Assets/stars.svg'

const TestiCard = ({photo, comment, name}) => {
  return (
    <>
      <div className='flex flex-row items-start bg-gray-50 rounded-md p-6 max-w-[calc(100vw/3.6)] gap-4'>
        <img src={photo} alt="" className=''/>
        <div className='flex flex-col items-start gap-2'>
          <p className='font-lexendDeca text-h5 text-dark'>"{comment}"</p>
          <p className='font-lexendDeca text-p text-yellow-950'>{name}</p>
          <img src={Stars} alt="stars" className='h-4 w-auto'/>
        </div>
      </div>
    </>
  )
}

export default TestiCard