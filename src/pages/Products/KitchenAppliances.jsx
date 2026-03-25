import React, { useState } from "react";

// Standard Import Method for Images


export default function KitchenAppliances() {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  const appliances = [
    { 
      name: "Built-in Ovens", 
      id: "OVEN-X", 
      image: "https://res.cloudinary.com/dapj1nuzz/image/upload/v1774441321/built-in_drioqp.jpg", 
      desc: "Precision roasting and baking for professional home results." 
    },
    { 
      name: "Hobs", 
      id: "HOB-X", 
      image: "https://res.cloudinary.com/dapj1nuzz/image/upload/v1774441365/Hobs_s4rbrf.jpg", 
      desc: "Advanced heating technology for ultimate culinary control." 
    },
    { 
      name: "Chimneys", 
      id: "CHIM-X", 
      image: "https://res.cloudinary.com/dapj1nuzz/image/upload/v1774443225/chimneyyy_yily7d.jpg", 
      desc: "Powerful suction and elegant design for a smoke-free kitchen." 
    },
    { 
      name: "Dishwashers", 
      id: "DW-X", 
      image: "https://res.cloudinary.com/dapj1nuzz/image/upload/v1774443276/dishwasherr_zummfb.jpg", 
      desc: "Energy-efficient cleaning with whisper-quiet operation." 
    },
    { 
      name: "Microwaves", 
      id: "MW-X", 
      image: "https://res.cloudinary.com/dapj1nuzz/image/upload/v1774443314/microwavee_lckdhh.jpg", 
      desc: "Fast, versatile, and sleek countertop or built-in solutions." 
    }
  ];


  return (
    <section className="py-20 px-6 bg-[#fcfcfc] font-serif text-[#003B73]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24 relative">
          <span className="block text-sm uppercase tracking-[0.4em] text-slate-400 mb-4 font-serif font-bold">Culinary Excellence</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Kitchen Appliances
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#003B73]/30"></div>
            <p className="text-xl italic text-slate-500 font-light lowercase">Live life</p>
            <div className="h-[1px] w-12 bg-[#003B73]/30"></div>
          </div>
          {/* Subtle logo-inspired glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-blue-50 blur-[100px] -z-10 rounded-full"></div>
        </div>

        {/* --- Interactive Appliance Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {appliances.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => setSelectedAppliance(item)}
            >
              {/* Product Card with Glassmorphism & Metallic Border */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,59,115,0.08)] transition-all duration-700 hover:shadow-[0_40px_70px_-20px_rgba(0,59,115,0.15)] hover:-translate-y-4">
                
                {/* Metallic Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] z-10"></div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-[#003B73]/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 text-[10px] font-bold tracking-[0.2em] font-serif">
                    PREVIEW DESIGN
                  </div>
                </div>

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-10 rounded-2xl transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Info Area */}
              <div className="mt-8 px-6 text-center">
                <span className="text-[10px] tracking-[0.3em] text-slate-400 font-serif font-bold uppercase block mb-2">
                  Modern Collection
                </span>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <div className="mx-auto w-12 h-[2px] bg-slate-200 group-hover:w-full group-hover:bg-[#003B73] transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Interactive Preview Modal --- */}
      {selectedAppliance && (
        <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#001529]/95 backdrop-blur-md pt-20 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedAppliance(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button 
              className="absolute top-6 right-6 z-30 p-2 text-slate-400 hover:text-[#003B73] transition-colors"
              onClick={() => setSelectedAppliance(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Media */}
            <div className="w-full md:w-1/2 bg-[#f8fafc] flex items-center justify-center p-12 lg:p-20">
              <img 
                src={selectedAppliance.image} 
                alt={selectedAppliance.name} 
                className="max-h-[50vh] object-cover drop-shadow-2xl rounded-2xl filter"
              />
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-blue-500 font- font-black text-xs tracking-widest uppercase mb-4">
                Professional Series
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {selectedAppliance.name}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {selectedAppliance.desc} Our high-performance kitchen systems are built to last, combining German engineering with timeless style.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-blue-100 pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-serif font-bold">Standard</p>
                  <p className="font-bold">Eco-Flow Tech</p>
                </div>
                <div className="border-l-2 border-blue-100 pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-serif font-bold">Warranty</p>
                  <p className="font-bold">10 Year Motor</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm italic text-slate-400">“Live life in a smarter kitchen.”</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}