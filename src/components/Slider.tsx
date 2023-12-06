"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id:1,
    title: "If it's not krispy, it's not Us.",
    image: "/slide1.png"
  },
  {
    id:2,
    title: "Let's get this food.",
    image: "/slide2.png"
  },
  {
    id:3,
    title: "Eating good in the neighborhood.",
    image: "/slide3.jpg"
  }
]

const Slider = () => {
  const[currentSlide, setCurrentSlide] = useState(0);
  // useEffect(()=>{
  //   const interval = setInterval(
  //     ()=> setCurrentSlide((prev)=> (prev === data.length - 1 ? 0: prev + 1)),
  //     2500
  //   );
  //   return () => clearInterval(interval)
  // }, []);
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col gap-8 items-center justify-center text-orange-500 font-bold '>
      <h1 className='text-3xl text-center uppercase p-4 md:text-5xl lg:text-5xl'>{data[currentSlide].title}</h1>
      <button className='bg-orange-500 text-white py-2 px-6 md:py-3 md:px-7'>Order Now</button>
      </div>
       {/* IMAGE CONTAINER */}
      <div className='w-full  relative flex-1'>
      <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider