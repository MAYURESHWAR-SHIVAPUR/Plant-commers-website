import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimation = () => {

    const title = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#About",
                start: "top 30%",
                toggleActions: "play none none none", // ✅ plays once, never reverses
            }
        });

        tl.from(["#About #text p", "#About #text h2"], {
            opacity: 0,
            x: -150,
            ease: "back.out(3)",
            stagger: 0.2,
            duration: 0.8,
        })
            .fromTo("#About #cards ", {
                opacity: 0,
                duration: 0.4,
            }, {
                opacity: 1,
                duration: 0.4
            });
    };

    const Category = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#category",
                start: "top center",
                toggleActions: "play none none none", // ✅ plays once, never reverses
            }
        });

        tl.from("#category", {
            height: "0vh",
            duration: 0.8,
            ease: "power2.out",
        })
            .from(["#cards", "#category #text", "#cateCont #text"], {
                opacity: 0,
                stagger: 0.1,
                duration: 0.3,
            });
    };

    return { title, Category };
};