"use client";
import { Building, MapPin, MessageCircle, Navigation } from 'lucide-react';

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">Smart Real Estate</h1>
            <p className="text-[#00ffff]">Direct Owner Contact • 0% Commission</p>
          </div>
          <div className="hidden md:block bg-[#00ffff]/10 border border-[#00ffff]/20 p-4 rounded-xl">
            <p className="text-xs font-bold text-[#00ffff] uppercase">Exclusive Service</p>
            <p className="text-sm">Free Pick-up & Drop for Visits</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Example Property Card */}
          <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#00ffff]/50 transition-all">
            <div className="h-64 bg-white/10 relative">
               <div className="absolute top-4 left-4 bg-[#00ffff] text-black text-xs font-black px-3 py-1 rounded">DIRECT FROM OWNER</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Modern 3BHK Apartment</h3>
              <div className="flex items-center gap-2 text-white/50 mb-6">
                <MapPin size={16} /> <span>Vijay Nagar, Jabalpur</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-[#00ffff] transition-colors">
                <MessageCircle size={20} /> CONTACT OWNER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}