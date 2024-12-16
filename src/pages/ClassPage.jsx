import React from 'react'
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import Review from '../Components/Sections/Review'
import Breadcrumbs from '../Components/Subsections/Breadcrumbs'
import Process from '../Components/Subsections/Process'

const ClassPage = () => {
  return (
    <>
      <Nav1 />
      <section className='px-24 mt-8 mb-16'>
        <div className='mt-8 mb-4'>
          <Breadcrumbs
          title={'Pengolahan Cengkeh Berkualitas Ekspor'}
          />
        </div>
        <section className="flex flex-row justify-between">
          <Review />
          <Process />
        </section>
      </section>
      <Footer />
    </>
  )
}

export default ClassPage