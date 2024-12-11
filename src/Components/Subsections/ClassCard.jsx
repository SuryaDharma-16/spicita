import React from 'react'
import { Link } from 'react-router-dom'

const ClassCard = ({title, link}) => {
  return (
    <>
      <Link to={link}>
        <div className='flex flex-col gap-8 ring-2 ring-primary hover:ring-secondary hover:shadow-md hover:shadow-yellow-500 h-fit max-w-[calc(100vw/3.8)] p-4 rounded-md' id='{}'>
          <h4 className='font-lexendDeca text-h5 text-yellow-950'>{title}</h4>
        </div>
      </Link>
    </>
  )
}

export default ClassCard