import React from 'react'

const Info = ({title, description, size, textAlign, titleAlign}) => {
  return (
    <>
      <div className={`flex flex-col px-24 pb-8 gap-2 ${size} ${titleAlign}`}>
        <h1 className='font-lexendDeca text-h3
         font-bold text-center text-primary'>{title}</h1>
        <p className={`font-prociono text-p text-yellow-950 ${textAlign} `}>{description}</p>
      </div>
    </>
  )
}

export default Info