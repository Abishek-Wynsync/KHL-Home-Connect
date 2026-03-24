import React from "react";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4"; 

export default function ProductsHero() {
  return (
    
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden font-serif bg-[#001b35]">
      
      {/* --- Background Video Layer --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60" // Reduced opacity here also helps control "glow"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Neutral Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Top Label */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-white/10"></span>
            <span className="uppercase tracking-[0.4em] text-[10px] text-slate-400 font-bold font-sans">
              Authorized Bosch Dealer
            </span>
            <span className="h-[1px] w-10 bg-white/10"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] tracking-tight">
            Precision <span className="italic font-light text-slate-300">Engineering</span>
            <br />
            <span className="font-bold">for Modern Living.</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg text-slate-300 font-light leading-relaxed">
            Discover German innovation designed to <span className="italic border-b border-white/10">simplify your life.</span>
          </p>

          
        </motion.div>
      </div>

      {/* --- REFINED BOTTOM TRANSITION --- */}
      {/* This is the part that was causing the large white shade. Now reduced. */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f8fafc]/30 to-transparent z-10"></div>
      
      {/* Decorative Oval - Also reduced opacity to avoid extra "shade" */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-white/5 rounded-full pointer-events-none"></div>

    </section>
  );
}