// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function SupportCTA() {
//   return (
//     <section className="bg-white  text-white py-24 text-center px-6 relative overflow-hidden">
//       {/* Shine Navy Effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,61,124,0.2)_0%,transparent_70%)]"></div>
      
//       <div className="relative z-10">
//         <h2 className="text-4xl font-serif italic mb-4">Experience Perfection Firsthand.</h2>
//         <p className="text-gray-400 mb-10 tracking-widest uppercase text-[10px]">Velachery, Chennai</p>
//         <Link 
//           to="/contact-visit" 
//           className="inline-block px-12 py-5 bg-gradient-to-r from-[#003d7c] to-[#005bb7] text-white text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all duration-500 shadow-2xl"
//         >
//           Book a Demo
//         </Link>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function SupportCTA() {
//   return (
//     <section className="bg-brand-bg py-24 border-y border-brand-silver/10">
//       {/* Animated Shine Background */}
//       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] [animation-delay:2s] animate-pulse"></div>
      
//       <div className="relative z-10 max-w-4xl mx-auto px-6">
//         <h2 className="text-6xl lg:text-8xl font-serif italic text-white leading-tight mb-12 reveal-text">
//           Experience Perfection <br /> 
//           <span className="text-brand-silver not-italic font-bold tracking-tighter">Firsthand.</span>
//         </h2>
        
//         <Link 
//           to="/contact-visit" 
//           className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden font-bold text-white transition-all duration-500 bg-brand-blue hover:shadow-[0_0_40px_rgba(0,114,255,0.3)]"
//         >
//           <span className="relative z-10 uppercase tracking-[0.4em] text-[11px]">Book Your Private Demo</span>
//           {/* Shine Wipe Effect */}
//           <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
//           <span className="absolute inset-0 flex items-center justify-center uppercase tracking-[0.4em] text-[11px] text-brand-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-20 font-bold">
//             Book Your Private Demo
//           </span>
//         </Link>
        
//         <p className="mt-12 text-brand-silver/40 uppercase tracking-[0.5em] text-[9px]">Velachery, Chennai • Authorized Bosch Dealer</p>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function SupportCTA() {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden text-center border-t border-brand-silver/10">
      
//       {/* 🌟 White Shine Background Effects */}
//       {/* Soft blue-silver glow that moves slowly */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse"></div>
      
//       {/* Animated Shine Streak */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent skew-x-[-25deg] animate-[shineSweep_8s_linear_infinite]"></div>
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6">
//         {/* Top Tagline */}
//         <span className="text-[10px] uppercase tracking-[0.8em] text-brand-blue font-bold block mb-8 reveal-text">
//           Exclusive Invitation
//         </span>

//         {/* Heading with Shine Navy Gradient */}
//         <h2 className="text-6xl lg:text-8xl font-serif italic shine-navy-text leading-[1.1] mb-16 reveal-text">
//           Experience Perfection <br /> 
//           <span className="not-italic font-bold tracking-tighter">Firsthand.</span>
//         </h2>
        
//         {/* Premium Button with "Shine Wipe" */}
//         <div className="reveal-text [animation-delay:0.4s]">
//           <Link 
//             to="/contact-visit" 
//             className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden font-bold transition-all duration-700 bg-brand-dark text-white hover:shadow-[0_20px_40px_rgba(0,30,60,0.2)]"
//           >
//             {/* The primary text */}
//             <span className="relative z-10 uppercase tracking-[0.4em] text-[11px] group-hover:text-brand-dark transition-colors duration-500">
//               Book Your Private Demo
//             </span>
            
//             {/* White Shine Wipe Effect */}
//             <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            
//             {/* Animated border glow on hover */}
//             <div className="absolute inset-0 border border-white/20 group-hover:border-brand-dark transition-colors duration-700"></div>
//           </Link>
//         </div>
        
//         {/* Footer Details */}
//         <div className="mt-16 flex flex-col items-center gap-4 reveal-text [animation-delay:0.6s]">
//           <div className="w-12 h-px bg-brand-blue/20"></div>
//           <p className="text-brand-silver/60 uppercase tracking-[0.5em] text-[9px] font-medium">
//             Velachery, Chennai • <span className="text-brand-blue/60 font-bold">Authorized Bosch Destination</span>
//           </p>
//         </div>
//       </div>

//       {/* Subtle bottom gradient for "ending" the page */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-blue/[0.02] to-transparent"></div>
//     </section>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function SupportCTA() {
  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden text-center border-t border-brand-silver/10">
      
      {/* 🌟 Responsive Shine Effects */}
      {/* Glow size reduced on mobile for better performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-brand-blue/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
      
      {/* Animated Shine Streak */}
      <div className="absolute inset-0 opacity-20 md:opacity-30 pointer-events-none">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent skew-x-[-25deg] animate-[shineSweep_8s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Top Tagline - Reduced tracking on mobile */}
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.8em] text-brand-blue font-bold block mb-6 md:mb-8 reveal-text">
          Exclusive Invitation
        </span>

        {/* Responsive Heading: 4xl on mobile, 6xl on tablet, 8xl on desktop */}
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif italic shine-navy-text leading-[1.2] md:leading-[1.1] mb-12 md:mb-16 reveal-text px-2">
          Experience Perfection <br className="hidden sm:block" /> 
          <span className="not-italic font-bold tracking-tighter block sm:inline">Firsthand.</span>
        </h2>
        
        {/* Premium Button - Full width on tiny screens, inline on larger */}
        <div className="reveal-text [animation-delay:0.4s] px-4 md:px-0">
          <Link 
            to="/contact-visit" 
            className="group relative inline-flex w-full sm:w-auto items-center justify-center px-10 md:px-16 py-5 md:py-7 overflow-hidden font-bold transition-all duration-700 bg-brand-dark text-white hover:shadow-[0_20px_40px_rgba(0,30,60,0.2)]"
          >
            {/* The primary text - Adjusted size for mobile readability */}
            <span className="relative z-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] group-hover:text-brand-dark transition-colors duration-500">
              Book Your Private Demo
            </span>
            
            {/* White Shine Wipe Effect */}
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 border border-white/20 group-hover:border-brand-dark transition-colors duration-700"></div>
          </Link>
        </div>
        
        {/* Footer Details - Stacked or centered responsive */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 reveal-text [animation-delay:0.6s]">
          <div className="w-12 h-px bg-brand-blue/20"></div>
          <p className="text-brand-silver/60 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[9px] font-medium leading-loose px-4">
            Velachery, Chennai <br className="sm:hidden" /> 
            <span className="hidden sm:inline"> • </span>
            <span className="text-brand-blue/60 font-bold">Authorized Bosch Destination</span>
          </p>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-blue/[0.02] to-transparent"></div>
    </section>
  );
}