import React, { useEffect } from 'react'
import Style from "./Feedback.module.css"
import Cards from "../../components/Review_Card/Review"
import Rev_1 from "../../assets/images/Rev_1.png"
import Rev_2 from "../../assets/images/Rev_2.png"
import Footer from "../../components/Footer/Footer"
import { MyContext } from "../../context/CreateContext"
import { Data } from '../../context/Data'
import { useFeedbackAnimation } from '../../animations/Feedback'

const Feedback = () => {
  const { text } = useFeedbackAnimation();

  useEffect(() => {
    text();
  }, [])
  const value = Data;

  return (
    <div id='Feedback' className={Style.Feed_outer}>
      <h1>What customers say about</h1>
      <h1> GREEMIND?</h1>
      <div id='cards' className={Style.Feed_reviwes}>
        <Cards name="Joe Douch" imgsPath={Rev_1} />
        <Cards name="Alexia Richard" imgsPath={Rev_2} />
        <Cards name="Joe Douch" imgsPath={Rev_1} />
      </div>
      <MyContext value={{ value }}>
        <Footer />
      </MyContext>
    </div>
  )
}

export default Feedback
