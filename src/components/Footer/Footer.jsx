import React, { useEffect } from 'react'
import Style from "./Footer.module.css"
import Footer_1 from "../Footer_1/Footer"
import Footer_2 from "../Footer_2/Footer"
import { useFeedbackAnimation } from '../../animations/Feedback'
import { memo } from 'react'

const Footer = () => {
  const { footer } = useFeedbackAnimation();

  useEffect(() => {
    footer();
  }, [])
  return (
    <div id='footer' className={Style.Footer_outer}>
      <div className={Style.Foot_Upper}>
        <div id='one' className={Style.Foot_links}>
          <Footer_1 />
        </div>
        <div id='two' className={Style.Foot_Info}>
          <Footer_2 />
        </div>
      </div>
      <p>2023 all Right Reserved Term of use <b>POTFOREST CO.</b></p>
    </div>
  )
}

export default memo(Footer)
