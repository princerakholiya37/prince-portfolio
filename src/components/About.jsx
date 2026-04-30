import React from "react";
import { Link } from "react-scroll";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const strengths = [
    "Responsive React interfaces",
    "Full-stack application flow",
    "Clean component structure",
    "Database-backed features",
  ];

  return (
    <section className="bg-slate-950 py-24 sm:py-28" id="about">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md" data-reveal="left">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal-300/25 to-cyan-300/10 blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 transition duration-500 hover:-translate-y-2 hover:border-teal-300/40">
            <img
              src={process.env.PUBLIC_URL + "/assets/ab.jpg"}
              alt="Prince Rakholiya"
              className="h-[460px] w-full rounded-[1.5rem] object-cover object-center"
            />
            <div className="absolute bottom-8 left-8 rounded-3xl bg-teal-300 px-5 py-4 text-slate-950 shadow-glow">
              <p className="text-3xl font-black">Full Stack</p>
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Developer
              </p>
            </div>
          </div>
        </div>

        <div data-reveal="right" style={{ "--reveal-delay": "120ms" }}>
          <p className="eyebrow">About Me</p>
          <h2 className="section-heading">
            I create websites that feel modern, useful, and easy to use.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Hello! I'm <span className="font-bold text-teal-200">Prince Rakholiya</span>,
            a passionate Full Stack Developer who loves turning ideas into
            real-world web solutions. I specialize in React.js, Node.js,
            Express, MongoDB, MySQL, and polished responsive interfaces.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            My goal is to combine strong functionality with thoughtful design:
            fast pages, clean layouts, simple user journeys, and code that is
            comfortable to improve later.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <div
                key={item}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${index * 80}ms` }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.07]"
              >
                <CheckCircle2 className="shrink-0 text-teal-300" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="contact"
            smooth
            duration={450}
            offset={-80}
            className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-teal-300 px-7 py-4 font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
          >
            Contact Me <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
