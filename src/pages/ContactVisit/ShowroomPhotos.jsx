import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Camera } from "lucide-react";

export default function ShowroomPhotos() {
  const images = [
    { src: "/showroom1.png", label: "Premium Kitchen Suite" },
    { src: "/showroom2.png", label: "Live Demo Zone" },
    { src: "/showroom3.png", label: "Built-in Excellence" },
  ];

  return (
    <section className="py-20 px-6 bg-white font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4 text-[#0a4275]"
          >
            <Camera size={18} />
            <span className="font-serif font-bold text-[10px] uppercase tracking-[0.4em]">
              The Experience Centre
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Step Inside <span className="italic text-[#0a4275]">Our Gallery</span>
          </h2>
          <div className="h-1 w-16 bg-[#0a4275] mx-auto mt-6 rounded-full opacity-20"></div>
        </header>

        {/* Interactive Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 transition-all duration-500 hover:border-[#0a4275]/20 ${
                index === 1 ? "md:-translate-y-8" : "md:translate-y-4"
              }`}
            >
              {/* Image with subtle zoom on hover */}
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" 
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a4275]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-serif text-[10px] font-bold uppercase tracking-widest text-slate-200">
                      Showroom Feature
                    </p>
                    <h3 className="text-xl font-bold tracking-tight italic">
                      {img.label}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>

              {/* Permanent Branded Corner (Optional) */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
                <span className="text-[8px] font-serif font-black text-[#0a4275] uppercase tracking-tighter">
                  HC EXCLUSIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 font-serif text-[10px] font-bold uppercase tracking-[0.5em]">
            Precision • Quality • Heritage
          </p>
        </div>
      </div>
    </section>
  );
}