import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm mt-12">
      <p className="mb-1">&copy; {new Date().getFullYear()} Shiva Kumar Somineneni. All rights reserved.</p>
      <p>
        Designed & built with <span className="text-red-400">❤</span> using React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
