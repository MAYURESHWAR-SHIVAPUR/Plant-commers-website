import React from 'react'
import { Data } from '../../context/Data'
import Style from "./Product_Block.module.css"
import Button from '../Buttons_2/Buttons'
import Cards from '../Cards1/Cards'

const Product_Block = ({ button_text, arr }) => {
    return (
        <div className={Style.Pro_Outer}>
            <Button value={button_text} />
            <div className={Style.Pro_blocks}>
                {
                    arr?.map((item) => {
                        if (!item.default_image?.thumbnail) return null;
                        return (
                            <Cards imgsPath={item.default_image?.thumbnail} name={item.common_name} info={item.scientific_name} />
                        )
                    }
                    )
                }
            </div>
        </div >
    )
}

export default Product_Block
