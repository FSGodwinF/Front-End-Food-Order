import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import Menu from './Menu'
import CartItem from './CartItem';

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 md:h-20 text-orange-500 p-4 items-center flex justify-between border-b-2 border-b-orange-500 uppercase lg:px-20 xl:px-40'>
        {/*LEFT*/}
        <div className='hidden md:flex gap-4 flex-1'>
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>

        </div>
        <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">
        Let's Get This
        </Link>
        </div>
        <div className='md:hidden'>
            <Menu/>
        </div>
         {/*LEFT*/}
         <div>
         <div className='hidden md:flex gap-4 items-center flex-1'>
          <div className='md:absolute top-3 right-2 lg:static justify-end flex items-center gap-2 cursor-pointer bg-orange-200 px-2 rounded-md'>
            <Image src="/phone.png" alt='' height={20} width={20}/>
            <span>09039012080</span>
          </div>
          {!user? <Link href="/login">Login</Link>
          :(
          <Link href="/order">Orders</Link>)}
          <CartItem/>
        </div>
         </div>
    </div>
  )
}

export default Navbar