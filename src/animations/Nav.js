import gsap from "gsap";

export const fadeIn = () => {
    gsap.from(["#Nav h1", "#Nav #Nav",  "#Nav #cart", "#Nav #info", "#Nav #line", "#Nav #bars",], {
        duration: 1.5,
        ease: "back.out(2)",
        y: -250,
        stagger: 0.5,
    })
}