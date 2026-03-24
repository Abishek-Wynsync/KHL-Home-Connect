// import React from 'react';

// export default function AboutBusiness() {
//   const steps = [
//     { 
//       step: "01", 
//       title: "Premium Retail Experience", 
//       desc: "Exclusive Bosch Brand Store in Velachery featuring live product demonstrations and 'Experience before you buy' philosophy." 
//     },
//     { 
//       step: "02", 
//       title: "B2B & Institutional Supply", 
//       desc: "Multi-brand distribution and bulk supply for builders & corporates. A reliable partner for large-scale requirements." 
//     }
//   ];

//   return (
//     <section className="bg-white py-40">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
//         {steps.map((item, i) => (
//           <div key={i} className="group relative p-16 bg-brand-bg overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,61,124,0.1)]">
//             <div className="absolute top-0 right-0 p-8 text-8xl font-serif italic text-white group-hover:text-brand-blue/5 transition-colors duration-700">{item.step}</div>
//             <div className="relative z-10 space-y-6">
//               <h4 className="text-2xl font-bold text-brand-blue uppercase tracking-tighter">{item.title}</h4>
//               <p className="text-gray-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
//               <div className="w-12 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-700"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function AboutBusiness() {
  const steps = [
    { 
      step: "01", 
      tag: "Retail Excellence",
      title: "Premium Flagship Store", 
      desc: "An immersive Bosch environment in Velachery. We believe in an 'Experience First' philosophy, offering live demonstrations of the latest German innovations." 
    },
    { 
      step: "02", 
      tag: "Enterprise Solutions",
      title: "B2B & Institutional Supply", 
      desc: "Strategic distribution for high-rise developments and corporate campuses. We provide end-to-end appliance logistics for Chennai's leading builders." 
    }
  ];

  return (
    <section className="relative bg-white py-24 md:py-40 overflow-hidden">
      {/* 🕸️ Subtle Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 space-y-4">
           <p className="text-[#0056b3] text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black">
             // Our Operations
           </p>
           <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 tracking-tighter">
             Strategic <span className="not-italic font-bold">Divisions.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {steps.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 md:p-16 bg-[#f8f9fa] border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,86,179,0.12)]"
            >
              {/* Massive Watermark Number */}
              <div className="absolute -top-4 -right-4 text-[10rem] md:text-[15rem] font-serif italic text-black/[0.03] group-hover:text-[#0056b3]/[0.05] group-hover:-translate-y-4 transition-all duration-1000 select-none pointer-events-none">
                {item.step}
              </div>

              <div className="relative z-10 space-y-8 md:space-y-12">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#0056b3]/5 text-[#0056b3] text-[9px] md:text-[11px] uppercase tracking-widest font-bold border border-[#0056b3]/10">
                    {item.tag}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                </div>

                <p className="text-base md:text-xl text-slate-500 font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>

                {/* Animated Interaction Line */}
                <div className="relative w-16 group-hover:w-full h-[1px] bg-slate-200 transition-all duration-1000 ease-in-out">
                   <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-[#0056b3] transition-all duration-1000 delay-100"></div>
                </div>
                
                {/* HUD Style Footer */}
                <div className="flex items-center gap-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                   <span className="text-[10px] font-mono uppercase tracking-tighter text-slate-400 font-bold">Project_Status: ACTIVE</span>
                   <div className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}