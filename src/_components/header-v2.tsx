'use client';

import React, { useState } from 'react';
import { Menu, Globe, Calendar, User, ChevronDown, DollarSign } from 'lucide-react';
// We use the exact same imports your original working header used
import { useLocale } from '../_lib/locale-context'; 
import { localeLabels, localeFlags, type Locale } from '../_lib/i18n'; 

export default function HeaderV2() {
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale } = useLocale(); 

  // This is the EXACT logic from your working version
  const languages = (Object.keys(localeLabels) as Locale[]);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent text-[#F5F2E9]">
      
      {/* Left Side: Menu and Branding */}
      <div className="flex items-center gap-8">
        <button className="hover:text-[#27A8BE] transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
        <div className="font-serif italic text-xl tracking-tighter">
          Welcome Aboard
        </div>
      </div>

      {/* Right Side: Icons and Selectors */}
      <div className="flex items-center gap-6">
        
        {/* The Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 hover:text-[#27A8BE] transition-colors uppercase text-[10px] tracking-widest"
          >
            <Globe size={20} strokeWidth={1.5} />
            <span>{locale}</span>
            <ChevronDown size={12} className={langOpen ? 'rotate-180' : ''} />
          </button>
          
          {langOpen && (
            <div className="absolute right-0 mt-4 bg-[#012f40]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl grid grid-cols-2 gap-4 min-w-[240px] shadow-2xl overflow-y-auto max-h-[70vh]">
              {languages.map((langCode) => (
                <button 
                  key={langCode} 
                  onClick={() => handleLanguageChange(langCode)}
                  className={`text-[10px] font-sans uppercase tracking-widest text-left hover:text-[#27A8BE] transition-all ${locale === langCode ? 'text-[#27A8BE] font-bold' : 'opacity-70'}`}
                >
                  <span className="mr-2">{localeFlags[langCode]}</span>
                  {localeLabels[langCode]}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="hover:text-[#27A8BE]"><DollarSign size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-[#27A8BE]"><Calendar size={20} strokeWidth={1.5} /></button>
        <button className="hover:text-[#27A8BE]"><User size={20} strokeWidth={1.5} /></button>
      </div>
    </header>
  );
}