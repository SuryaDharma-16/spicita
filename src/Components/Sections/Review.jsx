import React from 'react'
import Breadcrumbs from '../Subsections/Breadcrumbs'
import Button from '../Subsections/Button'

const Review = () => {
  return (
    <>
    <div className='flex flex-col px-24 my-8'>
      <h1 className='font-lexendDeca text-h4 text-yellow-950 font-bold'>Mulai Belajar</h1>

      <Breadcrumbs
      title={'Pengolahan Cengkeh berkualitas ekspor'}/>

      <div className=''>
        <iframe className='h-[20.1rem] w-[calc((100vw/2)-96px*2)] rounded-2xl my-4' src="https://www.youtube.com/embed/ssNPb8XucXU?si=oSV3H2932TC0j0UZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h1 className='font-lexendDeca text-h3 text-yellow-950 font-bold max-w-[calc((100vw/2)-96px*2)]'>Potensi ekspor hasil panen cengkeh</h1>
        <p className='font-lexendDeca text-p text-gray-500 mb-4'>Oleh Joko Susanto, Pakar Agronomi</p>
      </div>

      <Button
      link={'/certificate'}
      label={'Klaim Sertifikat'}
      />
    </div>
    </>
  )
}

export default Review