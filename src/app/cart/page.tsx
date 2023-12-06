import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row  text-orange-500'>
      {/*PRODUCT CONTAINER */}
      <div className='flex-1 p-4 flex flex-col justify-center overflow-scroll  lg:p-20'>
        {/*SINGLE ITEM CONT */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temp/p1.png" alt='' width={50} height={50} className='md:w-20% md:h-20%'/>
          <div className='text-base xl:text-2xl'>
            <h1 className='uppercase font-bold '>SICILIAN</h1>
            <span className='text-sm'>Large</span>
          </div>
          <h2 className='font-bold text-sm' >£69.99</h2>
          <span className='cursor-pointer'>x</span>
        </div>
        {/*SINGLE ITEM CONT */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temp/p1.png" alt='' width={50} height={50} className='md:w-20% md:h-20%'/>
          <div className='text-base  xl:text-2xl'>
            <h1 className='uppercase font-bold '>SICILIAN</h1>
            <span className='text-sm'>Large</span>
          </div>
          <h2 className='font-bold text-sm' >£69.99</h2>
          <span className='cursor-pointer'>x</span>
        </div>
        {/*SINGLE ITEM CONT */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temp/p1.png" alt='' width={50} height={50} className='md:w-20% md:h-20%'/>
          <div className='text-base xl:text-2xl'>
            <h1 className='uppercase font-bold '>SICILIAN</h1>
            <span  className='text-sm'>Large</span>
          </div>
          <h2 className='font-bold text-sm' >£69.99</h2>
          <span className='cursor-pointer'>x</span>
        </div>
      </div>
      {/*PAYMENT CONTAINER */}
      <div className='flex-1 p-4 bg-fuchsia-100 flex flex-col gap-4 justify-center lg:p-20'>
        <div className='flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>£96.99</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Charge</span>
          <span>£0.99</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery</span>
          <span>£1.25</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span>Total (Incl. VAT)</span>
          <span>£99.23</span>
        </div>
        <button 
        className='self-end p-3 w-1/2 text-white bg-orange-500 rounded-md'>
          CHECKOUT
        </button>
      </div>
    </div>
  )
}

export default CartPage