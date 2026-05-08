"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_SERVICES, UTILITY_SERVICES } from '../data/services';
import { 
  ArrowRight, 
  Users, 
  Cpu, 
  Building, 
  FileCheck, 
  Network, 
  Search, 
  Terminal, 
  Code2,
  Menu,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

 // 1. Split the data into two categories, deleted as created services.ts page

export default function HomePage() {
  const [serviceMenu, setServiceMenu] = React.useState(false);
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
    <div className="bg-[#020202] text-white selection:bg-[#00ffff] selection:text-black font-sans">
      
      {/* 0. SMART FIXED NAVBAR (UPDATED) Deleted due to cross over with header page */}
  

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">System Status: Operational</span>
            </div>

            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Future</span> <br />
              <span className="text-primary italic">Intelligence</span>
            </h1>
            
            <div className="h-10">
              <span className="text-lg md:text-2xl text-white/40 font-mono tracking-tight">
                <span className="text-primary">root@saitechverse:~$</span> {text}
                <Cursor cursorStyle="▋" />
              </span>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section className="py-32 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Corporate Pillar */}
            <motion.div 
              whileHover={{ y: -10 }} 
              className="p-12 rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                   <div className="p-4 bg-black rounded-2xl border border-white/10 group-hover:border-primary transition-colors">
                      <Terminal className="text-primary" size={32} />
                   </div>
                   <span className="text-[10px] font-mono text-white/20">01 // B2B</span>
                </div>
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Corporate<br/>Services</h3>
                <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
                  From Engineering BPO and Staffing to AI Solutions. We provide the technical backbone for modern enterprises.
                </p>
              </div>
              <Link href="/services" className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] group-hover:gap-5 transition-all">
                Execute Request <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* NavJobPortal Pillar (UPDATED TO COMING SOON) */}
            <motion.div 
              whileHover={{ y: -10 }} 
              className="p-12 rounded-[4rem] border border-white/5 bg-[#0A0A0A] backdrop-blur-3xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                   <div className="p-4 bg-black rounded-2xl border border-white/[0.06]">
                      <Code2 className="text-white/40" size={32} />
                   </div>
                   <span className="text-[10px] font-mono text-white/20">02 // PRODUCT</span>
                </div>
                {/* Muted the title to show it's disabled */}
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white/50">NavJobPortal</h3>
                <p className="text-white/30 leading-relaxed mb-8 max-w-sm">
                  Based on skills, regardless of percentage. Join the Internet of Budding Engineers (IOBE) for expert placement.
                </p>
              </div>
              {/* THE DISABLED COMING SOON BUTTON */}
              <button 
                disabled
                className="w-full py-5 bg-white/5 text-white/40 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-widest cursor-not-allowed transition-all shadow-none relative z-30"
              >
                Module Coming Soon _
              </button>
            </motion.div>
          </div>
        </div>
      </section>

                {/* --- 2. CORE ENGINEERING SECTION --- */}
<section id="engineering" className="py-32 bg-[#050505] scroll-mt-20">
  <div className="container mx-auto px-6">
    <div className="mb-20">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-white">
        Core <span className="text-white/30 italic underline decoration-1 underline-offset-8 decoration-white/10">Engineering</span>
      </h2>
      <p className="text-[#94A3B8] font-mono text-xs uppercase tracking-[0.3em] font-bold">Hardcore Technical Systems</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TECH_SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
</section>
    
       {/* 4. TECH MARQUEE */}
      <div className="py-12 bg-black border-y border-white/5">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex items-center flex-shrink-0">
            {["Next.js", "Python", "AWS", "Turnitin", "React", "Tailwind", "TypeScript", "IoT", "AI/ML"].map((item, index) => (
              <span key={index} className="text-white/10 text-4xl font-black uppercase mx-12 hover:text-primary transition-colors">{item}</span>
            ))}
          </motion.div>
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex items-center flex-shrink-0">
            {["Next.js", "Python", "AWS", "Turnitin", "React", "Tailwind", "TypeScript", "IoT", "AI/ML"].map((item, index) => (
              <span key={index} className="text-white/10 text-4xl font-black uppercase mx-12 hover:text-primary transition-colors">{item}</span>
            ))}
          </motion.div>
        </div>
      </div>

         
         
         {/* --- 3. SMART UTILITIES SECTION --- */}
