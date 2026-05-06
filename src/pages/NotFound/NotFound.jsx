import React, { useEffect } from 'react'
import Style from './NotFound.module.css'
import Buttons from "../../components/Buttons_2/Buttons"
import PNF from "../../assets/icons/PNF.png"
import Rive from "../../components/Rive_2/Rive"
import { usePNFanimation } from '../../animations/PageNotFound'

const NotFound = () => {
  const { heading } = usePNFanimation()
  useEffect(() => {
    heading();
  }, [])
  return (
    <div id='PNF' className={Style.notFoundContainer}>
      <h1 className={Style.title}>404 - Page Not Found</h1>

      <div className={Style.NFC_decorativeElement}>
        <Rive />
        <div className={Style.NFC_info}>
          <p className={Style.message}>Sorry, the page you are looking for does not exist.</p>
          <Buttons value="Go to Home" />
        </div>
      </div>
    </div>
  )
}

export default NotFound