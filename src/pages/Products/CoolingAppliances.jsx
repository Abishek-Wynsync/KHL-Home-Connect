import React, { useState } from "react";

// Standard Import Method for Images
import refrigerator from "../../assets/refrigerator.jpg";
import fridgeFreezer from "../../assets/fridge-freezer.jpg";
import chestFreezer from "../../assets/chest-freezer.jpg";
import sideBySide from "../../assets/side-by-side.jpg";
import multiDoor from "../../assets/multi-door.jpg";
import builtin from "../../assets/built-in.jpg";
import freestanding from "../../assets/freestanding.jpg";

export default function CoolingAppliances() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const appliances = [
    { name: "Refrigerators", id: "REF-01", image: refrigerator },
    { name: "Fridge Freezers", id: "FF-02", image: fridgeFreezer },
    { name: "Chest Freezers", id: "CF-03", image: chestFreezer },
    { name: "Side-by-Side", id: "SBS-04", image: sideBySide },
    { name: "Multi-Door / French Door", id: "MD-05", image: multiDoor },
    { name: "Built-in Units", id: "BI-06", image: builtin },
    { name: "Freestanding Units", id: "FS-07", image: freestanding },
  ];

  return (
    <section className="py-10 px-6 bg-[#f8fafc] font-serif text-[#003B73]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24 relative">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
            Cooling Systems
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-slate-300"></div>
            <p className="text-xl italic text-slate-500 font-serif">Live life</p>
            <div className="h-[1px] w-12 bg-slate-300"></div>
          </div>
          {/* Subtle Logo Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-blue-100/40 blur-3xl -z-10 rounded-full"></div>
        </div>

        {/* --- Interactive Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {appliances.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              {/* Image Card */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,59,115,0.1)] transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,59,115,0.2)] hover:-translate-y-3">
                
                {/* Metallic Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] z-10"></div>

                {/* Quick View Badge */}
                <div className="absolute inset-0 bg-[#003B73]/5 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-xs font-serif tracking-widest">
                    PREVIEW SYSTEM
                  </div>
                </div>

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Title & Info */}
              <div className="mt-8 px-4 text-center lg:text-left">
                <span className="text-[10px] tracking-[0.3em] text-slate-400 font-serif font-serif uppercase block mb-2">
                  Model: {item.id}
                </span>
                <h3 className="text-2xl font-serif transition-colors group-hover:text-blue-600">
                  {item.name}
                </h3>
                <div className="mt-3 w-0 h-[2px] bg-[#003B73] group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Interactive Modal (Image Preview) --- */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#001529]/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-30 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Image Area */}
            <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="max-h-[60vh] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Modal Text Area */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
              <span className="text-blue-600 font-serif font-black text-sm tracking-widest uppercase mb-4">
                Advanced Series
              </span>
              <h2 className="text-4xl font-serif mb-6">{selectedProduct.name}</h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-8">
                Engineered for maximum efficiency and modern aesthetics. This unit features our signature smart-cooling technology to ensure long-lasting freshness.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-serif">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Precision Temperature Control
                </div>
                <div className="flex items-center gap-3 text-sm font-serif">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Smart-Home Compatible
                </div>
              </div>
              <p className="text-sm italic text-slate-400 border-t pt-6">"Live life in comfort."</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}