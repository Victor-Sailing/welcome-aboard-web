import React from 'react';
import { Globe, DollarSign, Heart, User, ChevronDown } from 'lucide-react';

export default function HomeDraft() {
  return (
    <main className="min-h-screen bg-[#000B14] text-white font-sans selection:bg-blue-500/30">
      {/* High-End Global Header */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-[#000B14] to-transparent border-b border-white/5 backdrop-blur-sm">
        <div className="text-xl font-serif tracking-[0.2em] uppercase">Welcome Aboard</div>
        
        <div className="flex items-center space-x-8">
          {/* Language Selector (13 Languages) */}
          <div className="group relative flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-100 opacity-70">
            <Globe size={16} strokeWidth={1.5} />
            <span className="text-[10px] tracking-widest uppercase">EN</span>
            <ChevronDown size={10} className="opacity-40" />
            {/* Dropdown would go here */}
          </div>

          {/* Currency Selector (USD, MXN, EUR) */}
          <div className="group relative flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-100 opacity-70">
            <DollarSign size={16} strokeWidth={1.5} />
            <span className="text-[10px] tracking-widest uppercase">USD</span>
            <ChevronDown size={10} className="opacity-40" />
          </div>

          {/* Wishlist Heart */}
          <button className="transition-all hover:scale-110 opacity-70 hover:opacity-100 text-blue-400">
            <Heart size={18} strokeWidth={1.5} />
          </button>

          {/* Login Icon */}
          <button className="transition-all hover:scale-110 opacity-70 hover:opacity-100">
            <User size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 pt-20">
          <h2 className="text-blue-400 text-[10px] tracking-[0.5em] uppercase mb-4 animate-pulse">Private Preview</h2>
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-8 leading-tight">
            The New <span className="not-italic font-light text-white/90 text-5xl md:text-7xl">Standard.</span>
          </h1>
          <p className="max-w-xl mx-auto text-blue-100/40 text-sm font-light leading-relaxed tracking-[0.1em] mb-10">
            International vessel management across 13 regions. 
            Select your currency and language to begin.
          </p>
        </div>
      </section>
    </main>
  );
}
