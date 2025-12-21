import React, { useState } from 'react'
import Style from "./Nav_Bar.module.css"
import { NavLink } from "react-router-dom"
import Menu from '../Menu/Menu'

const Nav_Bar = () => {

    const [showMenu, SetMenu] = useState(false);

    function toggle() {
        SetMenu(pre => !pre);
    }

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
                    <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <NavLink to="/profile">
                    <i className="fa-solid fa-user"></i>
                </NavLink>
                <h1>|</h1>
                <NavLink onClick={toggle}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </NavLink>
            </div>
            {showMenu && <Menu SetMenu={SetMenu} />}
        </div>
    )
}

export default Nav_Bar