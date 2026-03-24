// import React from 'react';
// // 1. IMPORT your images here
// import hero from "../../assets/hero.png";
// import logo from "../../assets/logo.webp";

// export default function AboutLeadership() {
//   const leaders = [
//     { 
//       name: "Mr. Mayilvaganan Thanikavelu", 
//       role: "Chairman & Director", 
//       desc: "Provides strategic direction and brings strong industry experience in real estate and construction.",
//       image: hero // Use the imported variable
//     },
//     { 
//       name: "Mr.  Ramesh EK", //Kishore S
//       role: "Director & Founding Promoter", 
//       desc: "Drives operations, expansion, and brand growth across South Chennai.",
//       image: logo // Use the imported variable
//     }
//   ];

//   return (
//     <section className="py-24  bg-brand-bg">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//         <h2 className="text-center text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-24">
//           Leadership
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-32">
//           {leaders.map((leader, i) => (
//             <div key={i} className="space-y-8 group">
              
//               {/* IMAGE CONTAINER */}
//               <div className="aspect-[4/5] bg-gray-100 border border-brand-silver/20 relative overflow-hidden shadow-sm">
//                   {/* IMAGE TAG - Optimized with object-top to keep faces in view */}
//                   {leader.image ? (
//                     <img 
//                       src={leader.image} 
//                       alt={leader.name} 
//                       className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
//                     />
//                   ) : (
//                     /* Fallback if image is missing */
//                     <div className="w-full h-full flex items-center justify-center text-brand-blue/20 font-serif italic text-4xl">
//                       KHL
//                     </div>
//                   )}

//                   {/* HOVER ANIMATION: Remains untouched as requested */}
//                   <div className="absolute inset-0 bg-brand-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none"></div>
//               </div>
              
//               {/* TEXT CONTENT: Untouched */}
//               <div>
//                 <h4 className="text-3xl font-bold text-brand-blue uppercase tracking-tighter">
//                   {leader.name}
//                 </h4>
//                 <p className="text-[10px] uppercase tracking-widest text-brand-silver font-black mt-2 mb-6">
//                   {leader.role}
//                 </p>
//                 <p className="text-gray-500 font-light text-lg leading-relaxed">
//                   {leader.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
// Import your assets
import hero from "../../assets/hero.png";
import logo from "../../assets/logo.webp";

export default function AboutLeadership() {
  const leaders = [
    { 
      name: "Mr. Mayilvaganan Thanikavelu", 
      role: "Chairman & Director", 
      desc: "Provides strategic direction and brings strong industry experience in real estate and construction.",
      image: hero 
    },
    { 
      name: "Mr. Ramesh EK", 
      role: "Director & Founding Promoter", 
      desc: "Drives operations, expansion, and brand growth across South Chennai.",
      image: logo 
    }
  ];

  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col items-center mb-16 md:mb-24 space-y-4">
          <div className="w-12 h-px bg-[#0056b3]"></div>
          <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#0056b3] text-center">
            The Leadership
          </h2>
        </div>

        {/* --- Leaders Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {leaders.map((leader, i) => (
            <div key={i} className="group relative">
              
              {/* ⬇️ REDUCED HEIGHT: Changed aspect-[4/5] to aspect-[3/2] */}
              <div className="relative aspect-[3/2] overflow-hidden mb-8 shadow-xl border border-slate-100">
                {/* Background Decor Label */}
                <div className="absolute top-4 right-4 z-10 hidden lg:block">
                   <span className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-bold mix-blend-difference">
                     KHL_MGMT
                   </span>
                </div>

                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    /* object-top ensures faces are visible despite shorter height */
                    className="w-full h-full object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                    <span className="text-2xl font-serif italic text-slate-200">KHL</span>
                  </div>
                )}

                {/* Hover Reveal Tint */}
                <div className="absolute inset-0 bg-[#0056b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Bottom Edge Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0056b3] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 relative">
                <div className="space-y-1">
                   <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#0056b3] font-black">
                     {leader.role}
                   </p>
                   <h4 className="text-2xl md:text-3xl font-serif italic text-slate-900 tracking-tighter leading-none">
                     {leader.name}
                   </h4>
                </div>

                {/* Thin animated divider */}
                <div className="w-12 h-px bg-slate-200 group-hover:w-24 group-hover:bg-[#0056b3] transition-all duration-700"></div>

                <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-md">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}