import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactAnimation = () => {

    const Buttons = () => {

        const tl = gsap.timeline();

        tl.from(["#Contact #Buttons #button",], {
            opacity: 0,
            y: -150,
            ease: "back.out(3)",
            stagger: 0.2,
            duration: 0.8,
        })
            .from(["#Contact #one #right"], {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.3
            })
            .from(["#Contact #one #left",], {
                x: 150,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "<")
    };


    const PPB = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#block",
                start: "top top",
                toggleActions: "play none none none", // ✅ plays once, never reverses
                markers: true
            }
        });

        tl.from(["#Contact #block"], {
            // height: "0vh",
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        })

    };

    return { Buttons, PPB };
};