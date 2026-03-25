import React, { useState } from "react";
import { Calendar, Clock, User, Phone, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="enquiry" className="p-20 md:p-10 bg-white rounded-[2.5rem] relative overflow-hidden font-serif">
      
      {/* Success Overlay - Logo Blue */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-[#0a4275] flex flex-col items-center justify-center text-white text-center p-6"
          >
            <CheckCircle size={60} className="mb-4 text-slate-200 stroke-[1.5px]" />
            <h3 className="text-3xl font-bold tracking-tight">Booking Confirmed</h3>
            <p className="text-slate-300 mt-2 font-serif text-sm tracking-wide">
              Our consultant will reach out shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <header className="mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-slate-200 text-[#0a4275] font-serif font-bold text-[10px] uppercase tracking-[0.3em] mb-4"
          >
            Exclusive Access
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Request a <span className="italic text-[#0a4275]">Private Demo</span>
          </h2>
          <div className="h-1 w-12 bg-[#0a4275] mx-auto mt-4 rounded-full"></div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="group relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0a4275] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-t-xl focus:outline-none focus:border-[#0a4275] focus:bg-white transition-all text-base italic"
            />
          </div>

          {/* Phone Input */}
          <div className="group relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0a4275] transition-colors" size={18} />
            <input 
              type="tel" 
              placeholder="Contact Number"
              required
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-t-xl focus:outline-none focus:border-[#0a4275] focus:bg-white transition-all text-base italic"
            />
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="date" 
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-t-xl focus:outline-none focus:border-[#0a4275] text-sm"
              />
            </div>
            <div className="group relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select 
                className="w-full pl-12 pr-10 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-t-xl focus:outline-none focus:border-[#0a4275] appearance-none text-sm italic cursor-pointer"
                required
              >
                <option value="">Preferred Time</option>
                <option>Morning (10AM - 1PM)</option>
                <option>Afternoon (1PM - 4PM)</option>
                <option>Evening (4PM - 7PM)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Branded Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#0a4275] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#0a4275]/20 transition-all mt-6 text-lg tracking-wide border border-[#0a4275] hover:bg-white hover:text-[#0a4275]"
          >
            Confirm Reservation
          </motion.button>
        </form>

        <footer className="mt-8 text-center">
          <p className="text-[10px] font-serif font-bold text-slate-400 uppercase tracking-[0.4em]">
            HC • Live Life • Luxury Retail
          </p>
        </footer>
      </div>
    </section>
  );
}