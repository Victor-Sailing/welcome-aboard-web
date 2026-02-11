'use client';

import React, { useState } from 'react';

export default function VesselDetailPage() {
  const [activeTab, setActiveTab] = useState('Specs');

  const toggleSection = (tabName: string) => {
    setActiveTab(activeTab === tabName ? '' : tabName);
  };

  const vessel = {
    name: "Aleta",
    overview: "Experience the ultimate freedom of the Mexican Caribbean. The Aleta is a masterfully maintained catamaran designed for stability and luxury. Whether you're navigating the turquoise shallows of Playa Norte or snorkeling the vibrant reefs of El Meco, this vessel provides the perfect balance of adventure and comfort.",
    specs: {
      Model: "Leopard 37",
      Engines: "2 x 29hp Yanmar",
      Cabins: "2 Cabins",
      Heads: "1 Full",
      Year: "2018"
    },
    itinerary: [
      { time: "09:00", title: "Set Sail", desc: "Departure from the marina with a welcome toast." },
      { time: "12:00", title: "Playa Norte", desc: "Anchoring at the world's most famous crystal clear beach." }
    ],
    includes: ["Bilingual Crew", "Premium Open Bar", "Snorkel Equipment", "Life Jackets"],
    notIncludes: ["Dock Fee ($20 USD)", "Gratuities", "Ground Transport"]
  };

  return (
    <div className="bg-[#012f40] text-[#F5F2E9] min-h-screen font-serif">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] flex items-end p-8 md:p-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070')] bg-cover bg-center opacity-40" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl italic font-light tracking-tighter">{vessel.name}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-20">
        
        <div className="flex-1">
          {/* 2. OVERVIEW (Clean Narrative) */}
          <div className="mb-20">
            <p className="text-2xl md:text-3xl leading-relaxed italic opacity-90 border-l-2 border-[#27A8BE] pl-8">
              {vessel.overview}
            </p>
          </div>

          {/* 3. DYNAMIC CONTENT SYSTEM */}
          <div className="w-full">
            
            {/* DESKTOP TABS */}
            <div className="hidden md:flex gap-12 border-b border-white/5 mb-10 font-sans text-[10px] uppercase tracking-[0.3em]">
              {['Specs', 'Gallery', 'Itinerary', 'Inclusions'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 transition-all ${activeTab === tab ? 'text-[#27A8BE] border-b-2 border-[#27A8BE]' : 'opacity-30 hover:opacity-100'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4 md:space-y-0">
              
              {/* SECTION: TECH SPECS */}
              <div className="border-b border-white/5 md:border-none">
                <button onClick={() => toggleSection('Specs')} className="md:hidden w-full py-6 flex justify-between text-[#27A8BE] italic text-2xl">
                  Specifications <span>{activeTab === 'Specs' ? '−' : '+'}</span>
                </button>
                {activeTab === 'Specs' && (
                  <div className="pb-10 pt-4 md:pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 font-sans uppercase text-[10px] tracking-widest">
                      {Object.entries(vessel.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between py-4 border-b border-white/5">
                          <span className="opacity-30">{key}</span>
                          <span className="text-[#27A8BE]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION: GALLERY */}
              <div className="border-b border-white/5 md:border-none">
                <button onClick={() => toggleSection('Gallery')} className="md:hidden w-full py-6 flex justify-between text-[#27A8BE] italic text-2xl">
                  Gallery <span>{activeTab === 'Gallery' ? '−' : '+'}</span>
                </button>
                {activeTab === 'Gallery' && (
                  <div className="pb-10 pt-4 md:pt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center opacity-20 italic">Media Slot</div>
                    <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center opacity-20 italic">Media Slot</div>
                  </div>
                )}
              </div>

              {/* SECTION: ITINERARY */}
              <div className="border-b border-white/5 md:border-none">
                <button onClick={() => toggleSection('Itinerary')} className="md:hidden w-full py-6 flex justify-between text-[#27A8BE] italic text-2xl">
                  Itinerary <span>{activeTab === 'Itinerary' ? '−' : '+'}</span>
                </button>
                {activeTab === 'Itinerary' && (
                  <div className="pb-10 pt-4 md:pt-0 space-y-10 border-l border-[#27A8BE]/20 ml-2 pl-8">
                    {vessel.itinerary.map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-[#27A8BE]" />
                        <span className="font-sans text-[#27A8BE] text-[10px] uppercase tracking-widest">{item.time}</span>
                        <h4 className="text-2xl italic mt-1">{item.title}</h4>
                        <p className="font-sans text-xs opacity-50 mt-2 max-w-md">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION: INCLUSIONS */}
              <div className="border-b border-white/5 md:border-none">
                <button onClick={() => toggleSection('Inclusions')} className="md:hidden w-full py-6 flex justify-between text-[#27A8BE] italic text-2xl">
                  Inclusions <span>{activeTab === 'Inclusions' ? '−' : '+'}</span>
                </button>
                {activeTab === 'Inclusions' && (
                  <div className="pb-10 pt-4 md:pt-0 flex flex-col md:flex-row gap-12 md:gap-32">
                    <div className="flex-1">
                      <h5 className="font-sans text-[9px] uppercase tracking-widest text-[#27A8BE] mb-8">What is included</h5>
                      <ul className="space-y-4 font-sans text-xs opacity-70">
                        {vessel.includes.map(inc => (
                          <li key={inc} className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-[#27A8BE] rounded-full" /> {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-sans text-[9px] uppercase tracking-widest text-red-400/30 mb-8">Not included</h5>
                      <ul className="space-y-4 font-sans text-xs opacity-70">
                        {vessel.notIncludes.map(not => (
                          <li key={not} className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-red-400/30 rounded-full" /> {not}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* 4. CLEAN BOOKING SIDEBAR */}
        <aside className="w-full lg:w-[380px]">
          <div className="sticky top-12 bg-[#023F57]/30 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-2xl">
            <h4 className="font-sans text-[10px] uppercase tracking-widest opacity-40 text-center mb-10 italic">Private Rates</h4>
            <div className="space-y-8 mb-12">
               <div className="flex justify-between items-center"><span className="text-xs opacity-50 font-sans tracking-widest">4 HOURS</span><span className="text-3xl font-light italic">$1,650</span></div>
               <div className="flex justify-between items-center"><span className="text-xs opacity-50 font-sans tracking-widest">6 HOURS</span><span className="text-3xl font-light italic">$1,990</span></div>
            </div>
            <button className="w-full bg-[#F5F2E9] text-[#012f40] py-6 rounded-full font-sans font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#27A8BE] hover:text-white transition-all shadow-2xl">
              Request Booking
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}