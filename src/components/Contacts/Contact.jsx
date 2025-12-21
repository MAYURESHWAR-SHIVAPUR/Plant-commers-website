import React from 'react'
import Style from './Contact.module.css'
import Buttons from '../Buttons_2/Buttons'
import Sumit from "../Buttons_3/Buttons"

const Contact = ({ name }) => {
    return (
        <div className={Style.Contact_Outer}>
            <Buttons value={name} />
            <textarea placeholder='Enter Your message Here' name="" id=""></textarea>
            <Sumit value="Submit" />
        </div>
    )
}

export default Contact
