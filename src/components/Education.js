import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institute: 'JNTU Rajanna Sircilla',
    year: '2022 – 2026',
    result: 'CGPA: 7.5 (Current)',
  },
  {
    degree: 'Intermediate (MPC)',
    institute: 'SR Prime Campus, Karimnagar',
    year: '2020 – 2022',
    result: 'Marks: 903 / 1000',
  },
  {
    degree: 'SSC (10th)',
    institute: 'Vaniniketan High School, Karimnagar',
    year: '2019 – 2020',
    result: 'CGPA: 10',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 leading-tight">
          Education
        </h2>

        <div className="space-y-6 border-l-4 border-cyan-600 pl-6 relative">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-400 rounded-full shadow-md"></div>
              <h3 className="text-xl font-semibold text-cyan-300">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institute}</p>
              <p className="text-sm text-gray-500">
                {edu.year} — <span className="text-white font-medium">{edu.result}</span>
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
