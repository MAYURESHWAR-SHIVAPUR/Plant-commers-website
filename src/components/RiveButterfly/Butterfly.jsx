import React, { useEffect } from 'react'
import Rive, { useRive } from '@rive-app/react-canvas';
import { butterfly } from '../../animations/butterfly';

const Butterfly = () => {
    const { RiveComponent } = useRive({
        src: 'Butterfly.riv',
        autoplay: true
    });

    

    useEffect(() => {
        // const butterflyElement = document.querySelector('.butterfly');

        function handleMouseMove(e) {
            const X = e.clientX + window.scrollX;
            const Y = e.clientY + window.scrollY;

            // if (butterflyElement) {
            //     butterflyElement.style.left = X + 'px';
            //     butterflyElement.style.top = Y + 'px';
            // }

            butterfly({x:X, y:Y})
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id='butterfly' className='h-[200px] w-[200px] absolute top-0 left-0 rotate-[344deg] butterfly transition-all duration-500 linear z-[100]'>
            <RiveComponent />
        </div>
    )
}

export default Butterfly
