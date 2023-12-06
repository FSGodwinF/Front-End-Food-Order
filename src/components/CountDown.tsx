"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endDate  = new Date("2024-02-25")
const CountDown = () => {
  return (
    <Countdown className='font-bold text-3xl text-orange-600 mt-4' date={endDate}/>
  )
}

export default CountDown