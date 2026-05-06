import React from 'react'

const Info = () => {
    return (
        <div className='w-full h-screen'>
            <h1 className='text-5xl font-bold mt-10 text-center'>Profile Information</h1>
            <p className='text-red-500 mt-15 text-center'>Error</p>
            <form action="" className=' pl-[30%] h-full w-full focus:outline-none'>
                <label htmlFor="name" className='block ml-5 text-lg transform translate-y-3 '>Full Name</label>
                <input type="text" id="name" className='block w-2/3 h-15 rounded-md pl-5 mb-5 bg-[#D9D9D9]' />
                <label htmlFor="email" className='block ml-5 text-lg transform translate-y-3 '>Email</label>
                <input type="email" disabled={true} id="email" className='block w-2/3 h-15 rounded-md pl-5 mb-5 bg-[#D9D9D9]' />
                <label htmlFor="password" className='block ml-5 text-lg transform translate-y-3 '>Password</label>
                <input type="password" id="password" className='block  w-2/3 h-15 rounded-md pl-5  mb-5 bg-[#D9D9D9]' />
                <label htmlFor="confirmPassword" className='block ml-5 text-lg transform translate-y-3 '>Confirm Password</label>
                <input type="password" id="confirmPassword" className='block  w-2/3 h-15 rounded-md pl-5  mb-5 bg-[#D9D9D9]' />

                <button type='submit' className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-2/3 hover:bg-black hover:text-white transition duration-300'>Save Changes</button>
            </form>
        </div>
    )
}

export default Info
