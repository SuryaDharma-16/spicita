import React from 'react'
import TeamCard from '../Subsections/TeamCard'

const Team = () => {
  return (
    <>
      <section className='flex flex-col justify-center px-24'>
        <h1 className='font-lexendDeca text-h3 text-primary font-bold text-center'>Spicita Executank</h1>
        <div className='flex flex-col justify-start gap-6'>
          <div className='flex flex-wrap justify-center gap-6'>
            <TeamCard
            image={''}
            name={'Sulis Susanti'}
            role={'Chief Executive Officer'}
            />
            <TeamCard
            image={''}
            name={'Alvito Gilbert Ginting'}
            role={'Chief Partnership Officer'}
            />
            <TeamCard
            image={''}
            name={'Najwa Azkia Nasution'}
            role={'Chief Marketing Officer'}
            />
          </div>
          <div className='flex flex-wrap justify-center gap-6'>
            <TeamCard
            image={''}
            name={'Baiq Amyza Wulandari'}
            role={'Business Development'}
            />
            <TeamCard
            image={''}
            name={'I Gede Surya Dharma'}
            role={'Fullstack Web Engineer'}
            />
            <TeamCard
            image={''}
            name={'Husnul Chotima'}
            role={'Content Creator'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Team