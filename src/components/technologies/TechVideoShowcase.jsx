// // // // // import React from 'react';

// // // // // export default function TechVideoShowcase() {
// // // // //   return (
// // // // //     <section className="relative h-[70vh] w-full overflow-hidden bg-brand-dark">
// // // // //       {/* Background Image/Video Placeholder */}
// // // // //       <img 
// // // // //         src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" 
// // // // //         className="w-full h-full object-cover opacity-40"
// // // // //         alt="Bosch Engineering"
// // // // //       />
// // // // //       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
// // // // //         <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-8 hover:scale-110 hover:bg-white hover:text-brand-dark transition-all cursor-pointer group">
// // // // //           <span className="text-2xl ml-1 group-hover:scale-110">▶</span>
// // // // //         </div>
// // // // //         <h3 className="text-4xl md:text-5xl font-serif italic text-white">Engineering in Motion</h3>
// // // // //         <p className="text-brand-silver uppercase tracking-widest text-[10px] mt-4">Watch the Tech Documentary</p>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // // import React from 'react';

// // // // // export default function TechVideoShowcase() {
// // // // //   return (
// // // // //     <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[#020202] group cursor-pointer">
      
// // // // //       {/* 🎞️ Background Media Layer */}
// // // // //       <div className="absolute inset-0 z-0 transition-transform duration-[3s] ease-out group-hover:scale-110">
// // // // //         <img 
// // // // //           src="https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4" 
// // // // //           className="w-full h-full object-cover opacity-50 contrast-[1.2] brightness-[0.6] saturate-[0.8]"
// // // // //           alt="Bosch Engineering Excellence"
// // // // //         />
        
// // // // //         {/* Cinematic Overlays */}
// // // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-80"></div>
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020202_100%)] opacity-60"></div>
// // // // //       </div>

// // // // //       {/* 🛠️ Technical Frame (HUD Corner Elements) */}
// // // // //       <div className="absolute inset-0 z-10 p-6 md:p-12 flex flex-col justify-between pointer-events-none opacity-40">
// // // // //         <div className="flex justify-between items-start">
// // // // //           <div className="w-4 h-4 border-t border-l border-white/40"></div>
// // // // //           <div className="w-4 h-4 border-t border-r border-white/40"></div>
// // // // //         </div>
// // // // //         <div className="flex justify-between items-end">
// // // // //           <div className="w-4 h-4 border-b border-l border-white/40"></div>
// // // // //           <div className="w-4 h-4 border-b border-r border-white/40"></div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        
// // // // //         {/* 🔘 The "Pulse" Play Button */}
// // // // //         <div className="relative mb-10 md:mb-14">
// // // // //           {/* Animated Outer Rings */}
// // // // //           <div className="absolute inset-0 rounded-full border border-[#0056b3] animate-ping opacity-20"></div>
// // // // //           <div className="absolute -inset-4 rounded-full border border-white/5 animate-[pulse_3s_infinite] opacity-30"></div>
          
// // // // //           <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 backdrop-blur-md bg-white/5 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:border-white">
// // // // //             <svg 
// // // // //               className="w-6 h-6 md:w-8 md:h-8 translate-x-1 text-white group-hover:text-[#020202] transition-colors duration-500" 
// // // // //               viewBox="0 0 24 24" 
// // // // //               fill="currentColor"
// // // // //             >
// // // // //               <path d="M8 5v14l11-7z" />
// // // // //             </svg>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* 📝 Copy with Premium Spacing */}
// // // // //         <div className="space-y-4 max-w-2xl">
// // // // //           <p className="text-[#0056b3] font-bold text-[9px] md:text-[11px] uppercase tracking-[0.6em] animate-fadeIn">
// // // // //             // The Tech Documentary
// // // // //           </p>
// // // // //           <h3 className="text-4xl md:text-7xl font-serif italic text-white leading-tight tracking-tight">
// // // // //             Engineering <br className="md:hidden" /> <span className="not-italic font-bold">In Motion</span>
// // // // //           </h3>
          
// // // // //           <div className="flex items-center justify-center gap-6 pt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
// // // // //              <span className="h-[1px] w-12 bg-white/30"></span>
// // // // //              <p className="text-white text-[9px] uppercase tracking-[0.4em] font-light">Duration: 02:45</p>
// // // // //              <span className="h-[1px] w-12 bg-white/30"></span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 📹 Bottom "Live" Indicator */}
// // // // //       <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
// // // // //         <span className="text-[10px] text-white/40 font-mono tracking-tighter">4K // HDR</span>
// // // // //         <div className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></div>
// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // import React from 'react';

