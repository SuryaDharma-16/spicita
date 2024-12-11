import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({label, link}) => {
  return (
    <button className='h-fit w-fit bg-yellow-800 hover:bg-yellow-600 text-gray-50 font-bold px-2 py-1 rounded-md'><Link to={link}>{label}</Link></button>
  )
}

export default Button