import React from 'react'
import Style from "./Reveiw.module.css"

const Review = ({ imgsPath, }) => {
    return (
        <div className={Style.Rev_Outer}>
            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <div className={Style.Rev_innerCass}>
                <img src={imgsPath} alt="image of a Person" />
                <div>
                    <h2>John Doe</h2>
                    <h4>Youtuber</h4>
                </div>
                <h4>4.5</h4>
            </div>
        </div>
    )
}
export default Review