// // // // export default function TechVideoShowcase() {
// // // //   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";

// // // //   return (
// // // //     <section className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden bg-[#020202] group cursor-pointer">
      
// // // //       {/* 🎞️ Ambient Background Video Layer */}
// // // //       <div className="absolute inset-0 z-0 transition-transform duration-[4s] ease-out group-hover:scale-105">
// // // //         <video
// // // //           autoPlay
// // // //           loop
// // // //           muted
// // // //           playsInline
// // // //           className="w-full h-full object-cover opacity-40 contrast-[1.2] brightness-[0.5] saturate-[0.6]"
// // // //         >
// // // //           <source src={videoUrl} type="video/mp4" />
// // // //         </video>
        
// // // //         {/* Cinematic Overlays - Reduced Opacity for clarity */}
// // // //         <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90"></div>
// // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#020202_90%)] opacity-70"></div>
// // // //       </div>

// // // //       {/* 🛠️ Technical Frame (HUD Corner Elements) - Responsive scaling */}
// // // //       <div className="absolute inset-0 z-10 p-4 md:p-12 flex flex-col justify-between pointer-events-none opacity-30 md:opacity-50">
// // // //         <div className="flex justify-between items-start">
// // // //           <div className="w-3 h-3 md:w-5 md:h-5 border-t border-l border-white/40"></div>
// // // //           <div className="w-3 h-3 md:w-5 md:h-5 border-t border-r border-white/40"></div>
// // // //         </div>
// // // //         <div className="flex justify-between items-end">
// // // //           <div className="w-3 h-3 md:w-5 md:h-5 border-b border-l border-white/40"></div>
// // // //           <div className="w-3 h-3 md:w-5 md:h-5 border-b border-r border-white/40"></div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        
// // // //         {/* 🔘 The "Pulse" Play Button - Mobile Optimized */}
// // // //         <div className="relative mb-8 md:mb-14">
// // // //           <div className="absolute inset-0 rounded-full border border-[#0056b3] animate-ping opacity-25"></div>
// // // //           <div className="absolute -inset-3 md:-inset-5 rounded-full border border-white/5 animate-[pulse_4s_infinite] opacity-20"></div>
          
// // // //           <div className="relative w-16 h-16 md:w-28 md:h-28 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:scale-110 shadow-2xl">
// // // //             <svg 
// // // //               className="w-5 h-5 md:w-10 md:h-10 translate-x-1 text-white group-hover:text-[#0056b3] transition-colors duration-500" 
// // // //               viewBox="0 0 24 24" 
// // // //               fill="currentColor"
// // // //             >
// // // //               <path d="M8 5v14l11-7z" />
// // // //             </svg>
// // // //           </div>
// // // //         </div>

// // // //         {/* 📝 Content Stack */}
// // // //         <div className="space-y-3 md:space-y-6 max-w-3xl">
// // // //           <p className="text-[#0056b3] font-bold text-[8px] md:text-[11px] uppercase tracking-[0.6em]">
// // // //             // The Tech Documentary
// // // //           </p>
// // // //           <h3 className="text-3xl sm:text-5xl md:text-8xl font-serif italic text-white leading-[1.1] tracking-tight">
// // // //             Engineering <br className="hidden sm:block" /> <span className="not-italic font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">In Motion</span>
// // // //           </h3>
          
// // // //           <div className="flex items-center justify-center gap-4 md:gap-8 pt-4 md:pt-8 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
// // // //              <span className="h-[1px] w-8 md:w-16 bg-white/40"></span>
// // // //              <p className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-light">Runtime 02:45</p>
// // // //              <span className="h-[1px] w-8 md:w-16 bg-white/40"></span>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* 📹 Data Metadata - Anchored for all screens */}
// // // //       <div className="absolute bottom-6 left-6 md:bottom-10 md:right-10 z-20 flex items-center gap-4">
// // // //         <div className="flex flex-col items-start md:items-end">
// // // //           <span className="text-[7px] md:text-[10px] text-white/30 font-mono tracking-widest uppercase">Stream Ready</span>
// // // //           <span className="text-[8px] md:text-[12px] text-white/60 font-mono tracking-tighter uppercase">4K ULTRA HDR // 60FPS</span>
// // // //         </div>
// // // //         <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0056b3] rounded-full animate-pulse shadow-[0_0_10px_#0056b3]"></div>
// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // // import React, { useEffect, useRef, useState } from 'react';

// // // export default function TechVideoShowcase() {
// // //   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";
// // //   const videoRef = useRef(null);
// // //   const [isPlaying, setIsPlaying] = useState(true);
// // //   const [isMuted, setIsMuted] = useState(true);

