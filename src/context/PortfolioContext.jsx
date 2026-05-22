import React, { createContext, useState, useContext, useEffect } from "react";
import { initialData } from "../data/initialData";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  // Global State for Portfolio Data
  const [data, setData] = useState(() => {
    // Try to load from localStorage first for persistence in admin edits
    const saved = localStorage.getItem("portfolioData");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialData;
      }
    }
    return initialData;
  });

  // Global State for Theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? false : true; // default to dark
  });

  // Update localStorage when data changes
  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
  }, [data]);

  // Update HTML class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Update specific sections (Mock API calls)
  const updateProfile = (newProfile) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, ...newProfile } }));
  };

  const updateAbout = (newAbout) => {
    setData((prev) => ({ ...prev, about: { ...prev.about, ...newAbout } }));
  };

  const updateSkills = (newSkills) => {
    setData((prev) => ({ ...prev, skills: newSkills }));
  };

  const updateProjects = (newProjects) => {
    setData((prev) => ({ ...prev, projects: newProjects }));
  };

  const value = {
    data,
    isDarkMode,
    toggleTheme,
    updateProfile,
    updateAbout,
    updateSkills,
    updateProjects,
    // We can add more update functions as needed for Experience, Certifications, etc.
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
