// import React from 'react';

// export default function SupportTestimonials() {
//   return (
//     <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
//       <div className="text-center mb-20">
//         <h2 className="text-3xl font-serif italic text-brand-dark">Customer Reflections</h2>
//       </div>
//       <div className="grid md:grid-cols-2 gap-12">
//         {[
//           "Amazing showroom experience. The live demo helped us choose the perfect appliance for our new kitchen.",
//           "Excellent support and professional guidance. The installation team was very precise and helpful."
//         ].map((text, i) => (
//           <div key={i} className="p-12 border-l-4 border-brand-blue bg-gray-50 italic text-gray-600 text-lg relative">
//             <span className="text-8xl absolute top-0 left-4 opacity-5 font-serif">“</span>
//             “{text}”
//             <h4 className="mt-6 not-italic font-bold text-brand-blue text-[10px] uppercase tracking-widest">– Verified Customer</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from 'react';

// export default function SupportTestimonials() {
//   const reviews = [
//     {
//       text: "Amazing showroom experience. The live demo helped us choose the perfect appliance for our new kitchen.",
//       author: "Verified Customer",
//       location: "Adyar, Chennai"
//     },
//     {
//       text: "Excellent support and professional guidance. The installation team was very precise and helpful.",
//       author: "Verified Customer",
//       location: "Velachery, Chennai"
//     }
//   ];

//   return (
//     <section className="bg-white py-32 relative overflow-hidden">
//       {/* Decorative background element */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
//         <div className="text-center mb-24 reveal-text">
//           <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-blue mb-4">
//             Voice of Excellence
//           </h2>
//           <h3 className="text-5xl lg:text-6xl font-serif italic shine-navy-text">
//             Customer Reflections.
//           </h3>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
//           {reviews.map((item, i) => (
//             <div 
//               key={i} 
//               className="group relative p-12 lg:p-16 bg-white border border-brand-silver/10 hover:border-brand-blue/20 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,61,124,0.05)]"
//               style={{ animationDelay: `${i * 0.2}s` }}
//             >
//               {/* Oversized Quote Icon */}
//               <span className="text-[12rem] absolute -top-10 -left-2 opacity-[0.03] font-serif pointer-events-none group-hover:opacity-[0.07] group-hover:text-brand-blue transition-all duration-700">
//                 “
//               </span>

//               <div className="relative z-10">
//                 <p className="text-xl lg:text-2xl font-serif italic text-gray-700 leading-relaxed mb-10">
//                   “{item.text}”
//                 </p>
                
//                 <div className="flex items-center gap-4">
//                   {/* Small Blue Divider */}
//                   <div className="w-8 h-px bg-brand-blue group-hover:w-12 transition-all duration-700"></div>
                  
//                   <div>
//                     <h4 className="font-bold text-brand-dark text-[11px] uppercase tracking-[0.2em]">
//                       {item.author}
//                     </h4>
//                     <p className="text-[9px] text-brand-blue uppercase tracking-widest mt-1 opacity-60">
//                       {item.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Corner accent */}
//               <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-r-[15px] border-t-transparent border-r-brand-blue/10 group-hover:border-r-brand-blue/30 transition-all"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function SupportTestimonials() {
  const reviews = [
    {
      text: "Amazing showroom experience. The live demo helped us choose the perfect appliance for our new kitchen.",
      author: "Verified Customer",
      location: "Adyar, Chennai"
    },
    {
      text: "Excellent support and professional guidance. The installation team was very precise and helpful.",
      author: "Verified Customer",
      location: "Velachery, Chennai"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background element - hidden on mobile to prevent overflow issues */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-brand-blue/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal-text">
          <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold text-brand-blue mb-4">
            Voice of Excellence
          </h2>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic shine-navy-text leading-tight px-4">
            Customer Reflections.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          {reviews.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 md:p-12 lg:p-16 bg-white border border-brand-silver/10 hover:border-brand-blue/20 transition-all duration-700 md:hover:shadow-[0_20px_50px_rgba(0,61,124,0.05)]"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Responsive Oversized Quote Icon */}
              <span className="text-8xl md:text-[12rem] absolute -top-4 md:-top-10 -left-1 md:-left-2 opacity-[0.03] font-serif pointer-events-none group-hover:opacity-[0.07] group-hover:text-brand-blue transition-all duration-700">
                “
              </span>

              <div className="relative z-10">
                <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-gray-700 leading-relaxed mb-8 md:mb-10">
                  “{item.text}”
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Small Blue Divider */}
                  <div className="w-6 md:w-8 h-px bg-brand-blue group-hover:w-12 transition-all duration-700"></div>
                  
                  <div>
                    <h4 className="font-bold text-brand-dark text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
                      {item.author}
                    </h4>
                    <p className="text-[8px] md:text-[9px] text-brand-blue uppercase tracking-widest mt-1 opacity-60">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner accent - slightly larger on mobile for visibility */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] md:border-t-[15px] border-r-[12px] md:border-r-[15px] border-t-transparent border-r-brand-blue/10 group-hover:border-r-brand-blue/30 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}