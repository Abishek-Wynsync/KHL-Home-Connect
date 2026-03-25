import React from "react";
import { Award, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function StoreDetails() {
  const highlights = [
    { icon: <Award size={18} />, text: "Authorized Bosch Partner" },
    { icon: <ShieldCheck size={18} />, text: "Full Warranty Support" },
    { icon: <MapPin size={18} />, text: "Located in Velachery" },
  ];

  return (
      <section className="flex-grow py-20 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Decorative Elements */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-50 border border-slate-100 text-[#0a4275] font-serif font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a4275] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a4275]"></span>
            </span>
            Official Experience Centre
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Redefining Home <br />
            <span className="italic text-[#0a4275]">Since 1886.</span>
          </h2>
        </div>

        {/* Main Description */}
        <div className="relative">
          {/* Subtle Vertical Branded Line */}
          <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0a4275]/20 to-transparent hidden md:block"></div>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center md:text-left italic">
            Visit our <span className="text-slate-900 font-bold not-italic">HC Experience Centre</span> in Velachery to explore the pinnacle of 
            German engineering. From the silent efficiency of our dishwashers to 
            the intelligent cooling of our refrigerators, every appliance is 
            designed to make your life effortless.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-slate-50">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-[#0a4275] bg-slate-50 p-2 rounded-xl">
                {item.icon}
              </div>
              <span className="font-serif text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* HC Logo Signature */}
        <div className="mt-16 flex justify-center opacity-20">
           <div className="h-[1px] w-12 bg-slate-400 self-center"></div>
           <span className="px-4 font-serif font-black text-[10px] tracking-[0.8em] text-slate-900 uppercase">HC</span>
           <div className="h-[1px] w-12 bg-slate-400 self-center"></div>
        </div>

      </div>
    </section>
  );
}