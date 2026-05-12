import React, { useCallback } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const { data, isDarkMode } = usePortfolio();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: isDarkMode ? "#c084fc" : "#3b82f6" },
      links: {
        color: isDarkMode ? "#c084fc" : "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 40 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-xl md:text-2xl font-mono text-neon-cyan mb-4">Hello World, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]">
            {data.profile.name}
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-10">
            <span className="text-gray-600 dark:text-gray-300">I am a </span>
            <span className="text-neon-cyan">
              <Typewriter
                words={data.profile.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
            {data.profile.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <ScrollLink to="projects" smooth={true} offset={-70} duration={500}>
              <button className="btn-primary w-full sm:w-auto">View Projects</button>
            </ScrollLink>
            <a href={data.profile.resumeLink} target="_blank" rel="noreferrer">
              <button className="btn-outline w-full sm:w-auto">Download Resume</button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6 text-2xl">
            <a href={data.profile.github} target="_blank" rel="noreferrer" className="hover:text-neon-purple transition-colors hover:-translate-y-1 transform duration-300">
              <FaGithub />
            </a>
            <a href={data.profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors hover:-translate-y-1 transform duration-300">
              <FaLinkedin />
            </a>
            <a href={`mailto:${data.profile.email}`} className="hover:text-neon-cyan transition-colors hover:-translate-y-1 transform duration-300">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-purple animate-[spin_10s_linear_infinite] group-hover:border-neon-cyan transition-colors"></div>
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-neon-cyan animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <img 
              src={data.profile.avatar} 
              alt={data.profile.name}
              className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm font-mono text-gray-500 mb-2">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-neon-purple to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
