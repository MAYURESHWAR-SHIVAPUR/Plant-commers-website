import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const useHomeAnimation = () => {

    const Hero = () => {
        const tl = gsap.timeline();

        tl.from("#Panel", {
            scale: 0,
            duration: 0.4,
            delay: 0.3,
        })
            .from("#Panel #Right h1 span", {
                opacity: 0,
                y: 50,
                duration: 0.2,
                stagger: 0.05,
                ease: "back.out(4)",
            })
            .from(["#Panel #Right h3", "#Panel #Right p"], {
                opacity: 0,
                duration: 0.3,
                stagger: 0.1,
                ease: "back.out(2)",
            })
            .from(["#Panel #Right #input", "#Panel #Right #search"], {
                opacity: 0,
                x: -150,
                duration: 0.5,
                stagger: 0.5,
                ease: "back.out(2)",
            })
            .from("#Panel #Left", {
                opacity: 0,
                x: 150,
                duration: 0.4,
            }, "<")  // ✅ plays alongside the input/search animation
    }

    // const scrollLast = () => {
    //     gsap.to(window, {
    //         scrollTo: "#last",
    //         duration: 3
    //     })
    // }

    const footer = () => {

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#Footer",
                start: "top 50%",
                end: "Top 20%%",
                scrub: false,
                // markers: true
            }
        });

        t2.from("#Footer #text", {
            opacity: 0,
            x: -100,
        })

        t2.from("#Footer #image", {
            opacity: 0,
        })
    }







    return { Hero, footer };
};