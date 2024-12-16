import React from 'react'

const TeamCard = ({image, name, role}) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-4 bg-yellow-100 ring-2 ring-yellow-400 hover:ring-4 hover:ring-yellow-500 hover:shadow-md hover:shadow-yellow-900 rounded-md w-1/4'>
        <img src={image} alt="team-photo" className='max-w-60 rounded-lg'/>
        <h1 className="font-lexendDeca text-h5 text-yellow-950 font-bold">{name}</h1>
        <h2 className="font-lexendDeca text-p text-gray-500">{role}</h2>
      </div>
    </>
  )
}

export default TeamCard