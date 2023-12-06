"use client"
import React, {useEffect, useState} from 'react'
type Props = {
    price: number,
    id: number,
    options? : {title: string; additionalPrice: number}
}

const Price = ({price, id, options}: Props) => {
    const [total, SetTotal]  = useState(price);
    const [quantity, SetQuantity]  = useState(1);
    const [selected, SetSelected]  = useState(0);

    useEffect(()=>{
        SetTotal(
            quantity * (options? price + options[selected].additionalPrice: price)
        )
    },[quantity, selected, price, options]);
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='font-bold'>
        £{total.toFixed(2)}
        </h2>
        {/*OPTIONS CONTAINER */}
        <div className='flex gap-4 '>
        {options?.map((option, index)=>(
            <button 
            className='p-2 rounded-md min-w-[5rem] ring-1 ring-orange-500' key={option.title}
            style={{
                background:selected === index ? "rgb(250 109 0)" : "white",
                color:selected === index? "white": "rgb(250 109 0)",
            }}
            onClick={()=>SetSelected(index)}>{option.title}</button>
        ))}
        </div>
        {/*QUANTITY CONTAINER */}
        <div className='flex justify-between items-center'>
            {/*QUANTITY */}
            <div className=' flex justify-between w-full ring-1 ring-orange-500 p-2'>
            <span>Quantity</span>
            <div className='flex gap-4 items-center'>
                <button onClick={()=>SetQuantity(prev=>prev>1? prev-1: 1)}>{`<`}</button>
                <span>{quantity}</span>
                <button onClick={()=>SetQuantity(prev=>prev<15? prev+1: 15)}>{`>`}</button>
            </div>
            </div>
            {/*CART BUTTON */}
            <button className='text-white w-56 bg-orange-500 p-2 ring-1 ring-orange-500 '>Add to Cart</button>
        </div>

    </div>
  )
}

export default Price