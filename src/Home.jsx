import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";


const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -70px 0px" }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Service />
            <Project />
            <About />
            <Contact />
        </>
    )
}

export default Home
