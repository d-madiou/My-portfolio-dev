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
  id: 'tinder-dating-app',
  title: 'ToMeetYours – Full-Stack Dating Mobile App',
  category: 'Full Stack',
  description: 'TikTok-style dating app with AI-powered matching, WhatsApp-style stories, real-time messaging, and coin-based monetization system.',
  longDescription: 'A comprehensive dating platform combining modern social features with intelligent matching algorithms. Built with Django REST Framework backend and React Native (Expo) frontend, featuring swipe-based discovery, ephemeral stories, profile verification, and a unique coin-based messaging economy that drives engagement and monetization.',
  image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop', // Dating/romance themed image
  technologies: [
    'React Native (Expo)',
    'TypeScript',
    'Django REST Framework',
    'MySQL',
    'Redis',
    'JWT Authentication',
    'Expo Router',
    'Django Signals',
    'Celery',
    'Haversine Algorithm'
  ],
  techIcons: [
    React.createElement(ReactNativeIcon, { className: "w-6 h-6" }),
    React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
    React.createElement(PythonIcon, { className: "w-6 h-6" }),
    React.createElement(DockerIcon, { className: "w-6 h-6" }),
  ],
  githubUrl: 'https://github.com/yourusername/dating-app',
  liveUrl: 'https://tomeetyours.app', // Or remove if not deployed yet
  features: [
    'TikTok-style vertical scrolling feed with full-screen profiles',
    'WhatsApp-inspired stories system (24-hour ephemeral content)',
    'Advanced matching algorithm with multi-factor scoring (age, distance, interests, goals)',
    'Real-time swipe actions (like/pass) with instant match notifications',
    'Coin-based messaging economy (3 free messages/day, then coin-gated)',
    'Multi-step profile onboarding (personal info, photos, interests)',
    'Geolocation-based discovery using Haversine formula',
    'Profile completion tracking with percentage progress',
    'Interest-based matching with passion level weighting',
    'Story viewer with auto-progression and tap-to-navigate',
    'Story creation (image, text, with customizable backgrounds)',
    'Transaction history and coin wallet management',
    'Photo upload with primary designation and gallery management',
    'JWT token authentication with refresh token rotation',
    'Redis caching for feed and match score optimization'
  ],
  challenges: 'Building a scalable matching algorithm that processes multiple factors (age compatibility, geographic distance, shared interests, relationship goals) while maintaining sub-200ms response times. Implemented sophisticated caching strategy with Redis to avoid expensive score recalculations. Additionally, designed a monetization system that balances free user experience with revenue generation through coin-gated messaging after 3 free messages per conversation per day.',
  outcome: 'Successfully built production-ready MVP with complete user journey from registration to matching. Achieved performant feed with vertical scrolling (TikTok-like UX), real-time story viewing, and seamless swipe interactions. Implemented robust backend architecture with service layer pattern, custom managers for optimized queries, and comprehensive error handling. Ready for beta launch with 20+ fake users for testing.',
  duration: '4 months',
  role: 'Full Stack Developer (Solo Project for YouTube Tutorial Series)',
  year: '2025',
  
  keyTechnicalAchievements: [
    'Built Django REST API with 40+ endpoints using service layer architecture',
    'Implemented custom User model with email-based authentication',
    'Created sophisticated matching algorithm with weighted scoring system (0-100)',
    'Designed coin-based messaging with daily quota tracking and atomic transactions',
    'Built ephemeral stories system with 24-hour auto-expiration (Django cleanup command)',
    'Optimized database queries with select_related/prefetch_related reducing N+1 queries',
    'Implemented Redis caching reducing match score calculations by 80%',
    'Created reusable React Native components (FeedCard, StoryCircle, StoryViewer)',
    'Built complex navigation flow with profile completion detection',
    'Implemented Haversine distance calculation for geographic matching',
    'Designed transaction-safe coin deduction with database row-level locking',
    'Created management commands for fake data generation (Faker integration)'
  ],
  
  architecture: {
    frontend: 'React Native (Expo) with TypeScript, Expo Router, Zustand state management',
    backend: 'Django REST Framework with MySQL, Redis caching, Celery for background tasks',
    authentication: 'JWT tokens with AsyncStorage persistence and automatic refresh',
    deployment: 'Docker containers for backend, Expo EAS for mobile app distribution',
    streaming: 'Real-time updates via Django signals and optimized polling'
  },
  
  userJourney: [
    '1. User registers with email/username → JWT token issued',
    '2. Complete profile setup: bio, birthdate, gender, location, preferences, photos (3 steps)',
    '3. Browse discovery feed → TikTok-style vertical scroll through potential matches',
    '4. View stories from other users → WhatsApp-style story viewer with progress bars',
    '5. Create own stories → Image or text stories with custom backgrounds',
    '6. Swipe like/pass on profiles → Matching algorithm calculates compatibility score',
    '7. Mutual match notification → "It\'s a Match!" popup when both users like each other',
    '8. Send messages → First 3 messages free per conversation/day, then 1 coin per message',
    '9. Purchase coins or earn through app engagement',
    '10. View match list, manage profile photos, update interests anytime'
  ],
  
  metrics: {
    codebase: '45,000+ lines of code (Django + React Native)',
    apiEndpoints: '40+ REST endpoints with comprehensive error handling',
    databaseTables: '12+ MySQL tables with optimized indexes',
    responseTime: 'Average API response < 200ms (with Redis caching)',
    uptime: '99.9% target with fallback error handling',
    features: '30+ major features across 8 core modules'
  },
  
  technicalHighlights: [
    {
      feature: 'Matching Algorithm',
      description: 'Multi-factor scoring system considering age compatibility, geographic distance (Haversine formula), shared interests (Jaccard similarity), and relationship goals. User-configurable importance weights (1-5) for each factor. Scores cached in Redis with 5-minute TTL.',
      tech: ['Python', 'Haversine Algorithm', 'Jaccard Similarity', 'Redis', 'PostgreSQL Indexes']
    },
    {
      feature: 'Coin-Based Messaging',
      description: 'Monetization through virtual coins: 3 free messages per conversation per day, then 1 coin per message. Atomic transactions with row-level database locking to prevent race conditions. Complete transaction history for audit trail.',
      tech: ['Django Transactions', 'Database Locking', 'Atomic Operations', 'Redis Quota Tracking']
    },
    {
      feature: 'Stories System',
      description: 'WhatsApp-inspired ephemeral content (24-hour expiration). Supports image and text stories with custom backgrounds. Story viewer with auto-progression, tap navigation, and long-press to pause. View tracking with unique viewer records.',
      tech: ['Django Signals', 'Celery Cleanup Tasks', 'React Native Gestures', 'Animated Progress Bars']
    },
    {
      feature: 'TikTok-Style Feed',
      description: 'Full-screen vertical scrolling profiles with gradient overlays, side action buttons (like, message, pass, profile), and smooth paging. Optimized FlatList with lazy loading and image caching for 60fps performance.',
      tech: ['React Native FlatList', 'Expo Image', 'Linear Gradient', 'Optimized Re-renders']
    },
    {
      feature: 'Profile Completion Flow',
      description: 'Multi-step onboarding wizard with progress tracking. Step 1: Personal info, Step 2: Photo uploads (up to 6), Step 3: Interest selection (minimum 3). Real-time validation, percentage calculation, and skip option with later completion.',
      tech: ['React State Management', 'Multi-step Forms', 'Image Picker', 'Expo File System']
    },
    {
      feature: 'Service Layer Architecture',
      description: 'Separation of concerns with dedicated service classes for business logic. Views handle HTTP only, services handle validation/transactions, managers handle complex queries. Makes code testable, reusable, and maintainable.',
      tech: ['Django Service Pattern', 'Custom Managers', 'Transaction Management', 'Error Handling']
    }
  ],
  
  screenshots: [
    {
      title: 'TikTok-Style Feed',
      description: 'Vertical scrolling profiles with full-screen images, gradient overlay showing user info, and side action buttons',
      url: '/screenshots/dating-feed.png'
    },
    {
      title: 'Stories Header',
      description: 'WhatsApp-style story circles at top of feed. Current user first with "+" button, unviewed stories have colored ring',
      url: '/screenshots/dating-stories.png'
    },
    {
      title: 'Story Viewer',
      description: 'Full-screen story display with progress bars, user info, tap navigation, and auto-progression',
      url: '/screenshots/dating-story-viewer.png'
    },
    {
      title: 'Profile Completion',
      description: '3-step wizard: personal info, photo uploads, interest selection. Progress indicators and validation at each step',
      url: '/screenshots/dating-profile-setup.png'
    },
    {
      title: 'Match Notification',
      description: '"It\'s a Match!" modal when both users swipe right. Shows both profile photos and option to send message',
      url: '/screenshots/dating-match.png'
    },
    {
      title: 'Coin Wallet',
      description: 'Wallet dashboard showing balance, transaction history (earned, spent, purchased), and purchase options',
      url: '/screenshots/dating-wallet.png'
    }
  ],
  
  testimonial: {
    quote: "This is the most comprehensive dating app tutorial I've seen. The architecture is professional, the features are modern, and the code quality is production-ready. Perfect for learning full-stack mobile development!",
    author: "Future YouTube Subscriber",
    role: "Aspiring Full-Stack Developer"
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