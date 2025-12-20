"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import PandaCharacter from "../PandaCharacter";
import {
  fadeInUp,
  slideInRight,
  slideInLeft,
  staggerContainer,
} from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">🎋</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🎋</div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 font-space"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-bamboo-500 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-panda-gray dark:text-gray-300"
          >
            Let&apos;s build something amazing together! 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {/* Left: Messaging Panda */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={slideInLeft}
            className="flex flex-col items-center"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl mb-4"
                >
                  🐼
                </motion.div>
                <p className="text-2xl font-bold text-bamboo-600 dark:text-bamboo-400">
                  Thanks for reaching out!
                </p>
                <p className="text-lg text-panda-gray dark:text-gray-300 mt-2">
                  I&apos;ll get back to you soon! 👍
                </p>
              </motion.div>
            ) : (
              <>
                <motion.img
                  src="/images/panda-message.png"
                  alt="Messaging Panda"
                  className="max-w-sm w-full h-auto object-contain"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="mt-6 space-y-4 text-center">
                  <div className="glass p-4 rounded-xl">
                    <p className="text-sm text-panda-gray dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href={portfolioData.social.email}
                      className="text-lg font-semibold text-bamboo-600 dark:text-bamboo-400 hover:underline"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <p className="text-sm text-panda-gray dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-panda-black dark:text-panda-white">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-panda-black dark:text-panda-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 min-h-[44px] glass rounded-xl focus:outline-none focus:ring-2 focus:ring-bamboo-500 text-panda-black dark:text-panda-white"
                  placeholder="Panda"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-panda-black dark:text-panda-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 min-h-[44px] glass rounded-xl focus:outline-none focus:ring-2 focus:ring-bamboo-500 text-panda-black dark:text-panda-white"
                  placeholder="panda@panda.com"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-panda-black dark:text-panda-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-bamboo-500 text-panda-black dark:text-panda-white resize-none"
                  placeholder="Tell me about your project, Panda..."
                />
              </motion.div>

              <motion.button
                variants={fadeInUp}
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-bamboo-600 hover:bg-bamboo-700 text-white rounded-xl font-semibold shadow-lg transition-colors panda-cursor"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
