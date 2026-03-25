// import React from 'react';
// import TechCard from './TechCard';

// const technologies = [
//   {
//     id: "01",
//     title: "EcoSilence Drive™",
//     tagline: "The Sound of Silence",
//     desc: "Our patented brushless motor technology eliminated the brushes that cause friction and noise.",
//     image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "02",
//     title: "ActiveWater Plus",
//     tagline: "Precision Resource Management",
//     desc: "Integrated sensors adjust the water consumption to the fabric type and the load.",
//     image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200",
//   },
//   // ... Add 03 and 04 from your old code here
// ];

// export default function TechList() {
//   return (
//     <section className="bg-white text-brand-dark py-40">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//         {technologies.map((tech, index) => (
//           <TechCard key={tech.id} tech={tech} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import TechCard from './TechCard';

// const technologies = [
//   {
//     id: "01",
//     title: "EcoSilence Drive™",
//     tagline: "The Sound of Silence",
//     desc: "Our patented brushless motor technology eliminates the friction and noise found in conventional motors. Experience a level of quiet that allows for laundry at any hour without disruption.",
//     video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421993/Bosch_EcoSilence_Drive_Explained_1080P_HD_ggvaoh.mp4",
//   },
//   {
//     id: "02",
//     title: "ActiveWater Plus",
//     tagline: "Precision Resource Management",
//     desc: "Integrated sensors adjust water consumption to the exact fabric type and load size. Uncompromising cleaning results meet ultimate sustainability, saving every drop where it counts.",
//     video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421994/Bosch_Series_8_Washer___Active_Water_Plus_1080P_HD_c6jwpk.mp4",
//   },
//   {
//     id: "03",
//     title: "i-DOS System",
//     tagline: "Automatic Dosing Precision",
//     desc: "Smarter sensors determine the precise amount of detergent and softener needed down to the milliliter. Protect your clothes and the environment by avoiding over-dosing.",
//     video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774422001/Spot-on_detergent_dosing_with_Bosch_i-DOS_1080P_HD_l2sjrb.mp4",
//   },
//   {
//     id: "04",
//     title: "Home Connect",
//     tagline: "Seamless Connectivity",
//     desc: "Control and monitor your appliances from anywhere. Receive status updates, remote diagnostics, and personalized settings directly on your smartphone.",
//     video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421994/Home_Connect_on_Bosch_Dishwashers_1080P_HD_pamsxr.mp4",
//   }
// ];
// export default function TechList() {
//   return (
//     <section className="relative bg-white text-[#1a1a1a] py-24 md:py-12 overflow-hidden">
      
//       {/* 📏 Vertical Timeline Line (Center Line on Desktop) */}
//       <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden lg:block -translate-x-1/2 z-0"></div>

//       {/* 🧭 Section Header (Subtle) */}
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 md:mb-32">
//         <div className="flex flex-col items-center lg:items-start space-y-4">
//           <div className="flex items-center gap-4">
//             <span className="text-[#0056b3] font-bold text-[10px] uppercase tracking-[0.5em]">The Catalog</span>
//             <div className="w-12 h-[1px] bg-gray-200"></div>
//           </div>
//           <h2 className="text-3xl md:text-5xl font-serif italic text-center lg:text-left">
//             Core <span className="not-italic font-bold">Innovation</span> Pillars
//           </h2>
//         </div>
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
//         <div className="space-y-32 md:space-y-60">
//           {technologies.map((tech, index) => (
//             <div key={tech.id} className="relative">
//               {/* Dot on the timeline for desktop */}
//               <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-white border-2 border-[#0056b3] rounded-full z-20 hidden lg:block"></div>
              
//               <TechCard tech={tech} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🏁 Bottom Transition Accent */}
//       <div className="mt-32 md:mt-60 flex justify-center">
//         <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent"></div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import TechCard from './TechCard';

const technologies = [
  {
    id: "01",
    title: "EcoSilence Drive™",
    tagline: "Ultra Quiet",
    desc: "Our patented brushless motor technology eliminates friction and mechanical noise. Clean your laundry at any hour without a sound.",
    video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421993/Bosch_EcoSilence_Drive_Explained_1080P_HD_ggvaoh.mp4",
  },
  {
    id: "02",
    title: "ActiveWater Plus",
    tagline: "Resource Mastery",
    desc: "Automated precision that saves every drop. Sensors analyze fabric type and weight to deliver the exact water required.",
    video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421994/Bosch_Series_8_Washer___Active_Water_Plus_1080P_HD_c6jwpk.mp4",
  },
  {
    id: "03",
    title: "i-DOS System",
    tagline: "Smart Dosing",
    desc: "Intelligent detergent management down to the milliliter. Protect your fabrics and the planet with perfectly calculated dosing.",
    video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774422001/Spot-on_detergent_dosing_with_Bosch_i-DOS_1080P_HD_l2sjrb.mp4",
  },
  {
    id: "04",
    title: "Home Connect",
    tagline: "Smart EcoSystem",
    desc: "The future of domestic convenience. Monitor, control, and optimize your appliances from anywhere in the world.",
    video: "https://res.cloudinary.com/dsa0chszi/video/upload/v1774421994/Home_Connect_on_Bosch_Dishwashers_1080P_HD_pamsxr.mp4",
  }
];

export default function TechList() {
  return (
    // <section className="relative bg-[#ffffff] text-[#1a1a1a] py-24 md:py-40 overflow-hidden">
    <section className="relative bg-[#ffffff] text-[#1a1a1a] py-24 md:py-24 pb-0 md:pb-10 overflow-hidden">
      
      {/* 📏 Background Grid Pattern (Subtle Engineering Feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0056b3 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 📐 Center Timeline with Gradient Fade */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 🧭 Header Architecture */}
        <div className="mb-20 md:mb-20 flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-6 mb-6">
            <div className="w-12 h-px bg-[#0056b3]"></div>
            <span className="text-[#0056b3] font-black text-[11px] uppercase tracking-[0.8em]">Bosch Engineering</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter mb-8">
            The Science of <br />
            <span className="not-italic font-black text-[#000d1a] uppercase">Excellence.</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Where German engineering meets the art of living. Explore the four pillars of innovation that make every Bosch appliance a masterpiece of precision.
          </p>
        </div>

        {/* 🛠️ Technologies list */}
        <div className="">
          {technologies.map((tech, index) => (
            <div key={tech.id} className="relative group">
              {/* Timeline Terminal Point */}
              <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-white border border-gray-200 rounded-full z-20 flex items-center justify-center transition-all duration-500 group-hover:border-[#0056b3] group-hover:scale-125">
                 <div className="w-1.5 h-1.5 bg-gray-200 group-hover:bg-[#0056b3] rounded-full transition-colors"></div>
              </div>
              
              <TechCard tech={tech} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* 🏁 Footer Accent */}
      <div className="mt-10 flex flex-col items-center opacity-20">
        <span className="text-[10px] uppercase tracking-[1em] mb-4">End of Innovation Catalog</span>
        <div className="w-px h-32 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </div>
    </section>
  );
}