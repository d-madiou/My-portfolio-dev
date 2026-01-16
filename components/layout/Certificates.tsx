"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
  ExternalLink,
  Award 
} from "lucide-react"
import aws from '../../assets/images/certificates/aws.png';
import frontend from '../../assets/images/certificates/frontend.png';
import backend from '../../assets/images/certificates/backend.png';
import pcep from '../../assets/images/certificates/pcep.png';
import python from '../../assets/images/certificates/python.png';
import data from '../../assets/images/certificates/data.png';



// --- Mock Data (Replace with your actual certificate images) ---
const CERTIFICATES = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023", 
    image: aws.src,
    link: "#"
  },
  {
    id: 2,
    title: "Prodev Front-End Developer",
    issuer: "ALX Africa",
    date: "2025", 
    image: frontend.src,
    link: "#"
  },
  {
    id: 3,
    title: "Prodev Back-End Developer",
    issuer: "ALX Africa",
    date: "2022", 
    image: backend.src,
    link: "#"
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "Alx Africa",
    date: "2024", 
    image: python.src,
    link: "#"
  },
  {
    id: 5,
    title: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "2024", 
    image: pcep.src,
    link: "#"
  },
  {
    id: 6,
    title: "Data Analysis Professional Certificate",
    issuer: "Explore AI",
    date: "2023", 
    image: data.src,
    link: "#"
  }
]

// --- Main Component ---

const Certificates: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null)

  // Scroll Handlers
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Width of card + gap
      const newScrollPosition = 
        scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount)
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative w-full py-24 bg-white border-t border-black/5 overflow-hidden">
      
      {/* Background Decor (Subtle Orange Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FA891A]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#FA891A]" />
              <span className="text-[#FA891A] font-bold tracking-wider text-sm uppercase">Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Certifications
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-black/10 text-zinc-600 hover:bg-zinc-50 hover:text-[#FA891A] hover:border-[#FA891A] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-black/10 text-zinc-600 hover:bg-zinc-50 hover:text-[#FA891A] hover:border-[#FA891A] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container (Hide Scrollbar) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CERTIFICATES.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="
                group relative flex-shrink-0 cursor-pointer snap-center
                w-[300px] sm:w-[400px] aspect-[4/3]
                bg-white rounded-2xl overflow-hidden
                border border-black/5 shadow-sm
                hover:shadow-xl hover:shadow-[#FA891A]/10
                hover:border-[#FA891A]/30
                transition-all duration-500 ease-out
              "
            >
              {/* Image */}
              <Image 
                src={cert.image} 
                alt={cert.title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient (Only on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#FA891A] text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {cert.issuer}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- Modal (Lightbox) --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-md animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-[#FA891A] hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/5 animate-in zoom-in-95 duration-300">
            <div className="relative aspect-video w-full bg-zinc-100">
              <Image 
                src={selectedCert.image} 
                alt={selectedCert.title}
                fill
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">{selectedCert.title}</h3>
                <p className="text-zinc-500 mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <a 
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-[#FA891A] transition-colors"
              >
                Verify Credential
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Certificates