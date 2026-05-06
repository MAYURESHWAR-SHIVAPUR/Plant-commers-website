import React from 'react'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Style from "../Rive_1/Rive.module.css";

const Rive = () => {
    const { rive, RiveComponent } = useRive({
        src: "404.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    const hoverInput = useStateMachineInput(
        rive,
        "State Machine 1",
        "isHover"
    );

    return (
        <div
            id='rive'
            className={Style.rive}
            onMouseEnter={() => hoverInput && (hoverInput.value = true)}
            onMouseLeave={() => hoverInput && (hoverInput.value = false)}
        >
            <p id="absolute left-[100%]" className={Style.hoverme}>hover me!</p>
            <RiveComponent />
        </div>
    )
}

export default Rive
