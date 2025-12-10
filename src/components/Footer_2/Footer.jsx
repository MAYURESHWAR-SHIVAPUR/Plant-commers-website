import React from 'react'
import Style from "./Footer.module.css"
import Card from "../Cards4/Cards"
import { useContext } from "react";
import { MyContext } from "../../context/CreateContext.js";


const Footer = () => {
  const { value } = useContext(MyContext)
  return (
    <div className={Style.Footer_2_outer}>
      {value?.map((item, index) => (
        <Card key={index} value={item} />
      ))}
    </div>
  )
}

export default Footer