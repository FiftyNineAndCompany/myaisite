"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Globe, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const whatsappNumber = "+91[YourNumber]"; // Replace with your actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi%20SAI%20TECHVERSE,%20I'd%20like%20to%20inquire%20about...`;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#00ffff] font-black uppercase tracking-[0.4em] text-xs mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            Let's build the <span className="text-[#00ffff]">Next</span> big thing.
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* 1. Direct Contact Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* WhatsApp Card */}
            <motion.a 
              href={whatsappUrl}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 flex flex-col justify-between h-64 group"
            >
              <MessageCircle className="text-[#25D366] w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">WhatsApp Us</h3>
                <p className="text-white/60 text-sm mb-4">Instant response for project inquiries and staffing.</p>
                <span className="flex items-center gap-2 font-bold text-[#25D366]">
                  START CHAT <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              href="mailto:info@saitechverse.com"
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-64 group hover:border-[#00ffff]/50 transition-colors"
            >
              <Mail className="text-[#00ffff] w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Email Official</h3>
                <p className="text-white/60 text-sm mb-4">For formal proposals and documentation.</p>
                <span className="flex items-center gap-2 font-bold text-[#00ffff]">
                  SEND EMAIL <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.a>
          </div>

          {/* 2. Presence / Locations Sidebar */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-[#00ffff] font-black uppercase text-xs tracking-widest mb-6">Our Presence</h3>
              
              <div className="space-y-8">
                {/* Registered Office */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00ffff]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#00ffff]" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Jabalpur (HQ)</p>
                    <p className="text-sm text-white/50">Registered Office, Madhya Pradesh</p>
                    <p className="text-xs text-[#00ffff] mt-1 font-bold">OPERATIONAL</p>
                  </div>
                </div>

                {/* Upcoming Mumbai */}
                <div className="flex gap-4 opacity-70">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Globe className="text-white/40" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Mumbai</p>
                    <p className="text-sm text-white/50">Maharashtra Hub</p>
                    <p className="text-xs text-white/40 mt-1 font-bold italic">OPENING SOON</p>
                  </div>
                </div>

                {/* Upcoming Bengaluru */}
                <div className="flex gap-4 opacity-70">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Globe className="text-white/40" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Bengaluru</p>
                    <p className="text-sm text-white/50">Karnataka Tech Center</p>
                    <p className="text-xs text-white/40 mt-1 font-bold italic">OPENING SOON</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-6 bg-[#00ffff] rounded-2xl flex items-center gap-4">
              <Clock className="text-black" size={24} />
              <p className="text-black font-bold text-sm">Typical response time: &lt; 2 hours</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}