import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='mt-6 flex items-center justify-center'>
            <div className='w-3/5  '>
                <img src="/image/loginLogo.png" className='w-full h-full my-auto' alt="" />
            </div>
            <div className='w-2/5 flex justify-center items-center'>
                <div className=''>

                    <h1 className='text-3xl font-medium mb-4 ' >Create an account</h1>
                    <span className=''>Enter your details below</span>
                    <form className='flex flex-col mt-10'  >
                        <input className='border-b-2 outline-none' type="text" placeholder='Name' />
                        <input className='border-b-2 outline-none mt-8' type="text" placeholder='Email or Phone Number' />
                        <input className='mt-8 border-b-2 outline-none' type="password" placeholder='Password' />
                        <div className='flex flex-col items-center justify-between mt-5'>
                        <button className='px-7 py-3 text-white w-full bg-red-500 rounded  ' >Create Account</button>
                        <span className='text-gray-500 mt-5' >Already have an account? <Link className='text-black underline' to="/login"> Log In</Link></span>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signup