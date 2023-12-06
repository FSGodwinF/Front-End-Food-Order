import React from 'react'

const OrderPage = () => {
  return (
    <div className='h-screen p-4 lg:p-20 xl:p-40 '>
      <table className='w-full border-separate border-spacing-2'>
        <thead className='text-left'>
          <tr className='text-sm md:text-base'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='odd:bg-gray-100 text-sm md:text-base'>
          <td className='hidden md:block py-6 px-1'>1234567890</td>
          <td className='py-6 px-1'>23-11-2023</td>
          <td className='py-6 px-1'>£45.23</td>
          <td className='hidden md:block py-6 px-1'>PRIME Strawberry (2), Vodka Pizza, Fries</td>
          <td className='py-6 px-1'>Delivered</td>
          </tr>
          <tr className='odd:bg-gray-100 text-sm md:text-base'>
          <td className='hidden md:block py-6 px-1'>1234567890</td>
          <td className='py-6 px-1'>23-11-2023</td>
          <td className='py-6 px-1'>£45.23</td>
          <td className='hidden md:block py-6 px-1'>PRIME Strawberry (2), Vodka Pizza, Fries</td>
          <td className='py-6 px-1'>Delivered</td>
          </tr>
        </tbody>
        
          

      </table>
    </div>
  )
}

export default OrderPage