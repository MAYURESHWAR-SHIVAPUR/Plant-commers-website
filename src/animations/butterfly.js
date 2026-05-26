import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// gsap/butterfly.js
export const butterfly = ({ x, y }) => {
    gsap.to("#butterfly", {
        left: x,
        top: y,
        duration: 0,
        // ease: "power3.out"
        ease: "elastic.out(1,0.3)",
    })
}