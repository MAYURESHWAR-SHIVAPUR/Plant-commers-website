import React from 'react'
import Style from "./Buttons.module.css"
import PropTypes from "prop-types"
import { useNavigation } from '../../context/Navigate_To_product'

const Buttons = ({is_Home, value, color }) => {
    const { goProduct } = useNavigation();
    const nav = () => {
        if (is_Home) {
            goProduct()
        }
        return
    }
    return (
        <>
            <button onClick={nav} style={{ backgroundColor: { color } }} className={Style.Buttons_1}>{value}</button>
        </>
    )
}

Buttons.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Buttons
