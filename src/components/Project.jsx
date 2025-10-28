import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "LED Lighting Store (Light Palace)",
      image:  process.env.PUBLIC_URL + "/assets/light.png",
      description:
        "A modern e-commerce website for LED lights built using React for frontend and PHP + MySQL for backend. It includes cart, admin panel, and product management features.",
      tech: ["React", "MongoDB", "Node.js", "CSS"],
      github: "https://github.com/yourusername/light-palace",
      live: "https://lightpalace-demo.netlify.app",
    },
    {
      id: 2,
      title: "Realestate Property Management System",
      image:  process.env.PUBLIC_URL + "/assets/property.png",
      description:
        "A React.js application for managing real estate properties with MongoDB backend. Features include add-to-cart functionality, property listings, and user authentication.",
      tech: ["React", "MongoDB", "Node.js", "CSS"],
      github: "https://github.com/yourusername/realestate-management",
      live: "#",
    },
    {
      id: 3,
      title: "Pharmacy Management System",
      image:  process.env.PUBLIC_URL + "/assets/pharmacy.png",
      description:
        "A React.js based pharmacy management system with admin panel and add-to-cart functionality. Users can browse medicines, place orders, and admins can manage inventory efficiently.",
      tech: ["PHP", "MySQL", "CSS"],
      github: "https://github.com/yourusername/pharmacy-management",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-subtitle">PROJECTS</p>
        <h2 className="section-title">My Recent Work</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, index) => (
                    <span key={index} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
