import React from 'react'
import Style from './NotFound.module.css'
import Buttons from "../../components/Buttons_2/Buttons"
import PNF from "../../assets/icons/PNF.png"

const NotFound = () => {
  return (
    <div className={Style.notFoundContainer}>
      <h1 className={Style.title}>404 - Page Not Found</h1>

      <div className={Style.NFC_decorativeElement}>
        <div className={Style.NFC_imageContainer}>
          <img src={PNF} alt="" />
        </div>
        <div className={Style.NFC_info}>
          <p className={Style.message}>Sorry, the page you are looking for does not exist.</p>
          <Buttons value="Go to Home" />
        </div>
      </div>
    </div>
  )
}

export default NotFound