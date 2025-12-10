import React from 'react'
import Style from "../Cards4/Cards.module.css"

const Cards = ({value}) => {
  return (
    <div className={Style.Cards4_outer}>
      <h3>{value[0]}</h3>
      <h6>{value[1]}</h6>
      <h6>{value[2]}</h6>
      <h6>{value[3]}</h6>
    </div>
  )
}
export default Cards