// // //   // 🤖 Auto-play/pause based on scroll position
// // //   useEffect(() => {
// // //     const options = { threshold: 0.6 }; // 60% of video must be visible
// // //     const observer = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           videoRef.current.play();
// // //           setIsPlaying(true);
// // //         } else {
// // //           videoRef.current.pause();
// // //           setIsPlaying(false);
// // //         }
// // //       });
// // //     }, options);

// // //     if (videoRef.current) observer.observe(videoRef.current);
// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const togglePlay = () => {
// // //     if (isPlaying) {
// // //       videoRef.current.pause();
// // //     } else {
// // //       videoRef.current.play();
// // //     }
// // //     setIsPlaying(!isPlaying);
// // //   };

// // //   const toggleMute = (e) => {
// // //     e.stopPropagation(); // Prevent play/pause trigger when clicking mute
// // //     videoRef.current.muted = !isMuted;
// // //     setIsMuted(!isMuted);
// // //   };

// // //   return (
// // //     <section className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden bg-[#020202] group">
      
// // //       {/* 🎞️ Background Video */}
// // //       <div className="absolute inset-0 z-0 scale-105">
// // //         <video
// // //           ref={videoRef}
// // //           loop
// // //           muted={isMuted}
// // //           playsInline
// // //           className="w-full h-full object-cover opacity-60 contrast-[1.1] brightness-[0.6]"
// // //           onClick={togglePlay}
// // //         >
// // //           <source src={videoUrl} type="video/mp4" />
// // //         </video>
        
// // //         {/* Cinematic Gradients */}
// // //         <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90 pointer-events-none"></div>
// // //       </div>

// // //       {/* 🎮 Premium Control HUD */}
// // //       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 px-8 py-4 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:bg-white/10">
        
// // //         {/* Play/Pause Button */}
// // //         <button 
// // //           onClick={togglePlay}
// // //           className="text-white hover:text-[#0056b3] transition-colors flex items-center gap-3 group/btn"
// // //         >
// // //           {isPlaying ? (
// // //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
// // //           ) : (
// // //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
// // //           )}
// // //           <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block">
// // //             {isPlaying ? 'Pause' : 'Play'}
// // //           </span>
// // //         </button>

// // //         <div className="w-[1px] h-4 bg-white/20"></div>

// // //         {/* Mute/Unmute Button */}
// // //         <button 
// // //           onClick={toggleMute}
// // //           className="text-white hover:text-[#0056b3] transition-colors flex items-center gap-3"
// // //         >
// // //           {isMuted ? (
// // //             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg>
// // //           ) : (
// // //             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
// // //           )}
// // //           <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden md:block">
// // //             {isMuted ? 'Unmute' : 'Mute'}
// // //           </span>
// // //         </button>
// // //       </div>

// // //       {/* 📝 Floating Text Content */}
// // //       <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
// // //         {!isPlaying && (
// // //           <div className="mb-8 animate-pulse">
// // //             <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
// // //               <svg className="w-8 h-8 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         <div className={`transition-all duration-1000 ${isPlaying ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-60'}`}>
// // //           <p className="text-[#0056b3] font-bold text-[9px] md:text-[11px] uppercase tracking-[0.6em] mb-4">
// // //             // Engineering Documentary
// // //           </p>
// // //           <h3 className="text-4xl md:text-7xl font-serif italic text-white leading-tight">
// // //             Precision <span className="not-italic font-bold">Unfolded</span>
// // //           </h3>
// // //         </div>
// // //       </div>

// // //       {/* 🧭 Vertical Metadata Overlay */}
// // //       <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 opacity-20 group-hover:opacity-50 transition-opacity">
// // //         <span className="rotate-90 text-[8px] font-mono tracking-[1em] text-white uppercase whitespace-nowrap">Frame_Rate_60FPS</span>
// // //         <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent"></div>
// // //         <span className="rotate-90 text-[8px] font-mono tracking-[1em] text-white uppercase whitespace-nowrap">Res_3840x2160</span>
// // //       </div>

// // //     </section>
// // //   );
// // // }

// // import React, { useEffect, useRef, useState } from 'react';

// // export default function TechVideoShowcase() {
// //   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";
// //   const videoRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(true);
// //   const [isMuted, setIsMuted] = useState(true);

