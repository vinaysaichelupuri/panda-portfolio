export const portfolioData = {
  personal: {
    name: "Vinay Sai Chelupuri",
    title: "Software Engineer",
    tagline:
      "Building scalable web and mobile applications with the balance of a panda 🐼",
    email: "chelupurivinaysai02@gmail.com",
    location: "Warangal, India",
    bio: "I'm a full-stack developer with hands-on experience in building both web and mobile applications using MERN stack, NestJS, Firebase, and React Native. Skilled in designing scalable APIs, developing real-time features, and creating responsive UIs. Strong problem-solving mindset and proven ability to deliver end-to-end projects with clean, maintainable code and focus on accessibility. Deeply interested in app development, as I enjoy creating applications that can solve real-world problems and provide value to users.",
  },

  social: {
    github: "https://github.com/vinaysaichelupuri",
    linkedin: "https://www.linkedin.com/in/vinay-sai-chelupuri-085642277/",
    email: "mailto:chelupurivinaysai02@gmail.com",
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "React Native", icon: "📱", level: 88 },
        { name: "TypeScript", icon: "📘", level: 90 },
        { name: "JavaScript", icon: "🟨", level: 92 },
        { name: "HTML/CSS", icon: "🎨", level: 95 },
        { name: "Material-UI", icon: "💎", level: 85 },
        { name: "Figma", icon: "🎯", level: 80 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Express", icon: "🚂", level: 88 },
        { name: "NestJS", icon: "🦅", level: 85 },
        { name: "GraphQL", icon: "◈", level: 82 },
        { name: "REST API", icon: "🔌", level: 92 },
        { name: "Socket.io", icon: "🔄", level: 85 },
      ],
    },
    {
      category: "Database & DevOps",
      items: [
        { name: "MongoDB", icon: "🍃", level: 88 },
        { name: "PostgreSQL", icon: "🐘", level: 85 },
        { name: "Firebase", icon: "🔥", level: 83 },
        { name: "Docker", icon: "🐳", level: 80 },
        { name: "AWS", icon: "☁️", level: 78 },
        { name: "CI/CD", icon: "🔄", level: 82 },
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        { name: "Git/GitHub", icon: "🔀", level: 92 },
        { name: "Jest/TDD", icon: "🧪", level: 85 },
        { name: "Agile", icon: "🏃", level: 88 },
        { name: "Clean Code", icon: "✨", level: 90 },
        { name: "Stripe", icon: "💳", level: 85 },
        { name: "Accessibility", icon: "♿", level: 82 },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Hanami - E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, product showcase, wishlist, cart management, and seamless checkout flow.",
      image: "/images/project-hanami.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      github: "https://github.com/vinaysaichelupuri/Hanami",
      demo: "https://hanami-4aav.onrender.com",
      featured: true,
    },
    {
      id: 2,
      title: "QuickChat - Real-time Chat Application",
      description:
        "A real-time mobile chatting application built with React and Firebase, featuring user authentication, profile management, notifications, single login, and encrypted messaging powered by Socket.IO.",
      image: "/images/project-quickchat.png",
      tags: ["React", "Firebase", "PostgreSQL", "Socket.io", "Node.js"],
      github: "https://github.com/NikithaMedikonda/quickchat-frontend",
      featured: true,
    },
    {
      id: 3,
      title: "PetBuddy - Pet Management System",
      description:
        "A mobile application designed to help pet owners manage their pets' health, appointments, and daily activities. Features reminders, activity logging, emergency contacts, and photo gallery.",
      image: "/images/project-petbuddy.png",
      tags: ["React Native", "MongoDB", "Node.js", "Express"],
      github: "https://github.com/vinaysaichelupuri/PetBuddy",
      featured: true,
    },
    {
      id: 5,
      title: "RetroBoard - Team Retrospective Tool",
      description:
        "A simple retro board application that allows users to create and manage retrospectives, providing a platform for team collaboration and feedback with real-time updates.",
      image: "/images/project-retroboard.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/vinaysaichelupuri/RetroBoard",
      demo: "https://retroboard-3vps.onrender.com/",
      featured: false,
    },
    {
      id: 6,
      title: "TypeRush - Typing Speed Game",
      description:
        "A simple typing game application that helps users improve their typing speed and accuracy through interactive challenges. Track your WPM and accuracy in real-time.",
      image: "/images/project-typerush.png",
      tags: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/vinaysaichelupuri/TypeRush",
      demo: "https://typerush-6hvs.onrender.com/",
      featured: false,
    },
    {
      id: 7,
      title: "Vinvert - Image Converter",
      description:
        "A simple image converter application that converts image formats from one to another and reduces the size of images. Supports multiple formats including JPG, PNG, and WebP.",
      image: "/images/project-vinvert.png",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/vinaysaichelupuri/Vinvert",
      demo: "https://vinvert.onrender.com/",
      featured: false,
    },
    {
      id: 8,
      title: "SecurePad - Password-Protected Notes",
      description:
        "Simple password-protected text editor with cloud sync. Enter your password to access your secure writing space. Built with React and Firebase for real-time synchronization.",
      image: "/images/project-securepad.png",
      tags: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/vinaysaichelupuri/securepad",
      demo: "https://securepad.onrender.com/",
      featured: false,
    },
    {
      id: 9,
      title: "Story-Estimater - Scrum Planning Tool",
      description:
        "Story Estimater is a simple and intuitive Scrum story estimation application designed to help agile teams estimate story points efficiently and collaborate better during planning sessions.",
      image: "/images/project-story-estimater.png",
      tags: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/vinaysaichelupuri/story-estimater",
      demo: "https://story-estimater.vercel.app/",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Everest Engineering",
      location: "Onsite",
      period: "July 2024 - Present",
      description:
        "Delivering high-quality, scalable, and maintainable software solutions. Contributing to projects by applying strong problem-solving skills and technical expertise to efficiently achieve objectives.",
      achievements: [
        "Built production-grade features for Liively food delivery platform",
        "Optimized API performance and implemented database migrations",
        "Enhanced user experience through UI improvements and workflow optimization",
        "Committed to continuous learning and adoption of emerging technologies",
      ],
    },
    {
      id: 2,
      title: "Curious Intern",
      company: "Everest Engineering",
      location: "Onsite",
      period: "Feb 2024 - June 2024",
      description:
        "Gained hands-on experience in software development and learned to apply skills to real-world projects. Worked closely with teams to improve collaboration and communication abilities.",
      achievements: [
        "Learned Git, GitHub, CI/CD, Docker, and AWS",
        "Developed skills in React, React Native, Node.js, and databases",
        "Practiced TDD, Agile methodologies, and Clean Code principles",
        "Built strong foundation in full-stack development",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
      period: "2020 - 2024",
      description:
        "Focused on electrical engineering fundamentals while developing passion for software development and technology.",
    },
  ],

  certifications: [
    {
      name: "Stripe Certified Associate Developer",
      issuer: "Stripe",
      date: "April 2025",
    },
    {
      name: "Stripe Certified Professional Developer",
      issuer: "Stripe",
      date: "April 2025",
    },
    {
      name: "Stripe Certified Billing Developer",
      issuer: "Stripe",
      date: "April 2025",
    },
    {
      name: "AWS AI Practitioner",
      issuer: "AWS",
      date: "April 2025",
    },
  ],
};
