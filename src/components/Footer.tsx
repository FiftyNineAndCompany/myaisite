"use client";
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/#about', label: 'About' }, // Points to CEO section
    { path: '/services', label: 'Services' },
    { path: '/navjobportal', label: 'NavJobPortal' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#050505] text-white border-t border-[#00ffff]/20">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              S<span className="text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">AI</span> TECHVERSE SOLUTIONS
            </h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
            Technology with Purpose. Service with Dedication.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-[#00ffff] font-black uppercase text-sm tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.path} 
                    className="text-white hover:text-[#00ffff] transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-[#00ffff] font-black uppercase text-sm tracking-widest mb-6">Contact Us</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00ffff] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-1">Registered Office:</p>
                  <p className="text-white/80 text-sm">Jabalpur, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00ffff] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-1">Email:</p>
                  <a 
                    href="mailto:info@saitechverse.com" 
                    className="text-white hover:text-[#00ffff] transition-colors text-sm underline underline-offset-4"
                  >
                    info@saitechverse.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} SAI TECHVERSE SOLUTIONS // ALL SYSTEMS OPERATIONAL
          </p>
          <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
            SKILLS OVER PERCENTAGE // <span className="text-[#00ffff] font-bold">IOBE</span> ECOSYSTEM
          </p>
        </div>
      </div>
    </footer>
  );
}