"use client";
import React, { useState } from 'react';
import { Heart, User, ChevronDown, DollarSign } from 'lucide-react';
import { US, MX, ES, FR, IT, DE, BR, PT, CN, JP, RU, SA, GB } from 'country-flag-icons/string/3x2';

const languages = [
  { code: 'EN', name: 'English', Flag: US },
  { code: 'ES', name: 'Español', Flag: ES },
  { code: 'MX', name: 'Español (MX)', Flag: MX },
  { code: 'FR', name: 'Français', Flag: FR },
  { code: 'IT', name: 'Italiano', Flag: IT },
  { code: 'DE', name: 'Deutsch', Flag: DE },
  { code: 'PT', name: 'Português', Flag: PT },
  { code: 'BR', name: 'Português (BR)', Flag: BR },
  { code: 'RU', name: 'Русский', Flag: RU },
  { code: 'CN', name: '中文', Flag: CN },
  { code: 'JP', name: '日本語', Flag: JP },
  { code: 'SA', name: 'العربية', Flag: SA },
  { code: 'UK', name: 'English (UK)', Flag: GB },
];

const currencies = ['USD', 'MXN', 'EUR'];

export default function HomeDraft() {
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedCurr, setSelectedCurr] = useState('USD');

  return (
    <main className="min-h-screen bg-[#000B14] text-white font-sans selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#000B14]/80 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-serif tracking-[0.2em] uppercase">Welcome Aboard</div>
        
        <div className="flex items-center space-x-10">
          {/* Language Selector */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all">
              <div className="w-5 h-auto overflow-hidden rounded-sm" dangerouslySetInnerHTML={{ __html: selectedLang.Flag }} />
              <span className="text-[10px] tracking-widest">{selectedLang.code}</span>
              <ChevronDown size={10} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full mt-4 right-0 w-48 bg-[#001524] border border-white/10 py-2 shadow-2xl">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => { setSelectedLang(l); setLangOpen(false); }} className="flex items-center space-x-3 w-full px-4 py-2 hover:bg-blue-900/20 text-left transition-colors">
                    <div className="w-4 h-auto" dangerouslySetInnerHTML={{ __html: l.Flag }} />
                    <span className="text-[10px] tracking-wider uppercase">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div className="relative">
            <button onClick={() => setCurrOpen(!currOpen)} className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all">
              <DollarSign size={14} strokeWidth={1.5} />
              <span className="text-[10px] tracking-widest">{selectedCurr}</span>
              <ChevronDown size={10} className={`transition-transform ${currOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {currOpen && (
              <div className="absolute top-full mt-4 right-0 w-24 bg-[#001524] border border-white/10 py-2 shadow-2xl">
                {currencies.map((c) => (
                  <button key={c} onClick={() => { setSelectedCurr(c); setCurrOpen(false); }} className="w-full px-4 py-2 hover:bg-blue-900/20 text-[10px] text-left tracking-widest uppercase transition-colors">
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Heart size={18} strokeWidth={1.5} className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
          <User size={18} strokeWidth={1.5} className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </nav>

      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-serif italic mb-4">Precision</h1>
        <p className="text-blue-100/40 tracking-[0.3em] uppercase text-[10px]">International Yacht Management</p>
      </section>
    </main>
  );
}
