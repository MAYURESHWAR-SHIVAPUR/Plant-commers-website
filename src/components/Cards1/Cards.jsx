import React from 'react'
import Style from "./Cards.module.css"
import PropTypes from "prop-types"

const Cards = ({imgsPath, name, info}) => {
  return (
    <div className={Style.cardContainer}>
      <img src={imgsPath} alt="Plants" />
      <h3>{name}</h3>
      <h5>{info}</h5>
    </div>
  )
}

Cards.protoType = {
  imgsPath : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  info : PropTypes.string.isRequired,
}

export default Cards
