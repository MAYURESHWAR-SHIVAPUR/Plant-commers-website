import React from 'react'
import Styles from './Cards.module.css'

const Cards = ({imgsPath, Headers, info}) => {
  return (
    <div className={Styles.CardsOuter}>
      <img src={imgsPath} alt="Plants Image" />
      <h2>{Headers}</h2>
      <p>{info}</p>
    </div>
  )
}

export default Cards
