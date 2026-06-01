import Link from 'next/link';
import { Briefcase, UserPlus, Zap, ArrowRight } from 'lucide-react';

export default function ZeroNoticeJobsLanding() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 font-sans flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/20 text-[#00ffff] text-xs font-black uppercase tracking-widest mb-8">
          <Zap size={14} /> Immediate Joiners Only
        </div>
        
        {/* REBRAND: Changed to 0notice Jobs */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
          0notice <span className="text-[#00ffff]">Jobs</span>
        </h1>
        
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16">
          The elite deployment module for immediate technical and non-technical joiners. Select your portal to proceed.
        </p>

        {/* Dual Portal Selection */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Candidate Portal (Google Forms) */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNFtBdv_p40Q2D2JZvgP252K0LEGwOSZZav3Lc9zAP3WXOKQ/viewform?usp=publish-editor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#0A0A0A] border border-white/10 hover:border-[#00ffff]/50 rounded-[2rem] p-8 md:p-10 transition-all text-left relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ffff]/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#00ffff]/10 transition-colors"></div>
            <div>
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                <UserPlus className="text-white group-hover:text-[#00ffff] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Candidate Portal</h3>
              <p className="text-white/50 text-sm mb-8">Submit your profile for immediate deployment. Quick intake via our secure form.</p>
            </div>
            
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-[#00ffff]/30 pb-1 text-[#00ffff] w-max mt-auto group-hover:gap-4 transition-all">
              Apply Now <ArrowRight size={14} />
            </div>
          </a>

          {/* Recruiter Portal (Supabase Auth) */}
          <Link 
            href="/0notice-jobs/recruiter" 
            className="group bg-[#0A0A0A] border border-white/10 hover:border-blue-500/50 rounded-[2rem] p-8 md:p-10 transition-all text-left relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
            <div>
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                <Briefcase className="text-white group-hover:text-blue-500 transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Recruiter Access</h3>
              <p className="text-white/50 text-sm mb-8">Access our verified Supabase database of immediate joiners and top-tier talent.</p>
            </div>
            
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-blue-500/30 pb-1 text-blue-500 w-max mt-auto group-hover:gap-4 transition-all">
              Secure Login <ArrowRight size={14} />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}