import React from 'react'

const Benefit = ({title, details}) => {
  return (
    <>
      <div className="flex flex-col max-w-[calc(100vw/3.6)] h-auto gap-2">
        <p className='font-lexendDeca text-h5 text-gray-50'>{title}</p>
        <p className='font-prociono text-p text-gray-50'>{details}</p>
      </div>
    </>
  )
}

export default Benefit