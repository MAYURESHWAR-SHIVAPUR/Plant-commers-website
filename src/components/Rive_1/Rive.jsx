import React, { memo } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Style from "./Rive.module.css";

const Rive = () => {
  const { rive, RiveComponent } = useRive({
    src: "/loading.riv",
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
      className={Style.rive}
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
    >
      <p className={Style.hoverme}>hover me!</p>
      <RiveComponent />
    </div>
  );
};

export default memo(Rive);