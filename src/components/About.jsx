import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        {/* ==== Left Image ==== */}
        <div className="about-left">
          <img
            src={process.env.PUBLIC_URL + "/assets/ab.jpg"}
            alt="About Me"
            className="about-img"
          />
        </div>

        {/* ==== Right Content ==== */}
        <div className="about-right">
          <p className="about-subtitle">ABOUT ME</p>
          <h2 className="about-title">I’m a Full Stack Developer</h2>
          <p className="about-description">
            Hello! I’m <span className="highlight">Prince Rakholiya</span>, a
            passionate Full Stack Developer who loves turning ideas into
            real-world web solutions. I specialize in building interactive and
            responsive web applications using technologies like{" "}
            <b>React.js, Node.js, Express,</b> and <b>MongoDB</b>.
          </p>
          <p className="about-description">
            I focus on creating digital experiences that are fast, visually
            appealing, and easy to use. I believe great design and functionality
            go hand in hand to build something truly impactful.
          </p>

          <a href="#contact" className="about-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
