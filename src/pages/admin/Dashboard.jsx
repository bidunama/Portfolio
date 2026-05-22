import React from "react";
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
      
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-4">Quick Edit Profile Info</h3>
        <p className="text-sm text-gray-500 mb-4">This dashboard will later be integrated with a FastAPI backend to persist changes.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" value={data.profile.name} disabled className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Intro</label>
            <textarea value={data.profile.intro} disabled rows={4} className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
