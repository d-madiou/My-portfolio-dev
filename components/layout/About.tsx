import React, { useState, useEffect } from 'react';
import { ABOUT_CONTENT } from '@/lib/constant';
import type { InfoCardData } from '@/types/types';

const InfoCard: React.FC<{
  item: InfoCardData;
}> = ({ item }) => {
  return (
    <div
      className="relative w-full h-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out group"
    >
      <img 
        src={typeof item.image === 'string' ? item.image : item.image.src} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-brand-gray-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    if (ABOUT_CONTENT.length > 1) {
      const timer = setInterval(() => {
        setCurrentCardIndex((prev) => (prev + 1) % ABOUT_CONTENT.length);
      }, 7000);
      return () => clearInterval(timer);
    }
  }, []);

  const goToPreviousCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + ABOUT_CONTENT.length) % ABOUT_CONTENT.length);
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % ABOUT_CONTENT.length);
  };

  const currentCard = ABOUT_CONTENT[currentCardIndex];

  const svgBg = `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23A3FF12' strokeWidth='0.5'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='90' cy='15' r='2'/%3E%3Ccircle cx='165' cy='15' r='2'/%3E%3Ccircle cx='15' cy='90' r='2'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3Ccircle cx='165' cy='90' r='2'/%3E%3Ccircle cx='15' cy='165' r='2'/%3E%3Ccircle cx='90' cy='165' r='2'/%3E%3Ccircle cx='165' cy='165' r='2'/%3E%3Cpath d='M0 45 L30 15 L60 45 L90 15 L120 45 L150 15 L180 45'/%3E%3Cpath d='M0 135 L30 165 L60 135 L90 165 L120 135 L150 165 L180 135'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center p-4 lg:p-16 bg-brand-black relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: svgBg, backgroundSize: "180px 180px" }}
      />
      
      <div className="text-center mb-8 lg:mb-16 z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          About Me
        </h1>
        <p className="mt-2 text-brand-green text-lg">
          Software Engineer & Data Scientist
        </p>
      </div>

      <div className="relative w-full flex-grow flex items-center justify-center">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-8 w-full max-w-md">
          <div className="flex flex-col items-center text-center p-6 border-2 border-brand-green/30 rounded-full shadow-lg w-64 h-64 justify-center bg-brand-gray-dark/50 backdrop-blur-sm transition-all duration-500">
            <img 
              src={typeof currentCard.image === 'string' ? currentCard.image : currentCard.image.src} 
              alt={currentCard.title} 
              className="w-24 h-24 rounded-full border-4 border-slate-600 shadow-md object-cover transition-all duration-500" 
            />
            <h2 className="mt-4 text-xl font-bold text-white">Thierno Madiou</h2>
            <p className="text-brand-gray-light text-sm">{currentCard.title}</p>
          </div>

          {/* Navigation Buttons for Mobile */}
          <div className="flex justify-between w-full max-w-sm mt-4">
            <button
              onClick={goToPreviousCard}
              className="p-2 rounded-full bg-brand-gray-dark/50 text-white hover:bg-brand-green hover:text-black transition-colors duration-300"
              aria-label="Previous card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
            <button
              onClick={goToNextCard}
              className="p-2 rounded-full bg-brand-gray-dark/50 text-white hover:bg-brand-green hover:text-black transition-colors duration-300"
              aria-label="Next card"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
          </div>
          
          <div className="relative w-full max-w-sm h-72">
            {ABOUT_CONTENT.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentCardIndex 
                    ? 'opacity-100 transform-none z-10' 
                    : 'opacity-0 transform translate-y-4 z-0'
                }`}
              >
                <InfoCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {ABOUT_CONTENT.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCardIndex 
                    ? 'bg-brand-green w-6' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-full items-center justify-center gap-16 xl:gap-24">
          <div 
            className="flex flex-col items-center text-center p-8 border-2 border-brand-green/30 rounded-full shadow-2xl shadow-brand-green/10 justify-center bg-brand-gray-dark/50 backdrop-blur-sm transition-all duration-500 hover:border-brand-green lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]"
          >
            <img 
              src={typeof currentCard.image === 'string' ? currentCard.image : currentCard.image.src}
              alt="Alex Doe" 
              className="rounded-full border-4 border-slate-600 shadow-xl object-cover transition-all duration-500 lg:w-48 lg:h-48 xl:w-56 xl:h-56" 
            />
            <h2 className="mt-4 text-2xl xl:text-3xl font-bold text-white">Thierno Madiou</h2>
            <p className="text-brand-gray-light text-center max-w-xs mt-2 transition-opacity duration-500">{currentCard.title}</p>
          </div>
          
          {/* Navigation Buttons for Desktop */}
          <div className="hidden lg:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between w-full max-w-7xl px-4 z-30">
            <button
              onClick={goToPreviousCard}
              className="p-3 rounded-full bg-brand-gray-dark/50 text-white hover:bg-brand-green hover:text-black transition-colors duration-300 shadow-lg"
              aria-label="Previous card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
            <button
              onClick={goToNextCard}
              className="p-3 rounded-full bg-brand-gray-dark/50 text-white hover:bg-brand-green hover:text-black transition-colors duration-300 shadow-lg"
              aria-label="Next card"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
          </div>

          <div className="relative lg:w-full lg:max-w-2xl lg:h-[30rem] xl:max-w-3xl xl:h-[34rem]">
            {ABOUT_CONTENT.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentCardIndex 
                    ? 'opacity-100 transform-none z-10' 
                    : 'opacity-0 transform translate-x-8 z-0'
                }`}
                style={{ transitionDelay: index === currentCardIndex ? '150ms' : '0ms' }}
              >
                <InfoCard item={item} />
              </div>
            ))}
            
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
              {ABOUT_CONTENT.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentCardIndex 
                      ? 'bg-brand-green w-8' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
