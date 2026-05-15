"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Globe, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  // --- 1. WHATSAPP CONFIG ---
  const whatsappNumber = "+91[9123330494]"; // REPLACE WITH YOUR ACTUAL NUMBER
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hi%20SAI%20TECHVERSE,%20I'd%20like%20to%20inquire%20about...`;

  // --- 2. WEB3FORMS CONFIG ---
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);

    // 👇 PASTE YOUR WEB3FORMS ACCESS KEY ON THIS LINE 👇
    formData.append("access_key", "d902e1d0-b371-46ed-b066-15da0f0e09d6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We will get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

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
          
          {/* LEFT COLUMN: Cards + Email Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Direct Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* NEW: Web3Forms Contact Form */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white/80 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white/80 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white/80 mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#00ffff] text-black font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors"
                >
                  Submit Form
                </button>
              </form>
              
              {/* Success/Error Message Display */}
              {result && (
                <div className="mt-4 text-[#00ffff] font-mono text-sm font-bold">
                  {result}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Presence / Locations Sidebar */}
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