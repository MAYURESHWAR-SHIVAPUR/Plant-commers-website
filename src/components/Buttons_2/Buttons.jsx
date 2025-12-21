import React from 'react'
import Style from "./Buttons.module.css"
import { useNavigation } from '../../context/Navigate_To_product'

const Buttons = ({ value }) => {
  const { goHome } = useNavigation();
  function nav() {
    if (value === "Go to Home") {
      goHome()
    }
    return;
  }
  return (
    <button onClick={nav} className={Style.Buttons_2}>{value}</button>
  )
}

export default Buttons
