// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function AboutHero() {
// //   return (
// //     <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark pt-20">
// //       <div className="absolute inset-0 z-0">
// //         <img 
// //           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
// //           className="w-full h-full object-cover opacity-30 scale-105 animate-[ken-burns_20s_ease_infinite]" 
// //           alt="Luxury Interior" 
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
// //       </div>

// //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
// //         <div className="max-w-4xl space-y-8">
// //           <div className="flex items-center gap-4 animate-[fadeInLeft_1s_ease-out]">
// //              <span className="h-[1px] w-12 bg-brand-silver"></span>
// //              <span className="text-[10px] uppercase tracking-[0.6em] text-brand-silver font-bold">Velachery, Chennai</span>
// //           </div>
          
// //           <h1 className="text-6xl lg:text-8xl font-serif italic text-white leading-[1.1] animate-[fadeInUp_1.2s_ease-out]">
// //             Premium Home <br />
// //             <span className="not-italic font-bold tracking-tighter text-brand-silver drop-shadow-2xl">
// //               Experience Redefined
// //             </span>
// //           </h1>

// //           <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed animate-[fadeInUp_1.5s_ease-out]">
// //             Discover, experience, and upgrade your home with world-class appliances from Bosch and other leading brands — all under one roof.
// //           </p>

// //           <div className="flex flex-wrap gap-6 pt-10 animate-[fadeInUp_1.8s_ease-out]">
// //             <Link to="/contact-visit" className="group relative overflow-hidden px-12 py-5 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-500 shadow-2xl">
// //               <span className="relative z-10">Visit Our Store</span>
// //               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference"></div>
// //             </Link>
// //             <button className="group px-12 py-5 border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all duration-500">
// //               Book a Demo
// //             </button>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
// //           <span className="text-[9px] uppercase tracking-widest text-brand-silver/50">Scroll</span>
// //           <div className="w-[1px] h-12 bg-gradient-to-b from-brand-silver to-transparent animate-pulse"></div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// export default function AboutHero() {
//   const videoRef = useRef(null);
//   // Using a tech-focused video for a more "Authorized Dealer" feel
//   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.75; // Slow down for a more luxury feel
//     }
//   }, []);

//   return (
//     // <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[90vh] flex items-center bg-[#05070a] text-white overflow-hidden">
//     <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark pt-20">
      
//       {/* 🎞️ Video Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay loop muted playsInline
//           className="w-full h-full object-cover opacity-40 scale-105 contrast-[1.1] saturate-[0.9]"
//         >
//           <source src={videoUrl} type="video/mp4" />
//         </video>
        
//         {/* Modern Layered Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/60 to-transparent"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/40"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,86,179,0.1)_0%,_transparent_50%)]"></div>
//       </div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 w-full pt-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* 📝 Text Content */}
//           <div className="lg:col-span-8 space-y-10">
//             <div className="inline-flex items-center gap-4 py-2 px-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full animate-[fadeIn_1s_ease-out]">
//                <div className="w-2 h-2 bg-[#0056b3] rounded-full animate-pulse"></div>
//                <span className="text-[10px] uppercase tracking-[0.5em] text-white/80 font-bold">Velachery, Chennai // HQ</span>
//             </div>
            
//             <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic leading-[0.85] tracking-tight text-white drop-shadow-2xl">
//               Legacy of <br />
//               <span className="not-italic font-bold text-white relative">
//                 Precision<span className="text-[#0056b3]">.</span>
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed opacity-80">
//               KHL Home Connect brings <span className="text-white font-medium border-b border-[#0056b3]/30">German innovation</span> to the heart of Chennai, curating high-performance appliances for the modern home.
//             </p>

//             <div className="flex flex-wrap gap-6 pt-6">
//               <Link to="/contact-visit" className="group relative px-10 py-5 bg-white text-black text-[11px] uppercase tracking-[0.3em] font-black transition-all hover:bg-[#0056b3] hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
//                 Our Showroom
//               </Link>
//               <button className="group px-10 py-5 border border-white/20 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
//                 The KHL Story
//               </button>
//             </div>
//           </div>

//           {/* 📊 Side Stats (Luxury UI) */}
//           <div className="lg:col-span-4 hidden lg:flex flex-col justify-end gap-12 pb-10 opacity-60 hover:opacity-100 transition-opacity duration-1000">
//              {[
//                { label: "Authorized Partner", value: "BOSCH" },
//                { label: "Customer Experience", value: "15+ YRS" },
//                { label: "Live Display Units", value: "200+" }
//              ].map((item, i) => (
//                <div key={i} className="flex flex-col gap-2 border-l border-[#0056b3] pl-6">
//                   <span className="text-[9px] uppercase tracking-[0.4em] text-white/50">{item.label}</span>
//                   <span className="text-3xl font-bold tracking-tighter">{item.value}</span>
//                </div>
//              ))}
//           </div>
//         </div>
//       </div>

//       {/* 🧭 Vertical Scroll Label */}
//       <div className="absolute right-10 bottom-10 hidden md:flex flex-col items-center gap-6 opacity-30">
//          <span className="rotate-90 text-[8px] uppercase tracking-[1.5em] font-black">Scroll_To_Learn</span>
//          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const videoRef = useRef(null);
  const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774349005/Designed_to_Perform_with_Bosch_Home_Appliances_1080P_HD_b5tzc7.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    // Changed h-[90vh] to min-h-screen to ensure content always has room
    <section className="relative min-h-screen lg:h-[95vh] flex items-center overflow-hidden bg-[#05070a] pt-24 pb-12">
      
      {/* 🎞️ Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-40 scale-105 contrast-[1.1] saturate-[0.9]"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 📝 Text Content */}
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
               <div className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></div>
               <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/90 font-bold">Velachery, Chennai // HQ</span>
            </div>
            
            {/* Fluid Heading: Adjusted sizes to prevent cutoff on mobile landscape */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-white">
              Legacy of <br />
              <span className="not-italic font-bold text-white block mt-2">
                Precision<span className="text-[#0056b3]">.</span>
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-300 font-light max-w-xl leading-relaxed opacity-90">
              KHL Home Connect brings <span className="text-white font-medium border-b border-[#0056b3]/30">German innovation</span> to Chennai, curating high-performance appliances for the modern home.
            </p>

            {/* Buttons: Stack on small mobile, row on larger */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact-visit" className="inline-block text-center px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:bg-[#0056b3] hover:text-white">
                Our Showroom
              </Link>
              <button className="inline-block text-center px-8 py-4 border border-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all">
                The KHL Story
              </button>
            </div>
          </div>

          {/* 📊 Side Stats: Hidden on small height screens to save space */}
          <div className="lg:col-span-4 hidden xl:flex flex-col justify-end gap-10 pb-10">
              {[
                { label: "Authorized Partner", value: "BOSCH" },
                { label: "Customer Experience", value: "15+ YRS" },
                { label: "Live Display Units", value: "200+" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-[#0056b3] pl-6 transition-transform hover:translate-x-2">
                   <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">{item.label}</span>
                   <span className="text-2xl font-bold tracking-tighter text-white">{item.value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 🧭 Scroll Label: Hidden on landscape mobile to prevent overlap */}
      <div className="absolute right-10 bottom-10 hidden xl:flex flex-col items-center gap-4 opacity-30">
         <span className="rotate-90 text-[7px] uppercase tracking-[1em] font-black mb-10">Scroll</span>
         <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}