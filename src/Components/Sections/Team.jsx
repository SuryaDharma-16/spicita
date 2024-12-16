import React from 'react'
import TeamCard from '../Subsections/TeamCard'
import Vito from '../../Assets/Members/vito.jpg'
import Najwa from '../../Assets/Members/najwa.jpg'
import Ami from '../../Assets/Members/ami.jpg'
import Husnul from '../../Assets/Members/husnul.jpg'
import Surya from '../../Assets/Members/surya.jpg'
import Sulis from '../../Assets/Members/sulis.jpg'

const Team = () => {
  return (
    <>
      <section className='flex flex-col justify-center px-24 gap-title'>
        <h1 className='font-lexendDeca text-h3 text-primary font-bold text-center'>Tim Kami</h1>
        <div className='flex flex-col justify-start gap-8'>
          <div className='flex flex-wrap justify-center gap-8'>
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
          <div className='flex flex-wrap justify-center gap-8'>
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