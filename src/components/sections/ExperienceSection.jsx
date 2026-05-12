import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Experience & Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

          {data.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex items-center justify-between mb-12 w-full ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              } flex-col md:flex-row`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-neon-cyan transform -translate-x-1/2 shadow-[0_0_10px_#06b6d4]"></div>

              <div className="w-full md:w-[45%]">
                <div className="glass-card interactive hover:border-neon-cyan transition-colors relative pl-10 md:pl-6">
                  {/* Mobile Dot */}
                  <div className="md:hidden absolute left-4 top-8 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_#06b6d4]"></div>
                  
                  <span className="text-sm font-mono text-neon-purple mb-2 block">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
