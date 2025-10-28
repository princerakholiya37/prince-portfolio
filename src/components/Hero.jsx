import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* LEFT TEXT SECTION */}
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="highlight">Prince Rakholiya</span>
          </h1>

          <h2>
            a{" "}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React JS Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </h2>

          <p>
            I'm a passionate Full Stack and React JS Developer dedicated to
            building responsive, scalable, and high-performance web
            applications. I love turning ideas into interactive digital
            experiences using clean code and modern technologies like React,
            Node.js, and Express.
          </p>

          <button className="btn-primary">
            View Project
          </button>

          <a
            href={process.env.PUBLIC_URL + "/Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary ms-2"
          >
            View Resume
          </a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hero-image">
          <img
            src={process.env.PUBLIC_URL + "/assets/hero-image.png"}
            alt="Prince Rakholiya working"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
