import React from 'react'
import Styles from './Text.module.css'

const Text = ({headers, info}) => {
    return (
        <div className={Styles.AboutFirst}>
            <h2>{headers}</h2>
            <p>{info}</p>
        </div>
    )
}

export default Text
