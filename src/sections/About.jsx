// src/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="section-sub mx-auto">
            Passionate developer building scalable solutions with clean code &
            modern design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl">
              {/* VS Code Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>

                <span className="ml-3 text-sm font-medium text-gray-600">
                  developer-profile.js
                </span>
              </div>

              {/* Terminal / Code */}
              <div className="p-6 font-mono text-[15px] leading-7 text-gray-800">
                <TypeAnimation
                  sequence={[
                    `const developer = {

role: "Full Stack Developer",

experience: "1+ Year",

education: "M.sc Computer Science",

location: "India",

focus: "MERN Stack",

status: "Available for Work"
}

export default developer;`,
500,
                  ]}
                  wrapper="pre"
                  speed={70}
                  repeat={Infinity}
                  cursor={true}
                  className="whitespace-pre-wrap"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-soft border border-gray-100">
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-600" />{" "}
                <span className="font-medium">India</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              I'm a Full Stack Developer with a strong focus on MERN stack. I
              love building products that solve real problems, with attention to
              performance, accessibility, and pixel-perfect UI.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <Calendar className="text-primary-600 mb-2" size={20} />
                <span className="block font-semibold">2024 - Present</span>
                <span className="text-sm text-gray-500">Experience</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <GraduationCap className="text-primary-600 mb-2" size={20} />
                <span className="block font-semibold">M.sc CS</span>
                <span className="text-sm text-gray-500">Education</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-primary-50 px-5 py-2 rounded-full">
                <Briefcase size={18} className="text-primary-600" />{" "}
                <span>1+ Year Experience</span>
              </div>
              <a
                href="/resume.pdf"
                download
                className="primary-btn inline-flex"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
