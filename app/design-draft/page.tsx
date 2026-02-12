"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function ConnectionTest() {
  const [status, setStatus] = useState('Testing connection...');
  const [dbData, setDbData] = useState<any[] | null>(null);

  useEffect(() => {
    async function checkConnection() {
      // This attempt to fetch 1 row from any table to verify the keys
      const { data, error } = await supabase.from('vessels').select('*').limit(1);
      
      if (error) {
        setStatus(`❌ Connection Failed: ${error.message}`);
      } else {
        setStatus('✅ Engine Online: Supabase Connected');
        setDbData(data);
      }
    }
    checkConnection();
  }, []);

  return (
    <main className="min-h-screen bg-[#000B14] text-white flex flex-col items-center justify-center p-10 font-sans">
      <div className="border border-white/10 p-8 rounded-lg bg-white/5 backdrop-blur-md text-center">
        <h2 className="text-blue-400 text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold">System Diagnostic</h2>
        <p className="text-xl font-serif italic mb-6">{status}</p>
        
        {dbData && (
          <div className="text-[10px] text-white/40 tracking-widest uppercase border-t border-white/10 pt-4">
            Connection verified. Ready for dynamic data.
          </div>
        )}
        
        {!dbData && status.includes('Failed') && (
          <p className="text-red-400 text-xs mt-4">Check your .env.local keys and restart the server.</p>
        )}
      </div>
      
      <a href="/" className="mt-10 text-[10px] tracking-widest uppercase text-white/20 hover:text-white transition-colors">
        Return to Coming Soon
      </a>
    </main>
  );
}
