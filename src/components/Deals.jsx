import React from 'react';
import ProductCard from "./ProductCard"
import appleImg from "../assets/appleImg.png";
import almondImg from "../assets/almondImg.png";
import chickenImg from "../assets/chickenImg.png";
import turmericImg from "../assets/turmericImg.png"

const Deals = () => {
  return (
    <div className='flex flex-col mt-10'>
      <div>
        <h3 className='text-[20px] md:text-[30px] lg:text-[30px] text2 font-bold'>Conquer the hottest</h3>
        <h2 className='text-[30px] md:text-[40px] lg:text-[40px] font-extrabold'>Deals</h2>
      </div>
      <div className='flex overflow-x-scroll md:overflow-hidden p-4  '>
      <ProductCard 
      name="Apple"
      img={appleImg}
      />
      <ProductCard 
      name="chicken"
      img={chickenImg}
      />
      <ProductCard 
      name="Turmeric"
      img={turmericImg}
      />
      <ProductCard 
      name="Almond"
      img={almondImg}
      />
      </div>
    </div>
  )
}

export default Deals