import React from 'react'
import Info from './Info'

const Goals = () => {
  return (
    <>
      <div className='flex justify-between px-24'>
        <img src="" alt="visi-misi" />
        <div className='flex flex-row'>
          <Info
          title={'Visi'}
          description={'Meningkatkan daya saing petani rempah Indonesia melalui edukasi, inovasi, dan pengembangan produk hasil panen yang berkelanjutan.'}
          />
          <Info
          title={'Misi'}
          description={'1. Memberdayakan petani rempah dengan literasi pengolahan dan hilirisasi hasil panen sesuai standar internasional. 2. Menyediakan platform digital terpadu untuk edukasi dan pelatihan agribisnis rempah.3. Mendukung keberlanjutan agrikultur rempah melalui solusi inovatif yang inklusif dan berorientasi pada peningkatan kualitas produk.'}
          />
        </div>
      </div>
    </>
  )
}

export default Goals