import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-900 via-black to-gray-900">
      <motion.div
        className="max-w-4xl px-4"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Hello, I am Shiva Kumar
        </h1>
        <p className="text-xl text-gray-300 mt-4 font-light">
          B.Tech CSE Student @ JNTU Rajanna Sircilla <br />
          AI Enthusiast | Actively Seeking Internship Opportunities
        </p>

        <div className="flex justify-center gap-6 mt-6 text-white text-2xl">
          <a href="mailto:shivakumarsomineni666@gmail.com" className="hover:text-red-400 transition" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/shiva-kumar-1" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/shiva-kumar-somineni-b3531a326" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <a
          href="#about"
          className="inline-block mt-10 px-6 py-3 bg-purple-600 text-white rounded-xl text-lg font-medium hover:bg-purple-700 transition"
        >
          Know More About Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
