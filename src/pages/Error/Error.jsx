import React from 'react'
import Style from "./Error.module.css"
// import Error_Img from "";

const Error = () => {
    return (
        <div className={Style.Error_outer}>
            <div className={Style.Error_First}>
                <h1>Your Device Size is not Compatable for the Website</h1>
                <p>Please try in destop</p>
            </div>
        </div>
    )
}

export default Error
