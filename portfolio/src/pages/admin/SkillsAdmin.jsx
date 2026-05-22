import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const SkillsAdmin = () => {
  const { data, updateSkills } = usePortfolio();
  
  // We need a deep copy of skills to edit them locally
  const [skills, setSkills] = useState(JSON.parse(JSON.stringify(data.skills)));

  const handleCategoryNameChange = (catIndex, value) => {
    const newSkills = [...skills];
    newSkills[catIndex].category = value;
    setSkills(newSkills);
  };

  const handleSkillChange = (catIndex, skillIndex, field, value) => {
    const newSkills = [...skills];
    newSkills[catIndex].items[skillIndex][field] = field === "level" ? Number(value) : value;
    setSkills(newSkills);
  };

  const handleAddCategory = () => {
    setSkills([...skills, { category: "New Category", items: [] }]);
  };

  const handleDeleteCategory = (catIndex) => {
    setSkills(skills.filter((_, i) => i !== catIndex));
  };

  const handleAddSkill = (catIndex) => {
    const newSkills = [...skills];
    newSkills[catIndex].items.push({ name: "New Skill", level: 50 });
    setSkills(newSkills);
  };

  const handleDeleteSkill = (catIndex, skillIndex) => {
    const newSkills = [...skills];
    newSkills[catIndex].items = newSkills[catIndex].items.filter((_, i) => i !== skillIndex);
    setSkills(newSkills);
  };

  const handleSave = () => {
    updateSkills(skills);
    alert("Skills saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <div>
          <h2 className="text-xl font-bold">Skills Editor</h2>
          <p className="text-sm text-gray-500">Manage your skill categories and proficiency levels.</p>
        </div>
        <div className="space-x-3">
          <button onClick={handleAddCategory} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow-sm">
            + Add Category
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-lg">
            Save All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skills.map((category, catIndex) => (
          <div key={catIndex} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 relative">
            <button 
              onClick={() => handleDeleteCategory(catIndex)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 font-semibold text-sm"
            >
              Delete Category
            </button>
            
            <div className="mb-4 pr-24">
              <label className="block text-sm font-medium mb-1">Category Name</label>
              <input 
                type="text" 
                value={category.category} 
                onChange={(e) => handleCategoryNameChange(catIndex, e.target.value)} 
                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 font-bold" 
              />
            </div>

            <div className="space-y-3 mt-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                  <input 
                    type="text" 
                    value={skill.name} 
                    onChange={(e) => handleSkillChange(catIndex, skillIndex, "name", e.target.value)} 
                    className="flex-1 p-1.5 text-sm border rounded bg-white dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" 
                    placeholder="Skill Name"
                  />
                  <div className="flex items-center space-x-1 w-24">
                    <input 
                      type="number" 
                      min="0" max="100" 
                      value={skill.level} 
                      onChange={(e) => handleSkillChange(catIndex, skillIndex, "level", e.target.value)} 
                      className="w-16 p-1.5 text-sm border rounded bg-white dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 text-center" 
                    />
                    <span className="text-xs text-gray-500">%</span>
                  </div>
                  <button 
                    onClick={() => handleDeleteSkill(catIndex, skillIndex)}
                    className="p-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                    title="Remove Skill"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handleAddSkill(catIndex)}
              className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors text-sm font-medium"
            >
              + Add Skill
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAdmin;
