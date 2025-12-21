import React from 'react'
import Style from "./Categories.module.css"
import Text from "../../components/Text1/Text"
import Cards from '../../components/Cards3/Cards'
import P1 from "../../assets/images/P3.png"
import P2 from "../../assets/images/P4.png"
import P3 from "../../assets/images/P5.png"
import Buttons from '../../components/Buttons/Buttons'

const Categories = () => {
  return (
    <div className={Style.Ca_Outer}>
      <Text headers="Categories" info="Find what you are looking for" />
      <div className={Style.Ca_first}>
        <Cards imgPath={P1} info="Natural Plants" />
        <Cards imgPath={P2} info="Plant Accessories" />
        <Cards imgPath={P3} info="Artificial Plants" />
      </div>
      <action>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Buttons  is_Home={true} color="white" value="Explore ->" />
      </action>
    </div>
  )
}

export default Categories
