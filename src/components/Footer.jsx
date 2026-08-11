// src/components/Footer.jsx
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
      {/* Background Blur */}
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="container-custom relative py-16">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              Arun<span className="text-cyan-300">.</span>
            </h2>

            <p className="mt-5 text-blue-100 leading-7">
              Passionate Full Stack MERN Developer focused on creating
              scalable, responsive, and high-performance web applications
              with clean architecture and modern user experiences.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "achievements",
                "contact",
              ].map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-blue-100 hover:text-cyan-300 transition capitalize"
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-blue-100">
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-300" size={18} />
                <span>India</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-300" size={18} />
                <span>yourmail@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-300" size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur-md">
                <p className="text-sm leading-7">
                  🚀 Currently available for
                  <span className="font-semibold text-cyan-300">
                    {" "}
                    Full-Time
                  </span>
                  ,
                  <span className="font-semibold text-cyan-300">
                    {" "}
                    Internship
                  </span>
                  , and
                  <span className="font-semibold text-cyan-300">
                    {" "}
                    Freelance
                  </span>{" "}
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mt-14 pt-7 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100 text-sm flex items-center gap-2 text-center">
            © {new Date().getFullYear()} Arun Hariharan G.
            Built with
            <Heart
              size={16}
              className="text-red-400 fill-red-400 animate-pulse"
            />
            using React, Tailwind CSS & Framer Motion.
          </p>

          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="w-12 h-12 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;