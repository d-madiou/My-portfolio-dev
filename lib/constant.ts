import { InfoCardData } from "@/types/types";
import Image1 from "@/assets/images/Image1.jpeg";
import Image2 from "@/assets/images/Image2.jpeg";
import Image3 from "@/assets/images/Image3.jpeg";
import { 
  ReactIcon, NextJSIcon, TypeScriptIcon, TailwindCSSIcon, 
  ViteIcon, FigmaIcon, ReactNativeIcon, NodeJSIcon, PythonIcon, 
  FlaskIcon, DockerIcon, PostgreSQLIcon, GoogleCloudIcon, 
  TensorFlowIcon, PyTorchIcon, PandasIcon, NumPyIcon 
} from '@/components/layout/Icon';
import React from "react";

import  Tolimo1  from '@/assets/images/tolimoo/1.png';
import  Tolimo2  from '@/assets/images/tolimoo/2.png';
import  Tolimo3 from '@/assets/images/tolimoo/3.png';


const ABOUT_CONTENT: InfoCardData[] = [
  {
    id: 'frontend',
    title: "I help you with your frontend development",
    description: "Crafting responsive and dynamic web applications using React, Next.js, and TypeScript. Passionate about creating seamless user experiences.",
    position: 'top',
    image: Image1,
  },
  {
    id: 'data-science',
    title: "Data-Driven Insights",
    description: "Leveraging ML models and statistical analysis to extract actionable insights from complex datasets. Skilled in Python, Pandas, and Scikit-learn.",
    position: 'right',
    image: Image2,
  },
  {
    id: 'backend',
    title: "Robust System Architecture",
    description: "Designing scalable backend systems with Node.js and Python. Proficient in containerization with Docker and CI/CD pipelines.",
    position: 'bottom',
    image: Image3,
  },
  {
    id: 'full-stack',
    title: "End-to-End Development",
    description: "Bridging data science and software engineering to deliver complete, production-ready applications that are both smart and performant.",
    position: 'left',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=400&auto=format&fit=crop',
  },
];

export const TECH_SERVICES_DATA = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: React.createElement(ReactIcon, { className: "w-10 h-10" }) },
      { name: 'Next.js', icon: React.createElement(NextJSIcon, { className: "w-10 h-10" }) },
      { name: 'TypeScript', icon: React.createElement(TypeScriptIcon, { className: "w-10 h-10" }) },
      { name: 'Tailwind CSS', icon: React.createElement(TailwindCSSIcon, { className: "w-10 h-10 text-cyan-400" }) },
      { name: 'Vite', icon: React.createElement(ViteIcon, { className: "w-10 h-10" }) },
      { name: 'Figma', icon: React.createElement(FigmaIcon, { className: "w-10 h-10" }) },
      { name: 'React Native', icon: React.createElement(ReactNativeIcon, { className: "w-10 h-10" }) },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: React.createElement(NodeJSIcon, { className: "w-10 h-10" }) },
      { name: 'Python', icon: React.createElement(PythonIcon, { className: "w-10 h-10" }) },
      { name: 'Flask', icon: React.createElement(FlaskIcon, { className: "w-10 h-10" }) },
      { name: 'Docker', icon: React.createElement(DockerIcon, { className: "w-10 h-10" }) },
      { name: 'PostgreSQL', icon: React.createElement(PostgreSQLIcon, { className: "w-10 h-10" }) },
      { name: 'Google Cloud', icon: React.createElement(GoogleCloudIcon, { className: "w-10 h-10" }) },
    ],
  },
  {
    category: 'Data Science',
    technologies: [
      { name: 'TensorFlow', icon: React.createElement(TensorFlowIcon, { className: "w-10 h-10" }) },
      { name: 'PyTorch', icon: React.createElement(PyTorchIcon, { className: "w-10 h-10" }) },
      { name: 'Python', icon: React.createElement(PythonIcon, { className: "w-10 h-10" }) },
      { name: 'Pandas', icon: React.createElement(PandasIcon, { className: "w-10 h-10" }) },
      { name: 'NumPy', icon: React.createElement(NumPyIcon, { className: "w-10 h-10" }) },
    ],
  },
];

