import React from 'react'
import females from "../../assets/females.png"
import headphone from "../../assets/headphone.png"
import selleractive from "../../assets/selleractive.png"

const About = () => {
  return (
    <div className='w-[90%] mx-auto' >
      <div className='py-20 flex items-center justify-between'>
        <div className=' w-1/2 mx-auto pr-20  '>
          <h1 className='font-semibold text-4xl mb-4'>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa facilis, sit incidunt magnam sapiente consequatur corrupti praesentium tempora delectus voluptatem vero, libero labore blanditiis. Nulla reprehenderit sit earum eaque
          </p>
          <p className='mt-3'>
            laudantium ad quos possimus ipsam repellat nobis beatae facilis rem, corporis ullam quis quasi aliquam placeat voluptatem adipisci facere autem.
          </p>
        </div>
        <div className=' w-1/2'>
          <img src={females} alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center gap-5 mt-28' >
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={selleractive} alt="" />
          <span className='font-semibold text-4xl' >10.5K</span>
          <span>Seller active our site</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={selleractive} alt="" />
          <span className='font-semibold text-4xl' >10.5K</span>
          <span>Seller active our site</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={selleractive} alt="" />
          <span className='font-semibold text-4xl' >10.5K</span>
          <span>Seller active our site</span>
        </div>
        <div className='w-1/4 flex flex-col hover:bg-red-500 hover:shadow-3xl rounded-lg hover:text-white justify-center items-center gap-5 py-10  border-2 '>
          <img src={selleractive} alt="" />
          <span className='font-semibold text-4xl' >10.5K</span>
          <span>Seller active our site</span>
        </div>
      </div>
     
      <div className='flex mt-28 justify-between py-4 px-8 mb-28'>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={headphone} alt="" />
          <h1 className='uppercase font-semibold mt-6' >Free and Fast delivery </h1>
          <span className='mt-2' >Free delivery for all orders over $140</span>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={headphone} alt="" />
          <h1 className='uppercase font-semibold mt-6' >24/7 CUSTOMER SERVICE </h1>
          <span className='mt-2' >Friendly 24/7 customer support</span>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-around'>
          <img src={headphone} alt="" />
          <h1 className='uppercase font-semibold mt-6' >MONEY BACK GUARANTEE </h1>
          <span className='mt-2' >We reurn money within 30 days</span>
        </div>

      </div>
    </div>
  )
}

export default About