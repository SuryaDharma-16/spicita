import React from 'react'
import Nav1 from '../Components/Nav1'
import Footer from '../components/footer'
import Review from '../Components/Sections/Review'
import Breadcrumbs from '../Components/Subsections/Breadcrumbs'

const ClassPage = () => {
  return (
    <>
      <Nav1 />
      <div className='px-24 mt-8 mb-4'>
        <Breadcrumbs
        title={'Pengolahan Cengkeh Berkualitas Ekspor'}
        />
      </div>
      <Review />
      <Footer />
    </>
  )
}

export default ClassPage