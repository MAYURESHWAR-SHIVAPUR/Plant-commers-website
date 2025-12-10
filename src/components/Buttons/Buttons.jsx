import React from 'react'
import "./Buttons.module.css"
import Style from "./Buttons.module.css"

const Buttons = ({ value, color }) => {
    return (
        <>
            <button style={{backgroundColor : {color}}} className={Style.Buttons_1}>{value}</button>
        </>
    )
}

export default Buttons
