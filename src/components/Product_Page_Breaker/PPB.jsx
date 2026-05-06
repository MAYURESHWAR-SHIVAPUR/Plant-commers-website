import React from 'react'
import Style from "./PPB.module.css"
import Title from '../Title/Title'
import ContactIcon from "../../components/SvgImg/Image";

const PPB = ({ heading, path,  desc }) => {
    return (
        <div id='one' className={Style.PPB_Outer}>
            <div id='right' className={Style.PPB_first}>
                <h1>{heading}</h1>
            </div>
            <div id='left' className={Style.PPB_second}>
                <ContactIcon path={path}/>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PPB