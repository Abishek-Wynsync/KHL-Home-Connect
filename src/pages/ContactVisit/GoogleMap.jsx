import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function GoogleMap() {
  // Note: Replace the 'src' below with your actual Google Maps Embed link from Google Maps
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8763583561!2d80.2241!3d12.9717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d886616010d%3A0x8686e007886a117a!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section className="py-12 px-2 font-serif bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-4">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#0a4275] font-serif font-bold text-[10px] uppercase tracking-[0.4em] mb-3"
            >
              <MapPin size={14} />
              <span>Location Hub</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Visit Our <span className="italic text-[#0a4275]">Experience Centre</span>
            </h2>
          </div>

          <motion.a
            href="https://maps.app.goo.gl/your-map-link" // Replace with your actual Google Business link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-[#0a4275] text-white px-6 py-3 rounded-xl font-serif text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#0a4275]/20"
          >
            <Navigation size={16} />
            Get Directions
          </motion.a>
        </div>

        {/* Map Container with Branded Frame */}
        <div className="relative group">
          {/* Top-Right Decorative "HC" Badge */}
          <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-slate-100 hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-serif text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Live Traffic Updated</span>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border-4 border-slate-50 shadow-2xl transition-all duration-500 group-hover:border-[#0a4275]/20">
            <iframe
              title="Showroom Location"
              className="w-full h-[450px] grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              src={mapLocation}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Bottom Branding Bar */}
          <div className="mt-6 flex justify-center">
            <div className="px-8 py-3 bg-slate-50 rounded-full border border-slate-100 flex items-center gap-4">
              <span className="text-[10px] font-serif font-bold text-slate-400 uppercase tracking-[0.3em]">
                Velachery • Chennai
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}