import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';

import PortfolioLayout from './layouts/PortfolioLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import ProfileAdmin from './pages/admin/ProfileAdmin';
import ProjectsAdmin from './pages/admin/ProjectsAdmin';
import SkillsAdmin from './pages/admin/SkillsAdmin';
import ExperienceAdmin from './pages/admin/ExperienceAdmin';

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
            <Route path="profile" element={<ProfileAdmin />} />
            <Route path="projects" element={<ProjectsAdmin />} />
            <Route path="skills" element={<SkillsAdmin />} />
            <Route path="experience" element={<ExperienceAdmin />} />
          </Route>
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
