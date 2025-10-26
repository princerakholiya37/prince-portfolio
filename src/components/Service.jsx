import React from "react";
import { Code2, Monitor, Database } from "lucide-react"; // for icons

const Service = () => {
  const services = [
    {
      icon: <Code2 size={40} color="#ff0057" />,
      title: "Software Development",
      description:
        "As a Full Stack Developer, I build scalable and robust applications using modern technologies like React, Node.js, and Express. I focus on clean architecture and efficient performance.",
    },
    {
      icon: <Monitor size={40} color="#ff0057" />,
      title: "Frontend Development",
      description:
        "I specialize in crafting responsive, dynamic, and visually engaging UIs using React and modern CSS frameworks. I ensure seamless user experiences across all devices.",
    },
    {
      icon: <Database size={40} color="#ff0057" />,
      title: "Database Management",
      description:
        "I design and optimize databases using MySQL and MongoDB for reliable performance and smooth integration with applications. I focus on data security and scalability.",
    },
  ];

  return (
    <section className="service-section" id="services">
      <div className="container">
        <p className="service-subtitle">SERVICES</p>
        <h2 className="service-title">What I Do</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div class="service">
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
