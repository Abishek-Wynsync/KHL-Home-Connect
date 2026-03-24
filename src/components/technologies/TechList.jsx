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


import React from 'react';
import TechCard from './TechCard';

const technologies = [
  {
    id: "01",
    title: "EcoSilence Drive™",
    tagline: "The Sound of Silence",
    desc: "Our patented brushless motor technology eliminates the friction and noise found in conventional motors. Experience a level of quiet that allows for laundry at any hour without disruption.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "ActiveWater Plus",
    tagline: "Precision Resource Management",
    desc: "Integrated sensors adjust water consumption to the exact fabric type and load size. Uncompromising cleaning results meet ultimate sustainability, saving every drop where it counts.",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "i-DOS System",
    tagline: "Automatic Dosing Precision",
    desc: "Smarter sensors determine the precise amount of detergent and softener needed down to the milliliter. Protect your clothes and the environment by avoiding over-dosing.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    title: "Home Connect",
    tagline: "Seamless Connectivity",
    desc: "Control and monitor your appliances from anywhere. Receive status updates, remote diagnostics, and personalized settings directly on your smartphone.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function TechList() {
  return (
    <section className="relative bg-white text-[#1a1a1a] py-24 md:py-12 overflow-hidden">
      
      {/* 📏 Vertical Timeline Line (Center Line on Desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden lg:block -translate-x-1/2 z-0"></div>

      {/* 🧭 Section Header (Subtle) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 md:mb-32">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[#0056b3] font-bold text-[10px] uppercase tracking-[0.5em]">The Catalog</span>
            <div className="w-12 h-[1px] bg-gray-200"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic text-center lg:text-left">
            Core <span className="not-italic font-bold">Innovation</span> Pillars
          </h2>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="space-y-32 md:space-y-60">
          {technologies.map((tech, index) => (
            <div key={tech.id} className="relative">
              {/* Dot on the timeline for desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 bg-white border-2 border-[#0056b3] rounded-full z-20 hidden lg:block"></div>
              
              <TechCard tech={tech} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* 🏁 Bottom Transition Accent */}
      <div className="mt-32 md:mt-60 flex justify-center">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent"></div>
      </div>
    </section>
  );
}