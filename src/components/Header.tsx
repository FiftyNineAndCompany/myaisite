"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-white group">
      SAI <span className="text-[#00ffff] italic drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)] transition-all">TECHVERSE</span>
    </Link>
        
        {/* DESKTOP MENU - MANUAL LINKS ONLY */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-[#00ffff] hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] transition-all underline-offset-8 hover:underline decoration-primary/30">
            // HOME
          </Link>

          <Link href="/#about" className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#00ffff] transition-colors">
            // ABOUT
          </Link>

          {/* SERVICES TRIGGER - CHANGED TO DIV (NOT LINK) */}
          <div 
            className="relative h-20 flex items-center group" 
            onMouseEnter={() => setServiceMenu(true)} 
            onMouseLeave={() => setServiceMenu(false)}
          >
            {/* This is now plain text, it cannot "go" anywhere when clicked */}
            <div className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-[#00ffff] flex items-center gap-1 transition-colors cursor-default">
              // SERVICES <ChevronDown size={10} className={`${serviceMenu ? 'rotate-180' : ''} transition-transform`} />
            </div>
            
            {/* DROPDOWN OPTIONS */}
            {serviceMenu && (
                  <div className="absolute top-[80px] left-0 w-64 bg-[#050505] border border-[#8B5CF6]/30 p-2 backdrop-blur-3xl shadow-[0_20px_50px_rgba(139,92,246,0.2)]">
      <Link href="/#engineering" className="block p-4 text-[9px] font-black uppercase text-white/40 hover:text-[#8B5CF6] border-b border-white/5">
                  01 // Core Engineering
                </Link>
                <Link 
                  href="/#utilities" 
                  className="block p-4 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-[#00ffff] hover:bg-white/5 transition-all"
                  onClick={() => setServiceMenu(false)}
                >
                  02 // Smart Utilities
                </Link>
              </div>
            )}
          </div>

          <Link href="/navjobportal" className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#00ffff] transition-colors">
            // NAVJOBPORTAL
          </Link>
           <Link href="/contact" className="px-8 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all rounded-full text-[10px] font-black uppercase tracking-widest">
            CONTACT _
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-[#00ffff]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* MOBILE MENU (Updated to match) */}
      {isOpen && (
        <div className="md:hidden bg-[#020202] border-b border-white/5 px-6 py-10 space-y-6 flex flex-col">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase text-white">// HOME</Link>
          <div className="pl-4 space-y-4 border-l border-white/10">
            <p className="text-[10px] font-black text-[#00ffff]/40 tracking-[0.2em]">SERVICES</p>
            <Link href="/#engineering" onClick={() => setIsOpen(false)} className="block text-[10px] font-black uppercase text-white/60">01 // CORE ENGINEERING</Link>
            <Link href="/#utilities" onClick={() => setIsOpen(false)} className="block text-[10px] font-black uppercase text-white/60">02 // SMART UTILITIES</Link>
          </div>
          <Link href="/navjobportal" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase text-white/60">// NAVJOBPORTAL</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase text-[#00ffff]">// CONTACT</Link>
        </div>
      )}
    </nav>
  );
}