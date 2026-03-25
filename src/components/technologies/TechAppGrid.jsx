// // import React from 'react';

// // export default function TechAppGrid() {
// //   return (
// //     <section className="py- bg-white">
// //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
// //         <div className="grid lg:grid-cols-2 gap-20 items-center">
// //           <div className="space-y-8">
// //             <h2 className="text-brand-blue font-bold text-[11px] uppercase tracking-[0.4em]">Intelligence</h2>
// //             <h3 className="text-5xl font-serif italic text-brand-dark">Your Home, <br/> In the Palm of Your Hand.</h3>
// //             <p className="text-gray-500 font-light text-lg leading-relaxed">
// //               The Home Connect app allows you to monitor and control your Bosch appliances from anywhere. Receive notifications when the laundry is done or start your dishwasher from the office.
// //             </p>
// //             <ul className="space-y-4">
// //               {["Remote Diagnostics", "Personalized Settings", "Voice Control Ready"].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-dark">
// //                   <div className="w-2 h-2 bg-brand-blue rounded-full"></div> {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className="relative">
// //             <div className="absolute -inset-10 bg-brand-blue/5 rounded-full blur-3xl"></div>
// //             <img 
// //               src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070" 
// //               className="relative z-10 rounded-3xl shadow-2xl border border-gray-100"
// //               alt="Mobile App"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React from 'react';

// export default function TechAppGrid() {
//   const features = [
//     { title: "Remote Diagnostics", desc: "Expert help, virtually anywhere." },
//     { title: "Personalized Settings", desc: "Appliances that learn your flow." },
//     { title: "Voice Control Ready", desc: "Seamless Alexa & Google integration." }
//   ];

//   return (
//     <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      
//       {/* 🧊 Subtle Background Detail (Floating Accents) */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -skew-x-12 translate-x-1/4 z-0"></div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
//           {/* 📝 Content Side */}
//           <div className="space-y-10 order-2 lg:order-1">
//             <div className="space-y-4">
//               <h2 className="text-[#0056b3] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.5em] animate-pulse">
//                 // Intelligence
//               </h2>
//               <h3 className="text-5xl md:text-7xl font-serif italic text-[#1a1a1a] leading-[1.1]">
//                 Your Home, <br/> 
//                 <span className="not-italic font-bold text-black">In Your Palm.</span>
//               </h3>
//             </div>

//             <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed max-w-xl">
//               The <span className="text-black font-medium text-base">Home Connect™</span> ecosystem allows you to monitor and control your Bosch appliances with surgical precision, from anywhere in the world.
//             </p>

//             {/* Feature List with Hover States */}
//             <div className="grid gap-6">
//               {features.map((item, i) => (
//                 <div key={i} className="group flex items-start gap-6 p-4 -ml-4 rounded-xl transition-all duration-300 hover:bg-gray-50">
//                   <div className="mt-1.5 w-2 h-2 bg-[#0056b3] rounded-full group-hover:scale-150 transition-transform"></div>
//                   <div>
//                     <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a] mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-xs text-gray-400 font-medium tracking-wide">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Premium CTA */}
//             <div className="pt-4">
//                <button className="px-8 py-4 bg-black text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-[#0056b3] transition-colors duration-500 shadow-xl">
//                 Explore Ecosystem
//               </button>
//             </div>
//           </div>

//           {/* 📱 Visual Side (Mockup Stack) */}
//           <div className="relative order-1 lg:order-2 group">
//             {/* Soft Glow behind the phone */}
//             <div className="absolute -inset-10 bg-[#0056b3]/5 rounded-full blur-[80px] group-hover:bg-[#0056b3]/10 transition-colors duration-1000"></div>
            
//             <div className="relative z-10">
//               {/* Main Image with "Floating" Shadow */}
//               <div className="relative overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 transition-transform duration-700 group-hover:-translate-y-2">
//                 <img 
//                   src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070" 
//                   className="w-full h-auto object-cover"
//                   alt="Bosch Home Connect Mobile Experience"
//                 />
//               </div>

