import React from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../../context/PortfolioContext";

const Dashboard = () => {
  const { data } = usePortfolio();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Welcome, {data.profile.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Total Projects</h3>
          <p className="text-4xl font-bold mt-2 neon-text">{data.projects.length}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Skills Categories</h3>
          <p className="text-4xl font-bold mt-2 neon-text">{data.skills.length}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Certifications</h3>
          <p className="text-4xl font-bold mt-2 neon-text">{data.certifications.length}</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Portfolio Management</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/admin/profile" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors text-left flex flex-col items-start">
            <h4 className="text-lg font-bold mb-1">Profile & About</h4>
            <p className="text-sm text-gray-500">Edit your name, photo, bio, and social links.</p>
          </Link>
          <Link to="/admin/projects" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors text-left flex flex-col items-start">
            <h4 className="text-lg font-bold mb-1">Projects</h4>
            <p className="text-sm text-gray-500">Add or edit your portfolio projects.</p>
          </Link>
          <Link to="/admin/skills" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors text-left flex flex-col items-start">
            <h4 className="text-lg font-bold mb-1">Skills</h4>
            <p className="text-sm text-gray-500">Manage your skills and proficiency levels.</p>
          </Link>
          <Link to="/admin/experience" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors text-left flex flex-col items-start">
            <h4 className="text-lg font-bold mb-1">Experience</h4>
            <p className="text-sm text-gray-500">Update your work history and certifications.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
