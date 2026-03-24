import React, { useState } from "react";

// Standard Import Method for Images
import HandBlenders from "../../assets/hand.jpg";
import Mixers from "../../assets/mixers.jpg";
import Coffee from "../../assets/coffee.jpg";
import Vaccum from "../../assets/vaccum.jpg";

export default function SmallAppliances() {
  const appliances = [
    { id: "SG-900", name: "Mixer Grinders", image: Mixers, tag: "Power" },
    { id: "HB-450", name: "Hand Blenders", image: HandBlenders, tag: "Precision" },
    { id: "CM-120", name: "Coffee Makers", image: Coffee, tag: "Barista" },
    { id: "VC-220", name: "Vacuum Cleaners", image: Vaccum, tag: "Suction" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex-grow py-20 px-6 bg-[#f8fafc] border-y border-slate-200 font-serif text-[#003B73] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Unified with the logo's "Live Life" text */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif uppercase tracking-tighter mb-2">
            Small Appliances
          </h2>
          <p className="text-slate-400 italic text-xl">Live life in motion</p>
        </div>

        {/* --- NEW INTERACTIVE FORMAT: Segmented Navigation --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {appliances.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-full text-sm font-serif tracking-widest uppercase transition-all duration-500 border-2
                ${activeTab === index 
                  ? 'bg-[#003B73] text-white border-[#003B73] shadow-lg scale-105' 
                  : 'bg-transparent text-slate-400 border-slate-100 hover:border-slate-300'}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* SHOWCASE AREA: The Main Interactive Box */}
        <div className="relative bg-[#f8fafc] rounded-[4rem] p-12 md:p-20 overflow-hidden border border-slate-100 shadow-inner">
          
          {/* Decorative Silver Rim (Logo inspired) */}
          <div className="absolute inset-4 border-2 border-slate-200 rounded-[3rem] pointer-events-none opacity-50"></div>

          {/* Product Content Reveal */}
          <div 
            key={activeTab} 
            className="grid md:grid-cols-2 gap-16 items-center animate-in fade-in zoom-in-95 duration-700"
          >
            {/* Image Side with "HC" Style Oval Shadow */}
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 scale-75"></div>
              <img
                src={appliances[activeTab].image}
                alt={appliances[activeTab].name}
                className="max-h-[400px] object-contain drop-shadow-[0_35px_35px_rgba(0,59,115,0.2)] hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Information Side */}
            <div className="space-y-8 order-1 md:order-2 text-center md:text-left">
              <div>
                <span className="inline-block px-4 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-serif tracking-[0.4em] uppercase text-slate-400 mb-4">
                  Series {appliances[activeTab].id}
                </span>
                <h3 className="text-5xl font-serif leading-none mb-6">
                  {appliances[activeTab].name}
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed italic">
                  Premium engineering meets artisan design. This series is optimized for the modern home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                
              </div>
            </div>
          </div>

          {/* Corner Detail: The Logo's Wi-Fi symbol representation */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 flex items-end gap-1.5 opacity-10">
            <div className="w-1.5 h-4 bg-[#003B73] rounded-full"></div>
            <div className="w-1.5 h-8 bg-[#003B73] rounded-full"></div>
            <div className="w-1.5 h-12 bg-[#003B73] rounded-full"></div>
            <div className="w-1.5 h-16 bg-[#003B73] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}