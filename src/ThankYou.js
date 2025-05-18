import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-green-400">🎉 Thank You!</h1>
        <p className="text-lg">Your message has been sent successfully.</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white font-medium transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
