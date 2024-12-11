import React from 'react'
import ClassCard from '../Subsections/ClassCard'

const CardShowcase = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between px-24 gap-8 mb-24">
        <ClassCard
        title={'Pengolahan Cengkeh Berkualitas Ekspor'}
        link={'/learning'}
        />
        <ClassCard
        title={'Standar Pengolahan dan Penyimpanan Pala'}
        link={''}
        />
        <ClassCard
        title={'Teknik Pengolahan Lada Berkualitas Tinggi'}
        link={''}
        />
        <ClassCard
        title={'Proses Produksi Kayu Manis untuk Pasar Internasional'}
        link={''}
        />
        <ClassCard
        title={'Cara Menghasilkan Jahe Kering Berkualitas Ekspor'}
        link={''}
        />
        <ClassCard
        title={'Pengolahan Kunyit dengan Standar Kualitas Internasional'}
        link={''}
        />
        <ClassCard
        title={'Kapulaga Berkualitas Ekspor: Teknik Panen hingga Pengemasan'}
        link={''}
        />
        <ClassCard
        title={'Pengolahan Temulawak untuk Produk Herbal'}
        link={''}
        />
        <ClassCard
        title={'Pengolahan dan Penyimpanan Serai Berkualitas Tinggi'}
        link={''}
        />
      </div>
    </>
  )
}

export default CardShowcase