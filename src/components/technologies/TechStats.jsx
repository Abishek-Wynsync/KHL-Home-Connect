// import React from 'react';

// export default function TechStats() {
//   const stats = [
//     { label: "Energy Saved", value: "30%", desc: "with EcoSilence Drive™" },
//     { label: "Water Efficiency", value: "100%", desc: "ActiveWater Plus precision" },
//     { label: "Noise Reduction", value: "-10dB", desc: "Whisper-quiet operation" }
//   ];

//   return (
//     /* COLOUR UPGRADE: 
//        Using 'bg-zinc-100' (a very light, premium grey) 
//        and 'text-brand-dark' for the numbers.
//     */
//     <section className="py-24 bg-[#f8f9fa] border-y border-gray-200 relative overflow-hidden">
      
//       {/* Subtle "Brushed Metal" Texture Overlay */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
//         {stats.map((stat, i) => (
//           <div key={i} className="text-center space-y-4 group">
            
//             {/* Number: Dark Navy/Black for high contrast on Grey */}
//             <p className="text-5xl lg:text-7xl font-bold text-brand-dark group-hover:text-brand-blue transition-all duration-500 tracking-tighter">
//               {stat.value}
//             </p>
            
//             <div className="space-y-1">
//               {/* Label: Blue to tie back into the brand */}
//               <p className="text-brand-blue uppercase tracking-[0.4em] text-[10px] font-black">
//                 {stat.label}
//               </p>
//               {/* Description: Soft grey text */}
//               <p className="text-gray-500 text-sm font-light italic">
//                 {stat.desc}
//               </p>
//             </div>

//             {/* Subtle Divider for Mobile */}
//             <div className="md:hidden w-12 h-px bg-gray-300 mx-auto mt-8"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function TechStats() {
  const stats = [
    { label: "Energy Saved", value: "30%", desc: "via EcoSilence Drive™", width: "w-[30%]" },
    { label: "Water Efficiency", value: "100%", desc: "ActiveWater Plus precision", width: "w-full" },
    { label: "Noise Reduction", value: "-10dB", desc: "Whisper-quiet operation", width: "w-[75%]" }
  ];

  return (
    <section className="relative py-24 md:py-24 bg-[#f8f9fa] border-y border-gray-100 overflow-hidden">
      
      {/* 🔬 Technical Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#0056b3 1px, transparent 1px), linear-gradient(90deg, #0056b3 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Tag */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="flex items-center gap-4 px-4 py-1.5 border border-gray-200 bg-white rounded-full">
            <span className="w-1.5 h-1.5 bg-[#0056b3] rounded-full animate-pulse"></span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-500">Performance Metrics // 2026_Q1</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-20">
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              
              {/* Vertical Metric Line (Desktop Only) */}
              {i !== 0 && <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>}

              <div className="space-y-6">
                {/* Value & Label Section */}
                <div className="space-y-1">
                  <div className="flex items-end justify-between md:justify-start md:gap-4 mb-2">
                    <p className="text-6xl lg:text-8xl font-bold text-[#1a1a1a] tracking-tighter group-hover:text-[#0056b3] transition-colors duration-700">
                      {stat.value}
                    </p>
                    <div className="pb-2 md:pb-4">
                      <p className="text-[#0056b3] uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-black leading-none">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs md:text-sm font-mono tracking-tight opacity-80 uppercase">
                    Ref: {stat.desc}
                  </p>
                </div>

                {/* 📊 Animated Data Bar */}
                <div className="relative w-full h-[3px] bg-gray-200 overflow-hidden">
                   <div className={`absolute top-0 left-0 h-full bg-[#0056b3] transition-all duration-[2s] ease-in-out group-hover:bg-black ${stat.width} origin-left`}></div>
                </div>

                {/* Technical Footnote */}
                <div className="flex justify-between items-center pt-2">
                   <span className="text-[8px] font-mono text-gray-300">ISO_CERTIFIED_9001</span>
                   <span className="text-[8px] font-mono text-gray-300">00{i+1}_METRIC</span>
                </div>
              </div>

              {/* Mobile Separator */}
              {i !== stats.length - 1 && (
                <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}