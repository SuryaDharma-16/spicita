import React from 'react'
import Button from '../Subsections/Button'
import LessonOn from '../Subsections/LessonOn'
import Progress from '../Subsections/Progress'

const Review = () => {
  return (
    <>
    <div className='flex flex-col mb-8'>
      <h1 className='font-lexendDeca text-h4 text-yellow-950 font-bold'>Mulai Belajar</h1>

      <div className=''>
        <iframe className='h-[20.1rem] w-[calc((100vw/2)-96px*2)] rounded-2xl my-4' src="https://www.youtube.com/embed/ssNPb8XucXU?si=oSV3H2932TC0j0UZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h1 className='font-lexendDeca text-h3 text-yellow-950 font-bold max-w-[calc((100vw/2)-96px*2)]'>Potensi ekspor hasil panen cengkeh</h1>
        <p className='font-lexendDeca text-p text-gray-500 mb-4'>Oleh Joko Susanto, Pakar Agronomi</p>
      </div>


      <div className='flex flex-col gap-4'>
        <Button
        link={'/certificate'}
        label={'Klaim Sertifikat'}
        />

        <Progress 
        />

        <LessonOn
        title={'Pembelajaran 1 - Pengenalan'}
        unit1={'Sejarah dan asal usul cengkeh'}
        unit2={'Jenis-jenis cengkeh dan daerah penghasil utama'}
        unit3={'Manfaat dan kegunaan cengkeh'}
        />
      </div>
    </div>
    </>
  )
}

export default Review