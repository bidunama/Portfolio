import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaServer } from "react-icons/fa";

const AboutSection = () => {
  const { data } = usePortfolio();

  const cards = [
    {
      icon: <FaBrain className="text-4xl text-neon-purple mb-4" />,
      title: "AI & Machine Learning",
      desc: "Passionate about building intelligent models and data-driven solutions.",
    },
    {
      icon: <FaServer className="text-4xl text-neon-cyan mb-4" />,
      title: "Backend Development",
      desc: "Specialized in Python, FastAPI, and designing scalable system architectures.",
    },
    {
      icon: <FaCode className="text-4xl text-neon-blue mb-4" />,
      title: "Full Stack Mastery",
      desc: "Creating seamless end-to-end applications using modern web technologies like React.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a {data.about.education}. {data.about.interests}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My goal is to bridge the gap between complex AI algorithms and intuitive user interfaces, 
              building products that are not only intelligent but also highly usable and performant.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stats/Highlight blocks */}
            <div className="glass-card flex flex-col items-center justify-center text-center interactive hover:-translate-y-2 transition-transform">
              <span className="text-4xl font-bold neon-text mb-2">150+</span>
              <span className="text-gray-500">DSA Problems</span>
            </div>
            <div className="glass-card flex flex-col items-center justify-center text-center interactive hover:-translate-y-2 transition-transform">
              <span className="text-4xl font-bold neon-text mb-2">10+</span>
              <span className="text-gray-500">Projects Built</span>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card interactive group hover:border-neon-purple transition-colors"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{card.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
