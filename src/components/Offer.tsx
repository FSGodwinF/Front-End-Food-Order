import Image from 'next/image'
import React from 'react'
import CountDown from './Countdown'


const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:h-[70vh]'>
      {/*TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center text-center'>
        <h1 className='text-white font-bold text-3xl xl:text-4xl gap-6 p-6'>10/10 Burgers & Fries</h1>
        <p className='text-white xl:text-xl'>This is better than Five Guys and Shake Shack put together.</p>
        <CountDown/>
        <button className='bg-orange-500 text-white p-2 rounded-md mt-4'>Order Now</button>
      </div>
      {/*IMAGE CONTAINER */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer