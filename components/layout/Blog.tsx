"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
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
      // Light Mode: White card, subtle border, shadow on hover
      className="group cursor-pointer flex flex-col h-full bg-white border border-black/5 rounded-xl overflow-hidden hover:border-[#FA891A]/40 hover:shadow-lg transition-all duration-300 select-none"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/5 bg-gray-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          {/* Orange Badge */}
          <Badge className="bg-[#FA891A]/10 text-[#FA891A] border-[#FA891A]/20">
            {post.category}
          </Badge>
          <span className="text-xs text-zinc-400 font-mono">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-snug group-hover:text-[#FA891A] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Author Footer */}
        <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <Image src={post.author.avatar} alt={post.author.name} width={24} height={24} className="rounded-full border border-black/5" />
            <span className="text-xs text-zinc-600 font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
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
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-0 sm:pt-4 pb-0 sm:pb-4 px-0 sm:px-4 bg-white/80 backdrop-blur-md">
      {/* Reader Container (White paper look) */}
      <div className="relative w-full max-w-5xl h-full bg-white sm:rounded-lg shadow-2xl border-x sm:border border-black/10 flex flex-col overflow-hidden">
        
        {/* Sticky Header with RETURN Button */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-4 bg-white/95 backdrop-blur border-b border-black/5 z-20">
          
          {/* RETURN Button */}
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 border border-black/5 text-zinc-600 hover:bg-gray-100 hover:text-black hover:border-black/10 transition-all group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Return</span>
          </button>
          
          {/* Actions */}
          <div className="flex gap-2">
             <button className="p-2 hover:bg-gray-100 rounded-md text-zinc-400 hover:text-[#FA891A] transition-colors">
                <BookmarkIcon className="w-5 h-5" />
             </button>
             <button className="p-2 hover:bg-gray-100 rounded-md text-zinc-400 hover:text-black transition-colors">
                <ShareIcon className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row min-h-full">
            
            {/* LEFT: Article Content */}
            <div className="flex-1 p-6 sm:p-12 lg:p-16 max-w-3xl mx-auto border-r border-black/5">
              
              {/* Header Info */}
              <div className="mb-8 text-center">
                <div className="flex justify-center gap-4 text-xs text-zinc-400 font-mono mb-4 uppercase tracking-widest">
                  <span className="text-[#FA891A] font-bold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                  {post.title}
                </h1>
                <div className="flex justify-center items-center gap-2 text-[#FA891A]">
                  <span className="w-8 h-px bg-[#FA891A]/30"></span>
                  <span className="text-sm font-medium">{post.readTime} Read</span>
                  <span className="w-8 h-px bg-[#FA891A]/30"></span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-12 bg-gray-100 shadow-sm">
                <Image src={post.image} alt={post.title} fill className="w-full h-full object-cover" />
              </div>

              {/* Typography Content - Standard Prose (Not Inverted) */}
              <div className="prose prose-lg max-w-none text-zinc-600">
                <p className="text-xl leading-relaxed font-medium text-zinc-900 mb-8 border-l-4 border-[#FA891A] pl-6 italic">
                  {post.excerpt}
                </p>

                <div className="space-y-8">
                  <p>
                    {post.content || "In the fast-paced world of technology, staying grounded in fundamental principles is often more valuable than chasing the latest trends. This article explores the intersection of design, code, and human experience."}
                  </p>

                  <h3 className="text-2xl font-bold text-zinc-900 mt-10">The Core Principles</h3>
                  <p>
                    When we strip away the frameworks and the tooling, we are left with the raw materials of the web: information and interaction. Mastering these allows us to build resilient systems.
                  </p>

                  {/* Callout Box */}
                  <div className="my-8 p-6 bg-orange-50 border border-orange-100 rounded-lg">
                    <h4 className="text-[#FA891A] font-bold text-sm uppercase tracking-wide mb-2">Key Takeaway</h4>
                    <p className="text-zinc-800 m-0 font-medium">Simplicity is not about the absence of complexity, but the effective management of it.</p>
                  </div>

                  <p>
                    Understanding the user journey is paramount. We often get caught up in the &quot;how&quot; before we fully understand the &quot;why&quot;. By reversing this process, we ensure that every line of code serves a purpose.
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="mt-16 pt-8 border-t border-black/5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-zinc-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded hover:bg-[#FA891A] hover:text-white hover:border-[#FA891A] transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar (Desktop Only) */}
            <div className="hidden lg:block w-80 bg-gray-50 border-l border-black/5 p-8">
               <div className="sticky top-0 space-y-8">
                  
                  {/* Author Card */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Written By</h4>
                    <div className="flex items-start gap-4">
                      <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-black/10" />
                      <div>
                        <div className="text-zinc-900 font-bold">{post.author.name}</div>
                        <div className="text-xs text-zinc-500 mt-1">{post.author.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-black/5 w-full"></div>

                  {/* Stats */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded border border-black/5 text-center shadow-sm">
                      <div className="text-lg font-bold text-zinc-900">{post.views}</div>
                      <div className="text-[10px] text-zinc-400 uppercase">Views</div>
                    </div>
                    <div className="p-3 bg-white rounded border border-black/5 text-center shadow-sm">
                      <div className="text-lg font-bold text-[#FA891A]">{post.likes}</div>
                      <div className="text-[10px] text-zinc-400 uppercase">Likes</div>
                    </div>
                  </div> */}
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
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black/5 bg-white">
      
      {/* Header with Navigation Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Writing & Insights
          </h2>
          <p className="text-zinc-500 max-w-xl text-lg">
            Thoughts on software engineering, design patterns, and the future of technology.
          </p>
        </div>
        
        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            // Light Mode Buttons
            className={`p-3 rounded-full border transition-all ${
              currentIndex === 0 
                ? 'border-black/5 text-zinc-300 cursor-not-allowed' 
                : 'border-black/10 text-zinc-700 hover:bg-[#FA891A] hover:border-[#FA891A] hover:text-white'
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= BLOG_POSTS.length - 1} 
            className={`p-3 rounded-full border transition-all ${
               currentIndex >= BLOG_POSTS.length - 1
                ? 'border-black/5 text-zinc-300 cursor-not-allowed' 
                : 'border-black/10 text-zinc-700 hover:bg-[#FA891A] hover:border-[#FA891A] hover:text-white'
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