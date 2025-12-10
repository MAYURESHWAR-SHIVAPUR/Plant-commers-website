import React from 'react'
import Style from "./Feedback.module.css"
import Cards from "../../components/Reveiw_Card/Reveiw"
import Rev_1 from "../../assets/images/Rev_1.png"
import Footer from "../../components/Footer/Footer"
import { MyContext } from "../../context/CreateContext"

const Feedback = () => {
  const value = [["Information", "About", "Product", "Blog"], ["Company", "Community", "Career", "Our Story"], ["Contact", "Getting Started", "Pricing", "Resources"]];

  return (
    <div className={Style.Feed_outer}>
      <h1>What customers say about</h1>
      <h1> GREEMIND?</h1>
      <div className={Style.Feed_reviwes}>
        <Cards imgsPath={Rev_1} />
        <Cards />
        <Cards />
      </div>
      <MyContext value={{value}}>
        <Footer />
      </MyContext>
    </div>
  )
}

export default Feedback
