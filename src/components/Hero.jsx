import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)] pt-28"
      id="hero"
    >
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div data-reveal="left">
          <div className="eyebrow">
            <Sparkles size={14} />
            Available for work
          </div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Prince Rakholiya
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-slate-200 sm:text-3xl">
            I build{" "}
            <TypeAnimation
              sequence={[
                "full-stack products.",
                2000,
                "modern React apps.",
                2000,
                "clean user experiences.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-teal-300"
            />
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Passionate Full Stack and React JS Developer focused on responsive,
            scalable, and high-performance web applications. I turn ideas into
            polished digital experiences with React, Node.js, Express, and
            clean architecture.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="projects"
              smooth
              duration={450}
              offset={-80}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal-300 px-7 py-4 font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              View Projects <ArrowRight size={18} />
            </Link>

            <a
              href={process.env.PUBLIC_URL + "/Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-300/60 hover:text-teal-200"
            >
              View Resume <Download size={18} />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["10+", "Projects"],
              ["3+", "Core Stacks"],
              ["100%", "Responsive"],
            ].map(([value, label], index) => (
              <div
                key={label}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${index * 100}ms` }}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 text-center transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.08]"
              >
                <p className="font-display text-2xl font-bold text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="right"
          style={{ "--reveal-delay": "180ms" }}
          className="relative mx-auto w-full max-w-2xl animate-float lg:ml-auto"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal-300/30 via-cyan-300/10 to-emerald-300/20 blur-2xl" />
          <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-teal-200/30 bg-teal-300/10 backdrop-blur-xl sm:block" />
          <div className="absolute -bottom-7 -left-7 hidden h-32 w-32 rounded-[2rem] border border-cyan-200/20 bg-cyan-300/10 backdrop-blur-xl sm:block" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <div className="absolute left-8 top-8 z-10 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
            </div>
            <img
              src={process.env.PUBLIC_URL + "/assets/hero-image.png"}
              alt="Prince Rakholiya working"
              className="aspect-[16/10] w-full rounded-[1.5rem] object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
                Current Focus
              </p>
              <p className="mt-2 text-base font-bold text-white sm:text-lg">
                Building practical, fast, and beautiful web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
