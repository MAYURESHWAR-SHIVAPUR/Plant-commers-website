import React from 'react'
import Style from './Menu.module.css'

const Menu = ({SetMenu}) => {
    function toggle(){
        SetMenu(prev => !prev)
    }
  return (
    <div className={Style.menu_OuterContainer}>
      <h1 onClick={toggle}>X</h1>
      <a href="/products">Product</a>
      <a href="">Community</a>
      <a href="">Our Story</a>
      <a href="">About Us</a>
      <a href="">Hire Now</a>
      <a style={{color:"#ff0000"}} href="">Logout</a>
    </div>
  )
}

export default Menu
