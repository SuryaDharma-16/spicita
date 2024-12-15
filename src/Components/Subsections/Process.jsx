import React from 'react'
import Lesson from './Lesson'

const Process = () => {
  return (
    <>
      <section className="flex flex-col gap-y-4">
        <h1 className='font-lexendDeca text-h3 text-primary font-bold'>Tinjauan Dasar</h1>
        <Lesson
        title={'Pembelajaran 1 - Pengenalan'}
        unit1={'Sejarah dan asal usul cengkeh'}
        unit2={'Jenis-jenis cengkeh dan daerah penghasil utama'}
        unit3={'Manfaat dan kegunaan cengkeh'}
        />
        <Lesson
        title={'Pembelajaran 2 - Standar Mutu'}
        unit1={'Kriteria mutu cengkeh sesuai standar luar negeri'}
        unit2={'Regulasi dan sertifikasi untuk produk cengkeh'}
        unit3={'Prosedur uji mutu cengkeh (kadar air, warna, aroma, dll.)'}
        />
        <Lesson
        title={'Pembelajaran 3 - Proses Pasca Panen'}
        unit1={'Teknik panen yang benar untuk menjaga kualitas cengkeh'}
        unit2={'Proses sortasi, grading, dan pemisahan cengkeh'}
        unit3={'Teknik pengeringan yang optimal untuk mempertahankan mutu'}
        />
        <Lesson
        title={'Pembelajaran 4 - Teknik Pengeringan Cengkeh'}
        unit1={'Metode pengeringan alami dan buatan'}
        unit2={'Alat pengering yang direkomendasikan dan cara pakai'}
        unit3={'Proses pengendalian kelembapan dan suhu selama pengeringan'}
        />
        <Lesson
        title={'Pembelajaran 5 - Teknik Penyimpanan'}
        unit1={'Syarat tempat penyimpanan yang ideal'}
        unit2={'Metode pengepakan cengkeh untuk ekspor'}
        unit3={'Minimalisir kontaminasi & menjaga kualitas selama penyimpanan'}
        />
        <Lesson
        title={'Pembelajaran 6 - Regulasi dan Dokumentasi Ekspor'}
        unit1={'Dokumen yang dibutuhkan untuk ekspor (Sertifikat Fumigasi, CoA, dll.)'}
        unit2={'Persyaratan dan prosedur bea cukai'}
        unit3={'Tips mengurus izin dan sertifikasi secara efisien'}
        />
      </section>
    </>
  )
}

export default Process