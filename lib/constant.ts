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
import Tolimo4 from '@/assets/images/tolimoo/cv.png';
import Tolimo5 from '@/assets/images/tolimoo/Mamou.png';
import Tolimo6 from '@/assets/images/tolimoo/doudhal.jpeg';
import Tolimo7 from '@/assets/images/tolimoo/aiu.png';


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
  image: Tolimo3.src,
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
  image: 'https://i.pinimg.com/736x/c2/0c/63/c20c632882a9a3ce265a5b8e35c76da2.jpg', // Dating/romance themed image
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
  githubUrl: 'https://github.com/d-madiou/to-meet-yours',
  liveUrl: 'https://github.com/d-madiou/to-meet-yours', // Or remove if not deployed yet
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
    id: 'doudhal-mentor-platform',
    title: 'Doudhal: Mentor Marketplace',
    category: 'Mobile',
    description: 'A cross-platform educational marketplace connecting students and parents with expert mentors for personalized learning.',
    longDescription: 'Doudhal is a robust educational platform that facilitates mentor discovery and session booking. It features a sophisticated search engine for finding mentors by subject, a secure authentication system, and a real-time scheduling engine.',
    image: Tolimo6.src, // A professional educational/mentoring image
    technologies: ['React Native', 'Expo', 'Django', 'PostgreSQL', 'GraphQL', 'Docker'],
    techIcons: [
      React.createElement(ReactNativeIcon, { className: "w-6 h-6" }),
      // React.createElement(ExpoIcon, { className: "w-6 h-6" }),
      // React.createElement(DjangoIcon, { className: "w-6 h-6" }),
      // React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
      // React.createElement(GraphQLIcon, { className: "w-6 h-6" }),
      // React.createElement(DockerIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/d-madiou/doudhal-backend',
    liveUrl: 'https://github.com/d-madiou/doudhal-app', // Placeholder URL
    features: [
      'Advanced mentor search and filtering by expertise',
      'Real-time booking and scheduling system',
      'Secure JWT-based authentication for parents and mentors',
      'Personalized user dashboards and profile management',
      'Optimized data fetching using GraphQL queries',
      'Automated notifications via Celery background tasks'
    ],
    challenges: 'The biggest challenge was establishing a strict data contract between the Django backend and React Native frontend. Implementing GraphQL helped resolve data over-fetching and simplified complex relationship queries between mentors and bookings.',
    outcome: 'Successfully developed a high-performance MVP with a seamless connection between the mobile interface and the PostgreSQL database. The architecture is fully containerized and ready for scalable production deployment.',
    duration: '6 months',
    role: 'Full Stack Developer',
    year: '2025'
  },
  {
  id: 'aiu-online-shop',
  title: 'AIU Online Shop – Full-Stack E-Commerce Platform',
  category: 'Full Stack',
  description: 'A full-featured e-commerce platform with real-time notifications, admin dashboard, and automated email workflows.',
  longDescription: 'AIU Online Shop is a production-ready, full-stack e-commerce platform designed to support customers, sellers, and administrators. It covers the entire shopping flow—from product discovery to checkout and order tracking—while providing real-time notifications, email automation, and a powerful SuperAdmin dashboard. Built with React, Redux, and Supabase, the system is scalable, modular, and optimized for performance.',
  image: Tolimo7.src,
  technologies: [
    'React',
    'Vite',
    'Redux',
    'Supabase',
    'PostgreSQL',
    'CSS3',
    'Supabase Edge Functions'
  ],
  techIcons: [
    React.createElement(ReactIcon, { className: "w-6 h-6" }),
    React.createElement(ViteIcon, { className: "w-6 h-6" }),
    // React.createElement(ReduxIcon, { className: "w-6 h-6" }),
    // React.createElement(SupabaseIcon, { className: "w-6 h-6" }),
    // React.createElement(PostgreSQLIcon, { className: "w-6 h-6" }),
  ],
  githubUrl: 'https://github.com/d-madiou/aiu-online-shop',
  liveUrl: 'https://www.aiubusinesshub.com',
  features: [
    'Product catalog with category filtering and search',
    'Redux-powered shopping cart and checkout flow',
    'User authentication with Supabase',
    'Order history and order status tracking',
    'Real-time order notifications',
    'Automated order confirmation and status update emails',
    'SuperAdmin dashboard with users, sellers, stores, and analytics',
    'Multi-vendor architecture',
    'Responsive, mobile-first UI'
  ],
  challenges: 'Designing a scalable multi-role system while maintaining real-time updates and reliable email automation using serverless functions.',
  outcome: 'Delivered a complete e-commerce solution with real-time communication, admin management tools, and a clean, modular architecture suitable for production deployment.',
  duration: '4 months',
  role: 'Full-Stack Developer',
  year: '2024-2025'
},

  {
    id: 'cv-builder generator',
    title: 'Resume & CV Builder',
    category: 'Frontend',
    description: 'A frontend resume and CV builder with beautiful templates for eveyone.',
    longDescription: 'A modern web application that helps create stunning resumes by providing a user-friendly interface and customizable templates.',
    image: Tolimo4.src,
    technologies: ['React Js', 'Vercel'],
    techIcons: [
      React.createElement(ReactIcon, { className: "w-6 h-6" }),
      React.createElement(ReactIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/d-madiou/CV-Application',
    liveUrl: 'https://rapidcv-phi.vercel.app/',
    features: [
      'AI-powered content suggestions',
      '20+ professional templates',
      'Real-time preview and editing',
      'One-click deployment to Vercel',
      'Custom domain support',
      'SEO optimization built-in'
    ],
    challenges: 'it was my first frontend project, so I had to learn a lot about React and frontend development in general.',
    outcome: 'Help create professional cv.',
    duration: '1 months',
    role: 'Frontend Developer & Designer',
    year: '2024'
  },
  {
    id: 'mamou-digital-portal',
    title: 'Mamou Digital City Portal',
    category: 'Full Stack',
    description: 'A comprehensive regional information platform for the city of Mamou, integrating tourism, municipal administration, and local news.',
    longDescription: 'Designed and developed a dynamic web portal for the city of Mamou, Guinea. The platform serves as a centralized hub for municipal services, promotion of the Fouta-Djalon region\'s tourism, educational tracking, and real-time local news using a robust Django-React architecture.',
    image: Tolimo5.src,
    technologies: ['Django', 'Django REST Framework', 'React', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
    techIcons: [
      // React.createElement(SiDjango, { className: "w-6 h-6" }),
      // React.createElement(SiReact, { className: "w-6 h-6" }),
      // React.createElement(SiTailwindcss, { className: "w-6 h-6" }),
      // React.createElement(SiPostgresql, { className: "w-6 h-6" }),
      // React.createElement(SiFramer, { className: "w-6 h-6" }),
      // React.createElement(SiPython, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/d-madiou/Mamou-tourism',
    liveUrl: 'https://villedemamou.org',
    features: [
      'Comprehensive RESTful Backend (News, Education, Mayor\'s Office, Statistics)',
      'Dynamic Hero section with automated image rotation and smooth transitions',
      'Administrative dashboard for real-time regional data management',
      'Mobile-responsive UI with optimized local SEO',
      'Custom pagination and filtering for diverse content sections',
      'Integrated communication tools (WhatsApp Click-to-Chat API & Social Media)'
    ],
    challenges: 'Designing a scalable relational database to handle disparate sectors like education and governance while maintaining high performance and fluid UI animations on low-bandwidth connections.',
    outcome: 'Successfully modernized information access for citizens and tourists. Reduced data retrieval latency through optimized DRF serializers and custom pagination.',
    duration: '6 months',
    role: 'Full Stack Developer',
    year: '2024'
  },
  {
    id: 'twitch-clone',
    title: 'Live Streaming Platform',
    category: 'Full Stack',
    description: 'A full-featured live streaming application with real-time video broadcasting, chat, and community management tools.',
    longDescription: 'A production-ready clone of Twitch built with Next.js 14. It allows users to broadcast live streams using RTMP & WHIP protocols through OBS. The platform features ultra-low latency streaming, a robust real-time chat system, comprehensive streamer dashboards, and secure authentication.',
    image: 'https://i.pinimg.com/1200x/4c/ee/1f/4cee1f8e296599bd685011318f1dc2eb.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL', 'Clerk', 'LiveKit'],
    techIcons: [
      React.createElement(NextJSIcon, { className: "w-6 h-6" }),
      React.createElement(ReactIcon, { className: "w-6 h-6" }),
      React.createElement(TypeScriptIcon, { className: "w-6 h-6" }),
      // React.createElement(TailwindIcon, { className: "w-6 h-6" }),
      // React.createElement(PrismaIcon, { className: "w-6 h-6" }),
      // React.createElement(MySQLIcon, { className: "w-6 h-6" }),
    ],
    githubUrl: 'https://github.com/d-madiou/twitch-clone',
    liveUrl: 'https://github.com/d-madiou/twitch-clone',
    features: [
      'Live streaming via RTMP & WHIP protocols',
      'Real-time chat with member-only & delay modes',
      'Authentication & Authorization via Clerk',
      'Streamer dashboard with analytics',
      'Following, Blocking & Kick systems',
      'Real-time ingress & webhook synchronization'
    ],
    challenges: 'Handling low-latency video transmission protocols (RTMP/WHIP) and synchronizing real-time webhooks between the streaming engine and the database.',
    outcome: 'Built a scalable streaming platform capable of handling concurrent broadcasts with sub-second latency and instant chat delivery.',
    duration: '3 month',
    role: 'Full Stack Developer',
    year: '2025'
}
];

export { ABOUT_CONTENT };
export type { InfoCardData };




// Add this to your constants.ts file
import blog1 from '../assets/images/blog/aiubusiness.jpeg'
import blog2 from '../assets/images/ThiernoHero.png'
import blog3 from '../assets/images/blog/awrds.jpeg'
import blog4 from '../assets/images/blog/gobackend.jpeg'
import blog5 from '../assets/images/blog/live.png'
import blog6 from '../assets/images/blog/workshop.png'

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
  id: 'aiu-ecommerce-launch',
  title: 'Launching the AIU E-Commerce Platform: Lessons from Production Day',
  excerpt: 'What it really takes to launch a production-ready e-commerce platform as a full-stack developer—from real-time systems to handling real users on day one.',
  content: `
Launching the AIU Online Shop was more than just deploying code—it was a real-world test of architecture, performance, and decision-making under pressure.

As the lead developer, I was responsible for the full lifecycle of the platform: frontend architecture, backend integration, real-time notifications, and admin tooling. On launch day, the platform went live to real users, including multiple active stores and student customers.

One of the biggest challenges was ensuring reliability during order placement. I implemented real-time order notifications using Supabase listeners, allowing admins to receive instant updates when orders were created. This helped detect issues early and ensured confidence during the first live transactions.

Email automation was another critical component. Using Supabase Edge Functions, I built transactional email workflows for order confirmations and status updates. This removed manual intervention and gave users immediate feedback after checkout.

From a frontend perspective, Redux played a major role in maintaining a consistent shopping experience. Cart state, checkout flow, and product filtering had to remain stable even during rapid navigation and refreshes—especially important on mobile devices.

The SuperAdmin dashboard became essential during launch. Real-time metrics, user management, and store tracking allowed us to monitor platform health instantly without querying the database manually.

Launch day reinforced one key lesson: production systems are not just about features—they are about observability, reliability, and user trust. Seeing real users complete purchases successfully validated both the technical decisions and the architectural foundation of the platform.
  `,
  category: 'Web Development',
  tags: [
    'React',
    'Supabase',
    'E-Commerce',
    'Full Stack',
    'Real-Time Systems',
    'Production'
  ],
  author: {
    name: 'Thierno Madiou Diallo',
    avatar: blog2.src,
    role: 'Full Stack Software Engineer'
  },
  image: blog1.src,
  date: 'August 2025',
  readTime: '6 min read',
  views: '3.2K',
  likes: 186
},

  {
  id: 'transition-to-golang-fintech',
  title: 'From Django to Golang: Relearning Backend Engineering by Building a Fintech System',
  excerpt: 'Why I deliberately stepped out of my comfort zone, left Django behind for a while, and started learning Golang by designing a real-world fintech backend from first principles.',
  content: `
After spending years building backend systems with Python and Django, I reached a point where writing APIs felt comfortable—almost too comfortable. While that confidence is valuable, I realized something was missing: a deeper, lower-level understanding of how backend systems are designed, structured, and protected at scale.

That realization led me to Golang.

Unlike Django, which provides many abstractions out of the box, Go forces you to be explicit. Error handling is deliberate. Concurrency is not hidden. Project structure is a design choice, not a default. At first, this felt unfamiliar—but quickly, it became reassuring.

Instead of jumping straight into frameworks, I decided to learn Go the same way real systems are built: by designing a fintech backend from scratch. Not a toy app, but a system that respects real-world constraints—money movement, consistency, auditability, and failure handling.

The first major shift was architectural. Rather than relying on a single “balance” field, I learned why real financial systems use ledgers as the source of truth. Money is never updated—it is recorded. Balances are derived, transactions are atomic, and history is immutable. These ideas aren’t Go-specific, but Go’s simplicity makes them easier to model cleanly and correctly.

Another key lesson was intentionality. In Go, nothing happens “by magic.” If something fails, you must handle it. If data moves, you must define how. This forced me to slow down, think like a systems engineer, and design before coding—a habit I plan to carry into every future project.

This transition is not about abandoning Python or Django. It’s about expanding how I think as an engineer. Go is helping me sharpen fundamentals: domain modeling, clear boundaries, predictable behavior, and respect for correctness—especially in systems that handle money.

I’m documenting this journey not as a Golang expert, but as an engineer deliberately choosing discomfort to grow. The goal is simple: become someone who can design, reason about, and build reliable backend systems—regardless of language or framework.
  `,
  category: 'Backend Engineering',
  tags: [
    'Golang',
    'Backend Engineering',
    'Fintech',
    'System Design',
    'Learning Journey',
    'Software Architecture'
  ],
  author: {
    name: 'Thierno Madiou Diallo',
    avatar: blog4.src,
    role: 'Backend Engineer'
  },
  image: blog4.src,
  date: 'Jan 2026',
  readTime: '5 min read',
  views: '—',
  likes: 0
},

  {
  id: 'hult-prize-aiu-2025',
  title: 'Winning the HULT Prize AIU 2025 with TechNexus',
  excerpt: 'How a 4-minute pitch, strong engineering vision, and teamwork led TechNexus to win the HULT Prize Campus Competition 2025 at AIU.',
  content: `
On December 22nd, our team at TechNexus participated in the HULT Prize AIU Campus Startups Competition 2025—an intense, high-impact startup pitching event focused on innovation and social impact.

We presented our solution, Poultry Farm Management System, a technology-driven platform designed to modernize how poultry farms operate. The challenge was clear: communicate a complex, real-world problem and a scalable technical solution in just four minutes.

As the technical lead, my focus was on clearly explaining how our system leveraged software engineering principles to improve efficiency, monitoring, and decision-making for farmers. Despite the tight time constraint, we delivered a clear and compelling pitch that combined business viability with strong technical execution.

Among several impressive teams, TechNexus was honored to be selected as the HULT Prize Champions 2025 at Albukhary International University. This recognition validated not only our startup idea but also the real-world relevance of the technology behind it.

This win marked an important milestone for our team and qualified us for the national stage. More importantly, it reinforced a key lesson: impactful engineering is not only about writing code, but also about communicating vision, solving meaningful problems, and executing under pressure.

I’m incredibly grateful to my teammates—Fauzia Ahmed, Oussama Chakeur, Khi Nuu Phyu Sin, and Mustafa Yahya—for their dedication, teamwork, and shared belief in the project. We’re now preparing for the next stage with the same mindset: build, test, improve, and show up stronger.
  `,
  category: 'Startup & Innovation',
  tags: [
    'Hult Prize',
    'Startup',
    'Innovation',
    'TechNexus',
    'Engineering',
    'Competition'
  ],
  author: {
    name: 'Thierno Madiou Diallo',
    avatar: blog2.src,
    role: 'Co-Founder & Software Engineer'
  },
  image: blog3.src,
  date: 'Dec 22, 2025',
  readTime: '4 min read',
  views: '2.1K',
  likes: 312
},

  {
  id: 'rtmp-streaming-like-twitch',
  title: 'Building RTMP Live Streaming Like Twitch: From Stream Keys to Live Rooms',
  excerpt: 'A deep dive into building an RTMP-based live streaming system using LiveKit, Next.js, and Django—understanding how real platforms like Twitch work under the hood.',
  content: `
Live streaming platforms like Twitch handle millions of concurrent streams every day—but how does a streamer actually go live, and how does each stream remain isolated in its own room?

During a recent project contribution, I was tasked with building an RTMP streaming feature that allows users to go live using tools like OBS, webcams, or laptops—similar to Twitch.

The core requirements were simple on paper but complex in execution:
• Each stream must have a unique ID  
• A user cannot have more than one active live stream  
• Every time a stream ends, a new stream URL and key must be generated  

Before writing any code, I focused on understanding the fundamentals. I first studied what RTMP actually is and how real-time video data is transmitted. Then, I explored how stream URLs and stream keys authenticate broadcasting tools like OBS.

Once the concept was clear, I designed the system logic to enforce a single active stream per user. If a user attempted to go live again, the system would automatically invalidate the previous stream and generate fresh credentials.

For implementation, I used the LiveKit SDK inside a Next.js server action to handle stream creation securely. Stream metadata—such as stream keys and URLs—was persisted using Prisma with a MySQL database. To strengthen my backend skills, I later rebuilt the same functionality using Django REST Framework, reinforcing my understanding of system design across different stacks.

The result was a private live room per creator, complete with secure authentication and lifecycle management—mirroring how large-scale platforms like Twitch manage real-time streaming.

This project significantly deepened my understanding of real-time systems, authentication flows, and backend-driven streaming architectures. More importantly, it taught me how to break down complex infrastructure problems into manageable engineering decisions.
  `,
  category: 'Backend & Real-Time Systems',
  tags: [
    'RTMP',
    'Live Streaming',
    'Next.js',
    'LiveKit',
    'Django',
    'Prisma',
    'System Design',
    'Learning in Public'
  ],
  author: {
    name: 'Thierno Madiou Diallo',
    avatar: blog1.src,
    role: 'Junior Software Engineer (Frontend & Backend)'
  },
  image: blog5.src,
  date: 'Jan 2026',
  readTime: '5 min read',
  views: '1.9K',
  likes: 271
},
  {
  id: 'community-teaching-tech-nexus-aiu',
  title: 'Teaching, Mentorship, and Community Impact Through TechNexus',
  excerpt: 'A month of community service teaching databases, SQL, and Python—helping students build strong foundations in computer science.',
  content: `
Throughout August, I had the opportunity to contribute to my university’s tech community through teaching and mentorship—an experience that reinforced my belief that strong engineers also uplift others.

Alongside my teammates at TechNexus Club, I co-instructed an Introduction to Database Management & SQL program. Our goal was to help students understand not just SQL syntax, but the fundamentals of data modeling, relational design, and how real-world systems store and retrieve information efficiently.

In parallel, I served as an instructor for Module 3: PCEP Entry-Level Python, organized by the School of Computing and Informatics at Albukhary International University (AIU). This program focused on building a strong foundation in Python programming, covering core concepts such as variables, control flow, functions, and problem-solving techniques.

Teaching these sessions required breaking down complex ideas into simple, practical explanations—an essential skill for any software engineer working in teams or mentoring juniors. It also gave me valuable insight into how students approach problem-solving and where common learning gaps exist.

Beyond technical skills, these sessions were about building confidence. Many participants were writing their first SQL queries or Python scripts, and seeing their progress over the course of the program was incredibly rewarding.

This month of community service reaffirmed my commitment to lifelong learning and knowledge sharing. As I continue growing as a software engineer, I aim to remain actively involved in teaching, mentoring, and contributing to developer communities.
  `,
  category: 'Education & Community',
  tags: [
    'Tech Education',
    'Community Work',
    'Teaching',
    'SQL',
    'Python',
    'Databases',
    'TechNexus',
    'AIU',
    'Mentorship'
  ],
  author: {
    name: 'Thierno Madiou Diallo',
    avatar: blog2.src,
    role: 'Software Engineer & Instructor'
  },
  image: blog6.src,
  date: 'Aug 2025',
  readTime: '4 min read',
  views: '1.6K',
  likes: 198
},

];