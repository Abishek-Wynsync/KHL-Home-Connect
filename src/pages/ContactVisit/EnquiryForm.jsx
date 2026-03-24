import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [activeField, setActiveField] = useState(null);

  // Logo Color Constants
  const brandNavy = "#003B73";

  return (
   <section id="enquiry" className="flex-grow py-20 px-6 bg-[#f8fafc] border-y border-slate-200 font-serif text-[#003B73] relative overflow-hidden">
      {/* Background Decorative "Oval" - Logo Reference */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 border-[40px] border-[#003B73]/5 rounded-full pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <header className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#003B73]/5 border border-[#003B73]/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003B73] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003B73]"></span>
            </span>
            <span className="text-[#003B73] font-bold text-[10px] uppercase tracking-[0.3em] font-serif">System Online</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-[#003B73] tracking-tighter mb-4">
            Direct <span className="italic font-light text-slate-400">Connection</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Specify your requirements below. Our engineers will calibrate a response to your specific appliance needs.
          </p>
        </header>

        {/* --- The Form --- */}

        <form className="grid gap-5 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,59,115,0.15)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="relative group">
              <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${activeField === 'name' ? 'text-blue-600' : 'text-slate-400'}`} size={18} />
              <input
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-[#003B73] placeholder:text-slate-400 focus:outline-none focus:border-[#003B73] focus:ring-4 focus:ring-[#003B73]/5 transition-all text-sm"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${activeField === 'email' ? 'text-blue-600' : 'text-slate-400'}`} size={18} />
              <input
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-[#003B73] placeholder:text-slate-400 focus:outline-none focus:border-[#003B73] focus:ring-4 focus:ring-[#003B73]/5 transition-all text-sm"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <MessageSquare className={`absolute left-4 top-5 transition-colors ${activeField === 'msg' ? 'text-blue-600' : 'text-slate-400'}`} size={18} />
            <textarea
              onFocus={() => setActiveField('msg')}
              onBlur={() => setActiveField(null)}
              placeholder="How can we help with your appliance?"
              rows="4"
              className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-[#003B73] placeholder:text-slate-400 focus:outline-none focus:border-[#003B73] focus:ring-4 focus:ring-[#003B73]/5 transition-all text-sm resize-none"
            ></textarea>
          </div>

          {/* Branded Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#002d5a" }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden mt-2 bg-[#003B73] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-colors"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <span className="uppercase tracking-[0.2em] text-xs font-serif">Initialize Connection</span>
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

        </form>

        {/* Brand Footer */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-12 h-[1px] bg-slate-300 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="w-full h-full bg-[#003B73]"
                />
              </div>
            ))}
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.8em] font-serif">
            HomeCare Systems
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}