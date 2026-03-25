// // import React from 'react';

// // export default function AboutWhyChoose() {
// //   const advantages = [
// //     {
// //       title: "Exclusive Bosch Brand Experience",
// //       desc: "Immerse yourself in German engineering with our curated selection of high-performance appliances.",
// //       image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
// //     },
// //     {
// //       title: "Premium Showroom & Live Demos",
// //       desc: "Don't just look—interact. Experience our products in a real-world kitchen environment.",
// //       image: "https://images.unsplash.com/photo-1556912177-f547cff9278e?q=80&w=2070&auto=format&fit=crop"
// //     },
// //     {
// //       title: "Expert Consultation-Based Sales",
// //       desc: "Our lifestyle consultants help you choose appliances that fit your home's unique architecture.",
// //       image: "https://images.unsplash.com/photo-1600585154526-990dcea46e99?q=80&w=2070&auto=format&fit=crop"
// //     },
// //     {
// //       title: "Trusted Multi-Brand Partnerships",
// //       desc: "Beyond Bosch, we partner with world leaders to offer a complete premium home solution.",
// //       image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
// //     },
// //     {
// //       title: "Strong B2B Supply Network",
// //       desc: "A reliable partner for architects, builders, and developers across South Chennai.",
// //       image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1932&auto=format&fit=crop"
// //     },
// //     {
// //       title: "Convenient Location in Velachery",
// //       desc: "Situated on the 100ft Bypass Road, luxury is now accessible and closer than ever.",
// //       image: "https://images.unsplash.com/photo-1582037928867-67704ee587bf?q=80&w=2070&auto=format&fit=crop"
// //     }
// //   ];

// //   return (
// //     /* Keeping background White to contrast with the Light Blue sections before/after */
// //     <section className="py-40 bg-white">
// //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
// //         {/* HEADER */}
// //         <div className="max-w-3xl mb-24 space-y-6">
// //           <div className="flex items-center gap-4">
// //             <span className="h-[1px] w-12 bg-brand-blue"></span>
// //             <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-brand-blue">
// //               Strategic Edge
// //             </h2>
// //           </div>
// //           <p className="text-5xl lg:text-6xl font-serif italic text-brand-dark leading-tight">
// //             The KHL Advantage: <br />
// //             <span className="not-italic font-bold text-brand-blue/20">Why We Lead.</span>
// //           </p>
// //         </div>

// //         {/* MASONRY-STYLE GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
// //           {advantages.map((item, i) => (
// //             <div key={i} className="group flex flex-col">
// //               {/* IMAGE CONTAINER */}
// //               <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-2xl">
// //                 <img 
// //                   src={item.image} 
// //                   alt={item.title}
// //                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
// //                 />
// //                 {/* Overlay Number */}
// //                 <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-md px-6 py-4 text-brand-blue font-serif italic text-2xl z-10">
// //                   0{i + 1}
// //                 </div>
// //                 {/* Color Wash Overlay */}
// //                 <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //               </div>

// //               {/* CONTENT */}
// //               <div className="space-y-4 px-2">
// //                 <h4 className="text-xl font-bold text-brand-dark tracking-tighter uppercase group-hover:text-brand-blue transition-colors duration-300">
// //                   {item.title}
// //                 </h4>
// //                 <p className="text-gray-500 font-light leading-relaxed text-sm lg:text-base">
// //                   {item.desc}
// //                 </p>
                
// //                 {/* Bottom Border Accent */}
// //                 <div className="pt-4">
// //                   <div className="w-12 h-[1px] bg-brand-blue/30 group-hover:w-full group-hover:bg-brand-blue transition-all duration-700"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from 'react';

