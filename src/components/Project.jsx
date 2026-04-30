import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Smart RoRo Ferry Reservation & Information System",
      category: "College Project | 2026",
      image: process.env.PUBLIC_URL + "/assets/roro-ferry-project.png",
      description:
        "A full-stack ferry reservation system with user, agent, and admin modules, booking flow, seat availability, secure authentication, and REST API integration.",
      tech: ["React.js", "Tailwind CSS", "REST APIs", "Authentication"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Real Estate Property Management",
      category: "Property Platform",
      image: process.env.PUBLIC_URL + "/assets/real-estate-project.png",
      description:
        "A property management platform with property listings, detailed property views, cart-style selection, user-friendly flows, responsive pages, and a backend-ready structure.",
      tech: ["React", "MongoDB", "Node.js", "CSS"],
      github: "https://github.com/yourusername/realestate-management",
      live: "#",
    },
    {
      id: 3,
      title: "PR Mart - Best Deals, Better Shopping",
      category: "E-commerce Project | 2026",
      image: process.env.PUBLIC_URL + "/assets/pr-mart-project.png",
      description:
        "A responsive e-commerce website with product listings, product details, cart flow, category browsing, reusable components, and a clean shopping experience.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "Responsive Design"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-28"
    >
      <div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute -left-32 bottom-24 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="section-heading">Selected work with real product thinking</h2>
          <p className="mt-5 text-slate-400">
            A few practical builds showing responsive UI, application flow,
            database-backed logic, and clean visual presentation.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="glass-card group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-teal-300/40"
              key={project.id}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${index * 110}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-slate-950/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-200 backdrop-blur-xl">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-100 transition group-hover:border-teal-200/50 group-hover:bg-teal-300/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
                  >
                    <Github size={17} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-200"
                  >
                    <ExternalLink size={17} />
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
