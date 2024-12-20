import React from 'react'
import Kementan from '../../Assets/Partners/kementan.png'
import Kemendag from '../../Assets/Partners/kemendag.png'
import Bkp from '../../Assets/Partners/bkp.png'
import Balitro from '../../Assets/Partners/balitro.png'
import Tanihub from '../../Assets/Partners/tanihub.png'
import Bri from '../../Assets/Partners/bri.png'
import Mandiri from '../../Assets/Partners/mandiri.png'
import Iso from '../../Assets/Partners/Iso.png'
import Fairtrade from '../../Assets/Partners/fairtrade.png'
import Rainforest from '../../Assets/Partners/rainforest.png'

const Partner = () => {
  return (
    <>
      <div className='flex flex-col justify-center gap-title h-screen px-24'>
        <h1 className='font-lexendDeca text-h3 text-primary text-center font-bold'>Partner Kami</h1>
        <div className='grid grid-cols-5 grid-rows-2 gap-8'>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Kementan} alt="Kementan" className='h-24 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Kemendag} alt="Kemendag" className='h-10 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Bkp} alt="Badan Karantina Pertanian" className='h-16 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Balitro} alt="Balitro" className='h-24 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Tanihub} alt="Tanihub" className='h-16 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Bri} alt="BRI" className='h-16 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Mandiri} alt="Mandiri" className='h-12 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Iso} alt="ISO" className='h-12 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Fairtrade} alt="Fairtrade" className='h-16 w-auto'/>
          </div>
          <div className='flex justify-center items-center h-16 w-auto'>
            <img src={Rainforest} alt="Rainforest" className='h-16 w-auto'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner
