import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';

import PortfolioLayout from './layouts/PortfolioLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          {/* Public Portfolio Routes */}
          <Route path="/" element={<PortfolioLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            {/* Future routes: /admin/projects, /admin/skills, etc. */}
          </Route>
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
