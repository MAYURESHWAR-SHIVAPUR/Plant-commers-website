import React from 'react'
import Style from "./Footer.module.css"
import Footer_1 from "../Footer_1/Footer"
import Footer_2 from "../Footer_2/Footer"

const Footer = () => {
  return (
    <div className={Style.Footer_outer}>
      <div className={Style.Foot_Upper}>
        <div className={Style.Foot_links}>
          <Footer_1  />
        </div>
        <div className={Style.Foot_Info}>
          <Footer_2 />
        </div>
      </div>
      <p>2023 all Right Reserved Term of use <b>POTFOREST CO.</b></p>
    </div>
  )
}

export default Footer
