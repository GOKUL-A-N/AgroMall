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
       
        
        </div>
        <div className='flex flex-col ml-5 justify-center  '>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px] font-bold'>Products</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Fruits</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Vegetables</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Meat</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Spices</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Hair and Skin <br /> products</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Others</h3>
          <br />
        </div>
        <div className=' ml-5 '>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px] font-bold'>Policies</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Privacy Policy</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Refund Policy</h3>
          <h3 className='  text-[20px] md:text-[20px] lg:text-[20px]'>Terms adn conditions</h3>
          <div className='absolute bottom-2 right-2'>
            <img src={MyLogo} heigth="50px" width="50px" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer