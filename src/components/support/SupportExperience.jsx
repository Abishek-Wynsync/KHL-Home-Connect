// import React from 'react';

// export default function SupportExperience() {
//   return (
//     <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
//       <div className="grid lg:grid-cols-2 gap-20 items-center">
//         <div>
//           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-6">Hands-on Immersion</h2>
//           <h3 className="text-5xl font-serif italic leading-tight mb-8 bg-gradient-to-r from-[#001e3c] via-[#005bb7] to-[#001e3c] bg-clip-text text-transparent">
//             The Velachery <br />Experience Center.
//           </h3>
//           <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
//             Visit our flagship showroom on the 100ft Bypass Road to explore Bosch appliances with live, hands-on demonstrations.
//           </p>
          
//           <div className="space-y-8">
//             {[
//               { title: "Live Demonstrations", desc: "Experience washing machines and ovens in real-time before you buy." },
//               { title: "Product Experience Zones", desc: "Walk through built-in kitchen setups to visualize your dream home." }
//             ].map((item, i) => (
//               <div key={i} className="flex gap-6 group">
//                 <div className="w-12 h-12 border border-brand-blue flex items-center justify-center text-brand-blue font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">✓</div>
//                 <div>
//                   <h4 className="font-bold text-brand-dark uppercase tracking-tighter">{item.title}</h4>
//                   <p className="text-gray-500 text-sm font-light">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="relative aspect-square lg:aspect-video bg-gray-100 overflow-hidden shadow-2xl">
//            <img 
//              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1500" 
//              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
//              alt="Showroom"
//            />
//            <div className="absolute inset-0 border-[20px] border-white/10"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';

// export default function SupportExperience() {
//   return (
//     <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
//       <div className="grid lg:grid-cols-2 gap-24 items-center">
//         <div className="reveal-text">
//           <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand-blue mb-8">Hands-on Immersion</h2>
//           <h3 className="text-6xl font-serif italic leading-tight mb-8 bg-gradient-to-r from-[#001e3c] via-[#005bb7] to-[#001e3c] bg-clip-text text-transparent">
//             The Velachery <br />Experience Center.
//           </h3>
//           <p className="text-gray-600 font-light leading-relaxed mb-12 text-lg max-w-lg">
//             Visit our flagship showroom on the 100ft Bypass Road to explore Bosch appliances with live, hands-on demonstrations.
//           </p>
          
//           <div className="space-y-10">
//             {["Live Demonstrations", "Product Experience Zones"].map((item, i) => (
//               <div key={i} className="flex gap-8 group">
//                 <div className="w-14 h-14 border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
//                   0{i + 1}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-2">{item}</h4>
//                   <div className="w-0 h-[1px] bg-brand-blue group-hover:w-full transition-all duration-700"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl">
//            <img 
//              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1500" 
//              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 parallax-img"
//              alt="Showroom"
//            />
//            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function SupportExperience() {
  return (
    <section className="py-16 md:py-24 lg:py-32 max-w-[1440px] mx-auto px-6 lg:px-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Text Content Area */}
        <div className="reveal-text order-2 lg:order-1">
          <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-brand-blue mb-6 md:mb-8">
            Hands-on Immersion
          </h2>
          
          {/* Fluid Typography: scales from 4xl on mobile to 6xl on desktop */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-6 md:mb-8 shine-navy-text">
            The Velachery <br className="hidden sm:block" /> Experience Center.
          </h3>
          
          <p className="text-gray-600 font-light leading-relaxed mb-10 md:mb-12 text-base md:text-lg max-w-lg">
            Visit our flagship showroom on the 100ft Bypass Road to explore Bosch appliances with live, hands-on demonstrations.
          </p>
          
          {/* Features List */}
          <div className="space-y-6 md:space-y-10">
            {["Live Demonstrations", "Product Experience Zones"].map((item, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-brand-blue/30 flex items-center justify-center text-brand-blue text-sm md:text-base font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-brand-dark uppercase tracking-widest text-xs md:text-sm mb-2">
                    {item}
                  </h4>
                  <div className="w-0 h-[1px] bg-brand-blue group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Container */}
        <div className="relative order-1 lg:order-2 aspect-square sm:aspect-video lg:aspect-square overflow-hidden shadow-2xl rounded-sm">
           <img 
             src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1500" 
             className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-1000 parallax-img"
             alt="Showroom"
           />
           {/* Glass overlay effect */}
           <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none"></div>
           <div className="absolute inset-0 border-[8px] md:border-[16px] border-white/10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}