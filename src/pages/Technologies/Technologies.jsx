// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Technologies() {
//   const technologies = [
//     {
//       id: "01",
//       title: "EcoSilence Drive™",
//       tagline: "The Sound of Silence",
//       desc: "Our patented brushless motor technology eliminated the brushes that cause friction and noise. The result? A motor that is quieter, faster, and more energy-efficient than ever before.",
//       image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
//       accent: "border-blue-500"
//     },
//     {
//       id: "02",
//       title: "ActiveWater Plus",
//       tagline: "Precision Resource Management",
//       desc: "Integrated sensors adjust the water consumption to the fabric type and the load. It’s not just about cleaning; it’s about preserving our most precious resource with milliliter precision.",
//       image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200",
//       accent: "border-cyan-400"
//     },
//     {
//       id: "03",
//       title: "VitaFresh Pro",
//       tagline: "Freshness Redefined",
//       desc: "Climate-controlled compartments that maintain the perfect balance of 0°C temperature and optimized humidity. Your ingredients stay fresh and nutrient-rich for up to three times longer.",
//       image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=1200",
//       accent: "border-green-400"
//     },
//     {
//       id: "04",
//       title: "Home Connect",
//       tagline: "Seamless Intelligence",
//       desc: "Your appliances, your lifestyle, all connected. Control your home from your smartphone or voice assistant. Smarter living starts with a simple connection.",
//       image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
//       accent: "border-brand-silver"
//     },
//   ];

//   return (
//     <div className="bg-[#0a0a0a]  pt-[80px] md:pt-[100px] overflow-x-hidden text-white overflow-x-hidden"> 
   
      
//       {/* 🌌 IMMERSIVE HERO SECTION */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
//           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-silver/10 rounded-full blur-[120px]"></div>
//         </div>

//         <div className="relative z-10 text-center space-y-8 px-6">
//           <div className="inline-block px-6 py-2 border border-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.8em] text-brand-silver animate-[fadeInDown_1s_ease-out]">
//             Innovation by Bosch
//           </div>
//           <h1 className="text-7xl lg:text-[10rem] font-serif italic leading-none tracking-tighter animate-[scaleIn_1.5s_ease-out]">
//             The Future <br />
//             <span className="not-italic font-bold bg-gradient-to-r from-white via-brand-silver to-gray-500 bg-clip-text text-transparent">
//               In Motion
//             </span>
//           </h1>
//           <p className="text-gray-400 font-light max-w-xl mx-auto text-lg leading-relaxed animate-[fadeInUp_2s_ease-out]">
//             Experience the German engineering that transforms everyday tasks into effortless experiences.
//           </p>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
//           <div className="w-[1px] h-20 bg-gradient-to-b from-brand-blue to-transparent"></div>
//         </div>
//       </section>

//       {/* 💎 PREMIUM SHOWCASE LIST */}
//       <section className="bg-white text-brand-dark py-40">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//           {technologies.map((tech, index) => (
//             <div 
//               key={tech.id} 
//               className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-40 mb-60 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
//             >
//               {/* Image with Parallax Effect Container */}
//               <div className="w-full lg:w-1/2 relative group">
//                 <div className="absolute -inset-4 border border-brand-blue/5 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
//                 <div className="relative z-10 aspect-[4/5] overflow-hidden bg-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
//                   <img 
//                     src={tech.image} 
//                     alt={tech.title}
//                     className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
//                   />
//                   {/* Glass Overlay on Image */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-white/10 border-t border-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                      <p className="text-white text-xs uppercase tracking-widest font-bold">Live Demonstration Available</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="w-full lg:w-1/2 space-y-10">
//                 <div className="space-y-4">
//                   <span className="text-6xl font-serif italic text-brand-blue/10 block leading-none">{tech.id}</span>
//                   <p className="text-brand-blue font-bold text-[11px] uppercase tracking-[0.4em]">{tech.tagline}</p>
//                   <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tight">{tech.title}</h2>
//                 </div>
                
//                 <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
//                   {tech.desc}
//                 </p>

//                 <div className="pt-6">
//                   <Link 
//                     to="/contact-visit" 
//                     className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black"
//                   >
//                     Experience Live 
//                     <span className="w-12 h-[1px] bg-brand-dark group-hover:w-24 group-hover:bg-brand-blue transition-all duration-500"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🚀 CTA - HIGH CONTRAST EXIT */}
//       <section className="bg-brand-dark py-40 relative">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
//           <div className="max-w-3xl mx-auto space-y-12">
//             <h3 className="text-5xl lg:text-8xl font-serif italic text-white leading-tight">
//               Innovation is <br />
//               <span className="text-brand-silver">Best Experienced Live.</span>
//             </h3>
//             <p className="text-gray-400 text-xl font-light">
//               Visit our flagship Experience Center in Velachery to see these technologies 
//               powering a modern home in real-time.
//             </p>
//             <div className="pt-8">
//               <Link 
//                 to="/contact-visit" 
//                 className="inline-block px-16 py-6 bg-brand-blue text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-2xl"
//               >
//                 Book a Store Tour
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Luxury Animations */}
//       <style jsx global>{`
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(1.1); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }


// import TechHero from "../../components/technologies/TechHero";
// import TechList from "../../components/technologies/TechList";
// import TechList from "../../components/technologies/TechCard";
// import TechCTA from "../../components/technologies/TechCTA";

// export default function Technologies() {
//   return (
//     <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
//       <TechHero />
//       <TechList />
//       <TechCard />
//       <TechCTA />
//     </div>
//   );
// }
import TechHero from "../../components/technologies/TechHero";
import TechStats from "../../components/technologies/TechStats"; // New
import TechList from "../../components/technologies/TechList";
import TechVideoShowcase from "../../components/technologies/TechVideoShowcase"; // New
import TechAppGrid from "../../components/technologies/TechAppGrid"; // New
import TechCTA from "../../components/technologies/TechCTA";

export default function Technologies() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <TechHero />
      <TechStats />
      <TechList />
      <TechVideoShowcase />
      <TechAppGrid />
      <TechCTA />
      {/* ... styles */}
      <style jsx global>{`
        @keyframes scaleIn { from { opacity: 0; transform: scale(1.1); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}