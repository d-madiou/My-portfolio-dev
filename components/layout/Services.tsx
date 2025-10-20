import React from 'react';
import {
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  TailwindCSSIcon,
  ClerkIcon,
  FigmaIcon,
  NodeJSIcon,
  PythonIcon,
  FlaskIcon,
  PrismaIcon,
  PostgreSQLIcon,
  ReactNativeIcon,
  SupabaseIcon,
  PowerBIIcon,
  GoogleSheetIcon,
  PandasIcon,
  NumPyIcon,
} from './Icon';

const techServicesData = [
  {
    category: 'Frontend',
    title: 'Pixel-Perfect Frontend',
    description: 'We build beautiful, responsive, and blazing-fast user interfaces with modern technologies that provide an exceptional user experience.',
    technologies: [
      { name: 'React', icon: <ReactIcon className="w-8 h-8" /> },
      { name: 'Next.js', icon: <NextJSIcon className="w-8 h-8" /> },
      { name: 'TypeScript', icon: <TypeScriptIcon className="w-8 h-8" /> },
      { name: 'Tailwind CSS', icon: <TailwindCSSIcon className="w-8 h-8" /> },
      { name: 'Vite', icon: <ClerkIcon className="w-8 h-8" /> },
      { name: 'Figma', icon: <FigmaIcon className="w-8 h-8" /> },
      { name: 'React Native', icon: <ReactNativeIcon className="w-8 h-8" /> },
    ],
  },
  {
    category: 'Backend',
    title: 'Robust Backend Systems',
    description: 'Our backend solutions are scalable, secure, and efficient, designed to handle complex business logic and high-traffic loads with ease.',
    technologies: [
      { name: 'Node.js', icon: <NodeJSIcon className="w-8 h-8" /> },
      { name: 'Python', icon: <PythonIcon className="w-8 h-8" /> },
      { name: 'Go', icon: <FlaskIcon className="w-8 h-8" /> },
      { name: 'Docker', icon: <PrismaIcon className="w-8 h-8" /> },
      { name: 'PostgreSQL', icon: <PostgreSQLIcon className="w-8 h-8" /> },
      { name: 'Google Cloud', icon: <SupabaseIcon className="w-8 h-8" /> },
    ],
  },
  {
    category: 'Data Science',
    title: 'Intelligent Data Solutions',
    description: 'We leverage the power of data and machine learning to uncover insights, predict trends, and build intelligent applications that drive business value.',
    technologies: [
      { name: 'TensorFlow', icon: <PowerBIIcon className="w-8 h-8" /> },
      { name: 'PyTorch', icon: <GoogleSheetIcon className="w-8 h-8" /> },
      { name: 'Python', icon: <PythonIcon className="w-8 h-8" /> },
      { name: 'Pandas', icon: <PandasIcon className="w-8 h-8" /> },
      { name: 'Jupyter', icon: <NumPyIcon className="w-8 h-8" /> },
    ],
  },
];

const TechCard: React.FC<typeof techServicesData[0]> = ({ category, title, description, technologies }) => (
    <div className="bg-[#131313] rounded-2xl border border-gray-800 p-8 transition-all duration-300 group hover:border-[#A3FF12] hover:shadow-2xl hover:shadow-[#A3FF12]/10 hover:-translate-y-2 flex flex-col">
      <div className="flex-grow">
        <p className="text-[#A3FF12] font-bold tracking-widest mb-3 uppercase text-sm">{category}</p>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-800">
         <h4 className="text-gray-300 font-semibold mb-4">Core Technologies</h4>
         <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-2">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center text-center group/tech" title={tech.name}>
                <div className="text-gray-400 transition-all duration-300 group-hover/tech:text-[#A3FF12] group-hover/tech:scale-110">
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-500 mt-2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
);


const Services: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#080808] relative">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#A3FF12]/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#A3FF12]/5 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#A3FF12] font-bold tracking-widest mb-4">
            <span className="text-xl">*</span> OUR TECH STACK
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Building the Future with <span className="text-[#A3FF12]">Modern</span> Technologies
          </h2>
           <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            From pixel-perfect UIs to robust server architecture and intelligent data models, we bring a wide spectrum of technical skills to the table.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techServicesData.map((service, index) => (
            <TechCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;