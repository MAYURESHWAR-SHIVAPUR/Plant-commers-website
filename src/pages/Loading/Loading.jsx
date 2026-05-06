import React, { useEffect, useState } from 'react'
import Style from "./Loading.module.css"
import { useNavigation } from '../../context/Navigate_To_product'
import Rive from '../../components/Rive_1/Rive'

const Loading = () => {
    const [progress, setProgress] = useState(0)

    const { goHome } = useNavigation();
    const nav = () => {
        goHome()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 5
            })
        }, 300)

        return () => clearInterval(interval)
    }, []);

    return (
        <div className={Style.Loading_Outer}>
            <Rive />
            <div className={Style.Loading_two}>

                <h1>Loading Plants</h1>
                <div className={Style.loader_bar}>
                    <div
                        className={Style.load_value}
                        style={{ width: `${progress}%` }}
                    >
                    </div>
                </div>
                <button onClick={nav}>Get Back to Home</button>
            </div>
        </div>
    )
}

export default Loading
