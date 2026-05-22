import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { data } = usePortfolio();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[200px] bg-neon-purple/10 rounded-[100%] blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="w-12 h-12 rounded-full border border-neon-cyan flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-bg-dark transition-all duration-300 cursor-pointer mb-8"
        >
          <FaArrowUp />
        </ScrollLink>

        <div className="text-2xl font-bold neon-text mb-6">
          &lt;Aman Dubey /&gt;
        </div>

        <div className="flex gap-6 mb-8 text-xl">
          <a href={data.profile.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href={data.profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href={`mailto:${data.profile.email}`} className="text-gray-500 hover:text-white transition-colors">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Aman Dubey. All rights reserved.<br/>
          Built with React, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
