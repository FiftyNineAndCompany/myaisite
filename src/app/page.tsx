"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TECH_SERVICES, UTILITY_SERVICES } from '../data/services';
import { 
  ArrowRight, 
  Terminal, 
  Code2,
  Briefcase,
  Handshake,
  CheckCircle2, // NEW
  Clock,        // NEW
  Award,        // NEW
  Star,         // NEW
  BellRing
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [serviceMenu, setServiceMenu] = React.useState(false);

  const [showNotification, setShowNotification] = useState(false); // NEW

  // NEW: Trigger the pop-up 2.5 seconds after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  const [text] = useTypewriter({
    words: [
      'Empowering Tier 2 & 3 City Engineers.',
      'Bridging the Skill Gap via IOBE.',
      'Skills > Percentage Philosophy.',
      'Deploying Modern IT Infrastructure.',
    ],
    loop: true,
  });

  return (
    <div className="bg-[#020202] text-white selection:bg-[#00ffff] selection:text-black font-sans overflow-x-hidden w-full max-w-[100vw]">
      
      
      {/* --- NEW: AMBIENT FLOATING ORBS (Continuous Motion) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-96 h-96 bg-[#00ffff]/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            x: [0, -40, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/10 blur-[150px] rounded-full"
        />
      </div>

      {/* --- NEW: LIVE ACTIVITY POP-UP (The "Popping Up" effect) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50, x: 50 }}
        animate={showNotification ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: 50 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed bottom-8 right-8 z-50 bg-black/80 backdrop-blur-md border border-[#00ffff]/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] flex items-start gap-4 max-w-sm"
      >
        <div className="p-2 bg-[#00ffff]/10 rounded-full shrink-0 relative">
          <BellRing className="text-[#00ffff]" size={20} />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00ffff] rounded-full border-2 border-black animate-ping" />
        </div>
        <div>
          <h4 className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest mb-1">Live Update</h4>
          <p className="text-white/90 text-sm font-medium leading-tight mb-2">
            SAI TECHVERSE is currently onboarding new enterprise partners for Q3.
          </p>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-white/40 hover:text-white text-xs font-bold transition-colors"
          >
            Dismiss
          </button>
        </div>
      </motion.div>

      {/* 1. HERO SECTION */}
      {/* ... your existing hero section code ... */}




     {/* 1. HERO SECTION */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-[100vw] pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            {/* The System Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ffff]/30 bg-[#00ffff]/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#00ffff]">System Status: Operational</span>
            </div>

            {/* Responsive Title */}
            <h1 className="text-[32px] sm:text-5xl md:text-7xl lg:text-[85px] font-black tracking-tighter mb-8 leading-[1.1] uppercase w-full mx-auto">
              <span className="block text-white">Technology with</span>
              <span className="block text-[#00ffff] drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">Purpose</span>
              
              <span className="block mt-6 md:mt-8 text-white">Service with</span>
              <span className="block text-[#00ffff] drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">Dedication</span> 
            </h1>
            
            {/* Terminal Typing Effect */}
            <div className="h-14 md:h-10 px-4 w-full">
              <span className="text-[13px] sm:text-lg md:text-2xl text-white/40 font-mono tracking-tight">
                <span className="text-[#00ffff]">root@saitechverse:~$</span> {text}
                <Cursor cursorStyle="▋" />
              </span>
            </div>

            {/* Bouncing Scroll Line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#00ffff] to-transparent" />
            </div>
          </motion.div>
        </div>
      </section> 


      {/* --- THE IMPACT & MISSION SECTION --- */}
      <section className="py-24 relative border-t border-white/10">
          
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00ffff]/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#00ffff] font-black uppercase tracking-[0.4em] text-xs mb-4"
            >
              The India Initiative
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Transforming Tier 2 & 3 Cities into <br />
              <span className="text-[#00ffff]">High-Tech Hubs.</span>
            </motion.h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Our mission is to make smaller cities the biggest hubs for AI Development, Testing, Staffing, and BPO. We empower graduates and engineers by connecting them with high-value opportunities closer to home. We understand the challenges you face, and we are here to bridge the gap.
              </p>
              <p>
                In this AI and digital era, talent shouldn't be restricted by geography. We invite tech and non-tech companies alike to partner with us as a trusted vendor. Together, we can modernize the employment landscape and elevate every city into a high-tech powerhouse.
              </p>
            </div>
          </div>

          {/* Dual Call-to-Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10 mb-8">
            
            {/* For Candidates */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 flex items-center justify-center mb-6 border border-white/5">
                  <Briefcase className="text-[#00ffff]" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">Work With Us</h3>
                <p className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest mb-4">For Candidates</p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Are you a skilled candidate looking for the right opportunity? Don't let geography limit your potential. Connect with us directly to find roles in AI, Testing, and Tech.
                </p>
              </div>
              
              <a 
                href="https://wa.me/9123330494?text=Hi%20SAI%20TECHVERSE,%20I%20am%20a%20candidate%20looking%20to%20work%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black border-b border-[#00ffff] pb-1 text-[#00ffff] hover:gap-4 transition-all w-max mt-auto"
              >
                WHATSAPP US FOR JOBS <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* For Clients */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 flex items-center justify-center mb-6 border border-white/5">
                  <Handshake className="text-[#00ffff]" size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">Partner With Us</h3>
                <p className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest mb-4">For Clients</p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Looking to outsource your Testing, Development, Staffing, or BPO needs? Join hands with us as a trusted vendor to access untapped, high-quality talent pools.
                </p>
              </div>
              
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-black border-b border-[#00ffff] pb-1 text-[#00ffff] hover:gap-4 transition-all w-max mt-auto"
              >
                OUTSOURCE SERVICES <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-6">
            
            {/* Corporate Pillar */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="group relative p-8 md:p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 flex items-center justify-center border border-white/5">
                      <Terminal className="text-[#00ffff]" size={32} />
                   </div>
                   <span className="text-[10px] font-mono text-[#00ffff] uppercase tracking-widest border border-[#00ffff]/30 px-3 py-1 rounded-full bg-[#00ffff]/5">01 // B2B</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Corporate Services</h3>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
                  From Engineering BPO and Staffing to AI Solutions. We provide the technical backbone for modern enterprises.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-black border-b border-[#00ffff] pb-1 text-[#00ffff] hover:gap-4 transition-all w-max mt-auto">
                EXECUTE REQUEST <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* NavJobPortal Pillar */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="group relative p-8 md:p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 flex items-center justify-center border border-white/5">
                      <Code2 className="text-white/40 group-hover:text-white transition-colors" size={32} />
                   </div>
                   <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">02 // PRODUCT</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">NavJobPortal</h3>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                  Based on skills, regardless of percentage. Join the Internet of Budding Engineers (IOBE) for expert placement.
                </p>
              </div>
              {/* Disabled Inline Link */}
              <div className="inline-flex items-center gap-2 text-sm font-black border-b border-white/20 pb-1 text-white/40 cursor-not-allowed w-max mt-auto">
                MODULE COMING SOON _
              </div>
            </motion.div>
          </div>
      {/* THE FIX: Added the missing closing tag right here! */}
      </section>

{/* --- NEW: QUALITY & TRUST METRICS --- */}
<section className="py-12 border-t border-white/5 bg-black relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, text: "100% Efficient Services" },
              { icon: Clock, text: "On-Time Delivery" },
              { icon: Award, text: "Quality is First Priority" },
              { icon: Star, text: "Top Client Appreciations" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-[#00ffff]/50 hover:bg-[#00ffff]/5 transition-all cursor-default text-center sm:text-left"
              >
                <div className="p-3 rounded-2xl bg-black/50 text-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow">
                  <item.icon size={28} />
                </div>
                <div className="flex items-center h-full">
                  <p className="text-white/90 font-black text-sm md:text-base leading-tight uppercase tracking-tight">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* --- 2. CORE ENGINEERING SECTION --- */}
      <section id="engineering" className="py-20 md:py-32 bg-[#050505] scroll-mt-20 w-full">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-white">
              Core <span className="text-white/30 italic underline decoration-1 underline-offset-8 decoration-white/10">Engineering</span>
            </h2>
            <p className="text-[#94A3B8] font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Hardcore Technical Systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECH_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
          
      {/* 4. TECH MARQUEE */}
      <div className="py-8 md:py-12 bg-black border-y border-white/5 w-full overflow-hidden max-w-[100vw]">
        <div className="flex overflow-hidden whitespace-nowrap w-full">
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex items-center flex-shrink-0">
            {["Next.js", "Python", "AWS", "Turnitin", "React", "Tailwind", "TypeScript", "IoT", "AI/ML"].map((item, index) => (
              <span key={index} className="text-white/10 text-2xl md:text-4xl font-black uppercase mx-8 md:mx-12 hover:text-primary transition-colors">{item}</span>
            ))}
          </motion.div>
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex items-center flex-shrink-0">
            {["Next.js", "Python", "AWS", "Turnitin", "React", "Tailwind", "TypeScript", "IoT", "AI/ML"].map((item, index) => (
              <span key={index} className="text-white/10 text-2xl md:text-4xl font-black uppercase mx-8 md:mx-12 hover:text-primary transition-colors">{item}</span>
            ))}
          </motion.div>
        </div>
      </div>
      {/* --- NEW: DAILY AI CHALLENGE --- */}
      <DailyChallenge />

      {/* --- 3. SMART UTILITIES SECTION --- */}
      <section id="utilities" className="py-20 md:py-32 border-t border-white/5 scroll-mt-20 w-full">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-white/80">
              Smart <span className="text-white/20 italic underline decoration-1 underline-offset-8">Utilities</span>
            </h2>
            <p className="text-white/30 font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">Tech-Enabled Operational Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UTILITY_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 1. VISION & MISSION SECTION */}
      <section id="about" className="py-20 md:py-24 text-center mt-4 w-full scroll-mt-20"> 
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 md:mb-12"
          >
            Engineering the <span className="text-[#00ffff]">Future</span>
          </motion.h1>
          
          <div className="text-white/75 text-base md:text-lg leading-relaxed md:leading-loose space-y-10 text-center bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <p className="text-lg md:text-xl font-medium text-white/90">
              SAI TECHVERSE SOLUTIONS is dedicated to connecting engineers with global opportunities. 
              We bridge the gap between technical excellence and business needs, focusing on 
              India's growth in the AI and Engineering sectors.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

            <h3 className="text-white font-black text-2xl md:text-3xl pb-4 tracking-tight">Our Ecosystem of Services</h3>

            <div className="space-y-8">
              <p>
                <strong className="text-[#00ffff] block mb-2 text-lg md:text-base md:inline md:mb-0">Ethical Innovation & Engineering: </strong> 
                From cutting-edge AI Development to rigorous End-to-End Testing, we build and validate systems that seek the absolute truth in performance. We take on your outsourced projects with the highest standards of quality and right action.
              </p>

              <p>
                <strong className="text-[#00ffff] block mb-2 text-lg md:text-base md:inline md:mb-0">Mindful Customer & Tech Support: </strong> 
                Our BPO solutions—including inbound/outbound calling and dedicated customer and tech support—are handled with empathy, patience, and a genuine desire to help your customers.
              </p>

              <p>
                <strong className="text-[#00ffff] block mb-2 text-lg md:text-base md:inline md:mb-0">Purpose-Driven Staffing: </strong> 
                We connect you with talent that aligns not just with your technical needs, but with your company’s culture and vision, building harmonious teams for lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEO SECTION - LEADERSHIP */}
      <section id="leadership" className="py-20 md:py-32 bg-[#020202] scroll-mt-24 relative overflow-hidden w-full">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] md:text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Mission
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Leadership // 01</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-black mb-2 uppercase tracking-tighter text-white">
                Sairam <span className="text-primary italic text-3xl md:text-5xl">Lodhi</span>
             </h2>
             
             <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10">
                <p className="text-primary font-mono uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs font-black">
                    Founder & Chief Executive Officer
                </p>
                <Link 
                  href="https://www.linkedin.com/in/sairam-lodhi-03a034407"
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Link>
             </div>
             
             <div className="space-y-6 text-white/60 leading-relaxed text-base md:text-lg font-light">
               <p className="border-l-2 border-primary/30 pl-6 md:pl-8 italic text-white/90">
                 "As the Founder & CEO, I am deeply passionate about connecting young budding engineers with meaningful, skill-based opportunities."
               </p>
               
               <div className="pl-6 md:pl-8 space-y-4">
                 <p>
                   Having studied and completed my engineering in <b>Jabalpur, Madhya Pradesh</b>, and currently based in <b>Bengaluru, Karnataka</b>, I truly understand what an engineer goes through—from graduation to securing the first job.
                 </p>
                 
                 <p>
                   I founded <span className="text-white font-bold uppercase tracking-tighter">SAI TECHVERSE SOLUTIONS</span> to bridge the gap between talent and opportunity. Our mission is to build a platform where innovation thrives and engineers grow through real-world skills.
                 </p>

                 <p className="text-white/80 font-medium">
                   We strongly believe in <b>skill-driven growth</b>, not percentage-driven evaluations. Every engineer has potential, and our goal is to help unlock it.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 md:py-20 border-t border-white/5 bg-[#050505] w-full">
         <div className="container mx-auto px-6 text-center">
            <div className="text-xl md:text-2xl font-black tracking-tighter mb-8 uppercase">SAI <span className="text-primary italic">TECHVERSE</span></div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
               <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
               <Link href="/navjobportal" className="hover:text-primary transition-colors">NavJobPortal</Link>
               <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <p className="text-[9px] md:text-[10px] font-mono text-white/20">© {new Date().getFullYear()} SAI TECHVERSE // ALL SYSTEMS SECURED</p>
         </div>
      </footer>
    </div>
  );
}

// 4. THE FIXED REUSABLE CARD COMPONENT (With Dynamic Hover Pop-up!)
function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00ffff]/50 transition-all duration-500 flex flex-col justify-between h-full min-h-[400px]"
    >
      {/* NEW: Dynamic Hover Pop-up Badge */}
      <div className="absolute -top-4 -right-4 bg-[#00ffff] text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_25px_rgba(0,255,255,0.4)] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 transition-all duration-300 z-10 pointer-events-none flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
        Top Quality
      </div>

      <div>
        {/* Colored Icon Box */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
          <service.icon className="text-[#00ffff]" size={28} />
        </div>
        
        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold mb-2 text-white">
          {service.title}
        </h3>
        <p className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest mb-4">
          {service.subtitle}
        </p>
        
        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {service.features?.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-xs font-bold text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffff] shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* TWO BUTTONS (Direct Contact + Details) */}
      <div className="flex flex-wrap items-center gap-6 mt-4">
        {/* Primary Action */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-black border-b border-[#00ffff] pb-1 text-[#00ffff] hover:gap-4 transition-all w-max"
        >
          INQUIRE NOW <ArrowRight size={14} />
        </Link>
        
        {/* Secondary Action */}
        {service.link && (
          <Link
            href={service.link}
            className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Read Details
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// 5. DAILY AI CHALLENGE COMPONENT (Client-side only)
function DailyChallenge() {
  // Explicitly tell TypeScript that lastResult can be a boolean OR null
  const [gameState, setGameState] = useState<{
    loaded: boolean;
    hasPlayedToday: boolean;
    streak: number;
    lastResult: boolean | null;
  }>({
    loaded: false,
    hasPlayedToday: false,
    streak: 0,
    lastResult: null,
  });

  const [showGameNotification, setShowGameNotification] = useState(false);

  // --- THE 30-DAY QUESTION DATABASE ---
  // The system will automatically cycle through this array based on the day of the year.
  // I have provided the first 5 questions. You can fill in the remaining 25.
  const questionDatabase = [
    {
      scenario: "Development: Which of these Next.js data fetching methods is an AI hallucination?",
      optionA: "getServerSideProps",
      optionB: "useServerFetch",
      correctAnswer: "B",
      explanation: "Next.js uses `getServerSideProps` or React Server Components, but there is no native `useServerFetch` hook."
    },
    {
      scenario: "Testing: Which of these JMeter components is completely fake?",
      optionA: "Quantum Thread Group",
      optionB: "Gaussian Random Timer",
      correctAnswer: "A",
      explanation: "JMeter has a Gaussian Random Timer, but 'Quantum Thread Group' is AI-generated jargon."
    },
    {
      scenario: "Staffing: Identify the AI-generated resume bullet point.",
      optionA: "Spearheaded the migration of a legacy monolithic architecture to microservices using Spring Boot and Docker.",
      optionB: "Synergized hyper-scale algorithmic paradigms to dynamically leverage actionable cross-platform paradigms.",
      correctAnswer: "B",
      explanation: "Option B is classic AI 'word salad' that means absolutely nothing technically."
    },
    {
      scenario: "BPO: Which of these is NOT a standard call center metric?",
      optionA: "Average Handle Time (AHT)",
      optionB: "Emotional Resonance Quotient (ERQ)",
      correctAnswer: "B",
      explanation: "AHT is a core metric. ERQ sounds empathetic but is entirely fabricated by AI."
    },
    {
      scenario: "QA Challenge: Which of these Android ADB logcat outputs is an AI hallucination?",
      optionA: "E/AndroidRuntime: FATAL EXCEPTION: main\njava.lang.NullPointerException",
      optionB: "E/AndroidRuntime: KERNEL PANIC: App memory exceeded quantum threshold in ThreadPool_8",
      correctAnswer: "B",
      explanation: "Android doesn't throw 'quantum threshold' kernel panics in standard application memory leaks."
    },
    // Add remaining 25 questions here to complete the 30-day cycle!
  ];

  // Logic to determine today's question based on the day of the year
  const getDayOfYear = (date : Date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const todayDate = new Date().toISOString().split('T')[0];
  const dayOfYear = getDayOfYear(new Date());
  
  // Modulo operation ensures it loops perfectly over however many questions you have
  const todaysGameIndex = dayOfYear % questionDatabase.length;
  const todaysGame = questionDatabase[todaysGameIndex];

  useEffect(() => {
    // Load state from LocalStorage
    const savedStats = JSON.parse(localStorage.getItem("saitech_ai_game") || "null");
    
    if (savedStats) {
      setGameState({
        loaded: true,
        hasPlayedToday: savedStats.lastPlayedDate === todayDate,
        streak: savedStats.streak,
        lastResult: savedStats.history[todayDate] ?? null,
      });
    } else {
      setGameState(prev => ({ ...prev, loaded: true }));
    }

    // Trigger the notification 4 seconds after load
    const timer = setTimeout(() => {
      setShowGameNotification(true);
    }, 4000);
    return () => clearTimeout(timer);

  }, [todayDate]);

  const handleAnswer = (guess: string) => {
    const isCorrect = guess === todaysGame.correctAnswer;
    const savedStats = JSON.parse(localStorage.getItem("saitech_ai_game") || "null") || { streak: 0, history: {} };
    
    // Streak logic
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak = savedStats.streak;
    if (isCorrect) {
      newStreak = (savedStats.lastPlayedDate === yesterdayStr) ? newStreak + 1 : 1;
    } else {
      newStreak = 0;
    }

    const newStats = {
      streak: newStreak,
      lastPlayedDate: todayDate,
      history: { ...savedStats.history, [todayDate]: isCorrect }
    };

    localStorage.setItem("saitech_ai_game", JSON.stringify(newStats));
    setGameState({ loaded: true, hasPlayedToday: true, streak: newStreak, lastResult: isCorrect });
  };

  const copyShareText = () => {
    const emoji = gameState.lastResult ? "🟩" : "🟥";
    const text = `SAI TECHVERSE Daily Challenge\n${todayDate}\nResult: ${emoji}\nStreak: ${gameState.streak} 🔥\nTest your skills at: yourwebsite.com`;
    navigator.clipboard.writeText(text);
    alert("Results copied to clipboard! Share it with your network.");
  };

  // Function to smoothly scroll to the game when notification is clicked
  const scrollToGame = () => {
    const gameSection = document.getElementById("daily-challenge");
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: "smooth" });
      setShowGameNotification(false);
    }
  };

  if (!gameState.loaded) return null;

  return (
    <>
     
     {/* --- NEW: JUMP TO GAME NOTIFICATION (MOVED TO SIDE) --- */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={showGameNotification && !gameState.hasPlayedToday ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-28 right-4 md:right-8 z-50 bg-black/90 backdrop-blur-md border border-[#00ffff]/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] flex items-start gap-4 max-w-[280px] cursor-pointer hover:border-[#00ffff]/70 transition-all group"
        onClick={scrollToGame}
      >
        <div className="p-2 bg-[#00ffff]/10 rounded-xl shrink-0 mt-0.5 relative">
            <Terminal className="text-[#00ffff]" size={16} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00ffff] rounded-full animate-ping" />
        </div>
        <div>
            <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#00ffff] transition-colors">Daily Challenge Active</h4>
            <p className="text-white/60 text-xs mb-2 leading-tight">Can you spot today's AI hallucination?</p>
            <div className="text-[#00ffff] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                Play Now <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
      </motion.div>


      <section id="daily-challenge" className="py-20 bg-[#050505] border-t border-white/5 w-full relative overflow-hidden scroll-mt-20">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ffff]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ffff]/20 bg-[#00ffff]/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse" />
              <span className="text-[10px] font-mono text-[#00ffff] uppercase tracking-widest">Daily Tech Challenge</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Spot the <span className="text-[#00ffff]">AI Fake</span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm shadow-2xl"
          >
            {!gameState.hasPlayedToday ? (
              <div>
                <p className="text-white/90 font-medium mb-6 text-lg border-l-2 border-[#00ffff] pl-4">
                  {todaysGame.scenario}
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnswer('A')}
                    className="w-full text-left p-6 rounded-xl border border-white/10 bg-black/50 hover:border-[#00ffff]/50 hover:bg-[#00ffff]/5 transition-all font-mono text-sm text-white/70 hover:text-white"
                  >
                    <span className="text-[#00ffff] mr-4 font-black">A.</span> 
                    {todaysGame.optionA}
                  </button>
                  <button 
                    onClick={() => handleAnswer('B')}
                    className="w-full text-left p-6 rounded-xl border border-white/10 bg-black/50 hover:border-[#00ffff]/50 hover:bg-[#00ffff]/5 transition-all font-mono text-sm text-white/70 hover:text-white"
                  >
                    <span className="text-[#00ffff] mr-4 font-black">B.</span> 
                    {todaysGame.optionB}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className={`text-4xl font-black mb-2 uppercase ${gameState.lastResult ? 'text-[#00ffff]' : 'text-red-500'}`}>
                  {gameState.lastResult ? 'Target Verified' : 'System Tricked'}
                </h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  {todaysGame.explanation}
                </p>
                
                <div className="inline-block p-6 rounded-2xl bg-black/50 border border-white/10 mb-8">
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Current Streak</p>
                  <p className="text-5xl font-black text-white">{gameState.streak} <span className="text-orange-500">🔥</span></p>
                </div>

                <button 
                  onClick={copyShareText}
                  className="mx-auto flex items-center gap-2 text-sm font-black border border-[#00ffff] bg-[#00ffff]/10 px-8 py-4 rounded-full text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all"
                >
                  <Terminal size={16} /> SHARE RESULTS
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}