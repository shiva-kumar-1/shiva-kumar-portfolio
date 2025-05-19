import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-950 text-gray-100">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
          Contact Me
        </h2>

        <p className="text-center text-lg mb-6 text-teal-400">
          I'm actively seeking internships. If you're hiring or open to enthusiastic learners, please reach out — I'd love to hear from you!
        </p>

        <form
         action="https://formsubmit.co/fa97e49303aca17b953a1f9387572c40"

          method="POST"
          className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl"
        >
          {/* Disable CAPTCHA and set redirect after submit */}
          <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://shiva-kumar-portfolio.vercel.app/thankyou" />


          <div>
            <label className="block text-sm mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded text-white font-medium transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
