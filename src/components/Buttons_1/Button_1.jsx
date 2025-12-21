import React from 'react'
import Style from "./Button.module.css"

const Button_1 = ({value}) => {
  return (
    <button className={Style.Button_1}>{value}</button>
  )
}

export default Button_1
