import React from "react";
// Remove ArrowUpRight as it's no longer used
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// --- Image Imports ---
import ovenImg from "../../assets/built-in-oven.jpg";
import fridgeImg from "../../assets/fridge.jpg";
import washerImg from "../../assets/washer.jpg";

export default function FeaturedProducts() {
  const products = [
    { 
      id: 1, 
      name: "Series 8 AccentLine", 
      type: "Built-in Oven", 
      image: ovenImg 
    },
    { 
      id: 2, 
      name: "HomeConnect Side-by-Side", 
      type: "Smart Cooling", 
      image: fridgeImg 
    },
    { 
      id: 3, 
      name: "i-DOS Intelligent Care", 
      type: "Washing System", 
      image: washerImg 
    }
  ];

  return (
    <section className="py-24 bg-white px-6 font-serif relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-[1px] w-10 bg-[#003B73]/20"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-serif font-black text-slate-400">Selected Innovations</span>
            <span className="h-[1px] w-10 bg-[#003B73]/20"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003B73] tracking-tight">
            Featured <span className="italic font-light text-slate-400">Appliances</span>
          </h2>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group bg-[#fcfcfc] rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,59,115,0.1)]"
            >
              {/* Image Container */}
              {/* Note: Kept overflow-hidden so image scaling on hover still looks good within this container */}
              <div className="relative h-80 bg-white flex items-center justify-center p-8 overflow-hidden">
                {/* Product Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 text-[9px] font-bold text-[#003B73] uppercase tracking-widest shadow-sm">
                  <ShieldCheck size={10} className="text-blue-500" />
                  Bosch Certified
                </div>
                
                {/* Actual Product Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="relative z-0 max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />

                {/* --- Hover Action Overlay REMOVED from here --- */}
              </div>

              {/* Info Container */}
              <div className="p-8">
                <p className="text-[10px] font-serif font-black uppercase tracking-[0.2em] text-blue-500 mb-2">
                  {item.type}
                </p>
                <h3 className="text-2xl font-bold text-[#003B73] mb-4 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                
                <div className="w-full h-[1px] bg-slate-100 mb-6 group-hover:bg-blue-100 transition-colors"></div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500 italic max-w-[150px]">
                    German precision for the modern kitchen.
                  </p>
                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  
          
        </div>
      
    </section>
  );
}