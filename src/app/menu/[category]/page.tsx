import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-orange-500'>
      {pizzas.map(item=>(
        <Link key={item.id} href={`/product/${item.id}`} className='w-full h-[60vh] border-r-2 border-b-2 p-4 border-orange-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group'>
          {/*IMAGE CONTAINER*/}
          {item.img && 
          <div className='relative h-[80%]'>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>}
          {/*TEXT CONTAINER*/}
          <div className='flex items-center justify-between'>
            <h1 className='uppercase font-bold p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden font-semibold'>£{item.price}</h2>
            <button className='hidden group-hover:block uppercase text-base bg-orange-500 text-white p-2 rounded-md'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage