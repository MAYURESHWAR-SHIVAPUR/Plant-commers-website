import React from 'react'
import Style from './Contact.module.css'
import Nav from '../../components/Nav_Bar/Nav_Bar'
import Button from '../../components/Buttons_2/Buttons'
import PPB from '../../components/Product_Page_Breaker/PPB'
import Contact_Img from '../../assets/images/Contact.png'
import Footer from '../../components/Footer/Footer'
import { MyContext } from "../../context/CreateContext"
import { Data } from '../../context/Data'
import Contact_Block from '../../components/Contacts/Contact'
const Contact = () => {
  const value = Data;
  return (
    <div className={Style.Contact_Outer}>
      <Nav />
      <div className={Style.Contact_Inner}>
        <Button value="Whatsapp" />
        <Button value="Email" />
        <Button value="Call Help Line" />
        <Button value="Message" />
      </div>
      <PPB heading="Contact Us Anytime" path={Contact_Img} desc="Get in touch with us for any queries or support." />
      <Contact_Block name="Whatsapp" />
      <Contact_Block name="Email" />
      <Contact_Block name="Message" />
      <MyContext value={{ value }}>
        <Footer />
      </MyContext>    </div>
  )
}

export default Contact