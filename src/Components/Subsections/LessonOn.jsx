import React from 'react'
import { Link } from 'react-router-dom'
import Play from '../../Assets/Play.jsx'

const LessonOn = ({title, unit1, unit2, unit3}) => {
  return (
    <>
      <div className='flex flex-col max-w-1/4 gap-y-2'>
        <h3 className='font-lexendDeca text-h6 text-gray-500'>{title}</h3>
        <div className='flex flex-row items-center gap-2'>
          <div className='flex items-center justify-center p-2'>
            <Play />
          </div>
          <p className='font-prociono text-p text-yellow-950'><Link to={'/'}>{unit1}</Link></p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div className='flex items-center justify-center p-2'>
            <Play />
          </div>
          <p className='font-prociono text-p text-yellow-950'><Link to={'/'}>{unit2}</Link></p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div className='flex items-center justify-center p-2'>
            <Play />
          </div>
          <p className='font-prociono text-p text-yellow-950'><Link to={'/'}>{unit3}</Link></p>
        </div>
      </div>
    </>
  )
}

export default LessonOn