import React from 'react'
import Button from '../Components/Button.jsx'
import { Link } from 'react-router-dom'
import GoogleLogo from '../Assets/google-logo.svg'
import Instagram from '../Assets/instagram.svg'
import Facebook from '../Assets/facebook.svg'
import Youtube from '../Assets/youtube.svg'
import Tiktok from '../Assets/tiktok.svg'

function Footer() {
  return (
    <>
      <div className='flex flex-row justify-between items-center px-24 h-24 bg-yellow-900'>
        <p className='text-gray-50 font-prociono'>Langganan untuk mendapatkan informasi dan promo menarik dari spicita</p>
        <Button
        label={'Mulai Belajar'}
        link={'/dashboard'}/>
      </div>
      <div className='h-fit text-gray-50 bg-yellow-900 mt-12 px-24'>
        <div className='flex flex-wrap justify-between items-top'>
          <div>
            <p className='font-lexendDeca text-gray-50 text-xl font-bold'>Spicita</p>
            <p className='font-prociono'>Spicita memberikan kemudahan akses edukasi ekspor dan hilirisasi hasil panen bagi petani rempah nusantara.</p>
          </div>
          <div>
            <p className='font-lexendDeca text-gray-50 text-xl font-bold'>Tautan</p>
            <p className='font-prociono'><Link to={'/'}>Konfirmasi Pembayaran</Link></p>
            <p className='font-prociono'><Link to={'/'}>Syarat & Ketentuan</Link></p>
            <p className='font-prociono'><Link to={'/'}>Kebijakan Privasi</Link></p>
          </div>
          <div>
            <p className='font-lexendDeca text-gray-50 text-xl font-bold'>Partner</p>
            <div className="flex flex-wrap">
              <img src={GoogleLogo} alt="logo-mitra" />
              <img src={GoogleLogo} alt="logo-mitra" />
              <img src={GoogleLogo} alt="logo-mitra" />
              <img src={GoogleLogo} alt="logo-mitra" />
              <img src={GoogleLogo} alt="logo-mitra" />
              <img src={GoogleLogo} alt="logo-mitra" />
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <img src={Instagram} alt="instagram" className='h-8 w-auto'/>
          <img src={Facebook} alt="facebook" className='h-8 w-auto'/>
          <img src={Youtube} alt="youtube" className='h-8 w-auto'/>
          <img src={Tiktok} alt="tiktok" className='h-8 w-auto'/>
        </div>
      </div>
    </>
  )
}

export default Footer