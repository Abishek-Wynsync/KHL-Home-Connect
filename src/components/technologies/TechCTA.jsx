// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function TechCTA() {
//   return (
//     <section className="bg-[#f8f9fa]  py-24 relative">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
//         <div className="max-w-3xl mx-auto space-y-12">
//           {/* <h3 className="text-5xl lg:text-8xl font-serif italic text-color-5002 leading-tight">
//             Innovation is <br />
//             <span className="text-brand-silver">Best Experienced Live.</span>
//           </h3> */}
//           <h3 className="text-5xl lg:text-8xl font-serif italic leading-tight bg-gradient-to-r from-[#001e3c] via-[#005bb7] to-[#001e3c] bg-clip-text text-transparent animate-pulse">
//   Innovation is <br />
//   <span className="text-brand-silver drop-shadow-sm">
//     Best Experienced Live.
//   </span>
// </h3>
//           <p className="text-gray-400 text-xl font-light">
//             Visit our flagship Experience Center in Velachery to see these technologies 
//             powering a modern home in real-time.
//           </p>
//           <div className="pt-8">
//             <Link to="/contact-visit" className="inline-block px-16 py-6 bg-brand-blue text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-2xl">
//               Book a Store Tour
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function TechCTA() {
  return (
    <section className="relative py-24 md:py-24 bg-[#fbfbfb] overflow-hidden selection:bg-[#0056b3]/10">
      
      {/* 🌀 Background Aesthetic: Subtle "Aura" Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40%] h-[60%] bg-[#0056b3]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-gray-200/40 rounded-full blur-[100px]"></div>
      </div>

      {/* 🏁 Minimalist Border Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-gray-200"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
          
          {/* 🏷️ Location Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-gray-200 bg-white/50 backdrop-blur-md rounded-full mb-4">
             <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Velachery Flagship Center</span>
          </div>

          {/* ⚡ High-Impact Hero Text */}
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-6xl lg:text-[7.5rem] font-serif italic leading-[1.1] tracking-tight text-[#1a1a1a]">
              Innovation is <br className="hidden md:block" />
              <span className="not-italic font-bold bg-gradient-to-r from-[#001e3c] via-[#0056b3] to-[#001e3c] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradientMove">
                Best Experienced Live.
              </span>
            </h3>
            
            <p className="text-gray-500 text-base md:text-2xl font-light max-w-2xl mx-auto leading-relaxed px-4">
              Step into the future at our flagship Experience Center. See 
              <span className="text-black font-medium"> Bosch technologies</span> powering a modern home in real-time.
            </p>
          </div>

          {/* 🔘 Premium Interactive Button */}
          <div className="pt-6 md:pt-10">
            <Link 
              to="/contact-visit" 
              className="group relative inline-flex items-center justify-center px-12 py-5 md:px-20 md:py-7 bg-black overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,86,179,0.3)]"
            >
              {/* Button Text */}
              <span className="relative z-10 text-white text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-bold group-hover:text-white transition-colors duration-500">
                Book a Store Tour
              </span>
              
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-[#0056b3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            </Link>
            
            {/* Quick Contact Link below button */}
            <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-gray-400">
              Personalized Consultations // Monday — Sunday
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
}