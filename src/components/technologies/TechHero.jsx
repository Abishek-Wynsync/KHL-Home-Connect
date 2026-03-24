// // import React from 'react';

// // export default function TechHero() {
// //   return (
// //     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 z-0">
// //         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
// //         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-silver/10 rounded-full blur-[120px]"></div>
// //       </div>

// //       <div className="relative z-10 text-center space-y-8 px-6">
// //         <div className="inline-block px-6 py-2 border border-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.8em] text-brand-silver animate-[fadeInDown_1s_ease-out]">
// //           Innovation by Bosch
// //         </div>
// //         <h1 className="text-7xl lg:text-[10rem] font-serif italic leading-none tracking-tighter animate-[scaleIn_1.5s_ease-out] text-white">
// //           The Future <br />
// //           <span className="not-italic font-bold bg-gradient-to-r from-white via-brand-silver to-gray-500 bg-clip-text text-transparent">
// //             In Motion
// //           </span>
// //         </h1>
// //         <p className="text-gray-400 font-light max-w-xl mx-auto text-lg leading-relaxed animate-[fadeInUp_2s_ease-out]">
// //           Experience the German engineering that transforms everyday tasks into effortless experiences.
// //         </p>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
// //         <div className="w-[1px] h-20 bg-gradient-to-b from-brand-blue to-transparent"></div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from 'react';

// export default function TechHero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
//       {/* 🧩 Engineering Grid Overlay */}
//       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
//            style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//       </div>

//       {/* 🌀 Dynamic Ambient Glows */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/15 rounded-full blur-[140px] animate-pulse"></div>
//         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-silver/5 rounded-full blur-[140px]"></div>
//       </div>

//       <div className="relative z-10 text-center space-y-10 px-6 max-w-[1440px] mx-auto">
        
//         {/* 🏷️ Floating Badge */}
//         <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-white/10 backdrop-blur-xl bg-white/5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-brand-silver animate-[fadeInDown_1.2s_ease-out]">
//           <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping"></span>
//           Innovation by Bosch
//         </div>

//         {/* ⚡ Fluid Hero Typography */}
//         <h1 className="text-6xl sm:text-8xl lg:text-[11rem] font-serif italic leading-[0.9] tracking-tighter animate-[scaleIn_1.5s_ease-out] text-white">
//           The Future <br />
//           <span className="not-italic font-bold bg-gradient-to-b from-white via-brand-silver to-gray-600 bg-clip-text text-transparent">
//             In Motion
//           </span>
//         </h1>

//         {/* 📖 Subtle Context Line */}
//         <div className="flex flex-col items-center gap-6 animate-[fadeInUp_2s_ease-out]">
//           <p className="text-gray-400 font-light max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
//             Where world-class <span className="text-white">German engineering</span> meets the 
//             intuitive needs of the modern home. Precise. Purposeful. Permanent.
//           </p>
          
//           {/* 🔘 Interaction Prompt (Optional) */}
//           <button className="px-8 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-brand-blue hover:text-white transition-all duration-500 rounded-sm">
//             Discover the Tech
//           </button>
//         </div>
//       </div>

//       {/* 🧭 Vertical Scroll Mechanic */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer pb-10">
//         <span className="text-[8px] uppercase tracking-[0.5em] text-gray-500 group-hover:text-white transition-colors duration-500">
//           Scroll
//         </span>
//         <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-blue to-transparent animate-[scrollLine_2s_linear_infinite]"></div>
//         </div>
//       </div>

//       {/* Custom CSS for the scroll line animation (Add to your globals.css) */}
//       <style jsx>{`
//         @keyframes scrollLine {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(200%); }
//         }
//       `}</style>
//     </section>
//   );
// }


// import React from 'react';

// export default function TechHero() {
//   // Replace this with your actual video URL (hosted in /public or external)
//   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4"; 

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
//       {/* 🎬 Video Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover scale-110" // scale-110 allows for subtle movement room
//         >
//           <source src={videoUrl} type="video/mp4" />
//         </video>
        
//         {/* 🎭 Premium Overlay: Dark Vignette + Glassmorphism Tint */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-[#050505] z-10"></div>
//         <div className="absolute inset-0 bg-brand-blue/5 backdrop-blur-[2px] z-10"></div>
//       </div>

//       {/* 🧩 Engineering Grid Overlay (Kept for depth) */}
//       <div className="absolute inset-0 z-20 opacity-30 pointer-events-none" 
//            style={{ backgroundImage: 'radial-gradient(#ffffff15 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
//       </div>

//       {/* 🌀 Dynamic Glows (Positioned behind text but above video) */}
//       <div className="absolute inset-0 z-20">
//         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[140px] animate-pulse"></div>
//       </div>

//       <div className="relative z-30 text-center space-y-10 px-6 max-w-[1440px] mx-auto">
        
