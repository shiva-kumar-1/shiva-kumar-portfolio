import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Programming: ['Python', 'C', 'Java (Basics)'],
  Web: ['HTML', 'CSS', 'JavaScript (Learning)'],
  Tools: ['Git (Basics)', 'Canva', 'VS Code'],
  Concepts: ['OOPs', 'DBMS', 'Problem Solving'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-950 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          {Object.entries(skills).map(([category, list], index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{category}</h3>
              <ul className="list-disc list-inside space-y-1 pl-4">
                {list.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
