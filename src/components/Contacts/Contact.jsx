import React from 'react'
import Style from './Contact.module.css'
import Buttons from '../Buttons_2/Buttons'
import Submit from "../Buttons_3/Buttons"

const Contact = ({ name }) => {
    return (
        <div id='block' className={Style.Contact_Outer}>
            <Buttons value={name} />
            <textarea placeholder='Enter Your message Here' name="" id=""></textarea>
            <Submit value="Submit" />
        </div>
    )
}

export default Contact
