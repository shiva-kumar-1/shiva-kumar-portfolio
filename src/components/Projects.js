import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DefexVision – AI Surface Defect Detection',
    year: '2025',
    description:
      'A computer vision project using Python, YOLOv8 and OpenCV to detect real-time surface defects in industrial products. Trained on annotated image datasets and supports real-time video stream inference.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'AI'],
  },
  {
    title: 'PDF to Audio Converter',
    year: '2024',
    description:
      'Converts PDF text into speech using pyttsx3 and PyPDF2. Developed with FastAPI for the frontend. Includes options for custom voice speed and pitch.',
    tags: ['Python', 'FastAPI', 'Text-to-Speech'],
  },
  {
    title: 'Velvafashions – Print-on-Demand Website',
    year: '2025',
    description:
      'E-commerce front-end built with HTML, CSS, and JavaScript to showcase fashion products. Designed with Canva and deployed using Kesug.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canva'],
    /*link: 'https://velvafashions.kesug.com',*/
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
       <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
  Projects
</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.year}</p>
              <p className="text-gray-300">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm bg-cyan-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-purple-400 hover:underline"
                >
                  Visit Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
