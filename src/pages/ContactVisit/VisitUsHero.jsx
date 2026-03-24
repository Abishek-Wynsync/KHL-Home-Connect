import React from "react";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import visitVideo from "../../assets/hero-video.mp4"; // Update your video path

export default function VisitUsHero() {
  return (
    <section id="visit-hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden font-serif bg-[#001b35]">

      {/* --- Background Video --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50" // Dimmed video to remove glare
        >
          <source src={visitVideo} type="video/mp4" />
        </video>

        {/* Deep Overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001b35]/80 via-slate-950/70 to-[#001b35]/90"></div>
      </div>

      {/* --- Content Area --- */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Subtle Tagline */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-white/20"></span>
            <span className="uppercase tracking-[0.4em] text-[11px] text-slate-300 font-bold font-sans">
              Visit Our Showroom
            </span>
            <span className="h-[1px] w-10 bg-white/20"></span>
          </div>

          {/* Master Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] tracking-tight">
            Experience <span className="italic font-light text-slate-200">German Excellence</span>
            <br />
            <span className="font-bold">In Person.</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Step into our premium studio to touch, feel, and see modern appliances working in seamless harmony.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
            
            {/* Direct Map Button */}
            <a
  href="https://www.google.com/maps/dir/?api=1&destination=Surmara+Enterprises+Velachery+Chennai"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative px-10 py-4 bg-white text-[#001b35] rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2"
>
  <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
    Get Directions <MapPin size={16} className="group-hover:animate-bounce" />
  </span>

  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
</a>

            {/* Secondary Hollow Button */}
            
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Arch Silhouette (Logo Vibe) */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}