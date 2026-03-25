import React, { useState } from "react";
// Standard Import Method for Images
import washing from "../../assets/washinm.jpg";
import wdryers from "../../assets/dryers.jpg";
import dry from "../../assets/dryyers.jpg";

export default function LaundryAppliances() {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  const appliances = [
    { 
      name: "Washing Machines", 
      series: "i-DOS Intelligent",
      image: washing, 
      desc: "Advanced sensors detect fabric type and load weight to dispense the precise amount of detergent, down to the milliliter." 
    },
    { 
      name: "Washer Dryers", 
      series: "Hybrid Performance",
      image: wdryers, 
      desc: "The ultimate dual-engine system. Seamlessly transition from intensive wash to delicate dry without manual intervention." 
    },
    { 
      name: "Dryers", 
      series: "HeatPump Smart",
      image: dry, 
      desc: "Preserving fibers through low-temperature drying technology, ensuring your luxury garments never lose their shape." 
    },
  ];

  return (
    /* Added min-h-screen and flex-col to prevent footer overlap */
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <section className="flex-grow py-20 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      
        <div className="max-w-7xl mx-auto">
          
          {/* --- Header --- */}
          <div className="text-center mb-24 relative">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#003B73]"></span>
              <span className="text-xs uppercase tracking-[0.5em] font-bold text-slate-400">Fabric Care Excellence</span>
              <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#003B73]"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Laundry Appliances</h2>
            <p className="text-slate-500 italic lowercase tracking-widest text-lg">Live life</p>
          </div>

          {/* --- Grid --- */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
            {appliances.map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer relative"
                onClick={() => setSelectedAppliance(item)}
              >
                <div className="relative z-10 p-8 rounded-[2rem] bg-white border border-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
  <img 
    src={item.image} 
    alt={item.name} 
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
</div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">{item.series}</p>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                  </div>
                </div>
                {/* Visual shadow layer to prevent "hidden space" clipping */}
                <div className="absolute inset-0 bg-[#003B73]/5 rounded-[2rem] translate-y-4 translate-x-4 -z-10 group-hover:translate-y-6 group-hover:translate-x-6 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Modal with fix for scrolling background --- */}
        {selectedAppliance && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#001529]/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedAppliance(null)}
          >
            <div 
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 z-50 p-2 text-slate-400 hover:text-red-500 bg-white rounded-full shadow-lg transition-all"
                onClick={() => setSelectedAppliance(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Image Side */}
<div className="w-full md:w-1/2 bg-slate-50 p-12 flex items-center justify-center">
 <img
  src={selectedAppliance.image}
  className="max-h-[50vh] object-cover drop-shadow-2xl rounded-2xl filter"
  alt=""
/>
</div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-4">Smart Technology</span>
                <h2 className="text-4xl font-black mb-6 text-[#003B73]">{selectedAppliance.name}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">{selectedAppliance.desc}</p>
                
                {/* Feature Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="font-bold text-[#003B73] text-sm">Eco-Efficient</p>
                    <p className="text-xs text-slate-400 italic">Optimized power consumption</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="font-bold text-[#003B73] text-sm">Home Connect</p>
                    <p className="text-xs text-slate-400 italic">Full mobile integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

     
    </div>
  );
}