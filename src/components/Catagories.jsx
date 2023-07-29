import React from 'react';
import CategoriesCard from "./CategoryCard";
import fruitsImg from "../assets/fruitsImg.png";

const Catagories = () => {
  return (
    <div>
      <h3 className='text-[20px] md:text-[30px] lg:text-[30px] text2 font-bold'>Shop by</h3>
      <h2 className='text-[30px] md:text-[40px] lg:text-[40px] font-extrabold'>Categories</h2>
      <div className='flex flex-col md:flex-row overflow-hidden justify-center'>
          <CategoriesCard 
            img={fruitsImg}
            name="Fruits"
          />
          <CategoriesCard 
            img={fruitsImg}
            name="Vegetables"
          />
          <CategoriesCard 
            img={fruitsImg}
            name="Meat"
          />
          <CategoriesCard 
            img={fruitsImg}
            name="Spices"
          />
          <CategoriesCard 
            img={fruitsImg}
            name="Cosmetics"
          />
          <CategoriesCard 
            img={fruitsImg}
            name="others"
          />
      </div>
    </div>
  )
}

export default Catagories