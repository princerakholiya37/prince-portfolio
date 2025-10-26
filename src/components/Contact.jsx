import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="section-subtitle">CONTACT</p>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-info-card">
            <img
              src="/assets/image/contact.png"
              alt="Handshake"
              className="contact-img"
            />
            <h3 className="contact-name">Prince Rakholiya</h3>
            <p className="contact-role">Full Stack Developer</p>
            <p className="contact-text">
              I am available for freelance work. Connect with me via mail or
              call.
            </p>

            <p className="contact-detail">
              <b>Phone:</b> +91 9512437598
            </p>
            <p className="contact-detail">
              <b>Email:</b> princerakholiya37@gmail.com
            </p>

            <div className="social-links">
              <p>CONNECT WITH ME</p>
              <div className="icons">
                <a
                  href="https://www.facebook.com/share/19iNNZ7ZTS/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/in/prince-rakholiya-a921ba346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/prince_rakholiya_official?igsh=MTZ6bXk2b2RnM3lxOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-card">
            <form className="contact-form">
              <label>YOUR NAME</label>
              <input type="text" name="name" required />

              <label>PHONE NUMBER</label>
              <input type="tel" name="phone" required />

              <label>EMAIL</label>
              <input type="email" name="email" required />

              <label>SUBJECT</label>
              <input type="text" name="subject" />

              <label>YOUR MESSAGE</label>
              <textarea name="message" rows="4"></textarea>

              <button type="submit" className="send-btn">
                SEND MESSAGE <FaArrowRight className="arrow-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
