

import { InfoCardData } from "@/types/types";
import  Image1  from "@/assets/images/Image1.jpeg";
import Image2 from "@/assets/images/Image2.jpeg";
import Image3  from "@/assets/images/Image3.jpeg";
import { CodeIcon, DatabaseIcon, BrainIcon, LayersIcon, 
    ReactIcon, NextJSIcon, TypeScriptIcon, TailwindCSSIcon, 
    ViteIcon, FigmaIcon, ReactNativeIcon, NodeJSIcon, PythonIcon, 
    FlaskIcon, DockerIcon, PostgreSQLIcon, GoogleCloudIcon, 
    TensorFlowIcon, PyTorchIcon, PandasIcon, NumPyIcon } from '@/components/layout/Icon';
    import React from "react";



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

  // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
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
]

export { ABOUT_CONTENT };
export type { InfoCardData };