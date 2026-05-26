import React, { useEffect, useState } from 'react'
import Style from "./Nav_Bar.module.css"
import { NavLink } from "react-router-dom"
import Menu from '../Menu/Menu'
import { fadeIn } from '../../animations/Nav'
import { useSelector } from 'react-redux'


const Nav_Bar = () => {

    const { name } = useSelector((state) => state.user)

    const [showMenu, SetMenu] = useState(false);

    function toggle() {
        SetMenu(pre => !pre);
    }

    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <nav className={Style.Nav_outer} id='Nav'>
            <h1 id='h1' className={Style.logo} onClick={() => window.location.href = '/'}>
                POTFOREST CO.
            </h1>

            <div className={Style.Nav_Divs}>

                <div id='Nav' className={Style.navLinks}>
                    <NavLink id='one' className={({ isActive }) => isActive ? "Active" : "InActive"} to="/"  >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/products"  >Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "Active" : "InActive"} to="/contact"  >Contact Us</NavLink>
                </div>

                <div className={Style.actions}>
                    <NavLink id='cart' to="/cart" className={Style.iconLink}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                    <NavLink id='info' to="/profile/info" className={Style.iconLink}>
                        <i className="fa-solid fa-user mr-3"></i>
                        {name}
                    </NavLink>
                    <span id='line' className={Style.separator}>|</span>

                    <button id='bars' className={Style.hamburger} onClick={toggle} aria-label="Open menu">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>

            {showMenu && <Menu SetMenu={SetMenu} />}
        </nav>
    )
}

export default Nav_Bar