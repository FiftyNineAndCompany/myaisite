"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Building, 
  FileCheck, 
  Network, 
  Search, 
  ArrowRight,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const DETAILED_SERVICES = [
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    subtitle: 'Strategic Engineering Talent',
    description: 'We provide specialized engineering professionals to bridge your skill gaps.',
    features: ['Third-party Payroll', 'Technical Screening', 'Quick Deployment'],
    icon: Users,
    link: '/services/it-staffing',
    color: 'from-blue-500/20'
  },
  {
    id: 'testing',
    title: 'Testing Services',
    subtitle: 'Quality Assurance & Protocols',
    description: 'Comprehensive testing for UI/UX, SaaS, IoT, and Network Protocols.',
    features: ['End to end manual and automation Testing'],
    icon: FileCheck,
    link: '/services/software-testing',
    color: 'from-cyan-500/20'
  },
  {
    id: 'dev',
    title: 'IT & AI Development',
    subtitle: 'Next-Gen Engineering',
    description: 'Electronics, IoT, and AI-powered software development for industry and academia.',
    features: ['IoT Ecosystems', 'AI Integration', 'Web Architecture'],
    icon: Cpu,
    link: '/services/it-ai-development',
    color: 'from-purple-500/20'
  },
  {
    id: 'bpo',
    title: 'BPO Services',
    subtitle: 'Operational Excellence',
    description: 'Managing inbound and outbound projects with high-efficiency consultancy.',
    features: ['Process Optimization', '24/7 Support', 'Scalable Teams'],
    icon: Network,
    link: '/services/bpo-solutions',
    color: 'from-emerald-500/20'
  },
 /* {
    id: 'real-estate',
    title: 'Property in your budget Solutions',
    subtitle: 'Property in your budget Solutions',
    description: 'Prime focus on low budget, pocket frindly properties.',
    features: ['Direct Connect', 'Visit Assistance'],
    icon: Building,
    link: '/real-estate',
    color: 'from-orange-500/20'
  }*/
  {
    id: 'plagiarism',
    title: 'Plagiarism Express',
    subtitle: 'Academic Integrity',
    description: 'High-speed Turnitin reports for thesis, research papers, and articles.',
    features: ['AI Detection', '24h Delivery', 'Strict Privacy'],
    icon: Search,
    link: '/services/plagiarism-express',
    color: 'from-red-500/20'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#00ffff] font-black uppercase tracking-[0.4em] text-xs mb-4"
          >
            Our Ecosystem
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Engineering <span className="text-[#00ffff]">Solutions</span> for the Modern Era.
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DETAILED_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 border border-white/5`}>
                  <service.icon className="text-[#00ffff]" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest mb-4">{service.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-bold text-white/80">
                      <div className="w-1 h-1 rounded-full bg-[#00ffff]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TWO BUTTONS: Contact First, Details Second */}
              <div className="flex flex-wrap items-center gap-6 mt-auto pt-4">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black border-b border-[#00ffff] pb-1 text-[#00ffff] hover:gap-4 transition-all w-max">
                  INQUIRE NOW <ArrowRight size={14} />
                </Link>
                
                {service.link && (
                  <Link href={service.link} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Read Details
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-[#00ffff] flex flex-col items-center text-center"
        >
          <Zap className="text-black mb-6" size={48} fill="black" />
          <h2 className="text-black text-4xl font-black mb-4">Ready to start a project?</h2>
          <p className="text-black/70 font-bold mb-8 max-w-xl">
            From technical staffing to AI development, SAI TECHVERSE provides the infrastructure your business needs to scale.
          </p>
          <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform">
            GET A QUOTE
          </Link>
        </motion.div>
      </div>
    </div>
  );
}