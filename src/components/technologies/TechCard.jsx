// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function TechCard({ tech, index }) {
//   return (
//     <div className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-40 mb-60 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
//       {/* Image Container */}
//       <div className="w-full lg:w-1/2 relative group">
//         <div className="absolute -inset-4 border border-brand-blue/5 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
//         <div className="relative z-10 aspect-[4/5] overflow-hidden bg-gray-100 shadow-xl">
//           <img 
//             src={tech.image} 
//             alt={tech.title}
//             className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-white/10 border-t border-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//              <p className="text-white text-xs uppercase tracking-widest font-bold">Live Demonstration Available</p>
//           </div>
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="w-full lg:w-1/2 space-y-10">
//         <div className="space-y-4">
//           <span className="text-6xl font-serif italic text-brand-blue/10 block leading-none">{tech.id}</span>
//           <p className="text-brand-blue font-bold text-[11px] uppercase tracking-[0.4em]">{tech.tagline}</p>
//           <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tight">{tech.title}</h2>
//         </div>
//         <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">{tech.desc}</p>
//         <div className="pt-6">
//           <Link to="/contact-visit" className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black">
//             Experience Live 
//             <span className="w-12 h-[1px] bg-brand-dark group-hover:w-24 group-hover:bg-brand-blue transition-all duration-500"></span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function TechCard({ tech, index }) {
//   // Bosch Brand Blue
//   const brandBlue = "#0056b3";

//   return (
//     <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24  mb-24 md:mb-60 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      
//       {/* 🖼️ Image Container - Optimized for Depth */}
//       <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
        
//         {/* Floating Accent Frame - Responsive adjustment */}
//         <div className={`absolute -inset-2 md:-inset-6 border border-[#0056b3]/10 transition-all duration-[1.5s] ease-out 
//           ${index % 2 !== 0 ? '-translate-x-4 md:-translate-x-8' : 'translate-x-4 md:translate-x-8'} 
//           translate-y-4 md:translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 opacity-50 md:opacity-100`}>
//         </div>

//         {/* Main Image Wrapper */}
//         <div className="relative z-10 aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-[#f8f9fa] shadow-2xl">
//           <img 
//             src={tech.image} 
//             alt={tech.title}
//             className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-[2.5s] ease-out brightness-[0.95] group-hover:brightness-100"
//           />
          
//           {/* Glassmorphism Badge Overlay */}
//           <div className="absolute top-6 left-6 z-20">
//              <div className="px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-sm">
//                 <span className="text-[8px] md:text-[10px] text-white uppercase tracking-[0.4em] font-bold">Precision.Series</span>
//              </div>
//           </div>

//           {/* Bottom Reveal Bar */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 backdrop-blur-md bg-black/40 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
//              <div className="flex items-center gap-4">
//                 <div className="w-2 h-2 bg-[#0056b3] rounded-full animate-pulse"></div>
//                 <p className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-medium">Live System Demonstration</p>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* 📝 Text Content - Mobile Friendly Alignment */}
//       <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 px-2">
//         <div className="space-y-4 md:space-y-6">
//           {/* Large Ghost Number */}
//           <span className="text-7xl md:text-[10rem] font-serif italic text-black/[0.03] block leading-none select-none pointer-events-none -mb-8 md:-mb-16">
//             0{index + 1}
//           </span>
          
//           <div className="space-y-2">
//             <p className="text-[#0056b3] font-bold text-[10px] md:text-[12px] uppercase tracking-[0.5em] mb-2">
//               // {tech.tagline}
//             </p>
//             <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight text-[#1a1a1a] leading-tight">
//               {tech.title}
//             </h2>
//           </div>
//         </div>

//         <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed max-w-xl">
//           {tech.desc}
//         </p>

//         {/* Premium Interaction Link */}
//         <div className="pt-4 md:pt-8">
//           <Link 
//             to="/contact-visit" 
//             className="group inline-flex items-center gap-2 text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-black hover:text-[#0056b3] transition-colors duration-500"
//           >
//             Experience Live 
//             <div className="relative flex items-center">
//                <span className="w-12 h-[1px] bg-black group-hover:w-20 group-hover:bg-[#0056b3] transition-all duration-700"></span>
//                <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:-right-2 transition-all duration-700">
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//                </span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function TechCard({ tech, index }) {
  return (
    // Reduced mb-24/md-60 to mb-16/md-32 to close the gap between cards
    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 mb-16 md:mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* 🖼️ Image Container */}
      <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
        <div className={`absolute -inset-2 md:-inset-6 border border-[#0056b3]/10 transition-all duration-[1.5s] ease-out 
          ${index % 2 !== 0 ? '-translate-x-4 md:-translate-x-8' : 'translate-x-4 md:translate-x-8'} 
          translate-y-4 md:translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 opacity-50 md:opacity-100`}>
        </div>

        <div className="relative z-10 aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-[#f8f9fa] shadow-2xl">
          <img 
            src={tech.image} 
            alt={tech.title}
            className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-[2.5s] ease-out brightness-[0.95] group-hover:brightness-100"
          />
          
          <div className="absolute top-6 left-6 z-20">
             <div className="px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-sm">
                <span className="text-[8px] md:text-[10px] text-white uppercase tracking-[0.4em] font-bold">Precision.Series</span>
             </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 backdrop-blur-md bg-black/40 border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#0056b3] rounded-full animate-pulse"></div>
                <p className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-medium">Live System Demonstration</p>
             </div>
          </div>
        </div>
      </div>

      {/* 📝 Text Content */}
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2">
        <div className="space-y-2 md:space-y-4">
          {/* Reduced negative margin from -mb-16 to -mb-10 to pull title closer to number */}
          <span className="text-7xl md:text-[8rem] font-serif italic text-black/[0.03] block leading-none select-none pointer-events-none -mb-6 md:-mb-10">
            0{index + 1}
          </span>
          
          <div className="space-y-1">
            <p className="text-[#0056b3] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.5em] mb-1">
              // {tech.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic tracking-tight text-[#1a1a1a] leading-tight">
              {tech.title}
            </h2>
          </div>
        </div>

        {/* Reduced space-y in parent and max-w to keep text tight */}
        <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-md">
          {tech.desc}
        </p>

        {/* Reduced pt-4/pt-8 to pt-2/pt-4 to pull link up */}
        <div className="pt-2 md:pt-4">
          <Link 
            to="/contact-visit" 
            className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-black hover:text-[#0056b3] transition-colors duration-500"
          >
            Experience Live 
            <div className="relative flex items-center">
               <span className="w-8 h-[1px] bg-black group-hover:w-16 group-hover:bg-[#0056b3] transition-all duration-700"></span>
               <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:-right-2 transition-all duration-700">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}