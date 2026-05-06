import React from 'react'
import Style from "./Input.module.css"
import { useNavigation } from '../../context/Navigate_To_product'

const Input = ({ is_Home }) => {
    const { goProduct } = useNavigation();
    const nav = () => {
        if (is_Home) {
            goProduct()
        }
        return
    }
    
    return (
        <div id='input' className={Style.Input_outer}>
            <input type="text" className={Style.Com_Input_1} placeholder='Search for Plants' />
            <button id='search' onClick={nav} className={Style.Com_Button_2}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default Input
