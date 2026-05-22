import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const ExperienceAdmin = () => {
  const { data, updateExperience, updateCertifications } = usePortfolio();
  
  const [experience, setExperience] = useState([...data.experience]);
  const [certifications, setCertifications] = useState([...data.certifications]);

  // --- Experience Handlers ---
  const handleExpChange = (index, field, value) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    setExperience(updated);
  };

  const handleAddExp = () => {
    setExperience([...experience, {
      id: `exp-${Date.now()}`,
      role: "New Role",
      company: "Company Name",
      duration: "2024 - Present",
      description: "Description of your responsibilities and achievements."
    }]);
  };

  const handleDeleteExp = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  // --- Certification Handlers ---
  const handleCertChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    setCertifications(updated);
  };

  const handleAddCert = () => {
    setCertifications([...certifications, {
      id: `cert-${Date.now()}`,
      title: "New Certification",
      issuer: "Issuing Organization",
      date: "2024",
      link: "#"
    }]);
  };

  const handleDeleteCert = (index) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    updateExperience(experience);
    updateCertifications(certifications);
    alert("Experience and Certifications saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <div>
          <h2 className="text-xl font-bold">Experience & Certifications</h2>
          <p className="text-sm text-gray-500">Manage your work history and credentials.</p>
        </div>
        <button onClick={handleSave} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-lg">
          Save All
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Experience Column */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold border-b border-transparent dark:text-white">Work Experience</h3>
            <button onClick={handleAddExp} className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
              + Add Exp
            </button>
          </div>
          
          {experience.map((exp, index) => (
            <div key={exp.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative">
              <button onClick={() => handleDeleteExp(index)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 font-semibold text-sm">
                Delete
              </button>
              
              <div className="space-y-3 mt-2">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-500">Role / Job Title</label>
                  <input type="text" value={exp.role} onChange={(e) => handleExpChange(index, "role", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm font-semibold" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-500">Company</label>
                    <input type="text" value={exp.company} onChange={(e) => handleExpChange(index, "company", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-500">Duration</label>
                    <input type="text" value={exp.duration} onChange={(e) => handleExpChange(index, "duration", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-500">Description</label>
                  <textarea value={exp.description} onChange={(e) => handleExpChange(index, "description", e.target.value)} rows={3} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                </div>
              </div>
            </div>
          ))}
          {experience.length === 0 && <p className="text-gray-500 text-center py-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">No experience entries.</p>}
        </div>

        {/* Certifications Column */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold border-b border-transparent dark:text-white">Certifications</h3>
            <button onClick={handleAddCert} className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
              + Add Cert
            </button>
          </div>

          {certifications.map((cert, index) => (
            <div key={cert.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative">
              <button onClick={() => handleDeleteCert(index)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 font-semibold text-sm">
                Delete
              </button>
              
              <div className="space-y-3 mt-2">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-500">Certification Title</label>
                  <input type="text" value={cert.title} onChange={(e) => handleCertChange(index, "title", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm font-semibold" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-500">Issuer / Organization</label>
                    <input type="text" value={cert.issuer} onChange={(e) => handleCertChange(index, "issuer", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-500">Date</label>
                    <input type="text" value={cert.date} onChange={(e) => handleCertChange(index, "date", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-500">Credential Link</label>
                  <input type="text" value={cert.link} onChange={(e) => handleCertChange(index, "link", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-blue-500 text-sm" />
                </div>
              </div>
            </div>
          ))}
          {certifications.length === 0 && <p className="text-gray-500 text-center py-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">No certifications.</p>}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
