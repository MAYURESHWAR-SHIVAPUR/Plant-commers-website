import React from 'react'
import "./Plus.css"

const Plus = ({ val, setQuantity }) => {
    function handleClick() {
        if (val == "-") {
            setQuantity(pre => pre - 1)
        } else {
            setQuantity(pre => pre + 1)
        }
    }

    return (
        <button class="button" onClick={handleClick}>
            <div class="button-outer">
                <div class="button-inner">
                    <span>{val}</span>
                </div>
            </div>
        </button>

    )
}

export default Plus
