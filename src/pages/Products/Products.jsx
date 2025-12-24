import React from 'react'
import Navbar from "../../components/Nav_Bar/Nav_Bar"
import Style from "./Product.module.css"
import { Data } from '../../context/Data.js'
import Input from "../../components/Inputs/input.jsx"
import { useEffect, useState } from "react";
import Product_Block from "../../components/Product_Block/Product_Block.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { MyContext } from "../../context/CreateContext"
import Loading from '../Loading/Loading.jsx';
import PPB from '../../components/Product_Page_Breaker/PPB.jsx'
import GlassPot_1 from "../../assets/icons/GlassPot_1.png"
import GlassPot_2 from "../../assets/icons/GlassPot_2.png"
import GlassPot_3 from "../../assets/icons/GlassPot_3.png"

const Products = () => {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      let allPlants = [];

      for (let page = 1; page <= 4; page++) {
        const res = await fetch(
          `https://perenual.com/api/species-list?key=sk-wKzT6943b18c767ac14011&page=${page}`
        );
        const data = await res.json();
        allPlants.push(data.data)
      }
      setPlants(allPlants);
    };
    fetchPlants();
  }, []);

  return (
    <div className={Style.Pro_Outer}>
      <div className={Style.Pro_Header}>
        <Navbar />
        <br />
        <Input />
      </div>
      <div className={Style.Pro_content}>
        {plants.length === 0 ? (
          <Loading />
        ) : (
          <>
            <Product_Block button_text="Trending Garden Plants" arr={plants[0]} />
            <PPB heading="Plants Heal Soul" path={GlassPot_1} desc="Glasspot by Andrew and Son's" />
            <Product_Block button_text="Popular Plants" arr={plants[1]} />
            <PPB heading="Plants Heal Soul" path={GlassPot_2} desc="Glasspot by Andrew and Son's" />
            <Product_Block button_text="Garden/outdoor Plants" arr={plants[2]} />
            <PPB heading="Plants Heal Soul" path={GlassPot_3} desc="Glasspot by Andrew and Son's" />
            <Product_Block button_text="Unique Plants for You" arr={plants[3]} />
          </>
        )}
      </div>
      <MyContext value={{ Data }}>
        <Footer />
      </MyContext>
    </div>

  )
}

export default Products
