import type React from "react"

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-8 group cursor-default">
    <span className="text-brand-green text-xl mx-8 animate-pulse">✦</span>
    <span className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white/20 group-hover:text-white/90 transition-colors duration-500">
      {text}
    </span>
  </div>
)

const Marquee: React.FC = () => {
  const items = [
    "Software Engineering", 
    "Data Science", 
    "Web Development", 
    "UI/UX Design", 
    "System Architecture",
    "Machine Learning"
  ]

  return (
    <div className="relative py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden z-20">
      
      {/* CSS Mask for the fade effect on edges - works on any background */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'transparent',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      />

      <div className="relative flex whitespace-nowrap overflow-hidden">
        {/* We duplicate the loops to ensure seamless infinite scrolling without gaps */}
        <div className="flex animate-marquee will-change-transform">
          {items.map((item, index) => (
            <MarqueeItem key={`a-${index}`} text={item} />
          ))}
        </div>
        <div className="flex animate-marquee will-change-transform" aria-hidden="true">
          {items.map((item, index) => (
            <MarqueeItem key={`b-${index}`} text={item} />
          ))}
        </div>
        <div className="flex animate-marquee will-change-transform" aria-hidden="true">
          {items.map((item, index) => (
            <MarqueeItem key={`c-${index}`} text={item} />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  )
}

export default Marquee