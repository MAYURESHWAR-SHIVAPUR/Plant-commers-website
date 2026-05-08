import React from 'react'
import "./Search.css"

const Search = () => {
    return (
        <div className="input-container lg:h-10 lg:w-80% w-[90%] h-15 ">
            <input type="text" placeholder="Add Item" className='h-full lg:text-sm text-xl pl-2'></input>
                <button className="button h-full lg:text-sm text-xl ">Apply</button>
        </div>

    )
}

export default Search
