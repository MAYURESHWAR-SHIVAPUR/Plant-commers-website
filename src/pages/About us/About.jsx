import React from 'react'
import Styles from './About.module.css'
import Cards from '../../components/Cards2/Cards'
import A1 from "../../assets/images/A1.png"
import A2 from '../../assets/images/A2.png'
import A3 from '../../assets/images/A3.png'
import Text from '../../components/Text1/Text'
const About = () => {
  return (
    <div className={Styles.AboutOuter}>
      <Text headers="About Us" info="Order now and appreciate the beauty of nature" />
      <div className={Styles.AboutSecond}>
        <Cards imgsPath={A1} Headers="Large Assortment" info="we offer many different types of products with fewer variations in each category." />
        <Cards imgsPath={A2} Headers="Fast & Free Shipping" info="4-day or less delivery time, free shipping and an expedited delivery option." />
        <Cards imgsPath={A3} Headers="24/7 Support" info="answers to any business related inquiry 24/7 and in real-time." />
      </div>
    </div>
  )
}

export default About
