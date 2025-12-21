import React from 'react'
import Style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={Style.Foot_1_Outer}>
            <h3>POTFOREST CO.</h3>
            <p>We help you find your dream plant</p>
            <div className={Style.Footer_1_links}>
                <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
