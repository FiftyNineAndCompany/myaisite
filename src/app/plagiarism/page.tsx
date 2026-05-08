"use client";
import { motion } from 'framer-motion';
import { Search, FileCheck, Shield, Clock, MessageCircle } from 'lucide-react';

export default function PlagiarismPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Plagiarism Express</h1>
          <p className="text-[#00ffff]">Official Turnitin Reports within 24 Hours</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Shield, title: "100% Privacy", desc: "Documents are never stored in the repository." },
            { icon: Clock, title: "Fast Turnaround", desc: "Reports delivered in under 24 hours." },
            { icon: FileCheck, title: "AI Detection", desc: "Includes AI-generated content checking." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <item.icon className="text-[#00ffff] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://wa.me/yournumber" className="inline-flex items-center gap-3 bg-[#00ffff] text-black px-8 py-4 rounded-full font-bold">
            <MessageCircle /> Get Quote on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}