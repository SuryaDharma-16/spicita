import React from 'react'
import Button from '../Button'
import Image from '../../Assets/spices-image-2.jpg'

const Hero = () => {
  return (
    <>
    <section className='flex flex-wrap justify-between items-center px-24 h-[calc(100vh-64px)] top-0'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col max-w-[calc(100vw*0.36)] gap-4'>
          <h1 className='font-lexendDeca text-h1 font-bold'>Selamat Datang di <span className='text-primary'>Spicita</span></h1>
          <p className='font-lexendDeca text-p'>Rempah-rempah adalah bagian dari tanaman yang digunakan untuk memberi rasa, aroma, atau warna pada makanan, minuman, serta untuk tujuan pengobatan dan ritual.</p>
        </div>
        <Button
        label={'Mulai Belajar'}
        link={'/dashboard'} />
      </div>
      <div>
        <img src={Image} alt="" className='max-h-96 w-auto rounded-full'/>
      </div>
    </section>
    </>
  )
}

export default Hero