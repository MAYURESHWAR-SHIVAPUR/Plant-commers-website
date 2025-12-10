import React from 'react'
import Style from "./Nav_Bar.module.css"
import { NavLink } from "react-router-dom"

const Nav_Bar = () => {
    return (
        <div className={Style.Nav_outer}>
            <h1>POTFOREST CO.</h1>
            <div>
                <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/"  >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/products"  >Products</NavLink>
                <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/contact"  >Contact Us</NavLink>
            </div>
            <div>
                
            </div>
            <div>
                <NavLink to="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <NavLink to="/profile">
                    <i class="fa-solid fa-user"></i>
                </NavLink>
                <h1>|</h1>
                <NavLink to="/menu">
                    <i class="fa-solid fa-bars-staggered"></i>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav_Bar