//         {/* 🏷️ Floating Badge */}
//         <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-white/10 backdrop-blur-2xl bg-white/5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-brand-silver animate-[fadeInDown_1.2s_ease-out]">
//           <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping"></span>
//           Innovation by Bosch
//         </div>

//         {/* ⚡ Fluid Hero Typography with subtle Text Shadow for readability */}
//         <h1 className="text-6xl sm:text-8xl lg:text-[11rem] font-serif italic leading-[0.9] tracking-tighter animate-[scaleIn_1.5s_ease-out] text-white drop-shadow-2xl">
//           The Future <br />
//           <span className="not-italic font-bold bg-gradient-to-b from-white via-brand-silver to-gray-500 bg-clip-text text-transparent">
//             In Motion
//           </span>
//         </h1>

//         {/* 📖 Subtle Context Line */}
//         <div className="flex flex-col items-center gap-6 animate-[fadeInUp_2s_ease-out]">
//           <p className="text-gray-200 font-light max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
//             Where world-class <span className="text-white font-medium">German engineering</span> meets the 
//             intuitive needs of the modern home. Precise. Purposeful. Permanent.
//           </p>
          
//           <button className="group relative px-10 py-4 overflow-hidden border border-white/20 transition-all duration-500 hover:border-brand-blue">
//             <span className="relative z-10 text-white text-[10px] uppercase font-bold tracking-[0.4em]">Discover the Tech</span>
//             <div className="absolute inset-0 bg-brand-blue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
//           </button>
//         </div>
//       </div>

//       {/* 🧭 Vertical Scroll Mechanic */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer pb-10 z-30">
//         <span className="text-[8px] uppercase tracking-[0.5em] text-gray-400 group-hover:text-white transition-colors duration-500">
//           Scroll
//         </span>
//         <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-blue to-transparent animate-[scrollLine_2s_linear_infinite]"></div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scrollLine {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(200%); }
//         }
//       `}</style>
//     </section>
//   );
// }

import React, { useEffect, useRef } from 'react';

export default function TechHero() {
  const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4"; 
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Parallax values: slight movement creates massive depth
      const moveX = (clientX - window.innerWidth / 2) / 65; 
      const moveY = (clientY - window.innerHeight / 2) / 65;
      section.style.setProperty('--move-x', `${moveX}px`);
      section.style.setProperty('--move-y', `${moveY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202] selection:bg-[#0056b3]/30"
      style={{ '--move-x': '0px', '--move-y': '0px' }}
    >
      
      {/* 🎬 Background Video Container */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-110 opacity-90"
        style={{ transform: `translate(calc(var(--move-x) * -1.2), calc(var(--move-y) * -1.2))` }}
      >
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover contrast-[1.2] brightness-[1.0] saturate-[0.4]"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#020202_90%)] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10"></div>
      </div>

      {/* 📡 HUD Ghost Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none p-12 flex flex-col justify-between opacity-10">
        <div className="flex justify-between items-start text-[8px] tracking-[0.6em] text-white font-mono uppercase">
          <div className="flex flex-col gap-2">
            <span>Core // Precision_Eng</span>
            <div className="w-8 h-[1px] bg-white/40"></div>
          </div>
          <span>Est. 1886 // GER</span>
        </div>
      </div>

      <div className="relative z-30 text-center px-6 max-w-[1440px] mx-auto">
        
        {/* 🏷️ Refined Bosch Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/10 backdrop-blur-2xl bg-white/5 rounded-full text-[10px] uppercase tracking-[0.7em] text-white/40 mb-12 hover:text-white/80 hover:border-white/20 transition-all duration-700 cursor-crosshair">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-40"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0056b3]"></span>
          </div>
          Bosch Technologies
        </div>

        {/* ⚡ Hero Typography with Entrance Animation */}
        <div className="mb-14 overflow-hidden">
          <h1 className="text-6xl sm:text-8xl lg:text-[12rem] font-serif italic leading-[0.82] tracking-[-0.03em] text-white animate-textReveal">
            The Future <br />
            <span className="not-italic font-bold bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent inline-block mt-4">
              In Motion
            </span>
          </h1>
        </div>

        {/* 📖 Context & CTA */}
        <div className="flex flex-col items-center gap-12 opacity-0 animate-fadeInUp">
          <p className="text-gray-500 font-light max-w-xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide">
            World-class <span className="text-white/80">German technology</span> engineered to the highest standards. 
            Precise. Silent. Bosch.
          </p>
          
          <button className="group relative px-16 py-5 border border-white/10 transition-all duration-700 overflow-hidden active:scale-95">
            <span className="relative z-10 text-white text-[11px] font-bold uppercase tracking-[0.6em] group-hover:text-white">
              View Collection
            </span>
            <div className="absolute inset-0 bg-[#0056b3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </button>
        </div>
      </div>

      {/* 🧭 Vertical Scroll Mechanic */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 opacity-20">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 via-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0056b3] animate-scrollLine"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes textReveal {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-textReveal {
          animation: textReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s;
        }
      `}</style>
    </section>
  );
}