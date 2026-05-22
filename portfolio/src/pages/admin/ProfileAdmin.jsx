import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const ProfileAdmin = () => {
  const { data, updateProfile, updateAbout } = usePortfolio();

  // Local state for editing profile
  const [profileData, setProfileData] = useState({
    name: data.profile.name,
    intro: data.profile.intro,
    avatar: data.profile.avatar,
    phone: data.profile.phone,
    email: data.profile.email,
    github: data.profile.github,
    linkedin: data.profile.linkedin,
    resumeLink: data.profile.resumeLink,
  });

  const [aboutData, setAboutData] = useState({
    education: data.about.education,
    interests: data.about.interests,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateProfile(profileData);
    updateAbout(aboutData);
    alert("Profile and About information saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <div>
          <h2 className="text-xl font-bold">Profile & About Editor</h2>
          <p className="text-sm text-gray-500">Update your basic information here.</p>
        </div>
        <button onClick={handleSave} className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-lg">
          Save Changes
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-700">Basic Information</h3>
        
        <div className="flex items-center space-x-4 mb-6">
          <img src={profileData.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700" />
          <div>
            <label className="block text-sm font-medium mb-1">Upload New Photo</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="name" value={profileData.name} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="text" name="phone" value={profileData.phone} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" value={profileData.email} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Resume Link</label>
            <input type="text" name="resumeLink" value={profileData.resumeLink} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">GitHub Link</label>
            <input type="text" name="github" value={profileData.github} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">LinkedIn Link</label>
            <input type="text" name="linkedin" value={profileData.linkedin} onChange={handleProfileChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Intro</label>
          <textarea name="intro" value={profileData.intro} onChange={handleProfileChange} rows={4} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2 dark:border-gray-700">About Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Education</label>
            <input type="text" name="education" value={aboutData.education} onChange={handleAboutChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Interests</label>
            <textarea name="interests" value={aboutData.interests} onChange={handleAboutChange} rows={3} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
