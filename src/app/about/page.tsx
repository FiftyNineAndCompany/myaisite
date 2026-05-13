"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, ShieldCheck, Mail, Linkedin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
       {/* 1. VISION & MISSION SECTION */}
       <section className="mb-24 text-center mt-10"> {/* mt-10 pushes it below the navbar */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Engineering the <span className="text-[#00ffff]">Future</span>
          </motion.h1>
          
          <div className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed space-y-6">
            <p>
              SAI TECHVERSE SOLUTIONS is dedicated to connecting engineers with global opportunities. 
              We bridge the gap between technical excellence and business needs, focusing on 
              India's growth in the AI and Engineering sectors.
            </p>

            <h3 className="text-white font-bold text-2xl pt-6 pb-2">Our Ecosystem of Services</h3>

            <p>
              <strong className="text-[#00ffff]">Ethical Innovation & Engineering:</strong> From cutting-edge AI Development to rigorous End-to-End Testing, we build and validate systems that seek the absolute truth in performance. We take on your outsourced projects with the highest standards of quality and right action.
            </p>

            <p>
              <strong className="text-[#00ffff]">Mindful Customer & Tech Support:</strong> Our BPO solutions—including inbound/outbound calling and dedicated customer and tech support—are handled with empathy, patience, and a genuine desire to help your customers.
            </p>

            <p>
              <strong className="text-[#00ffff]">Purpose-Driven Staffing:</strong> We connect you with talent that aligns not just with your technical needs, but with your company’s culture and vision, building harmonious teams for lasting success.
            </p>
          </div>
        </section>

        {/* 2. CEO & FOUNDER SECTION */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10">
            {/* Founder Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-neutral-900 border-2 border-[#00ffff]/30"
            >
              <div className="absolute inset-0 flex items-center justify-center text-[#00ffff]/20 font-bold text-xl">
                CEO PHOTO
              </div>
              {/* Once you have your photo, use: <Image src="/ceo.jpg" fill alt="Sairam Lodhi" /> */}
            </motion.div>

            {/* Founder Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[#00ffff] font-black uppercase tracking-[0.3em] text-sm mb-2">Leadership</h4>
                <h2 className="text-4xl font-bold mb-1">Sairam Lodhi</h2>
                <p className="text-white/40 font-mono italic">Founder & CEO, SAI TECHVERSE SOLUTIONS</p>
              </div>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  As an engineer who completed his studies in Jabalpur, Madhya Pradesh, 
                  Sairam Lodhi founded SAI TECHVERSE with a singular vision: to empower the 
                  engineering community through technology-driven solutions.
                </p>
                <p>
                  Currently based in Bengaluru, Sairam oversees the strategic expansion of 
                  the company across Mumbai and Bengaluru, ensuring that the **IOBE Initiative** continues to create real value for freshers and experienced professionals alike.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#00ffff] hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:info@saitechverse.com" className="p-3 bg-white/10 rounded-full hover:bg-[#00ffff] hover:text-black transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES */}
        <section>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Our Core <span className="text-[#00ffff]">Values</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Delivering engineering solutions with 100% accuracy and efficiency." },
              { icon: Users, title: "Community", desc: "Building a network where engineers and businesses thrive together." },
              { icon: ShieldCheck, title: "Integrity", desc: "Maintaining transparency in staffing, BPO, and real estate tech." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00ffff]/50 transition-colors">
                <value.icon className="text-[#00ffff] mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}