import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const ProjectsAdmin = () => {
  const { data, updateProjects } = usePortfolio();
  const [projects, setProjects] = useState([...data.projects]);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjects(updatedProjects);
  };

  const handleTechnologiesChange = (index, value) => {
    // Convert comma separated string to array
    const techs = value.split(",").map(t => t.trim()).filter(t => t);
    const updatedProjects = [...projects];
    updatedProjects[index].technologies = techs;
    setProjects(updatedProjects);
  };

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProjects = [...projects];
        updatedProjects[index].image = reader.result;
        setProjects(updatedProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = () => {
    const newProject = {
      id: `proj-${Date.now()}`,
      title: "New Project",
      description: "Description of the new project.",
      image: "",
      technologies: ["React", "Tailwind"],
      githubLink: "#",
      liveLink: "#",
      featured: false,
    };
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSave = () => {
    updateProjects(projects);
    alert("Projects saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <div>
          <h2 className="text-xl font-bold">Projects Editor</h2>
          <p className="text-sm text-gray-500">Add, edit, or remove your portfolio projects.</p>
        </div>
        <div className="space-x-3">
          <button onClick={handleAddProject} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow-sm">
            + Add Project
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-lg">
            Save All
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 relative">
            <button 
              onClick={() => handleDeleteProject(index)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-700">Project: {project.title}</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/3">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg border dark:border-gray-700 mb-2" />
                ) : (
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 mb-2">No Image</div>
                )}
                <label className="block text-sm font-medium mb-1">Upload Project Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(index, e)} className="w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300" />
              </div>

              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input type="text" value={project.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea value={project.description} onChange={(e) => handleProjectChange(index, "description", e.target.value)} rows={3} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                  <input type="text" value={project.technologies.join(", ")} onChange={(e) => handleTechnologiesChange(index, e.target.value)} placeholder="React, Tailwind, Node.js" className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">GitHub Link</label>
                  <input type="text" value={project.githubLink} onChange={(e) => handleProjectChange(index, "githubLink", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Live Link</label>
                  <input type="text" value={project.liveLink} onChange={(e) => handleProjectChange(index, "liveLink", e.target.value)} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <input type="checkbox" checked={project.featured} onChange={(e) => handleProjectChange(index, "featured", e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label className="text-sm font-medium">Featured Project (shows on home page)</label>
                </div>
              </div>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <div className="text-center p-8 text-gray-500 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            No projects added yet. Click "+ Add Project" to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
