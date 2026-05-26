import React from 'react'

const Submit = ({ val }) => {
    return (
        <button type='submit' className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-full hover:bg-black hover:text-white transition duration-300'>{val}</button>
    )
}

export default Submit
