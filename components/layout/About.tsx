import React from 'react';
import { ArrowRightIcon, PhoneIcon } from './Icon';
import About from '../../assets/images/About2.jpeg';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div>
    <p className="text-4xl lg:text-5xl font-extrabold text-[#A3FF12]">{value}</p>
    <p className="text-gray-400 mt-1">{label}</p>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#0D0D0D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute top-0 left-0 grid grid-cols-3 gap-1">
              {Array(18).fill(0).map((_, i) => (
                <span key={i} className="w-2 h-2 bg-[#A3FF12] opacity-50 rounded-full"></span>
              ))}
            </div>
            <div className="relative p-4">
                <img src={About.src} alt="Team discussing" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                <div className="absolute -bottom-8 -left-8 bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-lg border border-gray-700">
                    <div className="bg-[#A3FF12] text-black p-3 rounded-full">
                        <PhoneIcon className="w-6 h-6"/>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">Be In Quick Touch!</p>
                        <p className="text-white font-bold text-lg">+60 194840468</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -right-10 top-10 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" fill="none" stroke="#A3FF12" strokeWidth="4"/>
                    <path transform="rotate(45 50 50)" d="M 50,50 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0" fill="none" stroke="#A3FF12" strokeWidth="4"/>
                </svg>
             </div>
            <p className="text-[#A3FF12] font-bold tracking-widest mb-4">
              <span className="text-xl">*</span> ABOUT ME
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              IM THIERNO MADIOU DIALLO
            </h2>
            <p className="mt-6 text-gray-300 text-lg">
              Transforming ideas into captivating visuals, we blend creativity and strategy to bring your vision to life with stunning design solutions.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <StatItem value="1+" label="Year's Of Experience" />
              <StatItem value="6+" label="Real World Project" />
              <StatItem value="98%" label="Client Reach" />
            </div>
            <button className="mt-12 flex items-center justify-center gap-2 bg-transparent text-white font-semibold py-4 px-8 rounded-full border border-gray-700 hover:bg-gray-800 transition-all duration-300 group">
              More About
              <span className="bg-[#A3FF12] text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRightIcon className="w-5 h-5"/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;