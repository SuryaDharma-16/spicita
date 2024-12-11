import React from 'react'

const ProductCard = ({image ,name, description}) => {
  return (
    <>
    <div className='flex flex-col items-center max-w-60'>
      <img src={image} alt="product" className='w-32'/>
      <h6 className='font-lexendDeca text-h5 text-yellow-950 font-bold'>{name}</h6>
      <p className='font-prociono text-p text-yellow-950 text-center'>{description}</p>
    </div>
    </>
  )
}

export default ProductCard