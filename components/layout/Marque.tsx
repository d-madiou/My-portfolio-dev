import type React from "react"

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-6">
    <span className="text-brand-green text-2xl font-bold mx-4">*</span>
    <span className="text-xl lg:text-2xl font-semibold uppercase tracking-wider">{text}</span>
  </div>
)

const Marquee: React.FC = () => {
  const items = ["Software Engineering", "Web Design & Development", "Graphic Design", "Data Analysis", "Power BI"]

  return (
    <div className="bg-brand-green py-6 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

      <div className="relative flex whitespace-nowrap text-black">
        <div className="animate-marquee flex">
          {items.map((item, index) => (
            <MarqueeItem key={index} text={item} />
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex">
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} text={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Marquee
