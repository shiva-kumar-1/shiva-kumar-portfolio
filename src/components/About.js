import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-950 text-gray-200">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10"><img
  src="/shiva.png"
  alt="Shiva Kumar"
  className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-cyan-400"
/>


          <div className="text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
              I’m <strong>Shiva Kumar</strong>, a 3rd-year B.Tech student specializing in Computer Science and Engineering at
              <strong> JNTU Rajanna Sircilla</strong>. My primary area of interest is in the field of <strong>Artificial Intelligence</strong> — especially in applying AI to solve practical problems using Computer Vision and Python.
            </p>
            <p>
              I’ve explored AI projects like DefexVision using YOLOv8 and OpenCV. I enjoy learning how machines perceive and make decisions using code.
            </p>
            <p>
              Alongside AI, I’m also learning the fundamentals of <strong>Full Stack Web Development</strong> — building simple front-end projects and APIs to understand how complete systems work.
            </p>
            <p>
              I'm focused, self-driven, and always excited to learn something new — especially when it helps bring a creative idea to life.
            </p>

            <div className="mt-6">
              <a
                href="/Shiva_Kumar_resume.pdf"
                download
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg transition font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
