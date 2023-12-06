import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const FeaturedItems = () => {
  return (
    <div className='w-screen overflow-x-scroll text-orange-500'>
      {/*WRAPPER*/}
      <div className='w-max flex'>
        {/*SINGLE ITEM*/}
        {featuredProducts.map((item)=>(
        <div key={item.id} className="w-screen
         h-[60vh] 
         flex 
         flex-col 
         items-center 
         justify-around 
         p-4
        hover:bg-fuchsia-50
        transition-all
        duration-300
        md:w-[50vw]
        xl:w-[33vw]
        xl:h-[80vh]">
          {/*IMAGE CONTAINER*/}
          {item.img && (<div className='relative flex-1 w-full hover:rotate-[75deg] transition-all duration-300'>
            <Image 
            src={item.img} 
            alt='' 
            fill 
            className='object-contain'/>
          </div>)}
          {/*TEXT CONTAINER*/}
          <div className='flex-1 flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
            <p className='p-4 xl:p-8'>{item.desc}</p>
            <span className='text-xl font-bold'>£{item.price}</span>
            <button className='bg-orange-500 text-white p-2 rounded-md'>Add to Cart</button>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default FeaturedItems