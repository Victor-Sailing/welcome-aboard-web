import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000B14] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle Nautical Background Detail */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-800 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 text-center space-y-6">
        <h2 className="text-blue-400 tracking-[0.3em] uppercase text-sm font-medium animate-pulse">
          Premier Vessel Management
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
          The Horizon is <span className="italic">Near</span>
        </h1>
        
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8" />
        
        <p className="max-w-md mx-auto text-blue-100/60 font-light leading-relaxed text-lg">
          Expert care for the world's most distinguished yachts. 
          Your journey, perfected by our precision.
        </p>

        <div className="pt-10">
          <button className="px-8 py-3 bg-white text-black hover:bg-blue-50 transition-all duration-300 rounded-sm font-medium text-sm tracking-widest uppercase">
            Inquire
          </button>
        </div>
      </div>

      <footer className="absolute bottom-8 text-[10px] text-blue-900/40 tracking-[0.5em] uppercase">
        © 2026 Welcome Aboard
      </footer>
    </main>
  );
}
