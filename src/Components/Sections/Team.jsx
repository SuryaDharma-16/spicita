import React from 'react'
import TeamCard from '../Subsections/TeamCard'
import Vito from '../../Assets/vito.jpg'
import Najwa from '../../Assets/najwa.jpg'
import Ami from '../../Assets/ami.jpg'
import Husnul from '../../Assets/husnul.jpg'
import Surya from '../../Assets/surya.jpg'
import Sulis from '../../Assets/sulis.jpg'

const Team = () => {
  return (
    <>
      <section className='flex flex-col justify-center px-24'>
        <h1 className='font-lexendDeca text-h3 text-primary font-bold text-center'>Spicita Executank</h1>
        <div className='flex flex-col justify-start gap-6'>
          <div className='flex flex-wrap justify-center gap-6'>
            <TeamCard
            image={Sulis}
            name={'Sulis Susanti'}
            role={'Chief Executive Officer'}
            />
            <TeamCard
            image={Vito}
            name={'Alvito Gilbert Ginting'}
            role={'Chief Partnership Officer'}
            />
            <TeamCard
            image={Najwa}
            name={'Najwa Azkia Nasution'}
            role={'Chief Marketing Officer'}
            />
          </div>
          <div className='flex flex-wrap justify-center gap-6'>
            <TeamCard
            image={Ami}
            name={'Baiq Amyza Wulandari'}
            role={'Business Development'}
            />
            <TeamCard
            image={Surya}
            name={'I Gede Surya Dharma'}
            role={'Fullstack Web Engineer'}
            />
            <TeamCard
            image={Husnul}
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