//               {/* 🧩 Floating Data Card (The "Tech" Detail) */}
//               <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/50 z-20 hidden md:block animate-bounce-slow">
//                 <div className="flex flex-col gap-2">
//                   <span className="text-[9px] uppercase tracking-widest text-gray-400">Connection Status</span>
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-bold text-[#1a1a1a]">Kitchen_Active</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// import React, { useEffect, useRef } from 'react';

// export default function TechAppGrid() {
//   const features = [
//     { title: "Remote Diagnostics", desc: "Expert help, virtually anywhere." },
//     { title: "Personalized Settings", desc: "Appliances that learn your flow." },
//     { title: "Voice Control Ready", desc: "Seamless Alexa & Google integration." }
//   ];

//   return (
//     <section className="relative py-16 md:py-32 bg-white overflow-hidden selection:bg-[#0056b3]/10">
      
//       {/* 🧊 Architectural Background Accent - Responsive Visibility */}
//       <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-[#f8f9fa] md:-skew-x-12 translate-x-1/2 md:translate-x-1/4 z-0 opacity-50 md:opacity-100"></div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
//           {/* 📝 Content Side - Full width on mobile, 50% on desktop */}
//           <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 order-2 lg:order-1">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-[1px] bg-[#0056b3]"></div>
//                 <h2 className="text-[#0056b3] font-bold text-[9px] md:text-[11px] uppercase tracking-[0.5em]">
//                   Intelligence
//                 </h2>
//               </div>
//               <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-[#1a1a1a] leading-[1.1] tracking-tight">
//                 Your Home, <br className="hidden sm:block"/> 
//                 <span className="not-italic font-bold text-black">In Your Palm.</span>
//               </h3>
//             </div>

//             <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed max-w-xl">
//               The <span className="text-black font-semibold">Home Connect™</span> ecosystem allows you to monitor and control your Bosch appliances with surgical precision.
//             </p>

//             {/* Feature List - 1 column on mobile, adaptive on tablet */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
//               {features.map((item, i) => (
//                 <div key={i} className="group flex items-start gap-5 p-4 md:p-5 -ml-4 rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-gray-100">
//                   <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-[#0056b3] rounded-full group-hover:scale-150 transition-transform duration-500"></div>
//                   <div>
//                     <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1a1a1a] mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-[11px] md:text-xs text-gray-400 font-medium tracking-wide leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Premium CTA - Responsive Width */}
//             <div className="pt-4">
//                <button className="w-full sm:w-auto px-10 py-5 bg-black text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-[#0056b3] transition-all duration-500 shadow-2xl hover:-translate-y-1 active:scale-95">
//                 Explore Ecosystem
//               </button>
//             </div>
//           </div>

//           {/* 📱 Visual Side - Responsive Image Sizing */}
//           <div className="w-full lg:w-1/2 relative order-1 lg:order-2 px-4 md:px-0">
//             {/* Background Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0056b3]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
            
//             <div className="relative">
//               {/* Main Image Container */}
//               <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border border-white transition-all duration-700">
//                 <img 
//                   src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070" 
//                   className="w-full h-auto scale-100 hover:scale-105 transition-transform duration-1000 object-cover aspect-[4/5] md:aspect-auto"
//                   alt="Bosch Home Connect Mobile Experience"
//                 />
                
//                 {/* Image Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
//               </div>

//               {/* 🧩 HUD Data Card - Responsive positioning */}
//               <div className="absolute -bottom-4 md:-bottom-8 left-4 md:-left-12 p-4 md:p-7 bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl md:rounded-2xl border border-white/50 z-20 animate-float pointer-events-none max-w-[180px] md:max-w-none">
//                 <div className="flex flex-col gap-2 md:gap-3">
//                   <div className="flex items-center justify-between gap-4">
//                     <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Network</span>
//                     <span className="text-[8px] text-[#0056b3] font-mono font-bold">5G_READY</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="relative flex h-2 w-2">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//                     </div>
//                     <span className="text-xs md:text-sm font-bold text-[#1a1a1a]">Kitchen_Active</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

import React from 'react';

export default function TechAppGrid() {
  const features = [
    { title: "Remote Diagnostics", desc: "Expert help, virtually anywhere." },
    { title: "Personalized Settings", desc: "Appliances that learn your flow." },
    { title: "Voice Control Ready", desc: "Seamless Alexa & Google integration." }
  ];

  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden selection:bg-[#0056b3]/10">
      
      {/* 🧊 Architectural Background Accent */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-[#f8f9fa] md:-skew-x-12 translate-x-1/2 md:translate-x-1/4 z-0 opacity-50 md:opacity-100"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* 📝 Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#0056b3]"></div>
                <h2 className="text-[#0056b3] font-bold text-[9px] md:text-[11px] uppercase tracking-[0.5em]">
                  Intelligence
                </h2>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-[#1a1a1a] leading-[1.1] tracking-tight">
                Your Home, <br className="hidden sm:block"/> 
                <span className="not-italic font-bold text-black">In Your Palm.</span>
              </h3>
            </div>

            <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed max-w-xl">
              The <span className="text-black font-semibold">Home Connect™</span> ecosystem allows you to monitor and control your Bosch appliances with surgical precision.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {features.map((item, i) => (
                <div key={i} className="group flex items-start gap-5 p-4 md:p-5 -ml-4 rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-gray-100">
                  <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-[#0056b3] rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1a1a1a] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] md:text-xs text-gray-400 font-medium tracking-wide leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <button className="w-full sm:w-auto px-10 py-5 bg-black text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-[#0056b3] transition-all duration-500 shadow-2xl hover:-translate-y-1 active:scale-95">
                Explore Ecosystem
              </button>
            </div>
          </div>

          {/* 📱 Visual Side - VIDEO IMPLEMENTATION */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 px-4 md:px-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0056b3]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
            
            <div className="relative">
              {/* Main Video Container */}
              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border border-white bg-black aspect-[4/5] md:aspect-video lg:aspect-square">
                <video 
                  src="https://res.cloudinary.com/dsa0chszi/video/upload/v1774426508/Master_Your_Day_with_Home_Connect_1080P_HD_rmnm6w.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover brightness-[0.9] hover:brightness-100 transition-all duration-700"
                />
                
                {/* HUD Scanline Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] animate-scan pointer-events-none"></div>
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>

              {/* 🧩 HUD Data Card */}
              <div className="absolute -bottom-4 md:-bottom-8 left-4 md:-left-12 p-4 md:p-7 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl md:rounded-2xl border border-white/50 z-20 animate-float pointer-events-none max-w-[180px] md:max-w-none">
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Protocol</span>
                    <span className="text-[8px] text-[#0056b3] font-mono font-bold">IOT_SECURE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]"></span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-[#1a1a1a]">Syncing_Live...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}