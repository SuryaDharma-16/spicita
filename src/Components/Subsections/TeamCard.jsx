import React from 'react'

const TeamCard = ({image, name, role}) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-4 bg-yellow-100 rounded-md w-1/4'>
        <img src={image} alt="team-photo" />
        <h1>{name}</h1>
        <h2>{role}</h2>
      </div>
    </>
  )
}

export default TeamCard