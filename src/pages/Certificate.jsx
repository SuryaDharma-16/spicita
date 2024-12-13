import React from 'react'
import Nav1 from '../Components/Nav1'
import Footer from '../components/footer'
import Facebook from '../Assets/facebook-black.svg'
import Instagram from '../Assets/instagram-black.svg'
import Testi from '../Components/Sections/Testi'
import Paper from '../Assets/certificate-paper.jpg'
import Linkedin from '../Assets/linkedin.svg'
import Stepper from '../Components/Subsections/Stepper'

const Certificate = () => {
  return (
    <>
      <Nav1 />
      <div className='flex flex-row justify-between h-[calc(100vh-64px)] px-24 mt-8 gap-24'>
        <div className='w-[calc((50vw-6rem))]'>
          <p className='font-lexendDeca text-h5 text-yellow-950 font-bold mb-4'>Sertifikat Pengolahan Cengkeh Standar Ekspor</p>
          <img src={Paper} alt="certificate" className='rounded-md'/>
        </div>
        <div className='w-[calc((50vw-6rem))]'>
        <p className='font-lexendDeca text-h5 text-yellow-950 font-bold mb-4'>Bagikan Sertifikat</p>
          <div className='flex flex-row gap-4 mb-4'>
            <img src={Facebook} alt="facebook" className='h-8 w-auto'/>
            <img src={Instagram} alt="facebook" className='h-8 w-auto'/>
            <img src={Linkedin} alt="facebook" className='h-8 w-auto'/>
          </div>
          <p className='font-prociono text-p text-yellow-950 mb-4'>"Siap untuk sertifikasi keterampilan ekspor dan hilirisasi produk rempah-rempah cengkeh yang terstandarisasi? Sertifikasi ini akan memvalidasi keterampilan berharga Anda dan dapat membuat Anda menonjol di pasar global. Pelatihan ini cocok untuk pemula maupun profesional di industri."</p>
          <Stepper/>
        </div>
      </div>
      <Testi/>
      <Footer />
    </>
  )
}

export default Certificate