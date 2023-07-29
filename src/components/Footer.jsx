import React from 'react';
import logo from "../assets/logo.png";
import MyLogo from "../assets/MyLogo.png"

const Footer = () => {
  return (
    <div className=' mt-10  flex flex-col md:flex-row justify-around relative'>
        <div className='flex flex-row justify-around items-center'>
        <div className='flex flex-col  items-center'>
          <img src={logo} heigth="100px" width="100px" alt="" />
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>My cart</h3>
        </div>
        <div className='flex flex-col ml-5 justify-center  w-[40%]'>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px] font-bold'>Products</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Fruits</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Vegetables</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Meat</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Spices</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Hair and Skin <br /> products</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Others</h3>
        </div>
        
        </div>
        <div className=' '>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px] font-bold'>Policies</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Privacy Policy</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Refund Policy</h3>
          <h3 className='  text-[20px] md:text-[30px] lg:text-[30px]'>Terms adn conditions</h3>
          <div className='absolute bottom-2 right-2'>
            <img src={MyLogo} heigth="50px" width="50px" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer