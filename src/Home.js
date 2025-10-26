import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

const Home = () => {
    return (
        <>
            <Header />
            <Hero/>
            <Service/>
            <Project/>
            <About/>
            <Contact/>
        </>
    )
}

export default Home