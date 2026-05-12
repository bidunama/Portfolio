import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const CertificationsSection = () => {
  const { data } = usePortfolio();

  return (
    <section id="certifications" className="py-20 relative bg-bg-light dark:bg-[#08080c]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card interactive group hover:border-neon-cyan transition-colors flex flex-col justify-between"
            >
              <div>
                <FaCertificate className="text-4xl text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-sm text-neon-purple font-mono mb-4">{cert.date}</p>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-medium mt-4"
              >
                View Credential <FaExternalLinkAlt size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
