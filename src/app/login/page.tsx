import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 flex items-center justify-center'>
      {/*BOX*/}
      <div className='h-full shadow-xl rounded-md flex flex-col md:flex-row md:w-full md:h-[70%] lg:w-[60%]'>
        <div className='relative h-1/3 w-full md:h-full md:w-1/2 '>
        <Image src="/loginBg.png" alt='' fill className='object-cover'/>
        </div>
        {/*FORM */}
        <div className='p-10 flex flex-col gap-6 md:w-1/2'>
        <h1 className='font-bold text-lg'>Welcome</h1>
        <p>Login to your account or create a new account!</p>
        <button className='flex gap-4 p-4 md:p-2 ring-1 ring-orange-100 rounded-md'>
          <Image src="/google.png" alt='' width={20} height={20} className='object-contain'/>
          <span>Sign in with Google</span>
        </button>
        <button className='flex gap-4 p-4 md:p-2 ring-1 ring-blue-100 rounded-md'>
          <Image src="/facebook.png" alt='' width={20} height={20} className='object-contain'/>
          <span>Sign in with Facebook</span>
        </button>
        <p className='text-sm md:text-xs'>Have a problem? 
          <Link href="/" className='underline'>Contact us</Link>
        </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage