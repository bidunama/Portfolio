import React from "react";
import { Outlet, Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";

const AdminLayout = () => {
  const { isDarkMode, toggleTheme } = usePortfolio();

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold neon-text">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</Link>
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 mt-auto text-blue-500">View Portfolio</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <div className="p-6 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
