import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='flex'>
      <div  className='ml-5 flex items-center relative w-[150px]' style={{
      backgroundImage: `url(${props.img})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '200px',
    }}>
      <div className="flex-1 flex justify-center"><h3 className='absolute bottom-3 text-[20px]  font-bold'>{props.name}</h3></div>
    </div>
    </div>
  )
}

export default ProductCard