import React from 'react'
import Nav from '../../components/Left-Nav/Nav'
import {  Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex items-center justify-center'>
            <Nav />
            <div className='h-screen overflow-hidden w-2/3'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile
