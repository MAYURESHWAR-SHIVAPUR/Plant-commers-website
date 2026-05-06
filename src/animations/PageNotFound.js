import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const usePNFanimation = () => {
    const heading = () => {
        const tl = gsap.timeline()
        tl.from("#PNF h1", {
            y: -250,
            duration: 1.5,
            ease: "bounce.out",
            // ease: "elastic.out(2,0.4)",
        }).from("#PNF #rive", {
            x: -1000,
            duration: 1.5,
            // ease: "bounce.out",
        }).from("#PNF p", {
            duration: 1,
            ease: "bounce.out",
            y: -250,
            opacity:0
        })
    }

    return { heading }
}