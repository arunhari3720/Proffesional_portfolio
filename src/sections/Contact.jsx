// src/sections/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/60">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Let's <span className="text-primary-600">Connect</span>
          </h2>
          <p className="section-sub mx-auto">
            Have a project? Let's collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-soft p-6 border border-gray-100 flex items-center gap-4">
              <MapPin className="text-primary-600" />{" "}
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500">India</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-soft p-6 border border-gray-100 flex items-center gap-4">
              <Mail className="text-primary-600" />{" "}
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500">arun@example.com</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-soft p-6 border border-gray-100 flex items-center gap-4">
              <Phone className="text-primary-600" />{" "}
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <Github className="text-gray-500 hover:text-primary-600 cursor-pointer" />
              <Linkedin className="text-gray-500 hover:text-primary-600 cursor-pointer" />
            </div>
            <div className="h-48 w-full rounded-3xl overflow-hidden shadow-soft">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.123456789!2d77.123456!3d11.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9xxxxxxxx!2sYour%20Location!5e0!3m2!1sen!2sin!4v1234567890123"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-soft p-8 border border-gray-100 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary-500 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary-500 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary-500 outline-none"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary-500 outline-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="w-full primary-btn text-center">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
