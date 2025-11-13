import type React from "react"
import { StarIcon, ArrowRightIcon, JavaScriptIcon, PythonIcon } from "./Icon"
import Image from "../../assets/images/ThiernoHero.png"
import Image1 from "../../assets/images/Image1.jpeg"
import Image2 from "../../assets/images/Image2.jpeg"
import Image3 from "../../assets/images/Image3.jpeg"

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23AFFF00' strokeWidth='1.2'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='90' cy='15' r='2'/%3E%3Ccircle cx='165' cy='15' r='2'/%3E%3Ccircle cx='15' cy='90' r='2'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3Ccircle cx='165' cy='90' r='2'/%3E%3Ccircle cx='15' cy='165' r='2'/%3E%3Ccircle cx='90' cy='165' r='2'/%3E%3Ccircle cx='165' cy='165' r='2'/%3E%3Cpath d='M0 45 L30 15 L60 45 L90 15 L120 45 L150 15 L180 45'/%3E%3Cpath d='M0 135 L30 165 L60 135 L90 165 L120 135 L150 165 L180 135'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Welcome Badge */}
          <div className="inline-flex items-center bg-brand-gray-dark/80 backdrop-blur-sm text-sm font-semibold py-2 px-4 rounded-full border border-brand-green/20 shadow-lg shadow-brand-green/5">
            <StarIcon className="h-4 w-4 text-brand-green mr-2 animate-pulse" />
            <span className="text-white/90 tracking-wide">WELCOME TO MY PLATFORM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
            <span className="text-white">SOFTWARE</span>
            <br />
            <span className="text-white">ENGINEER AND DATA</span>
            <br />
            <span className="text-brand-green">SCIENTIST</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-brand-gray-light/90 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
            I transform your concept into visually compelling designs, blending creativity and strategy.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            {/* Get Started Button */}
            <button className="group bg-brand-gray-dark/80 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-3 hover:bg-brand-gray-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-green/10 border border-white/10">
              <span>Join Me</span>
              <div className="bg-brand-green text-black rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </button>

            {/* Customer Stats */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  className="w-11 h-11 rounded-full border-2 border-brand-black ring-2 ring-brand-green/20"
                  src={Image3.src}
                  alt="Customer testimonial"
                />
                <img
                  className="w-11 h-11 rounded-full border-2 border-brand-black ring-2 ring-brand-green/20"
                  src={Image2.src}
                  alt="Customer testimonial"
                />
                <img
                  className="w-11 h-11 rounded-full border-2 border-brand-black ring-2 ring-brand-green/20"
                  src={Image1.src}
                  alt="Customer testimonial"
                />
                <div className="w-11 h-11 rounded-full border-2 border-brand-black bg-brand-green text-brand-black flex items-center justify-center font-bold text-xs shadow-lg">
                  15K+
                </div>
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-base"> 15k developers I would like to</p>
                <p className="text-sm text-brand-gray-light/80">Inspire all over the world</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-0">
          {/* Decorative Border Frame */}
          <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10">
            <div className="w-full h-full border-[6px] sm:border-[8px] border-brand-green/90 rounded-[40px] sm:rounded-[50px] rotate-[-8deg] opacity-70 shadow-2xl shadow-brand-green/20" />
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src={Image.src}
              
              alt="Creative Professional - Data Scientist and Software Engineer"
              className="relative z-10 w-full rounded-[40px] sm:rounded-[50px] object-cover shadow-2xl aspect-[4/5]"
            />

            {/* Floating Tech Icons */}
            <div className="hidden md:block absolute top-1/4 -left-10 lg:-left-12 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300">
              <JavaScriptIcon className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>

            <div
              className="hidden md:block absolute bottom-1/4 -right-10 lg:-right-12 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <PythonIcon className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
