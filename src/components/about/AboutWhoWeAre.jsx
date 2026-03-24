// import React from 'react';

// export default function AboutWhoWeAre() {
//   return (
//     <section className="py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
//       <div className="grid lg:grid-cols-2 gap-32 items-center">
//         <div className="relative group">
//           <div className="absolute -top-10 -left-10 w-full h-full border border-brand-silver/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
//           <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
//              <img 
//                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
//                alt="Luxury Kitchen" 
//                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
//              />
//           </div>
//           <div className="absolute -bottom-12 -right-12 bg-brand-blue text-white p-12 shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
//              <p className="text-5xl font-bold tracking-tighter leading-none">KHL</p>
//              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-silver font-bold mt-2">Group Excellence</p>
//           </div>
//         </div>
        
//         <div className="space-y-10">
//           <div className="inline-block px-4 py-1 border border-brand-blue/20 rounded-full text-[10px] uppercase tracking-widest text-brand-blue font-bold">Since Inception</div>
//           <h3 className="text-5xl lg:text-6xl font-serif italic text-brand-dark leading-tight">
//             Bridging the gap between <span className="text-brand-blue not-italic font-bold">premium retail</span> and global engineering.
//           </h3>
//           <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
//             <p>
//               KHL Home Connect Pvt Ltd is a premier retail and distribution company specializing in home appliances and consumer durables.
//             </p>
//             <p className="bg-brand-bg p-8 border-l-4 border-brand-blue italic text-brand-dark font-medium shadow-inner">
//               "As part of the diversified KHL Group, we bring together expertise in real estate, construction, and customer-centric retail to provide efficient B2B supply solutions across South Chennai."
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';

// export default function AboutWhoWeAre() {
//   return (
//     /* Updated the section background:
//        - 'bg-brand-blue/[0.04]' provides a subtle 4% opacity brand tint.
//        - Added 'py-32' to balance the spacing within the colored block.
//     */
//     <section className="bg-brand-blue/[0.04] py-32 lg:py-40 px-6 lg:px-12">
//       <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        
//         {/* IMAGE BLOCK */}
//         <div className="relative group">
//           {/* Subtle border offset */}
//           <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-full h-full border border-brand-blue/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
          
//           <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10 shadow-[0_50px_100px_-20px_rgba(0,61,124,0.15)]">
//              <img 
//                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
//                alt="Luxury Kitchen" 
//                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
//              />
//           </div>

//           {/* Floating Badge */}
//           <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-brand-blue text-white p-8 md:p-12 shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
//              <p className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">KHL</p>
//              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-silver/80 font-bold mt-2">Group Excellence</p>
//           </div>
//         </div>
        
//         {/* TEXT CONTENT */}
//         <div className="space-y-10">
//           <div className="inline-block px-4 py-1 border border-brand-blue/20 rounded-full text-[10px] uppercase tracking-widest text-brand-blue font-bold">
//             Since Inception
//           </div>
          
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-brand-dark leading-tight">
//             Bridging the gap between <span className="text-brand-blue not-italic font-bold">premium retail</span> and global engineering.
//           </h3>
          
//           <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
//             <p>
//               KHL Home Connect Pvt Ltd is a premier retail and distribution company specializing in home appliances and consumer durables.
//             </p>
            
//             {/* The Quote Block: Using a slightly darker white to pop against the light blue background */}
//             <p className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-brand-blue italic text-brand-dark font-medium shadow-sm">
//               "As part of the diversified KHL Group, we bring together expertise in real estate, construction, and customer-centric retail to provide efficient B2B supply solutions across South Chennai."
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function AboutWhoWeAre() {
  return (
    <section className="relative bg-[#f0f4f8] py-24 lg:py-40 overflow-hidden">
      {/* 🌀 Background Design: Subtle Circular Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0056b3]/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: IMAGE BLOCK --- */}
          <div className="lg:col-span-6 relative group">
            {/* Reduced Height Frame: 3:2 Aspect Ratio */}
            <div className="relative aspect-[3/2] md:aspect-video lg:aspect-[4/3] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
              />
              
              {/* Internal Glass Label */}
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 hidden md:block">
                 <p className="text-[9px] uppercase tracking-[0.4em] text-white font-black">Design_Language: GERMAN</p>
              </div>
            </div>

            {/* Floating Brand Badge: Re-styled as a Technical Tag */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-8 bg-[#0056b3] text-white p-6 md:p-10 shadow-2xl z-20">
               <p className="text-3xl md:text-5xl font-serif italic leading-none">KHL</p>
               <div className="w-8 h-px bg-white/40 my-3"></div>
               <p className="text-[9px] uppercase tracking-[0.3em] font-black text-white/70">Corp_Identity</p>
            </div>
          </div>
          
          {/* --- RIGHT: TEXT CONTENT --- */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-10 h-[1px] bg-[#0056b3]"></span>
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-[#0056b3] font-black">
                  Since Inception
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-slate-900 leading-[1.1] tracking-tight">
                Bridging the gap between <br />
                <span className="not-italic font-bold text-[#0056b3]">Premium Retail</span> <br />
                & global engineering.
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl">
                KHL Home Connect Pvt Ltd is a premier retail and distribution powerhouse, specializing in the curation of high-performance home appliances and consumer durables.
              </p>
              
              {/* Glass Feature Box: Replacing standard quote */}
              <div className="relative p-8 md:p-10 bg-white border border-slate-100 shadow-xl overflow-hidden group/box">
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#0056b3]/[0.05] -translate-y-6 translate-x-6 rotate-45 transition-transform group-hover/box:scale-150"></div>
                
                <p className="relative z-10 text-slate-700 italic font-medium text-lg md:text-xl leading-relaxed">
                  "As part of the diversified KHL Group, we integrate expertise in real estate and construction to provide <span className="text-[#0056b3] border-b border-[#0056b3]/20">efficient B2B supply solutions</span> across South Chennai."
                </p>
                
                <div className="mt-6 flex items-center gap-4 relative z-10">
                   <div className="h-px w-12 bg-[#0056b3]/20"></div>
                   <span className="text-[9px] uppercase tracking-widest font-black text-slate-400">The KHL Commitment</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}