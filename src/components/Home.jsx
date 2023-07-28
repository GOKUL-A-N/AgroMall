import React from 'react';
import bgHomeImg from "../assets/bgHomeImg.png"

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex h-screen w-[100%] flex-col justify-center pl-1 md:pl-10' style={{
        backgroundImage: `url(${bgHomeImg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
      }}>
        <h3 className=' text-[20px] md:text-[30px] lg:text-[40px] text2 font-bold'>Hey , Genius</h3>
        <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold'>It's time to replace chemicals <br className='sm:visible' /> with organic products</h1>
        <h3 className="text-[20px] md:text-[30px] lg:text-[40px] text3 font-bold">We are Farmers who sell</h3><br />
        <button className='button'>Shop now</button>
      </div>
    </div>
  )
}

export default Home