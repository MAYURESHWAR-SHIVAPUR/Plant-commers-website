import React, { useEffect } from 'react'
import Style from './Contact.module.css'
import Nav from '../../components/Nav_Bar/Nav_Bar'
import Button from '../../components/Buttons_2/Buttons'
import PPB from '../../components/Product_Page_Breaker/PPB'
import Footer from '../../components/Footer/Footer'
import { MyContext } from "../../context/CreateContext"
import { Data } from '../../context/Data'
import Contact_Block from '../../components/Contacts/Contact'
import { useContactAnimation } from '../../animations/Contact'
import path from '../../assets/images/Contact.svg'

const Contact = () => {

  const { Buttons } = useContactAnimation();

  useEffect(() => {
    Buttons();
  }, [])

  const value = Data;
  return (
    <div id='Contact' className={Style.Contact_Outer}>
      <Nav />
      <div id='Buttons' className={Style.Contact_Inner}>
        <Button value="Whatsapp" />
        <Button value="Email" />
        <Button value="Call Help Line" />
        <Button value="Message" />
      </div>
      <PPB heading="Contact Us Anytime" path={path} desc="Get in touch with us for any queries or support." />
      <Contact_Block name="Whatsapp" />
      <Contact_Block name="Email" />
      <Contact_Block name="Message" />
      <MyContext value={{ value }}>
        <Footer />
      </MyContext>
    </div>
  )
}

export default Contact