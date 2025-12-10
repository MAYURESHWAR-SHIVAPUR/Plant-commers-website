import React from 'react'
import Style from "./Input.module.css"

const input = () => {
    return (
        <>
            <input type="text" className={Style.Com_Input_1} placeholder='Search for Plants' />
            <button className={Style.Com_Button_2}>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </>
    )
}

export default input
