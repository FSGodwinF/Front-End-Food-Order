import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:items-center gap-8 text-orange-500'>
      {/*IMAGE CONTAINER */}
      {singleProduct.img && (
      <div className='relative w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt='' fill className='object-contain'/>

      </div>)}
      {/*TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 xl:gap-8'>
        <h1 className='font-bold text-lg uppercase md:text-2xl xl:text-3xl '>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id}
        options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default SingleProductPage