import React, { useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919512437598";
    const text = `Hi Prince Rakholiya,\nI am ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const fields = [
    { label: "Your Name", name: "name", type: "text", required: true },
    { label: "Phone Number", name: "phone", type: "tel", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Subject", name: "subject", type: "text", required: false },
  ];

  const socials = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/19iNNZ7ZTS/", label: "Facebook" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/prince-rakholiya-a921ba346", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/prince_rakholiya_official", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com/princerakholiya37", label: "GitHub" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#020617_100%)] py-24 sm:py-28"
      id="contact"
    >
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let's build something sharp together</h2>
          <p className="mt-5 text-slate-400">
            Freelance work, collaboration, or project ideas: send the form and
            it will open WhatsApp with your message ready.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 hover:border-teal-300/40 sm:p-8" data-reveal="left">
            <img
              src={process.env.PUBLIC_URL + "/assets/contact.png"}
              alt="Contact Prince Rakholiya"
              className="h-64 w-full rounded-[1.5rem] object-cover"
            />
            <h3 className="mt-7 font-display text-3xl font-bold text-white">
              Prince Rakholiya
            </h3>
            <p className="mt-2 font-semibold text-teal-200">
              Full Stack Developer
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              I am available for freelance work and web development projects.
              Connect with me by phone, email, or social media.
            </p>

            <div className="mt-7 grid gap-4">
              <a
                href="tel:+919512437598"
                className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4 text-slate-200 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone className="text-teal-300" size={20} />
                +91 95124 37598
              </a>
              <a
                href="mailto:princerakholiya37@gmail.com"
                className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4 text-slate-200 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <Mail className="text-teal-300" size={20} />
                princerakholiya37@gmail.com
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4 text-slate-200">
                <MapPin className="text-teal-300" size={20} />
                India
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-300 hover:text-slate-950"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div
            className="glass-card rounded-[2rem] p-6 transition duration-500 hover:border-teal-300/40 sm:p-8"
            data-reveal="right"
            style={{ "--reveal-delay": "140ms" }}
          >
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.name} className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {field.label}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10"
                    />
                  </label>
                ))}
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Your Message
                </span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-7 py-4 font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
