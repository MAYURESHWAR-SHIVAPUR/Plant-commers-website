import React from 'react'
import Style from "./Cards.module.css"

const Cards = ({imgsPath, name, info}) => {
  return (
    <div className={Style.cardContainer}>
      <img src={imgsPath} alt="Plants" />
      <h3>{name}</h3>
      <h5>{info}</h5>
    </div>
  )
}

export default Cards