// Project Type Definition
export interface Project {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Data Science' | 'Mobile';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  techIcons: React.ReactElement[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string;
  outcome: string;
  duration: string;
  role: string;
  year: string;
  keyTechnicalAchievements?: string[];
  architecture?: {
    frontend: string;
    backend: string;
    authentication: string;
    deployment: string;
    streaming: string;
  };
  userJourney?: string[];
  metrics?: {
    codebase: string;
    apiEndpoints: string;
    databaseTables: string;
    responseTime: string;
    uptime: string;
    features: string;
  };
  technicalHighlights?: {
    feature: string;
    description: string;
    tech: string[];
  }[];
  screenshots?: {
    title: string;
    description: string;
    url: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

// Projects Data
export const PROJECTS_DATA: Project[] = [
  {
  id: 'tolimoo-sport-platform',
  title: 'Tolimoo – Sports Prediction & Community Platform',
  category: 'Full Stack',
  description: 'Gamified sports prediction platform with real-time match streaming, community fanzones, and competitive leaderboards for football fans.',
  longDescription: 'A comprehensive sports engagement platform that combines prediction challenges, live match streaming, and social features. Users compete in daily prediction challenges, watch live sports through multiple streaming sources, create and join fanzones, and climb global leaderboards while earning points and badges.',
  image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop',
  technologies: [
    'Next.js 14',
    'TypeScript',
    'TailwindCSS',
    'Django REST Framework',
    'PostgreSQL',
    'Firebase Auth',
    'Redis',
    'Docker',
    'Celery',
    'Framer Motion'
  ],
  techIcons: [
    React.createElement(NextJSIcon, { className: "w-6 h-6" }),
    React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
    React.createElement(TailwindCSSIcon, { className: "w-6 h-6" }),
    React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
  ],
  githubUrl: 'https://github.com/d-madiou/fnazone-pwa',
  liveUrl: 'https://tolimoo.space',
  features: [
    'Real-time sports match predictions with dynamic point systems',
    'Live match streaming with multiple source fallback (M3U8/HLS)',
    'Community fanzones with live chat during matches',
    'Global and friends leaderboards with streak tracking',
    'Firebase & phone number authentication',
    'Daily check-in bonuses and achievement badges',
    'Admin dashboard for challenge creation and result management',
    'PWA support with push notifications',
    'Multi-language support (French primary)',
    'Profile customization with favorite teams'
  ],
  challenges: 'Building a robust live streaming system with automatic API fallback when third-party sources fail, while maintaining smooth user experience. Implemented smart caching and professional fallback content to ensure 100% uptime. Additionally, designed a complex prediction scoring system with real-time leaderboard updates across global, friends, and fanzone rankings.',
  outcome: 'Successfully deployed MVP with complete authentication flow, live streaming integration (streamed.pk API + fallback system), functional prediction engine, and social features. Achieved seamless user onboarding with Google OAuth and phone authentication, real-time match updates, and engaging gamification elements that keep users returning daily.',
  duration: '4 months',
  role: 'Full Stack Developer & Lead Architect',
  year: '2025',
  
  // Additional detailed sections for portfolio
  keyTechnicalAchievements: [
    'Built scalable Django REST API with JWT authentication and refresh token rotation',
    'Implemented Redis caching layer reducing API response times by 70%',
    'Created custom prediction algorithm with dynamic point allocation based on difficulty',
    'Developed professional fallback system for live streaming with 4 hardcoded reliable sources',
    'Integrated Firebase Auth with custom backend user management',
    'Built real-time WebSocket system for match chat and live updates',
    'Implemented Celery background tasks for automated challenge resolution and notifications'
  ],
  
  architecture: {
    frontend: 'Next.js 14 with App Router, TypeScript, Zustand for state management',
    backend: 'Django REST Framework with PostgreSQL, Redis caching, Celery workers',
    authentication: 'Firebase Auth + Custom JWT with phone number verification',
    deployment: 'Docker containers on cloud infrastructure with CI/CD pipeline',
    streaming: 'Third-party API integration with intelligent fallback mechanism'
  },
  
  userJourney: [
    '1. User signs up with phone/Google → Firebase authentication',
    '2. Complete profile setup (avatar, username, favorite teams)',
    '3. Browse daily prediction challenges → Submit predictions before lock time',
    '4. Watch live matches via integrated streaming player',
    '5. Join fanzones, interact with community during live matches',
    '6. Earn points, climb leaderboards, unlock badges and achievements',
    '7. Daily check-ins for bonus points and streak maintenance'
  ],
  
  metrics: {
    codebase: '50,000+ lines of code',
    apiEndpoints: '40+ REST endpoints',
    databaseTables: '15+ PostgreSQL tables with optimized indexes',
    responseTime: 'Average API response < 200ms',
    uptime: '99.9% availability with fallback systems',
    features: '25+ major features across 10 core modules'
  },
  
  technicalHighlights: [
    {
      feature: 'Prediction Engine',
      description: 'Dynamic point allocation system with admin-controlled challenges, automatic result calculation, and real-time ranking updates',
      tech: ['Django ORM', 'PostgreSQL', 'Celery', 'Redis']
    },
    {
      feature: 'Live Streaming',
      description: 'Multi-source streaming with automatic fallback, professional event cards, and 4 hardcoded reliable streams ensuring 100% availability',
      tech: ['M3U8/HLS', 'Smart caching', 'Error handling', 'Fallback system']
    },
    {
      feature: 'Authentication Flow',
      description: 'Seamless auth with Firebase Google OAuth and phone verification, automatic profile completion detection, and JWT token management',
      tech: ['Firebase Auth', 'Django REST JWT', 'Phone OTP', 'Token refresh']
    },
    {
      feature: 'Fanzones',
      description: 'Team-based communities with live chat during matches, post/comment system, and gifting mechanics for monetization',
      tech: ['WebSockets', 'Real-time messaging', 'Django Channels', 'Redis pub/sub']
    }
  ],
  
  screenshots: [
    {
      title: 'Home Feed with Predictions',
      description: 'Daily challenges, trending predictions, and personalized feed',
      url: Tolimo1.src
    },
    {
      title: 'Live Match Streaming',
      description: 'Multi-source streaming with fallback, quality selection, and match details',
      url: Tolimo2.src
    },
    {
      title: 'Leaderboards',
      description: 'Global rankings, friends leaderboard, and fanzone standings',
      url: Tolimo3.src
    },
    {
      title: 'Admin Dashboard',
      description: 'Challenge creation, result management, and analytics',
      url: '/screenshots/tolimoo-admin.png'
    }
  ],
  
  testimonial: {
    quote: "This platform completely changed how I engage with football. The predictions are addictive, and watching matches with my fanzone community makes every game more exciting!",
    author: "Alpha B., Beta Tester",
    role: "Football Fan & Early Adopter"
  }
},
  {
    id: 'health-tracker',
    title: 'Smart Health Tracking App',
    category: 'Mobile',
    description: 'Cross-platform mobile app for tracking fitness goals with ML-powered insights and personalized workout plans.',
    longDescription: 'A comprehensive health and fitness application built with React Native that helps users track their wellness journey. Features include activity tracking, nutrition logging, and AI-generated workout recommendations.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'TensorFlow', 'Docker'],
    techIcons: [
      React.createElement(ReactNativeIcon, { className: "w-6 h-6" }),
      React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
      React.createElement(NodeJSIcon, { className: "w-6 h-6" }),
      React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
      React.createElement(TensorFlowIcon, { className: "w-6 h-6" }),
      React.createElement(DockerIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/yourusername/health-tracker',
    liveUrl: 'https://apps.apple.com/health-tracker',
    features: [
      'Real-time activity and calorie tracking',
      'Personalized workout plans using ML',
      'Nutrition database with barcode scanner',
      'Social features and challenges',
      'Integration with wearable devices',
      'Progress visualization and insights'
    ],
    challenges: 'Ensuring accurate calorie calculations and maintaining smooth performance while processing real-time sensor data from multiple wearable devices.',
    outcome: 'Launched on iOS and Android with 10K+ downloads in first month. Featured in App Store as "App of the Day". 4.8-star average rating.',
    duration: '8 months',
    role: 'Lead Mobile Developer',
    year: '2024'
  },
  {
    id: 'data-visualization',
    title: 'Interactive Data Visualization Dashboard',
    category: 'Data Science',
    description: 'Real-time analytics dashboard for visualizing complex datasets with interactive charts and predictive models.',
    longDescription: 'An enterprise-grade analytics platform that transforms raw data into actionable insights. Built with modern web technologies and powered by advanced machine learning models for predictive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React', 'Python', 'Flask', 'Pandas', 'TensorFlow', 'PostgreSQL'],
    techIcons: [
      React.createElement(ReactIcon, { className: "w-6 h-6" }),
      React.createElement(PythonIcon, { className: "w-6 h-6" }),
      React.createElement(FlaskIcon, { className: "w-6 h-6" }),
      React.createElement(PandasIcon, { className: "w-6 h-6" }),
      React.createElement(TensorFlowIcon, { className: "w-6 h-6" }),
      React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/yourusername/data-viz',
    liveUrl: 'https://dataviz-demo.com',
    features: [
      'Real-time data streaming and visualization',
      'Custom chart builder with drag-and-drop',
      'Predictive analytics with ML models',
      'Export reports in multiple formats',
      'Role-based access control',
      'API for data integration'
    ],
    challenges: 'Processing and visualizing millions of data points in real-time without compromising performance or user experience.',
    outcome: 'Reduced data analysis time by 70% for client teams. Successfully handling 1M+ data points with sub-100ms query times.',
    duration: '5 months',
    role: 'Data Engineer & Frontend Developer',
    year: '2023'
  },
  {
    id: 'portfolio-builder',
    title: 'AI Resume & Portfolio Builder',
    category: 'Frontend',
    description: 'Smart portfolio builder with AI-generated content suggestions and beautiful templates for developers.',
    longDescription: 'A modern web application that helps developers create stunning portfolios and resumes in minutes. Features AI-powered content generation, customizable templates, and one-click deployment.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Figma', 'Vercel'],
    techIcons: [
      React.createElement(NextJSIcon, { className: "w-6 h-6" }),
      React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
      React.createElement(TailwindCSSIcon, { className: "w-6 h-6" }),
      React.createElement(FigmaIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/yourusername/portfolio-builder',
    liveUrl: 'https://portfolio-builder.vercel.app',
    features: [
      'AI-powered content suggestions',
      '20+ professional templates',
      'Real-time preview and editing',
      'One-click deployment to Vercel',
      'Custom domain support',
      'SEO optimization built-in'
    ],
    challenges: 'Creating a flexible template system that allows deep customization while maintaining design consistency and performance.',
    outcome: 'Helped 5000+ developers create professional portfolios. Featured on Product Hunt with 500+ upvotes.',
    duration: '3 months',
    role: 'Frontend Developer & Designer',
    year: '2024'
  },
  {
    id: 'ml-pipeline',
    title: 'Automated ML Pipeline Platform',
    category: 'Data Science',
    description: 'End-to-end machine learning pipeline automation platform with model monitoring and deployment.',
    longDescription: 'A comprehensive MLOps platform that automates the entire machine learning lifecycle from data preprocessing to model deployment and monitoring. Built for data science teams to collaborate efficiently.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Python', 'PyTorch', 'Docker', 'Google Cloud', 'Flask', 'PostgreSQL'],
    techIcons: [
      React.createElement(PythonIcon, { className: "w-6 h-6" }),
      React.createElement(PyTorchIcon, { className: "w-6 h-6" }),
      React.createElement(DockerIcon, { className: "w-6 h-6" }),
      React.createElement(GoogleCloudIcon, { className: "w-6 h-6" }),
      React.createElement(FlaskIcon, { className: "w-6 h-6" }),
      React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/yourusername/ml-pipeline',
    features: [
      'Automated data preprocessing pipelines',
      'Model training with hyperparameter tuning',
      'Real-time model performance monitoring',
      'One-click model deployment',
      'A/B testing framework',
      'Collaborative experiment tracking'
    ],
    challenges: 'Building a scalable infrastructure that can handle multiple concurrent model training jobs while maintaining cost efficiency.',
    outcome: 'Reduced model deployment time from weeks to hours. Currently serving 15+ production ML models with 99.95% uptime.',
    duration: '7 months',
    role: 'ML Engineer & DevOps',
    year: '2023'
  },
  {
    id: 'social-network',
    title: 'Niche Social Network Platform',
    category: 'Full Stack',
    description: 'Real-time social networking platform for creative professionals with integrated portfolio showcase.',
    longDescription: 'A specialized social network designed for creative professionals to connect, collaborate, and showcase their work. Features real-time messaging, project collaboration tools, and an integrated marketplace.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Google Cloud'],
    techIcons: [
      React.createElement(ReactIcon, { className: "w-6 h-6" }),
      React.createElement(NodeJSIcon, { className: "w-6 h-6" }),
      React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
      React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
      React.createElement(DockerIcon, { className: "w-6 h-6" }),
      React.createElement(GoogleCloudIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/yourusername/social-network',
    liveUrl: 'https://creative-network.com',
    features: [
      'Real-time messaging and notifications',
      'Project collaboration workspace',
      'Integrated portfolio galleries',
      'Job board and freelance marketplace',
      'Event management system',
      'Advanced search and filtering'
    ],
    challenges: 'Implementing efficient real-time communication at scale while ensuring data privacy and security compliance.',
    outcome: 'Growing community of 25K+ creative professionals. Processing 1M+ messages per month with 99.9% delivery rate.',
    duration: '10 months',
    role: 'Full Stack Developer & Technical Lead',
    year: '2023'
  }
];

export { ABOUT_CONTENT };
export type { InfoCardData };




// Add this to your constants.ts file

// Blog Post Type
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  date: string;
  readTime: string;
  views: string;
  likes: number;
}

// Blog Posts Data
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'nextjs-15-features',
    title: 'Next.js 15: Revolutionary Features You Need to Know',
    excerpt: 'Discover the game-changing features in Next.js 15 that will transform how you build modern web applications.',
    content: 'Next.js 15 introduces groundbreaking improvements including enhanced Server Components, improved caching strategies, and revolutionary performance optimizations...',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Web Dev', 'Performance'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'Full Stack Developer'
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    views: '12.5K',
    likes: 234
  },
  {
    id: 'ml-production-guide',
    title: 'From Jupyter to Production: ML Deployment Guide',
    excerpt: 'A comprehensive guide to deploying machine learning models from notebooks to production-ready APIs.',
    content: 'Learn how to bridge the gap between data science experimentation and production deployment with practical strategies and best practices...',
    category: 'Machine Learning',
    tags: ['ML', 'Python', 'DevOps', 'Docker'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'Data Scientist'
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 18, 2024',
    readTime: '12 min read',
    views: '8.3K',
    likes: 189
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns Every Developer Should Master',
    excerpt: 'Elevate your TypeScript skills with advanced patterns, generics, and type manipulation techniques.',
    content: 'Dive deep into advanced TypeScript concepts including conditional types, mapped types, and template literal types that will make your code more robust...',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'Software Engineer'
    },
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 15, 2024',
    readTime: '10 min read',
    views: '15.2K',
    likes: 312
  },
  {
    id: 'react-native-performance',
    title: 'React Native Performance: From 60fps to Buttery Smooth',
    excerpt: 'Optimize your React Native apps for maximum performance with proven techniques and real-world examples.',
    content: 'Discover performance optimization strategies that will transform your React Native applications from sluggish to lightning fast...',
    category: 'Mobile Development',
    tags: ['React Native', 'Mobile', 'Performance', 'Optimization'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'Mobile Developer'
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 12, 2024',
    readTime: '9 min read',
    views: '9.7K',
    likes: 276
  },
  {
    id: 'ai-code-review',
    title: 'AI-Powered Code Reviews: The Future of Software Quality',
    excerpt: 'How artificial intelligence is revolutionizing code review processes and improving software quality at scale.',
    content: 'Explore how AI tools are transforming traditional code review workflows and helping teams catch bugs earlier...',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Code Quality', 'Automation', 'DevOps'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'AI Engineer'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    views: '11.4K',
    likes: 198
  },
  {
    id: 'database-scaling-strategies',
    title: 'Database Scaling: Strategies for Growing Applications',
    excerpt: 'Master database scaling techniques to handle millions of users without breaking a sweat.',
    content: 'Learn proven strategies for scaling your database architecture from startup to enterprise scale...',
    category: 'Backend',
    tags: ['Database', 'Scaling', 'PostgreSQL', 'Architecture'],
    author: {
      name: 'Thierno',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      role: 'Backend Engineer'
    },
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop',
    date: 'Dec 8, 2024',
    readTime: '11 min read',
    views: '7.9K',
    likes: 156
  }
];