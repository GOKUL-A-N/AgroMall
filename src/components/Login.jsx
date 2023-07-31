import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center w-full' style={{backgroundColor:"#02B106"}}>
        <div className='flex  sm:p-4  flex-col sm:flex-row'>
          <div className='flex card m-4 sm:p-10 flex-col justify-center items-center'>
            <form action="" className='flex-1 p-5   flex flex-col '>
              <label className='text-black font-extrabold mb-6 text-center'>Login</label>
              <input className='p-1 sm:p-3 border-2 mb-2  border-black' type="email" placeholder='Email Id' name='email' required />
              <input className='p-1 sm:p-3 border-2 mb-2 border-black' type="password" placeholder='Password' name='password' required />
              <button className='w-[92px] pl-4 pr-4 pt-2 pb-2 rounded text-white mb-2 place-self-center' style={{backgroundColor : "#FF5C00"}}>Sign In</button>
            </form>
          </div>
          <div className='flex card m-4 sm:p-10 flex-col justify-center items-center'>
            <form action="" className='flex-1 p-5   flex flex-col '>
              <label className='text-black font-extrabold mb-6 text-center'>Sign Up</label>
              <input className='p-1 sm:p-3 border-2 mb-2  border-black' type="text" placeholder='Full Name' required />
              <input className='p-1 sm:p-3 border-2 mb-2  border-black' type="email" placeholder='Email Id' name='email' required />
              <input className='p-1 sm:p-3 border-2 mb-2 border-black' type="password" placeholder='Password' name='password' required />
              <button className='w-[95px] pl-4 pr-4 pt-2 pb-2 rounded mb-2 text-white place-self-center' style={{backgroundColor : "#FF5C00"}}>Sign Up</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login