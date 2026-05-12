import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="contact" className="py-20 relative bg-bg-light dark:bg-bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[80px] pointer-events-none"></div>

            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors text-text-primary dark:text-text-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-text-primary dark:text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors text-text-primary dark:text-text-primary resize-none"
                  placeholder="Hello Aman, I'd like to discuss..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
