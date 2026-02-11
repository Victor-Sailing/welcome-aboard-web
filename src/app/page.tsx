'use client';

import React from 'react';
// We use the direct paths to ensure Linux finds the files
import { useLocale } from '../lib/locale-context'; 


export default function Home() {
  const { locale } = useLocale();
  
  // This line is the key: it forces the page to refresh when 'locale' changes


  return (
    <main className="relative min-h-screen bg-[#063954] flex flex-col items-center justify-center p-24">
      
      {/* 1. THE HEADING: This is wired to the i18n dictionary */}
      <h1 className="text-6xl font-serif italic text-[#F5F2E9] tracking-tighter text-center">
      "The Horizon is Near"
      </h1>
      
      {/* 2. THE SUBTITLE: This manually checks the code */}
      <div className="mt-4 text-[#F5F2E9] opacity-60 font-sans tracking-[0.2em] uppercase text-xs text-center">
        {locale === 'en' && 'Luxury Vessel Management'}
        {locale === 'es' && 'Gestión de Embarcaciones de Lujo'}
        {locale === 'fr' && 'Gestion de Navires de Luxe'}
        {locale === 'de' && 'Luxusschiffsmanagement'}
        {locale === 'it' && 'Gestione di Navigazione di Lusso'}
      </div>

    </main>
  );
}
