export const initialData = {
  profile: {
    name: "Aman Dubey",
    roles: [
      "AI/ML Engineer",
      "Full Stack Developer",
      "Python Backend Developer",
    ],
    intro:
      "Passionate AI/ML enthusiast focused on building intelligent full-stack applications, backend systems, and AI-powered solutions using Python, React.js, and FastAPI.",
    phone: "+91-8076737655",
    email: "amandubey5003@gmail.com",
    github: "https://github.com/bidunama",
    linkedin: "https://www.linkedin.com/in/aman-dubey-9b52771ba/",
    avatar: "https://via.placeholder.com/300x300.png?text=Aman+Dubey", // Placeholder
    resumeLink: "#", // Update later
  },
  about: {
    education: "B.Tech CSE (AI & ML) student at Galgotias University",
    interests:
      "Interest in AI, backend development, and scalable applications. Strong focus on problem solving and full-stack AI systems.",
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "AI/ML",
      items: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Machine Learning", level: 80 },
      ],
    },
    {
      category: "Database & Tools",
      items: [
        { name: "MySQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
      ],
    },
  ],
  projects: [
    {
      id: "tradai",
      title: "Tradai — AI Trading Platform",
      description:
        "AI-powered stock market prediction and analysis platform using real-time and historical market data for ML-based trend analysis and forecasting.",
      image: "https://via.placeholder.com/600x400.png?text=Tradai", // Placeholder
      technologies: ["React.js", "FastAPI", "Machine Learning", "Python"],
      githubLink: "https://github.com/bidunama/tradai",
      liveLink: "#", // Placeholder
      featured: true,
    },
    {
      id: "ai-assistant",
      title: "AI Chatbot Assistant",
      description:
        "Future placeholder for a conversational AI assistant project.",
      image: "https://via.placeholder.com/600x400.png?text=AI+Assistant",
      technologies: ["Python", "TensorFlow", "NLP"],
      githubLink: "#",
      liveLink: "#",
      featured: false,
    },
  ],
  experience: [
    {
      id: "aws-intern",
      role: "Gen-AI Virtual Intern",
      company: "AWS Academy",
      duration: "2023 - 2024",
      description: "Worked on Generative AI concepts and cloud applications.",
    },
    {
      id: "eduskills-intern",
      role: "AI-ML Virtual Intern",
      company: "EduSkills",
      duration: "2023 - 2024",
      description: "Gained hands-on experience in Machine Learning algorithms and AI systems development.",
    },
  ],
  achievements: [
    { label: "DSA Problems Solved", value: 150, platform: "LeetCode & GFG" },
    { label: "Projects Completed", value: 10, platform: "" },
    { label: "Technologies Learned", value: 15, platform: "" },
  ],
  certifications: [
    {
      id: "azure-openai",
      title: "Custom AI Training with Azure OpenAI Studio",
      issuer: "Microsoft",
      date: "2024",
      link: "#",
    },
    {
      id: "deloitte-data",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      link: "#",
    },
  ],
};
