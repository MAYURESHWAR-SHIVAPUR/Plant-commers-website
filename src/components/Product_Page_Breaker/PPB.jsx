import React from 'react'
import Style from "./PPB.module.css"

const PPB = ({ heading, path, desc }) => {
    return (
        <div className={Style.PPB_Outer}>
            <div className={Style.PPB_first}>
                <h1>{heading}</h1>
            </div>
            <div className={Style.PPB_second}>
                <img src={path} alt="Here is hero image" />
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PPB