import React from 'react'
import Button from './Button'

const Progress = ({Lesson}) => {
  return (
    <>
    <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
      <p>Pembelajaran 1 dari 6</p>
      <p>{Lesson}</p>
      <div className='flex flex-row justify-between items-center gap-2'>
        <div className='flex shrink-1 bg-gray-300 rounded-full h-1 w-full'></div>
        <Button
        link={'/'}
        label={'Ke unit 1'}
        />
      </div>
      <p>0 unit selesai dari 3 unit yang tersedia</p>
    </div>
    </>
  )
}

export default Progress