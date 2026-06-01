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
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative group-hover:scale-105 transition-transform duration-300">
            <Logo className="w-10 h-10" />
            <div className="absolute inset-0 bg-[#00ffff]/20 blur-[15px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tighter leading-none">
              SAI <span className="text-[#00ffff] italic">TECHVERSE</span>
            </span>
            <span className="text-[8px] md:text-[9px] font-mono tracking-widest text-white/50 uppercase leading-none mt-1">
              Solutions
            </span>
          </div>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-[#00ffff] hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] transition-all underline-offset-8 hover:underline decoration-primary/30">
            // HOME
          </Link>

          <Link href="/#about" className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#00ffff] transition-colors">
            // ABOUT
          </Link>

          <div 
            className="relative h-20 flex items-center group" 
            onMouseEnter={() => setServiceMenu(true)} 
            onMouseLeave={() => setServiceMenu(false)}
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-[#00ffff] flex items-center gap-1 transition-colors cursor-default">
              // SERVICES <ChevronDown size={10} className={`${serviceMenu ? 'rotate-180' : ''} transition-transform`} />
            </div>
            
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

          <Link href="/t12-jobs">// T12 JOBS</Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all rounded-full text-[10px] font-black uppercase tracking-widest">
            CONTACT _
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-[#00ffff]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#020202] border-b border-white/5 px-6 py-10 space-y-6 flex flex-col shadow-2xl">
          <Link href="/" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="text-xs font-black uppercase text-white hover:text-[#00ffff] transition-colors">// HOME</Link>
          <Link href="/#about" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="text-xs font-black uppercase text-white/60 hover:text-[#00ffff] transition-colors">// ABOUT</Link>
          <div className="pl-4 space-y-4 border-l border-white/10">
            <p className="text-[10px] font-black text-[#00ffff]/40 tracking-[0.2em]">SERVICES</p>
            <Link href="/#engineering" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="block text-[10px] font-black uppercase text-white/60 hover:text-[#00ffff] transition-colors">01 // CORE ENGINEERING</Link>
            <Link href="/#utilities" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="block text-[10px] font-black uppercase text-white/60 hover:text-[#00ffff] transition-colors">02 // SMART UTILITIES</Link>
          </div>
          <Link href="/navjobportal" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="text-xs font-black uppercase text-white/60 hover:text-[#00ffff] transition-colors">// NAVJOBPORTAL</Link>
          <Link href="/contact" onClick={() => setTimeout(() => setIsOpen(false), 150)} className="text-xs font-black uppercase text-[#8B5CF6] hover:text-white transition-colors">// CONTACT</Link>
        </div>
      )}
    </nav>
  );
}

// ==========================================
// THE BYPASS: Logo is now directly in this file
// ==========================================
function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="80" height="80" stroke="#00ffff" strokeWidth="1.5" className="opacity-70" />
      <circle cx="10" cy="10" r="2.5" fill="#00ffff" />
      <circle cx="50" cy="10" r="2.5" fill="#00ffff" />
      <circle cx="90" cy="10" r="2.5" fill="#00ffff" />
      <circle cx="90" cy="50" r="2.5" fill="#00ffff" />
      <circle cx="90" cy="90" r="2.5" fill="#00ffff" />
      <circle cx="50" cy="90" r="2.5" fill="#00ffff" />
      <circle cx="10" cy="90" r="2.5" fill="#00ffff" />
      <circle cx="10" cy="50" r="2.5" fill="#00ffff" />
      <path d="M 35 65 L 35 35 L 65 35 L 65 65" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="65" r="2" fill="#00ffff" />
      <circle cx="35" cy="35" r="2" fill="#00ffff" />
      <circle cx="65" cy="35" r="2" fill="#00ffff" />
      <circle cx="65" cy="65" r="2" fill="#00ffff" />
      <text 
        x="50" 
        y="54" 
        fill="#ffffff" 
        fontSize="24" 
        fontWeight="900" 
        fontFamily="sans-serif" 
        textAnchor="middle" 
        alignmentBaseline="middle"
        style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,255,255,0.5))' }}
      >
        S
      </text>
    </svg>
  );
}