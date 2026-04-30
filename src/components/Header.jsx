import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const links = [
    { to: "hero", label: "Home" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-fade-up border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link
          to="hero"
          smooth
          duration={450}
          offset={-90}
          className="cursor-pointer font-display text-xl font-bold tracking-tight text-white"
        >
          Prince<span className="text-teal-300">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={450}
              offset={-80}
              spy
              activeClass="!text-teal-300"
              className="cursor-pointer text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:text-teal-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="contact"
          smooth
          duration={450}
          offset={-80}
          className="hidden cursor-pointer rounded-full bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200 lg:inline-flex"
        >
          Hire Me
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="section-shell animate-fade-up pb-5 lg:hidden">
          <nav className="glass-card grid gap-2 rounded-3xl p-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={450}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-200 transition hover:bg-white/10 hover:text-teal-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
