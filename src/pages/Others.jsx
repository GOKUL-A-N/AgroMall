import React from 'react'
import ProductCard from '../components/ProductCard';
import appleImg from "../assets/appleImg.png"

const Others = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center w-full p-4 '>
        <h1 className=' text-[20px] flex  md:text-[30px] lg:text-[40px]  font-bold'>Other Groceries</h1>
      </div>
      <div className='flex-1 flex flex-wrap '>
          <ProductCard 
          name="Apple"
          img={appleImg}
          />
          <ProductCard 
          name="Apple"
          img={appleImg}
          />
          <ProductCard 
          name="Apple"
          img={appleImg}
          />
      </div>
    </div>
  )
}

export default Others