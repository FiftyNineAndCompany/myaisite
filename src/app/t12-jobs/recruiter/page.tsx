"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { 
  ArrowLeft, Building2, Mail, Phone, MapPin, 
  Briefcase, IndianRupee, ShieldCheck, Loader2, CheckCircle2, AlertCircle
} from 'lucide-react';

// Initialize Supabase Client safely
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL ERROR: Supabase Environment Variables are missing!");
}

const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');


export default function RecruiterAccessRequest() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    salary: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    
    try {
      // 1. Insert formData into your Supabase database
      const { error } = await supabase
        .from('recruiter_requests')
        .insert([
          { 
            company_name: formData.companyName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            salary_budget: formData.salary,
            skills_required: formData.skills,
            status: 'pending' // Default status for your admin review
          }
        ]);

      // 2. Handle Supabase Errors
      if (error) {
        console.error("Supabase Error:", error);
        setErrorMsg(error.message);
        setStatus('error');
        return;
      }

      // 3. Handle Success
      setStatus('success');
      
      // Note: Triggering the email to connect@saitechverse.com is best handled 
      // securely via a Supabase Edge Function or a Next.js API route later!
      
    } catch (err) {
      console.error("System Error:", err);
      setErrorMsg("A system architecture error occurred.");
      setStatus('error');
    }
  };

  // SUCCESS SCREEN UI
  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 font-sans flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ffff]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-md relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#00ffff]/10 flex items-center justify-center border border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <CheckCircle2 className="text-[#00ffff]" size={48} />
            </div>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">Request Received</h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            Your requirements have been securely logged. Our admin team will review your request and contact you at <span className="text-[#00ffff] font-mono">{formData.email}</span> with the Service Level Agreement (SLA) shortly.
          </p>
          <button onClick={() => setStatus('idle')} className="inline-flex items-center justify-center w-full bg-[#00ffff] hover:bg-white text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            Submit Another Request _
          </button>
        </div>
      </div>
    );
  }

  // MAIN FORM UI
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 font-sans flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#00ffff]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        
        <Link href="/t12-jobs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#00ffff] mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to T12 Jobs
        </Link>

        <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
          
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#00ffff]/10 flex items-center justify-center border border-[#00ffff]/30 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              <ShieldCheck className="text-[#00ffff]" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-1">Enterprise Access</h1>
              <p className="text-white/50 text-xs md:text-sm">Submit your requirements. Candidates provided strictly post-SLA agreement.</p>
            </div>
          </div>

          {/* Error Message Display */}
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
              <p className="text-red-400 text-xs font-medium">{errorMsg || "Failed to submit request."}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                  <input required type="text" name="companyName" onChange={handleChange} value={formData.companyName}
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm"
                    placeholder="e.g. Acme Corp" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                  <input required type="email" name="email" onChange={handleChange} value={formData.email}
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm"
                    placeholder="hr@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                  <input required type="tel" name="phone" onChange={handleChange} value={formData.phone}
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm"
                    placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Job Location</label>
                <div className="relative">
                  <MapPin className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                  <input required type="text" name="location" onChange={handleChange} value={formData.location}
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm"
                    placeholder="e.g. Bengaluru / Remote" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Salary Budget (Per Annum / Per Month)</label>
              <div className="relative">
                <IndianRupee className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                <input required type="text" name="salary" onChange={handleChange} value={formData.salary}
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm"
                  placeholder="e.g. 8-12 LPA or ₹50,000/month" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 pl-2">Core Skill Requirements</label>
              <div className="relative">
                <Briefcase className="absolute top-3.5 left-4 text-[#00ffff]/50" size={16} />
                <textarea required name="skills" onChange={handleChange} value={formData.skills} rows={3}
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00ffff]/50 transition-all text-sm resize-none"
                  placeholder="e.g. Next.js, 3+ years experience, immediate joiner..." />
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#00ffff] hover:bg-white text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-3 transition-all mt-8 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <><Loader2 className="animate-spin" size={16} /> Processing Request...</>
              ) : (
                <>Initiate SLA Request _</>
              )}
            </button>
            <p className="text-center text-white/30 text-[10px] uppercase font-mono tracking-widest mt-4">
              Protected by SAI TECHVERSE Data Policies
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}