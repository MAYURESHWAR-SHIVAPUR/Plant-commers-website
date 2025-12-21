import Style from "./Home.module.css"
import Nav_Bar from '../../components/Nav_Bar/Nav_Bar'
import hearo from "../../assets/images/hearo.png"
import Input from '../../components/Inputs/input'
import Button from '../../components/Buttons/Buttons'
import Cards from '../../components/Cards1/Cards'
import plant_1 from "../../assets/images/P2.png"
import plant_2 from "../../assets/images/P3.png"
import plant_3 from "../../assets/images/P4.png"

const Home = () => {

  return (
    <div className={Style.homeContainer}>
      <Nav_Bar/>
      < div className={Style.homeContent} >
        <div className={Style.homeFirst}>
          <h1>Buy Your Dream Plants</h1>
          <div>
            <action>
              <h3>50+</h3>
              <p>Plant Species</p>
            </action>
            <action>
              <h3>|</h3>
            </action>
            <action>
              <h3>20k+</h3>
              <p>Happy Customers</p>
            </action>
          </div>
          <Input is_Home={true} />
        </div>
        <div className={Style.homeSecond}>
          <img src={hearo} alt="This is main Image for attraction" />
        </div>
      </div>

      <div className={Style.homeFooter}>
        <div className={Style.Hom_cards}>
          <h3>Best Selling Plants</h3>
          <h5>Easiest way to healthy life by buying your favorite plants </h5>
          <Button is_Home={true}  color="#C1DCDC" value={"See More ->"} />
        </div>
        <Cards imgsPath={plant_1} name={"Natural Plants"} info={"₱ 1,400.00"} />
        <Cards imgsPath={plant_2} name={"Garden"} info={"₱ 2,400.00"} />
        <Cards imgsPath={plant_3} name={"Indoor Plants"} info={"₱ 10,000.00"} />
      </div>
    </div>
  )
}

export default Home