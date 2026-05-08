import React, { useState } from 'react'
import Plus from '../../Imported/Plus/Plus'

const Items = ({ Name, Type, Price }) => {
    const [Quantity, setQuantity] = useState(1)

    return (
        <article className='bg-[#d3d3d3] h-[15vh] w-full rounded-md  p-4 flex items-center justify-between overflow-hidden'>
            <figure className='h-full aspect-1/1 bg-black rounded-md '>
                <img src="" alt="" />
            </figure>
            <text className='text-black w-1/4 '>
                <h3>
                    {Name}
                </h3>
                <h5 className='text-gray-500 text-xs'>
                    {Type}
                </h5>
                <p className='text-red-500'>
                    Remove
                </p>
            </text>
            <article className='flex items-center justify-center gap-5'>
                <Plus val={"+"} setQuantity={Quantity < 20 && setQuantity} />
                <p className='font-bold text-xl'>{Quantity}</p>
                <Plus val={"-"} setQuantity={Quantity > 0 && setQuantity} />
            </article>
            <p>₹ {Price} x {Quantity}</p>
            <p>₹ {Price * Quantity}</p>
        </article>
    )
}

export default Items
