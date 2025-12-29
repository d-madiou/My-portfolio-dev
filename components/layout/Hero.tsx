import type React from "react"
import { StarIcon, ArrowRightIcon, JavaScriptIcon, PythonIcon } from "./Icon"
import Image from "../../assets/images/ThiernoHero.png"
import Image1 from "../../assets/images/Image1.jpeg"
import Image2 from "../../assets/images/Image2.jpeg"
import Image3 from "../../assets/images/Image3.jpeg"

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-visible">
      
      {/* Safe Animation Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}} />

      {/* Floating Orbs (Subtler for Natural Theme) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md text-sm font-semibold py-3 px-5 rounded-full border border-white/10 shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
            <StarIcon className="h-4 w-4 text-brand-green mr-2 animate-pulse" />
            <span className="text-white/80 tracking-wider">WELCOME TO MY PLATFORM</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span className="block animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                SOFTWARE
              </span>
              <span className="block animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
                ENGINEER & DATA
              </span>
              <span className="block text-brand-green animate-in fade-in slide-in-from-left-8 duration-700 delay-500">
                SCIENTIST
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            Motivated software developer, co-founder, and instructor at Tech Nexus. Built 3 production-ready applications used globally. Passionate about building scalable, user-friendly solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-6 duration-700 delay-1000">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-black bg-brand-green rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(175,255,0,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0 border-t border-white/5 mt-8 animate-in fade-in zoom-in-95 duration-700 delay-1000">
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">1+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1">Years Exp.</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-brand-green">15+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">5+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1">Clients</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-0 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          
          {/* Decorative Border Frame */}
          <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 z-0">
            <div className="w-full h-full border border-white/20 rounded-[40px] sm:rounded-[50px] rotate-[-6deg] backdrop-blur-[2px] transition-transform duration-700 hover:rotate-[-8deg]" />
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg z-10">
            <div className="relative overflow-hidden rounded-[40px] sm:rounded-[50px] shadow-2xl border border-white/10 bg-black/50">
              <img
                src={Image.src}
                alt="Creative Professional - Data Scientist and Software Engineer"
                className="relative z-10 w-full object-cover aspect-[4/5] opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
              {/* Image Gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[11]" />
            </div>

            {/* Floating Tech Icons */}
            <div className="hidden md:block absolute top-10 -left-12 z-20 bg-[#111] border border-white/10 p-4 rounded-2xl shadow-xl animate-float">
              <JavaScriptIcon className="w-8 h-8" />
            </div>

            <div className="hidden md:block absolute bottom-20 -right-12 z-20 bg-[#111] border border-white/10 p-4 rounded-2xl shadow-xl animate-float-delayed">
              <PythonIcon className="w-8 h-8" />
            </div>

            {/* Mini Gallery Thumbnails (Glassmorphism) */}
            <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 gap-3 z-30 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <img src={Image1.src} alt="Portfolio 1" className="w-12 h-12 rounded-lg object-cover opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src={Image2.src} alt="Portfolio 2" className="w-12 h-12 rounded-lg object-cover opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
              <img src={Image3.src} alt="Portfolio 3" className="w-12 h-12 rounded-lg object-cover opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero