import React from 'react';

export default function HomeDraft() {
  return (
    <main className="min-h-screen bg-[#000B14] text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-[#000B14] to-transparent">
        <div className="text-xl font-serif tracking-[0.2em] uppercase">Welcome Aboard</div>
        <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] uppercase text-blue-100/60">
          <a href="#" className="hover:text-white transition-colors">Fleet</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Log In</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000B14]/20 to-[#000B14]" />
          {/* Subtle animated ambient light */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-blue-400 text-[10px] tracking-[0.5em] uppercase mb-4">Mastery of the Tides</h2>
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-8 leading-tight">
            Elegance <span className="not-italic font-light text-white/90">Redefined.</span>
          </h1>
          <p className="max-w-xl mx-auto text-blue-100/40 text-sm md:text-base font-light leading-relaxed tracking-wide mb-10">
            A bespoke management ecosystem for the most discerning vessel owners. 
            Precision engineering meets intuitive luxury.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-white text-black text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-blue-50 transition-all">
              Explore Services
            </button>
            <button className="px-10 py-4 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white/5 transition-all">
              Private Console
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