// //   // 🤖 Auto-play/pause logic
// //   useEffect(() => {
// //     const options = { threshold: 0.5 }; 
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           videoRef.current.play().catch(() => {
// //             // Autoplay might be blocked if not muted
// //             console.log("Autoplay prevented by browser");
// //           });
// //           setIsPlaying(true);
// //         } else {
// //           videoRef.current.pause();
// //           setIsPlaying(false);
// //         }
// //       });
// //     }, options);

// //     if (videoRef.current) observer.observe(videoRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   const togglePlay = () => {
// //     if (isPlaying) {
// //       videoRef.current.pause();
// //     } else {
// //       videoRef.current.play();
// //     }
// //     setIsPlaying(!isPlaying);
// //   };

// //   const toggleMute = (e) => {
// //     e.stopPropagation();
// //     videoRef.current.muted = !isMuted;
// //     setIsMuted(!isMuted);
// //   };

// //   return (
// //     <section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden bg-white group">
      
// //       {/* 🎞️ High-Clarity Video (No Dark Filters) */}
// //       <div className="absolute inset-0 z-0">
// //         <video
// //           ref={videoRef}
// //           loop
// //           muted={isMuted}
// //           playsInline
// //           className="w-full h-full object-cover" // Removed contrast/brightness/opacity filters
// //           onClick={togglePlay}
// //         >
// //           <source src={videoUrl} type="video/mp4" />
// //         </video>
        
// //         {/* Very subtle edge vignette just to keep UI readable, but no "black shade" */}
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(255,255,255,0.2)_100%)] pointer-events-none"></div>
// //       </div>

// //       {/* 🎮 Floating Glass Controls */}
// //       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 p-2 backdrop-blur-md bg-black/10 rounded-2xl border border-white/20 transition-all duration-500 hover:bg-black/20">
        
// //         {/* Play/Pause Button */}
// //         <button 
// //           onClick={togglePlay}
// //           className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-black hover:bg-[#0056b3] hover:text-white transition-all shadow-lg"
// //         >
// //           {isPlaying ? (
// //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
// //           ) : (
// //             <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
// //           )}
// //         </button>

// //         {/* Mute/Unmute Button */}
// //         <button 
// //           onClick={toggleMute}
// //           className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/20 text-white hover:bg-white hover:text-black transition-all"
// //         >
// //           {isMuted ? (
// //             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg>
// //           ) : (
// //             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
// //           )}
// //         </button>
// //       </div>

// //       {/* 🏷️ Top Corner Tag (Minimal) */}
// //       <div className="absolute top-10 right-10 z-20 flex items-center gap-3">
// //         <div className="flex flex-col items-end">
// //             <span className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">Bosch // Tech</span>
// //             <span className="text-[10px] font-mono text-black/60">LIVE_PREVIEW_v2</span>
// //         </div>
// //         <div className="w-2 h-2 bg-[#0056b3] rounded-full animate-pulse"></div>
// //       </div>

// //       {/* 🔉 Interaction Hint - Only shows on hover */}
// //       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //         {!isPlaying && (
// //           <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl animate-bounce">
// //             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Click to Resume</span>
// //           </div>
// //         )}
// //       </div>

// //     </section>
// //   );
// // }

// import React, { useEffect, useRef, useState } from 'react';

// export default function TechVideoShowcase() {
//   const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     const options = { threshold: 0.6 }; 
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play().catch(() => {});
//           setIsPlaying(true);
//         } else {
//           videoRef.current.pause();
//           setIsPlaying(false);
//         }
//       });
//     }, options);

//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const togglePlay = () => {
//     isPlaying ? videoRef.current.pause() : videoRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <section className="relative py-12 md:py-24 bg-[#f8f9fa] overflow-hidden">
      
//       {/* 🛠️ The Layout Frame */}
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
//         {/* Top Header for Video Section */}
//         <div className="flex justify-between items-end mb-8">
//           <div className="space-y-2">
//             <h2 className="text-[#0056b3] font-bold text-[10px] uppercase tracking-[0.5em]">Vision_01</h2>
//             <h3 className="text-3xl md:text-5xl font-serif italic text-black leading-none">Engineering <span className="not-italic font-bold">Unveiled</span></h3>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
//               Source: Cloudinary_Internal<br/>
//               Codec: H.264_High_Profile
//             </p>
//           </div>
//         </div>

//         {/* 🎞️ The Main Video Container */}
//         <div className="relative aspect-video w-full bg-white rounded-sm shadow-2xl overflow-hidden border border-gray-100 group">
          
//           <video
//             ref={videoRef}
//             loop
//             muted={isMuted}
//             playsInline
//             className="w-full h-full object-cover"
//             onClick={togglePlay}
//           >
//             <source src={videoUrl} type="video/mp4" />
//           </video>

