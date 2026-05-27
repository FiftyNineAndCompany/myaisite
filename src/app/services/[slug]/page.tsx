import { TECH_SERVICES, UTILITY_SERVICES } from '../../../data/services';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

// THE BYPASS: Hardcoded, synchronous, and bulletproof for the compiler
export function generateStaticParams() {
  return [
    { slug: 'software-testing' },
    { slug: 'it-staffing' },
    { slug: 'it-ai-development' },
    { slug: 'bpo-solutions' },
    { slug: 'plagiarism-express' }
  ];
}

// THE FIX: Added `async` and `Promise` to handle Next.js 15 changes!
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // We must "await" the params before we can read the slug inside them
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const allServices = [...TECH_SERVICES, ...UTILITY_SERVICES];
  
  // Safely check if the link includes our newly awaited slug
  const serviceData = allServices.find((s: any) => s.link && s.link.includes(currentSlug));

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center p-6 text-center pt-32">
        <h1 className="text-[#00ffff] text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">404 // System Error</h1>
        <p className="text-white/60 mb-8 font-mono">Module not found. We could not locate the data for: <span className="text-[#00ffff]">{currentSlug}</span></p>
        <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00ffff] hover:text-[#00ffff] text-white font-black uppercase tracking-widest text-[10px] rounded-full transition-all">
          Return to Ecosystem _
        </Link>
      </div>
    );
  }

  const Icon = serviceData.icon;

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl"> {/* Widened container for the new grid */}
        
        <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#00ffff] mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Services
        </Link>

        {/* 1. THE HERO BLOCK (Upgraded to a Horizontal Layout) */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffff]/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          {/* Left Side: Massive Glowing Icon */}
          <div className={`w-24 h-24 shrink-0 rounded-3xl bg-gradient-to-br ${serviceData.color} border border-white/10 flex items-center justify-center`}>
            <Icon className="text-[#00ffff]" size={48} />
          </div>

          {/* Right Side: Titles and Intro */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
              {serviceData.title}
            </h1>
            <p className="text-[#00ffff] font-mono text-sm uppercase tracking-[0.2em] font-bold mb-6">
              {serviceData.subtitle}
            </p>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              {serviceData.description}
            </p>
          </div>
        </div>

        {/* 2. THE FEATURES GRID (Fixes the "Too Texty" problem!) */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-[#00ffff] to-transparent flex-grow opacity-30"></div>
            <h3 className="text-xs font-mono font-bold text-[#00ffff] uppercase tracking-[0.3em]">Core Capabilities</h3>
            <div className="h-px bg-gradient-to-l from-[#00ffff] to-transparent flex-grow opacity-30"></div>
          </div>

          {/* This is the magic line: grid-cols-1 on mobile, grid-cols-2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceData.detailedDescription ? (
              serviceData.detailedDescription.map((paragraph: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-[#00ffff]/30 hover:bg-[#00ffff]/[0.02] transition-all duration-300 group">
                  <div className="w-2 h-2 rounded-full bg-[#00ffff] shrink-0 mt-2.5 group-hover:scale-150 transition-transform shadow-[0_0_10px_#00ffff]" />
                  <p className="text-white/75 text-base leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-white/60 text-lg leading-relaxed">
                {serviceData.description}
              </p>
            )}
          </div>
        </div>

        {/* 3. Dynamic Call to Action */}
        <div className="bg-[#00ffff] rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between text-black gap-6 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-full"><Zap className="text-[#00ffff]" size={20} /></div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-tight">Initiate Module</h3>
              <p className="text-black/70 text-xs font-bold">Deploy this specific service for your enterprise.</p>
            </div>
          </div>
          <Link href="/contact" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest text-center hover:bg-black/80 hover:scale-105 transition-all">
             Contact Sales _
          </Link>
        </div>

      </div>
    </div>
  );
}