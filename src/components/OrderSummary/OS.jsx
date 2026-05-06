import React from 'react'

const OS = () => {
    return (
        <div className='w-[90%] h-fit my-15 rounded-md bg-gray-200 p-4 shadow-[0_4px_20px_#808080a8]'>
            <div className='flex items-center justify-between w-full h-fit'>
                <h5 className='text-2xl ' >Order Summary</h5>
                <h5 className='bg-green-300 w-fit h-fit p-2 rounded-md'>Confirmed</h5>
            </div>
            <div className='w-full h-fit flex items-center justify-between my-5 '>
                <div>
                    <h5 className='text-gray-500 text-md'>Order ID</h5>
                    <h5 className='text-lg'>#ORD-2024-1247</h5>
                </div>
                <div>
                    <h5 className='text-gray-500 text-md'>Delivery Location</h5>
                    <h5 className='text-lg'>Gulberg III, Lahore</h5>
                </div>
                <div>
                    <h5 className='text-gray-500 text-md'>Payment Method</h5>
                    <h5 className='text-lg'>Cash on Delivery</h5>
                </div>
            </div>
            <hr />
            <div className='w-full h-fit flex items-center justify-between my-5 '>
                <button className='text-gray-500 text-md bg-blue-500 text-white px-4 py-2 rounded-md'>
                    <i class="fa-regular fa-bell mr-3"></i>
                    Notify Branch
                </button>
                <button className='text-gray-500 text-md bg-green-500 text-white px-4 py-2 rounded-md'>
                    <i class="fa-regular fa-calendar-days mr-3"></i>
                    Order Date</button>
                <button className='text-gray-500 text-md bg-red-500 text-white px-4 py-2 rounded-md'>
                    <i class="fa-solid fa-x mr-3"></i>
                    Cancel Order
                </button>
                <button className='text-gray-500 text-md bg-yellow-500 text-white px-4 py-2 rounded-md'>
                    <i class="fa-solid fa-info-circle mr-3"></i>
                    Status
                </button>
            </div>
        </div>
    )
}

export default OS