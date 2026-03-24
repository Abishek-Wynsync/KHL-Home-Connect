// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function AboutCTA() {
//   return (
//     <section className="bg-white py-60 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-16">
//           <h3 className="text-7xl lg:text-[10rem] font-serif italic text-brand-dark opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none w-full">Velachery</h3>
//           <div className="relative z-10 space-y-8">
//             <p className="text-[11px] uppercase tracking-[0.8em] text-brand-blue font-bold">Experience Perfection</p>
//             <h3 className="text-6xl lg:text-8xl font-serif italic text-brand-dark leading-none">Live Life.</h3>
//             <p className="text-xl font-light text-gray-400 tracking-wide max-w-lg mx-auto leading-relaxed">
//               No.4, Ahand Garden, 100ft Bypass Road, Velachery, Chennai
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row justify-center items-center gap-16 pt-10 font-bold relative z-10">
//             <Link to="/contact-visit" className="group text-2xl tracking-tighter uppercase relative">
//               Book a Store Visit
//               <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
//             </Link>
//             <a href="tel:7358619429" className="group text-2xl tracking-tighter uppercase relative">
//               Talk to Our Expert
//               <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
//             </a>
//           </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function AboutCTA() {
//   return (
//     <section className="bg-white py-24 md:py-24 relative overflow-hidden">
//       {/* 🛠️ Technical Background Accents */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent"></div>
      
//       {/* Massive Background Text - Scaled for impact */}
//       <h3 className="text-[12rem] md:text-[22rem] font-serif italic text-black/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
//         Velachery
//       </h3>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
        
//         {/* --- Heading Group --- */}
//         <div className="space-y-6 md:space-y-10 mb-20 md:mb-32">
//           <div className="flex items-center justify-center gap-4">
//              <div className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></div>
//              <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-[#0056b3] font-black">
//                Visit Our Flagship Store
//              </p>
//           </div>
          
//           <h2 className="text-6xl md:text-9xl font-serif italic text-[#1a1a1a] leading-none tracking-tighter">
//             Live Life <span className="not-italic font-bold">Better.</span>
//           </h2>
          
//           <div className="flex flex-col items-center gap-4">
//              <p className="text-lg md:text-xl font-light text-gray-500 max-w-lg mx-auto leading-relaxed">
//                No.4, Ahand Garden, 100ft Bypass Road,<br/>
//                Velachery, Chennai — 600042
//              </p>
//              <div className="h-12 w-px bg-gradient-to-b from-[#0056b3] to-transparent"></div>
//           </div>
//         </div>

//         {/* --- Interactive Action Suite --- */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          
//           {/* Main Magnetic CTA */}
//           <Link 
//             to="/contact-visit" 
//             className="group relative flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105"
//           >
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-700">
//                <svg className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                </svg>
//             </div>
//             <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black text-black">
//               Book Store Visit
//             </span>
//             <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-700"></div>
//           </Link>

//           {/* Expert Contact CTA */}
//           <a 
//             href="tel:7358619429" 
//             className="group relative flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105"
//           >
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#0056b3] group-hover:border-[#0056b3] transition-all duration-700">
//                <svg className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                </svg>
//             </div>
//             <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black text-black">
//               Talk to Expert
//             </span>
//             <div className="w-0 h-[1px] bg-[#0056b3] group-hover:w-full transition-all duration-700"></div>
//           </a>

//         </div>
//       </div>

//       {/* 🗺️ Subtle Geographic Coordinate (Decorative) */}
//       <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
//          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black">
//             Coordinates: 12.9791° N, 80.2185° E
//          </p>
//       </div>

//       {/* 🏗️ Right Side Technical Label */}
//       <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
//          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black">
//             KHL_CONNECT_EST_2026
//          </p>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* 🛠️ Technical Background Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent"></div>
      
      {/* Massive Background Text - Scaled for impact */}
      <h3 className="text-[12rem] md:text-[22rem] font-serif italic text-black/[0.05] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
        Velachery
      </h3>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
        
        {/* --- Heading Group --- */}
        {/* Changed mb-20/32 to mb-12/16 to reduce gap to buttons */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4">
             <div className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></div>
             <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-[#0056b3] font-black">
               Visit Our Flagship Store
             </p>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-serif italic text-[#1a1a1a] leading-none tracking-tighter">
            Live Life <span className="not-italic font-bold">Better.</span>
          </h2>
          
          <div className="flex flex-col items-center">
             <p className="text-lg md:text-xl font-light text-gray-500 max-w-lg mx-auto leading-relaxed">
               No.4, Ahand Garden, 100ft Bypass Road,<br/>
               Velachery, Chennai — 600042
             </p>
             {/* ❌ Removed the vertical line div from here */}
          </div>
        </div>

        {/* --- Interactive Action Suite --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          
          {/* Main Magnetic CTA */}
          <Link 
            to="/contact-visit" 
            className="group relative flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-700">
               <svg className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </div>
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black text-black">
              Book Store Visit
            </span>
          </Link>

          {/* Expert Contact CTA */}
          <a 
            href="tel:7358619429" 
            className="group relative flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#0056b3] group-hover:border-[#0056b3] transition-all duration-700">
               <svg className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
            </div>
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black text-black">
              Talk to Expert
            </span>
          </a>

        </div>
      </div>

      {/* 🗺️ Metadata Accents */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
         <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black">
            Coordinates: 12.9791° N, 80.2185° E
         </p>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
         <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black">
            KHL_CONNECT_EST_2026
         </p>
      </div>
    </section>
  );
}