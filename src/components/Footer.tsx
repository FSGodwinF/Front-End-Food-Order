import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-20 text-orange-500 p-4 lg:px-20 xl:px-40 flex items-center justify-between'>
      <Link href="/" className='font-bold text-sm md:text-xl'>LET'S GET THIS</Link>
      <p className='text-sm md:text-xl'>©FGN ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer