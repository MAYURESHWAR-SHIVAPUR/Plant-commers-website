import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <div className='h-full w-1/3 pl-8 bg-[#C1DCDC]'>
            <h1 className='text-4xl font-bold  jaro mt-10'>POTFOREST CO.</h1>
            <h3 className='text-lg  mt-4'>Buy your dream plants 🌿</h3>
            <div className='w-full ml-[20%] mt-25'>
                <NavLink className={({ isActive }) => isActive ? "text-5xl block text-black mb-5" : "text-5xl block text-gray-600 mb-5"} to="/profile/info"  >
                    <i class="fa-solid fa-user w-20 text-3xl"></i>
                    Profile
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-5xl block text-black mb-5" : "text-5xl block text-gray-600 mb-5"} to="/profile/orders"  >
                    <i class="fa-solid fa-shopping-cart w-20 text-3xl"></i>
                    Orders
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-5xl block text-black mb-5" : "text-5xl block text-gray-600 mb-5"} to="/profile/addresses"  >
                    <i class="fa-solid fa-map-marker-alt w-20 text-3xl"></i>
                    Address
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-5xl block text-black mb-5" : "text-5xl block text-gray-600 mb-5"} to="/profile/settings"  >
                    <i class="fa-solid fa-gear w-20 text-3xl"></i>
                    Settings
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-5xl block text-black mb-5" : "text-5xl block text-gray-600 mb-5"} to="/"  >
                    <i class="fa-solid fa-house-chimney w-20 text-3xl"></i>
                    Home
                </NavLink>
            </div>

        </div>
    )
}

export default Nav
