import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  'Google Advanced Data Analytics',
  'AWS Academy Cloud Foundations',
  'AWS Academy Machine Learning',
  'Cisco Cyber Security Essentials',
  'Oracle Cloud Infrastructure Foundations',
  'Infosys Springboard – AI/ML, Data Science, Programming',
  'NPTEL – Programming in Java, Cloud Computing',
  'Google Digital Garage – Digital Marketing',
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
          Certifications
        </h2>

        <ul className="space-y-4 text-lg list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index} className="hover:text-yellow-300 transition duration-200">{cert}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Certifications;
