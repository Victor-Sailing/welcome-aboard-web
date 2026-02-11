'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 1. DATA FROM YOUR SUPABASE/PDF LOGIC
const RAW_FLEET = [
  { name: "Nal Gone", type: "Catamarans", size: "32 Ft", pax: 13, p4: 725, p7: 1240, extra: 240, tier: "Exclusive" },
  { name: "Oh La La", type: "Catamarans", size: "37 Ft", pax: 25, p4: 1185, p7: 1470, extra: 280, tier: "Exclusive" },
  { name: "Aleta", type: "Catamarans", size: "37 Ft", pax: 25, p4: 1330, p7: 1670, extra: 320, tier: "Exclusive" },
  { name: "Cavok", type: "Powercats", size: "40 Ft", pax: 30, p4: 3070, p7: 4050, extra: 600, tier: "Privilege" },
  { name: "Mauka", type: "Catamarans", size: "43 Ft", pax: 30, p4: 3485, p7: 4450, extra: 600, tier: "Privilege" },
  { name: "Soprano", type: "Yachts", size: "70 Ft", pax: 60, p4: 3795, p7: 4715, extra: 830, tier: "Luxury" },
];

export default function FleetListingPage() {
  const [activeType, setActiveType] = useState('All');
  const [maxGuests, setMaxGuests] = useState(100);
  const location = "Isla Mujeres"; 

  const calculatePrice = (boat: any, duration: number) => {
    let base4 = boat.p4;
    let base7 = boat.p7;
    if (boat.tier === "Privilege") { base4 *= 1.30; base7 *= 1.30; }
    if (location === "Isla Mujeres") { return duration === 4 ? (base4 + boat.extra) : base7; }
    return duration === 4 ? base4 : base7;
  };

  const filteredFleet = RAW_FLEET.filter(boat => {
    const matchesType = activeType === 'All' || boat.type === activeType;
    const matchesGuests = boat.pax <= maxGuests;
    return matchesType && matchesGuests;
  });

  return (
    <div className="bg-[#012f40] text-[#F5F2E9] min-h-screen font-serif">
      <header className="px-8 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl font-light italic mb-2">The Fleet</h1>
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40">Curated selection for {location}</p>
      </header>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto border-t border-white/5">
        <aside className="w-full lg:w-72 p-8 lg:border-r border-white/5 font-sans">
          <div className="sticky top-24 space-y-12 text-xs">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-6">Categories</p>
              <div className="flex flex-col gap-4">
                {['All', 'Catamarans', 'Powercats', 'Yachts'].map((t) => (
                  <button key={t} onClick={() => setActiveType(t)} className={`text-left ${activeType === t ? 'text-[#27A8BE]' : 'opacity-40'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-6">Max Guests: <span className="text-[#27A8BE]">{maxGuests}</span></p>
              <input type="range" min="1" max="100" value={maxGuests} onChange={(e) => setMaxGuests(parseInt(e.target.value))} className="w-full accent-[#27A8BE]" />
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 lg:p-12 space-y-12">
          {filteredFleet.map((boat) => (
            <div key={boat.name} className="group border-b border-white/5 pb-12 last:border-0 flex flex-col md:flex-row gap-10 text-xs">
              <div className="md:w-1/3 aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic opacity-20 text-xs">Vessel Image</div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-4xl font-light italic">{boat.name}</h2>
                    <span className="text-[9px] uppercase tracking-widest border border-[#27A8BE] text-[#27A8BE] px-3 py-1 rounded-full">{boat.tier}</span>
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-widest opacity-40 mt-2">{boat.size} • {boat.type} • Max {boat.pax} Guests</p>
                </div>
                <div className="mt-10 flex justify-between items-end">
                  <div className="flex gap-10">
                    <div><p className="opacity-30 mb-1">4 Hours</p><p className="text-2xl">${calculatePrice(boat, 4).toLocaleString()}</p></div>
                    <div><p className="opacity-30 mb-1">6 Hours</p><p className="text-2xl">${calculatePrice(boat, 6).toLocaleString()}</p></div>
                  </div>
                  <Link href={`/fleet/${boat.name.toLowerCase().replace(/ /g, '-')}`}>
                    <button className="bg-[#F5F2E9] text-[#012f40] px-10 py-4 rounded-full font-sans text-[10px] font-bold uppercase hover:bg-[#27A8BE] hover:text-white transition-all">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}