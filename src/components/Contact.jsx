import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (your number)
    const phoneNumber = "919512437598"; // use country code, without '+'

    // Construct message
    const message = `Hi Prince 👋,%0A
I am ${formData.name}.%0A
📞 Phone: ${formData.phone}%0A
✉️ Email: ${formData.email}%0A
📝 Subject: ${formData.subject}%0A
💬 Message: ${formData.message}`;

    // WhatsApp redirect link
    const url = `https://wa.me/${9512437598}?text=${message}`;

    // Redirect to WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="section-subtitle">CONTACT</p>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-info-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/contact.png"}
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
                  href="https://www.linkedin.com/in/prince-rakholiya-a921ba346"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/prince_rakholiya_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://github.com/princerakholiya37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>YOUR NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>PHONE NUMBER</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>YOUR MESSAGE</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

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
