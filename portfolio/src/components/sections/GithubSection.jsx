import React, { useEffect, useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

const GithubSection = () => {
  const { data } = usePortfolio();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from GitHub API using data.profile.github username
    // Here we use mock data to represent pinned repositories
    const mockRepos = [
      {
        id: 1,
        name: "tradai",
        description: "AI-powered stock market prediction and analysis platform.",
        language: "Python",
        stars: 24,
        forks: 5,
        url: "https://github.com/bidunama/tradai"
      },
      {
        id: 2,
        name: "ai-assistant-api",
        description: "FastAPI backend for generative AI conversational assistant.",
        language: "Python",
        stars: 18,
        forks: 3,
        url: "#"
      },
      {
        id: 3,
        name: "portfolio-v2",
        description: "Next-generation futuristic personal portfolio with dashboard.",
        language: "JavaScript",
        stars: 12,
        forks: 2,
        url: "#"
      }
    ];

    setTimeout(() => {
      setRepos(mockRepos);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="github" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaGithub className="text-5xl text-gray-800 dark:text-gray-200" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-300 dark:to-gray-100">
              Open Source
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Featured repositories from GitHub</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaGithub className="text-xl" />
                  <a href={repo.url} target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-neon-blue transition-colors truncate">
                    {repo.name}
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mt-auto">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-pointer"><FaStar /> {repo.stars}</span>
                    <span className="flex items-center gap-1 hover:text-neon-cyan transition-colors cursor-pointer"><FaCodeBranch /> {repo.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a href={data.profile.github} target="_blank" rel="noreferrer">
            <button className="btn-outline">View GitHub Profile</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
