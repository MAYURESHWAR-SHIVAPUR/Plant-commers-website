import React, { memo } from 'react'
import Plant from '../Rive_plant/Plant'

const Left = ({ value, link }) => {
    return (
        <div className='h-full w-1/3 pl-8 bg-[#C1DCDC]'>
            <h1 className='text-4xl font-bold  jaro mt-10'>GREENMIND</h1>
            <h3 className='text-lg  mt-4'>{value} in to continue your plant journey 🌿</h3>
            <Plant />
            <h3 className='text-lg  mt-[80%] z-10 relative'>Don't have an account? <a href={link} className='text-blue-500  hover:underline font-bold text-xl'>{value}</a></h3>
            <ul className="list-disc pl-5 z-10 relative rounded-md w-2/3 mt-5">
                <li className='text-lg ml-4 mt-2'>trusted by 5,000+ plant lovers</li>
                <li className='text-lg ml-4'>quality plants, delivered with care</li>
            </ul>
        </div>
    )
}

export default memo(Left)