// export default function AboutWhyChoose() {
//   const advantages = [
//     {
//       title: "Exclusive Bosch Experience",
//       desc: "Immerse yourself in German engineering with our curated selection of high-performance appliances.",
//       image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//       title: "Premium Showroom",
//       desc: "Don't just look—interact. Experience our products in a real-world kitchen environment.",
//       image: "https://images.unsplash.com/photo-1556912177-f547cff9278e?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//       title: "Expert Consultation",
//       desc: "Our lifestyle consultants help you choose appliances that fit your home's unique architecture.",
//       image: "https://images.unsplash.com/photo-1600585154526-990dcea46e99?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//       title: "Global Partnerships",
//       desc: "Beyond Bosch, we partner with world leaders to offer a complete premium home solution.",
//       image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
//     },
//     {
//       title: "B2B Supply Network",
//       desc: "A reliable partner for architects, builders, and developers across South Chennai.",
//       image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1932&auto=format&fit=crop"
//     },
//     {
//       title: "Velachery Hub",
//       desc: "Situated on the 100ft Bypass Road, luxury is now accessible and closer than ever.",
//       image: "https://images.unsplash.com/photo-1582037928867-67704ee587bf?q=80&w=2070&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
//       {/* 🧩 Background Technical Detail */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0056b3]/[0.01] -skew-x-12 translate-x-1/4"></div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="max-w-4xl mb-20 md:mb-32 space-y-8">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-[1px] bg-[#0056b3]"></div>
//             <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-[#0056b3]">
//               Strategic Edge
//             </h2>
//           </div>
          
//           <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-slate-900 leading-[1.1] tracking-tighter">
//             The KHL Advantage: <br />
//             <span className="not-italic font-bold text-slate-200 group-hover:text-[#0056b3]/10 transition-colors">
//               Why We Lead.
//             </span>
//           </h3>
//         </div>

//         {/* --- GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
//           {advantages.map((item, i) => (
//             <div key={i} className="group relative flex flex-col">
              
//               {/* IMAGE CONTAINER - Optimized Aspect Ratio */}
//               <div className="relative aspect-[3/2] overflow-hidden mb-8 shadow-xl bg-slate-100">
//                 <img 
//                   src={item.image} 
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
//                 />
                
//                 {/* Glass Index Tag */}
//                 <div className="absolute top-0 left-0 bg-white/40 backdrop-blur-md px-5 py-3 border-r border-b border-white/20 transition-all duration-500 group-hover:bg-[#0056b3] group-hover:text-white">
//                   <span className="text-sm font-black tracking-tighter">0{i + 1}</span>
//                 </div>

//                 {/* Technical Overlay */}
//                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                    <div className="px-3 py-1 bg-black/80 text-[8px] text-white uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
//                      Verified_Standard
//                    </div>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <div className="w-2 h-2 rounded-full bg-[#0056b3] scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                   <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
//                     {item.title}
//                   </h4>
//                 </div>

//                 <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg pl-6 border-l border-slate-100 group-hover:border-[#0056b3]/30 transition-colors duration-700">
//                   {item.desc}
//                 </p>
                
//                 {/* Interaction Indicator */}
//                 <div className="pt-2 pl-6">
//                   <div className="h-[1px] w-0 bg-[#0056b3] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';

// export default function AboutWhyChoose() {
//   const advantages = [
//     {
//       title: "Exclusive Bosch Experience",
//       desc: "Immerse yourself in German engineering with our curated selection of high-performance appliances.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418577/Bosch_Experience_leqlu2.jpg"
//     },
//     {
//       title: "Premium Showroom",
//       desc: "Don't just look—interact. Experience our products in a real-world kitchen environment.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418615/showroom_1_tcpmbr.jpg"
//     },
//     {
//       title: "Expert Consultation",
//       desc: "Our lifestyle consultants help you choose appliances that fit your home's unique architecture.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418589/ExpertConsultattion_dqnkyp.jpg"
//     },
//     {
//       title: "Global Partnerships",
//       desc: "Beyond Bosch, we partner with world leaders to offer a complete premium home solution.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418590/Global_Partnership_q8dog0.jpg"
//     },
//     {
//       title: "B2B Supply Network",
//       desc: "A reliable partner for architects, builders, and developers across South Chennai.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418577/B2B_Connection_uknrie.avif"
//     },
//     {
//       title: "Velachery Hub",
//       desc: "Situated on the 100ft Bypass Road, luxury is now accessible and closer than ever.",
//       image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418616/Velacherry_Hub_kod0mx.webp"
//     }
//   ];

//   // Helper to handle broken images
//   const handleImageError = (e) => {
//     e.target.src = "https://placehold.co/600x400/0056b3/white?text=KHL+Home+Connect";
//     e.target.className = "w-full h-full object-cover opacity-50"; 
//   };

