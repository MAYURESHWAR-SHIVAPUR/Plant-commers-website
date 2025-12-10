import React from 'react'
import Style from "./Cards.module.css"

const Cards = ({imgPath, info}) => {
  return (
    <div className={Style.C3_outer}>
      <img src={imgPath} alt="plants" />
      <h3>{info}</h3>
    </div>
  )
}

export default Cards
