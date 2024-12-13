import React from 'react';
import Plus from '../../Assets/Plus';
import Minus from '../../Assets/Minus';
import { useState } from 'react';

const Stepper = () => {
  const [value, setValue] = useState(1);

  const incrementValue = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrementValue = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
  };

  return (
    <div className='flex flex-row'>
      <div className='flex items-center border-2 border-yellow-950 rounded-tl-md rounded-bl-md'>
        <button onClick={decrementValue}>
          <Minus fill={'#422006'} />
        </button>
      </div>
      <div className='flex justify-center items-center border-y-2 border-yellow-950 h-8 w-12'>
        <p className='font-lexendDeca text-p text-yellow-950'>{value}</p>
      </div>
      <div className='flex items-center border-2 border-yellow-950 rounded-tr-md rounded-br-md'>
        <button onClick={incrementValue}>
          <Plus fill={'#422006'} />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
