"use client"

import React, { useState, useEffect } from "react"
import { BLOG_POSTS, BlogPost } from "@/lib/constant"
import { 
  ArrowRightIcon, 
  ClockIcon, 
  ShareIcon, 
  BookmarkIcon 
} from "./Icon"

// --- Icons Helper ---
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

// --- Helper Components ---

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${className}`}>
    {children}
  </span>
)

// --- Main Components ---

const BlogCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({ post, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-brand-green/40 transition-colors select-none"
    >
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-[#1a1a1a]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          <Badge className="bg-brand-green/10 text-brand-green border-brand-green/20">
            {post.category}
          </Badge>
          <span className="text-xs text-brand-gray-light font-mono">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-brand-gray-light text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Author Footer */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0 transition-all" />
            <span className="text-xs text-white/60 font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <ClockIcon className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

const BlogReaderModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-0 sm:pt-4 pb-0 sm:pb-4 px-0 sm:px-4 bg-black/95">
      {/* Reader Container */}
      <div className="relative w-full max-w-5xl h-full bg-[#0a0a0a] sm:rounded-lg shadow-2xl border-x sm:border border-white/10 flex flex-col overflow-hidden">
        
        {/* Sticky Header with RETURN Button */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10 z-20">
          
          {/* RETURN Button */}
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Return</span>
          </button>
          
          {/* Actions */}
          <div className="flex gap-2">
             <button className="p-2 hover:bg-white/5 rounded-md text-white/60 hover:text-brand-green transition-colors">
                <BookmarkIcon className="w-5 h-5" />
             </button>
             <button className="p-2 hover:bg-white/5 rounded-md text-white/60 hover:text-white transition-colors">
                <ShareIcon className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row min-h-full">
            
            {/* LEFT: Article Content */}
            <div className="flex-1 p-6 sm:p-12 lg:p-16 max-w-3xl mx-auto border-r border-white/5">
              
              {/* Header Info */}
              <div className="mb-8 text-center">
                <div className="flex justify-center gap-4 text-xs text-brand-gray-light font-mono mb-4 uppercase tracking-widest">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  {post.title}
                </h1>
                <div className="flex justify-center items-center gap-2 text-brand-green">
                  <span className="w-8 h-px bg-brand-green/30"></span>
                  <span className="text-sm font-medium">{post.readTime} Read</span>
                  <span className="w-8 h-px bg-brand-green/30"></span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full aspect-[21/9] rounded-lg overflow-hidden mb-12 bg-[#111]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Typography Content */}
              <div className="prose prose-invert prose-lg max-w-none text-brand-gray-light/90">
                <p className="text-xl leading-relaxed font-medium text-white mb-8 border-l-2 border-brand-green pl-6">
                  {post.excerpt}
                </p>

                <div className="space-y-8">
                  <p>
                    {post.content || "In the fast-paced world of technology, staying grounded in fundamental principles is often more valuable than chasing the latest trends. This article explores the intersection of design, code, and human experience."}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-10">The Core Principles</h3>
                  <p>
                    When we strip away the frameworks and the tooling, we are left with the raw materials of the web: information and interaction. Mastering these allows us to build resilient systems.
                  </p>

                  <div className="my-8 p-6 bg-[#111] border border-white/10 rounded-lg">
                    <h4 className="text-brand-green font-bold text-sm uppercase tracking-wide mb-2">Key Takeaway</h4>
                    <p className="text-white m-0">Simplicity is not about the absence of complexity, but the effective management of it.</p>
                  </div>

                  <p>
                    Understanding the user journey is paramount. We often get caught up in the "how" before we fully understand the "why". By reversing this process, we ensure that every line of code serves a purpose.
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded hover:bg-white/10 cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar (Desktop Only) */}
            <div className="hidden lg:block w-80 bg-[#0f0f0f] border-l border-white/10 p-8">
               <div className="sticky top-0 space-y-8">
                  
                  {/* Author Card */}
                  <div>
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Written By</h4>
                    <div className="flex items-start gap-4">
                      <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-white/10" />
                      <div>
                        <div className="text-white font-bold">{post.author.name}</div>
                        <div className="text-xs text-brand-gray-light mt-1">{post.author.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 w-full"></div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded border border-white/5 text-center">
                      <div className="text-lg font-bold text-white">{post.views}</div>
                      <div className="text-[10px] text-white/40 uppercase">Views</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/5 text-center">
                      <div className="text-lg font-bold text-brand-green">{post.likes}</div>
                      <div className="text-[10px] text-white/40 uppercase">Likes</div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  
  // Carousel Logic
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Logic: 1 on mobile, 2 on tablet, 3 on desktop. 
  // We stop scrolling when we reach the end of the list visually.
  const nextSlide = () => {
    if (currentIndex < BLOG_POSTS.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      
      {/* Header with Navigation Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Writing & Insights
          </h2>
          <p className="text-brand-gray-light max-w-xl text-lg">
            Thoughts on software engineering, design patterns, and the future of technology.
          </p>
        </div>
        
        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full border transition-all ${
              currentIndex === 0 
                ? 'border-white/5 text-white/20 cursor-not-allowed' 
                : 'border-white/10 text-white hover:bg-white/10 hover:border-white/30'
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            // Simple validation: Ensure we don't scroll past the last item
            disabled={currentIndex >= BLOG_POSTS.length - 1} 
            className={`p-3 rounded-full border transition-all ${
               currentIndex >= BLOG_POSTS.length - 1
                ? 'border-white/5 text-white/20 cursor-not-allowed' 
                : 'border-white/10 text-white hover:bg-white/10 hover:border-white/30'
            }`}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden -mx-4 px-4 sm:px-0">
        <div 
          className="flex transition-transform duration-500 ease-out will-change-transform"
          // We use CSS Variables + Tailwind arbitrary values to handle the math safely without styled-jsx
          style={{ '--slide-index': currentIndex } as React.CSSProperties}
        >
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="
                w-full flex-shrink-0 px-2
                sm:w-1/2 
                lg:w-1/3 
                transition-transform duration-500
                transform
                translate-x-[calc(var(--slide-index)*-100%)]
                sm:translate-x-[calc(var(--slide-index)*-50%)]
                lg:translate-x-[calc(var(--slide-index)*-33.333%)]
              "
            >
              {/* This wrapper handles the gap between slides */}
              <div className="h-full">
                <BlogCard
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <BlogReaderModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  )
}

export default Blog