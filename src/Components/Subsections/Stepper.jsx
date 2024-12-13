import React from 'react'
import Plus from '../../Assets/Plus'
import Minus from '../../Assets/Minus'

const Stepper = () => {
  const [value, setValue] = setValue('0');

  return (
    <div className='flex flex-row'>
      <div className='flex items-center border-2 border-yellow-950 rounded-tl-md rounded-bl-md'>
        <button onClick={
          ''
        }><Plus fill={'#422006'}/></button>
      </div>
      <div className='flex justify-center items-center border-y-2 border-yellow-950 h-8 w-12'>
        <p>{}</p>
      </div>
      <div className='flex items-center border-2 border-yellow-950 rounded-tr-md rounded-br-md'>
        <button><Minus fill={'#422006'}/></button>
      </div>
    </div>
  )
}

export default Stepper