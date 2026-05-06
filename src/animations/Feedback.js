import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const useFeedbackAnimation = () => {

    const text = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#Feedback",
                start: "top 20%",              // fires when #Feedback enters screen
                end: "top top",
                toggleActions: "play none none none", // plays once, never disappears
            }
        });

        tl.from("#Feedback h1", {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: "back.out(2)",
        })
            .fromTo("#Feedback #cards1", {
                opacity: 0,
                x: 50,
                duration: 1,
                stagger: 0.5,
                ease: "back.out"
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.5,
                ease: "back.out"
            });
    };

    const footer = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#footer",
                start: "top 40%",              // fires when #Feedback enters screen
                // end: "top top",
                toggleActions: "play none none none", // plays once, never disappears
            }
        });

        tl.from("#footer", {
            y: 150,
            opacity: 0,
            duration: 0.3,
            ease: "back.out(2)",
        })
            .from(["#footer #one", "#footer #two","#footer p", ], {
                opacity: 0,
                y: 150,
                duration: 1,
                stagger: 0.5,
                ease: "back.out(4)",
            })

    }

    return { text, footer };
};