export const portfolioData = {
  personal: {
    name: "Vinay Sai Chelupuri",
    title: "Software Engineer",
    tagline:
      "Building scalable web and mobile applications with the balance of a panda",
    email: "vinaysaichelupuri@gmail.com",
    location: "Warangal, Telangana, India",
    bio: "I'm Vinay Sai, a full-stack developer with hands-on experience in building both web and mobile applications using MERN stack, NestJS, Firebase, and React Native. Skilled in designing scalable APIs, developing real-time features, and creating responsive UIs. Strong problem-solving mindset and proven ability to deliver end-to-end projects with clean, maintainable code and focus on accessibility. Deeply interested in app development, as I enjoy creating applications that can solve real-world problems and provide value to users.",
  },

  social: {
    github: "https://github.com/vinaysaichelupuri",
    linkedin: "https://www.linkedin.com/in/vinay-sai-chelupuri-085642277/",
    email: "vinaysaichelupuri@gmail.com",
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
        { name: "Azure Services", icon: "🌩️", level: 75 },
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
        { name: "HubSpot", icon: "🟠", level: 80 },
        { name: "Accessibility", icon: "♿", level: 82 },
      ],
    },
  ],

  projects: [
    {
      id: 12,
      title: "AI-Insta - AI Content Automation Platform",
      description:
        "An autonomous AI-powered content automation platform that plans, generates, renders, and publishes Instagram carousel content. Built with a React frontend and Node.js backend, the platform automates topic planning, content generation, and carousel design. It utilizes browser automation and HTML-based templates to render high-quality 1080×1350 images, which are programmatically published to Instagram using the Instagram Graph API.",
      image: "/images/project-ai-insta.jpg",
      tags: [
        "React",
        "Node.js",
        "Instagram Graph API",
        "Browser Automation",
        "AI Agents",
      ],
      github: "https://github.com/vinaysaichelupuri",
      featured: true,
    },
    {
      id: 11,
      title: "GramoPhone - Offline Music Player",
      description:
        "Built this Android-first offline music app using AI Architect + Developer agents. Planned, generated, and integrated features end-to-end with agent-driven development.",
      image: "/images/project-gramophone.png",
      tags: [
        "React Native",
        "TypeScript",
        "AI Agents",
        "Spec Driven Development",
      ],
      github: "https://github.com/vinaysaichelupuri/gramophone",
      demo: "https://expo.dev/artifacts/eas/bqoxWXNxKsAs3CaeNJDHYY.apk",
      featured: true,
    },
    {
      id: 10,
      title: "AI Chatbot with RAG - Personal AI Assistant",
      description:
        "A full-stack AI chatbot that answers questions about me using Retrieval-Augmented Generation (RAG). The application retrieves relevant information from a custom knowledge base and uses a local LLM to generate contextual responses. Built with a React chat interface and a Node.js backend integrated with a local Llama 3 model via Ollama.",
      image: "/images/project-ai-chatbot.png",
      tags: [
        "React",
        "Node.js",
        "Express",
        "Llama3",
        "Ollama",
        "RAG",
        "AI",
        "LLM",
      ],
      github: "https://github.com/vinaysaichelupuri/chatbot-monorepo",
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
      id: 6,
      title: "TypeRush - Typing Speed Game",
      description:
        "A simple typing game application that helps users improve their typing speed and accuracy through interactive challenges. Track your WPM and accuracy in real-time.",
      image: "/images/project-typerush.png",
      tags: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/vinaysaichelupuri/TypeRush",
      demo: "https://typerush.in/",
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
      demo: "https://securepad.vinaysaichelupuri.com/",
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
      demo: "https://story-estimator.vinaysaichelupuri.com",
      featured: false,
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
  ],

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Foundation Education - HubSpot and Stripe integration",
      location: "Onsite",
      period: "March 2026 - June 2026",
      description:
        "Designed and delivered a multi-brand billing orchestration platform integrating HubSpot CRM, Stripe, and Azure to automate sales and support team billing workflows.",
      achievements: [
        "Designed webhook-driven subscription workflows using SDD, supporting various cancellation scenarios.",
        "Built event-driven synchronization between Stripe and HubSpot for subscription lifecycle events.",
        "Implemented Azure Table Storage for persistent webhook events, improving reliability and auditability.",
        "Integrated private Azure PostgreSQL infrastructure and automated schema migrations via GitHub Actions.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer - Liively Platform",
      company: "Everest Engineering",
      location: "Onsite",
      period: "July 2024 - Feb 2026",
      description:
        "Contributed to a production-grade food delivery and vendor management platform used by hospitality and event services across Australia and UAE.",
      achievements: [
        "Developed order management workflows and complex vendor refund logic using NestJS.",
        "Implemented real-time order tracking and notifications using Socket.IO.",
        "Optimized database queries and APIs to improve application performance and reliability.",
        "Deployed and maintained backend services on AWS with CI/CD pipelines using GitHub Actions and Jenkins.",
        "Practiced Test Driven Development (TDD) using Jest within an Agile development environment.",
      ],
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "Everest Engineering",
      location: "Onsite",
      period: "Feb 2024 - June 2024",
      description:
        "Gained hands-on experience in full-stack software development and learned to apply skills to real-world projects.",
      achievements: [
        "Built full-stack features using the MERN stack and React Native.",
        "Implemented authentication systems, REST APIs, and database integrations with MongoDB and PostgreSQL.",
        "Learned Docker, CI/CD workflows, version control, and clean code practices.",
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