//   return (
//     <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* HEADER */}
//         <div className="max-w-4xl mb-16 md:mb-24 space-y-6">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-px bg-[#0056b3]"></div>
//             <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-[#0056b3]">Strategic Edge</h2>
//           </div>
//           <h3 className="text-4xl md:text-6xl font-serif italic text-slate-900 tracking-tighter">
//             The KHL Advantage: <br />
//             <span className="not-italic font-bold text-slate-200">Why We Lead.</span>
//           </h3>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
//           {advantages.map((item, i) => (
//             <div key={i} className="group flex flex-col">
//               {/* IMAGE CONTAINER */}
//               <div className="relative aspect-[3/2] overflow-hidden mb-6 shadow-lg bg-slate-50 border border-slate-100">
//                 <img 
//                   src={item.image} 
//                   alt={item.title}
//                   onError={handleImageError}
//                   className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
//                 />
//                 <div className="absolute top-0 left-0 bg-white/60 backdrop-blur-sm px-4 py-2 border-r border-b border-white/20">
//                   <span className="text-xs font-black text-slate-900">0{i + 1}</span>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="space-y-3">
//                 <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-[#0056b3] transition-colors">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed border-l-2 border-transparent group-hover:border-[#0056b3]/20 pl-4 transition-all">
//                   {item.desc}
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

export default function AboutWhyChoose() {
  const advantages = [
    {
      title: "Exclusive Bosch Experience",
      desc: "Immerse yourself in German engineering with our curated selection of high-performance appliances.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418577/Bosch_Experience_leqlu2.jpg"
    },
    {
      title: "Premium Showroom",
      desc: "Don't just look—interact. Experience our products in a real-world kitchen environment.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418615/showroom_1_tcpmbr.jpg"
    },
    {
      title: "Expert Consultation",
      desc: "Our lifestyle consultants help you choose appliances that fit your home's unique architecture.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418589/ExpertConsultattion_dqnkyp.jpg"
    },
    {
      title: "Global Partnerships",
      desc: "Beyond Bosch, we partner with world leaders to offer a complete premium home solution.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418590/Global_Partnership_q8dog0.jpg"
    },
    {
      title: "B2B Supply Network",
      desc: "A reliable partner for architects, builders, and developers across South Chennai.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418577/B2B_Connection_uknrie.avif"
    },
    {
      title: "Velachery Hub",
      desc: "Situated on the 100ft Bypass Road, luxury is now accessible and closer than ever.",
      image: "https://res.cloudinary.com/dsa0chszi/image/upload/v1774418616/Velacherry_Hub_kod0mx.webp"
    }
  ];

  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/600x400/0056b3/white?text=KHL+Home+Connect";
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#fafbfc] overflow-hidden">
      {/* 🧩 Background Decorative Text (Mobile Friendly) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none opacity-[0.02] overflow-hidden">
        <span className="absolute top-20 -left-20 text-[150px] md:text-[300px] font-black leading-none">STRATEGY</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1.5 bg-[#0056b3] rounded-full"></div>
            <h2 className="text-xs uppercase tracking-[0.6em] font-black text-[#0056b3]">Strategic Edge</h2>
          </div>
          <h3 className="text-4xl md:text-7xl font-serif italic text-slate-900 tracking-tighter leading-[1.1]">
            The KHL Advantage: <br />
            <span className="not-italic font-bold text-slate-300 group-hover:text-[#0056b3] transition-colors duration-500">
              Why We Lead.
            </span>
          </h3>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {advantages.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }} // Useful if using CSS entrance animations
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-8 rounded-2xl shadow-xl shadow-slate-200/60 bg-slate-100">
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-[#0056b3] group-hover:text-white">
                  <span className="text-sm font-black tracking-tighter">0{i + 1}</span>
                </div>

                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transform transition-transform duration-[2s] cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110" 
                />
                
                {/* Glassmorphism gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* CONTENT */}
              <div className="px-2 space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-0 h-px bg-[#0056b3] group-hover:w-8 transition-all duration-500"></div>
                   <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#0056b3] transition-colors duration-300 uppercase">
                     {item.title}
                   </h4>
                </div>
                
                <p className="text-sm md:text-lg text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom interactive line */}
                <div className="pt-2">
                  <div className="h-0.5 w-12 bg-slate-100 group-hover:w-full group-hover:bg-[#0056b3]/30 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}