import React from 'react'
import Benefits from '../Subsections/Benefits'

const DashboardBanner = () => {
  return (
    <>
      <div className='my-8'>
        <div className='px-24 my-4'>
          <h4 className='font-lexendDeca text-h4 text-yellow-950'>Pilih materi yang ingin dipelajari.</h4>
          <h2 className='font-lexendDeca text-yellow-950 text-h2 font-bold'>Mau mulai <span className='text-primary'>belajar dari mana</span>?</h2>
        </div>
        <Benefits/>
      </div>
    </>
  )
}

export default DashboardBanner