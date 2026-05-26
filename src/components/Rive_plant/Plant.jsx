import Rive, { useRive } from '@rive-app/react-canvas'
import { memo } from 'react';

const Plant = () => {
    const { RiveComponent } = useRive({
        src: "Plant.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    return (
        <div className='h-screen w-1/3 scale-125 z-[0] absolute left-[0%]'>
            <RiveComponent />
        </div>
    )
}

export default memo(Plant)

