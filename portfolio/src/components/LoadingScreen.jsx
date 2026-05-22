import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit after reaching 100% before unmounting
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] bg-bg-dark flex flex-col items-center justify-center font-mono text-neon-cyan"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          {/* Rotating AI Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-neon-purple"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-neon-cyan"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Central Logo / Icon */}
          <motion.div 
            className="text-4xl font-bold text-white neon-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
          >
            AD
          </motion.div>
        </div>

        <div className="text-xl tracking-widest mb-4 uppercase">
          Initializing System
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-400">
          {progress}% LOADED
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
