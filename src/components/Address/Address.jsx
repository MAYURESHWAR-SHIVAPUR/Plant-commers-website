import React from 'react'

const Address = () => {
    return (
        <div className='w-full h-fit overflow-hidden '>

            <form action="" className=' pl-[30%] h-full  w-3/4 focus:outline-none mt-5 '>
                <label htmlFor="name" className='block ml-5 text-lg transform translate-y-3 '>Full Name</label>
                <input type="text" id="name" className='block w-full h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9]' />
                <label htmlFor="phone" className='block ml-5 text-lg transform translate-y-3 '>phone number</label>
                <input type="tel" id="phone" className='block w-full h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9]' />
                <label htmlFor="password" className='block ml-5 text-lg transform translate-y-3 '>address line(house / street)</label>
                <textarea type="password" id="password" className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]' />
                <label htmlFor="City" className='block ml-5 text-lg transform translate-y-3 '>City</label>
                <input type="password" id="City" className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]' />
                <label htmlFor="State" className='block ml-5 text-lg transform translate-y-3 '>State</label>
                <input type="password" id="State" className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]' />
                <label htmlFor="Pincode" className='block ml-5 text-lg transform translate-y-3 '>Pincode</label>
                <input type="password" id="Pincode" className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]' />

                <button type='submit' className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-full hover:bg-black hover:text-white transition duration-300'>Register</button>
            </form>
        </div>
    )

//     full name
// phone number
// address line(house / street)
//     city
//     state
//     pincode
}

export default Address