//           {/* 🎮 Hover Controls Layout */}
//           <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 pointer-events-none">
//             {!isPlaying && (
//               <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl">
//                 <svg className="w-8 h-8 text-[#0056b3] translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
//               </div>
//             )}
//           </div>

//           {/* 🔘 Bottom Control Bar */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-30 flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-white/80 to-transparent">
            
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={togglePlay}
//                 className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#0056b3] transition-all"
//               >
//                 {isPlaying ? (
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
//                 ) : (
//                   <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
//                 )}
//               </button>
              
//               <button 
//                 onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
//                 className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-white transition-all shadow-sm"
//               >
//                 {isMuted ? (
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg>
//                 ) : (
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
//                 )}
//               </button>
//             </div>

//             <div className="flex items-center gap-6">
//                <span className="text-[10px] font-mono text-black/40 uppercase hidden sm:block">Bitrate: 4500kbps</span>
//                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
//                <span className="text-[10px] font-bold tracking-[0.2em] text-black">LIVE_STREAM</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Technical Footer */}
//         <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-gray-100 pt-8">
//            <p className="text-gray-400 text-xs font-light max-w-md">
//              Experience the microscopic precision of Bosch brushless motors and sensor-driven resource management.
//            </p>
//            <div className="flex gap-4">
//               <div className="px-3 py-1 bg-white border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-[#0056b3]">4K Ready</div>
//               <div className="px-3 py-1 bg-white border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-black">Dolby Atmos</div>
//            </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';

export default function TechVideoShowcase() {
  const videoUrl = "https://res.cloudinary.com/dsa0chszi/video/upload/v1774335580/TechnoloigsPromo_zjfwei.mp4";
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const options = { 
      threshold: 0.4 // Starts playing when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play video when entering section
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.then(() => setIsPlaying(true)).catch(() => {
              // Handle cases where browser blocks autoplay
              setIsPlaying(false);
            });
          }
        } else {
          // Pause video when leaving section to save battery/performance
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    }, options);

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-12 md:py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#0056b3]"></span>
              <h2 className="text-[#0056b3] font-bold text-[9px] md:text-[11px] uppercase tracking-[0.4em]">
                Live_Feed.v2
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-serif italic text-black leading-tight">
              Engineering <span className="not-italic font-bold">Unveiled</span>
            </h3>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
              Source: Cloudinary_Internal
            </p>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold text-black uppercase tracking-widest">Active_Stream</span>
            </div>
          </div>
        </div>

        {/* --- Video Player Interface --- */}
        <div className="relative group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-xl md:rounded-3xl overflow-hidden border border-white">
          
          {/* Main Video Wrapper */}
          <div className="aspect-video bg-gray-100 relative">
            <video
              ref={videoRef}
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>

            {/* Central Play Overlay (Only visible when paused) */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[2px] cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#0056b3] transition-transform hover:scale-110">
                  <svg className="w-8 h-8 md:w-10 md:h-10 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            )}
          </div>

          {/* --- Bottom Interactive Controller --- */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 z-30 flex justify-between items-center transition-all duration-500 bg-gradient-to-t from-white via-white/40 to-transparent translate-y-2 group-hover:translate-y-0">
            
            <div className="flex items-center gap-3 md:gap-6">
              {/* Play/Pause Toggle */}
              <button 
                onClick={togglePlay}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#0056b3] transition-all"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 md:w-5 md:h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              
              {/* Mute/Unmute Toggle */}
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 border border-gray-100 text-black flex items-center justify-center hover:bg-white transition-all shadow-sm"
              >
                {isMuted ? (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg>
                ) : (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
                )}
              </button>
            </div>

            <div className="flex flex-col items-end">
               <span className="text-[8px] md:text-[10px] font-mono text-black/40 uppercase hidden sm:block">Bitrate: 4500kbps</span>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
                 <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-black uppercase">Ultra_HD 4K</span>
               </div>
            </div>
          </div>
        </div>

        {/* --- Technical Specification Footer --- */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-gray-100 pt-8 md:pt-12">
           <p className="text-gray-400 text-sm md:text-base font-light max-w-xl leading-relaxed">
             A visual exploration into the microscopic precision of <span className="text-black font-semibold">Bosch Engineering</span>—from frictionless motors to intelligent resource sensors.
           </p>
           <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white border border-gray-200 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#0056b3]">H.265 Encoded</span>
              <span className="px-4 py-2 bg-white border border-gray-200 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black">Precision_Audio</span>
           </div>
        </div>

      </div>
    </section>
  );
}