<section id="utilities" className="py-32 border-t border-white/5 scroll-mt-20">
  <div className="container mx-auto px-6">
    <div className="mb-20">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-white/80">
        Smart <span className="text-white/20 italic underline decoration-1 underline-offset-8">Utilities</span>
      </h2>
      <p className="text-white/30 font-mono text-xs uppercase tracking-widest font-bold">Tech-Enabled Operational Solutions</p>
    </div>

    {/* Ensure this loop is also using <ServiceCard /> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {UTILITY_SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
</section>

 

    {/* 5. CEO SECTION */}
          {/* 5. CEO SECTION - ABOUT */}
      <section id="about" className="py-32 bg-[#020202] scroll-mt-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Mission
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Leadership // 01</span>
             </div>
             
             <h2 className="text-5xl md:text-6xl font-black mb-2 uppercase tracking-tighter text-white">
                Sairam <span className="text-primary italic text-4xl md:text-5xl">Lodhi</span>
             </h2>
             
             <div className="flex items-center gap-6 mb-10">
                <p className="text-primary font-mono uppercase tracking-[0.4em] text-xs font-black">
                    Founder & Chief Executive Officer
                </p>
                {/* LinkedIn Icon/Link */}
                <Link 
                  href="https://linkedin.com/in/sairam-lodhi-03a034407" // REPLACE WITH YOUR ACTUAL LINK
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Link>
             </div>
             
             <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
               <p className="border-l-2 border-primary/30 pl-8 italic text-white/90">
                 "As the Founder & CEO, I am deeply passionate about connecting young budding engineers with meaningful, skill-based opportunities."
               </p>
               
               <div className="pl-8 space-y-4">
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

           {/* <div className="flex justify-center">
    <div className="relative group">
      <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
      
      <div className="w-80 h-[480px] bg-white/[0.03] border border-white/10 rounded-[2.5rem] relative z-10 overflow-hidden backdrop-blur-xl">
        
        FIXING THE IMAGE:
        1. Make sure your photo is inside the 'public' folder.
        2. The file name must be exactly 'sairam.jpg' (all lowercase).
        3. If your file is a PNG, change the 'jpg' below to 'png'.
        
        <img 
          src="/sairam-lodhi.jpg" 
          alt="Sairam Lodhi - CEO" 
          className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          onError={(e) => {
            // If image fails to load, this shows a dark placeholder instead of a broken icon
            e.currentTarget.style.display = 'none';
          }}
        /> 
        
        This shows if the image is missing 
        <div className="absolute inset-0 flex items-center justify-center -z-10 bg-white/5 font-black text-primary/10 text-center p-10">
          PHOTO PLACEHOLDER<br/>(Check public/sairam.jpg)
        </div> 
      </div> 
    </div>  
*/}
</div>
      </section>
    


      {/* 6. FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-[#050505]">
         <div className="container mx-auto px-6 text-center">
            <div className="text-2xl font-black tracking-tighter mb-8 uppercase">SAI <span className="text-primary italic">TECHVERSE</span></div>
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
               <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
               <Link href="/navjobportal" className="hover:text-primary transition-colors">NavJobPortal</Link>
               <Link href="/real-estate" className="hover:text-primary transition-colors">Smart Property Engineer</Link>
               <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <p className="text-[10px] font-mono text-white/20">© {new Date().getFullYear()} SAI TECHVERSE // ALL SYSTEMS SECURED</p>
         </div>
      </footer>
    </div>
  );
}

      // 4. THE FIXED REUSABLE CARD COMPONENT
       function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-[2rem] border border-white/[0.06] bg-[#0A0A0A] hover:bg-[#0F0F0F] hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between h-full min-h-[500px]"
    >
      <div>
        {/* Desaturated Icon Box */}
        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:bg-white/[0.05] transition-all">
          <service.icon className="text-white/40 group-hover:text-white transition-colors" size={24} />
        </div>
        
        <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white/90">
          {service.title}
        </h3>
        
        {/* Muted Slate Subtitle */}
        <p className="text-[#94A3B8] text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          {service.subtitle}
        </p>
        
        <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
          {service.description}
        </p>
        
        {/* Minimalist Feature List */}
        <ul className="space-y-4 mb-10">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-[11px] font-medium text-white/50">
              <div className="w-1 h-1 rounded-full bg-white/20 mt-1.5 shrink-0 group-hover:bg-white/40 transition-colors" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Industrial Matte Button */}
      <Link 
        href={service.link || "/contact"} 
        className="w-full py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-center text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
      >
        {service.link ? "Execute Module _" : "Request Details _"}
      </Link>
    </motion.div>
  );
}