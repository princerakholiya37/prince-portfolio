import React from "react";
import { Code2, Database, Monitor, ShieldCheck } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Scalable full-stack applications using React, Node.js, and Express with clean structure, reusable logic, and reliable performance.",
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      description:
        "Responsive, dynamic, and visually engaging interfaces using React and modern Tailwind CSS for smooth experiences on every device.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Efficient MySQL and MongoDB database design with practical data flow, optimization, and secure integration with applications.",
    },
    {
      icon: ShieldCheck,
      title: "Clean Deployment",
      description:
        "Production-ready project structure, maintainable components, responsive layouts, and performance-minded delivery.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 sm:py-28" id="services">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Services</p>
          <h2 className="section-heading">What I can build for you</h2>
          <p className="mt-5 text-slate-400">
            From frontend polish to backend logic, I focus on experiences that
            look sharp, load fast, and stay easy to maintain.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-300/40 hover:bg-teal-300/10"
              key={service.title}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-300 text-slate-950 shadow-glow transition group-hover:rotate-3 group-hover:scale-110">
                <service.icon size={28} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
