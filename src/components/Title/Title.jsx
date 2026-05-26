import React, { memo } from 'react'
import Style from "../../pages/Home/Home.module.css"

const Title = ({ title }) => {
    return (
        <h1>
            {title.split(" ").map((word, wi) => (
                <>
                    <span>   </span>
                    <span key={wi} className={Style.word}>  {/* word wrapper — stays together */}
                        {word.split("").map((letter, li) => (
                            <span key={li} className={Style.h1}>  {/* each letter animates */}
                                {letter}
                                {/* {letter === " " ? "   " : letter}  preserve spaces */}
                            </span>
                        ))}
                    </span>
                </>
            ))}
        </h1>
    )
}

export default memo(Title)
