import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='flex  m-2 w-[90%] h-[120px] md:w-[20%]' style={{
      backgroundImage: `url(${props.img})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '150px',
    }}>
      <div className="flex-1 flex pl-5 items-center"><h3 className='text-white w-[50%] text-[20px] md:text-[30px] lg:text-[40px]  font-bold'>{props.name}</h3></div>
    </div>
  )
}

export default CategoryCard