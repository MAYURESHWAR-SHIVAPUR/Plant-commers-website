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
        <nav className={Style.Nav_outer}>
            <h1 className={Style.logo}>POTFOREST CO.</h1>

            <div className={Style.Nav_Divs}>

                <div className={Style.navLinks}>
                    <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/"  >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/products"  >Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/contact"  >Contact Us</NavLink>
                </div>

                <div className={Style.actions}>
                    <NavLink to="/cart" className={Style.iconLink}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                    <NavLink to="/profile" className={Style.iconLink}>
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                    <span className={Style.separator}>|</span>

                    <button className={Style.hamburger} onClick={toggle} aria-label="Open menu">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>

            {showMenu && <Menu SetMenu={SetMenu} />}
        </nav>
    )
}

export default Nav_Bar