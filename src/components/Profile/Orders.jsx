import React from 'react'
import OS from '../OrderSummary/OS'

const Orders = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='text-5xl font-bold mt-10 text-center mb-15'>Your Orders</h1>
      <div className='w-full h-[80%] overflow-scroll pl-5 '>
        <h3 className='text-2xl font-bold mb-2'>Order Details</h3>
        <h5>Manage and track order information</h5>
        <OS />
        <OS />
        <OS />
        <OS />
        <OS />
      </div>

    </div>
  )
}

export default Orders
