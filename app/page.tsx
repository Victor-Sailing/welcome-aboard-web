import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000B14] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[150px]" />
      </div>

      <div className="z-10 text-center max-w-2xl">
        <h2 className="text-blue-400 tracking-[0.4em] uppercase text-[10px] font-semibold mb-8 animate-pulse">
          Launching 2026
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight mb-6">
          The Horizon is <span className="italic">Near</span>
        </h1>
        
        <div className="w-16 h-[1px] bg-blue-400/50 mx-auto mb-8" />
        
        <p className="text-blue-100/40 font-light tracking-widest text-xs uppercase mb-12">
          Premier Vessel Management & Concierge
        </p>

        <div className="inline-block border border-white/10 px-6 py-2">
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">
            Private Preview Coming Soon
          </span>
        </div>
      </div>

      <footer className="absolute bottom-12 text-[9px] text-blue-900/30 tracking-[0.5em] uppercase">
        © Welcome Aboard
      </footer>
    </main>
  );
}
