import { notFound } from 'next/navigation';
import { TECH_SERVICES, UTILITY_SERVICES } from '../../../data/services';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Combine data to search through it
  const allServices = [...TECH_SERVICES, ...UTILITY_SERVICES];
  
  // THE FIX: Added (s: any) to tell strict TypeScript to relax!
  const serviceData = allServices.find((s: any) => s.link === `/services/${params.slug}`);

  // If the link doesn't match our data, show a 404
  if (!serviceData) {
    notFound();
  }

  const Icon = serviceData.icon;

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#00ffff] mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Services
        </Link>

        {/* Dynamic Header Block */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-16 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffff]/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${serviceData.color} border border-white/10 flex items-center justify-center mb-8`}>
            <Icon className="text-[#00ffff]" size={40} />
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            {serviceData.title}
          </h1>
          <p className="text-[#00ffff] font-mono text-sm uppercase tracking-[0.2em] font-bold mb-8">
            {serviceData.subtitle}
          </p>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-12">
            {serviceData.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
             {serviceData.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl text-xs font-bold uppercase tracking-wide">
                   <div className="w-2 h-2 rounded-full bg-[#00ffff]" />
                   {feature}
                </div>
             ))}
          </div>
        </div>

        {/* Dynamic Call to Action */}
        <div className="bg-[#00ffff] rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between text-black gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-full"><Zap className="text-[#00ffff]" size={20} /></div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-tight">Initiate Module</h3>
              <p className="text-black/70 text-xs font-bold">Deploy this specific service for your enterprise.</p>
            </div>
          </div>
          <Link href="/contact" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest text-center hover:bg-black/80 transition-colors">
             Contact Sales _
          </Link>
        </div>

      </div>
    </div>
  );
}