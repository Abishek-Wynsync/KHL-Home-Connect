import { MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="flex-grow py-24 px-6 bg-[#f8fafc] border-y border-slate-200 font-serif text-[#003B73] relative overflow-hidden">
      {/* --- Branded Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Navy Soft Glow instead of Indigo */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#003B73]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px]"></div>
        
        {/* Subtle Grain Overlay for a "Metallic" feel */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Badge: Matches "Live Life" sub-brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#003B73]/10 bg-white/50 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003B73] opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003B73]"></span>
          </span>
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#003B73]/70">
            Open All Week • 10AM - 9PM
          </span>
        </motion.div>

        {/* Heading: Pure Brand Navy + Metallic Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#003B73] mb-6 leading-[1.1]"
        >
          Experience the <br />
          <span className="italic font-light text-slate-400">Future of Living.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-serif leading-relaxed"
        >
          Step into our Velachery showroom for a private consultation and 
          interact with the world's most advanced Bosch appliances.
        </motion.p>

        {/* --- Branded Actions --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          
        </motion.div>

        {/* Footer: Specialist Chat */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-xs font-sans font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-3"
        >
          <MessageSquare size={14} className="text-[#003B73]/40" />
          <span>Can't visit?</span>
          <span className="text-[#003B73] cursor-pointer hover:border-b border-[#003B73] transition-all">Chat with a Specialist</span>
        </motion.p>
      </div>

      {/* Decorative Brand Oval (Bottom Right) */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#003B73]/5 rounded-full pointer-events-none"></div>
    </section>
  );
}