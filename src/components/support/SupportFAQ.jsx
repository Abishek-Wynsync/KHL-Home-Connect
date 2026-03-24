// import React, { useState } from 'react';

// export default function SupportFAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How do I book a live product demonstration?",
//       answer: "You can book a demo by clicking the 'Book a Demo' button on our website or by calling our Velachery store directly. We recommend booking 24 hours in advance for the best experience."
//     },
//     {
//       question: "What is the typical installation timeline?",
//       answer: "Standard installations are usually completed within 24-48 hours of product delivery. For built-in appliances, we coordinate with your kitchen planners for a seamless fit."
//     },
//     {
//       question: "Do you provide genuine Bosch spare parts?",
//       answer: "Yes, as an authorized dealer, we only supply 100% genuine Bosch spare parts and accessories to ensure the longevity and performance of your appliances."
//     },
//     {
//       question: "Can I upgrade my warranty after purchase?",
//       answer: "Absolutely. We offer extended warranty packages through Bosch's official service programs. You can discuss these options with our consultants during or after your purchase."
//     }
//   ];

//   return (
//     <section className="bg-brand-bg py-24 border-y border-brand-silver/10">
//       <div className="max-w-4xl mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-4">Common Inquiries</h2>
//           <h3 className="text-4xl font-serif italic text-brand-dark">Frequently Asked Questions</h3>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, i) => (
//             <div 
//               key={i} 
//               className={`border-b border-brand-silver/20 transition-all duration-500 ${openIndex === i ? 'pb-8' : 'pb-4'}`}
//             >
//               <button 
//                 onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
//                 className="w-full flex justify-between items-center py-4 text-left group"
//               >
//                 <span className={`text-lg font-bold uppercase tracking-tighter transition-colors duration-300 ${openIndex === i ? 'text-brand-blue' : 'text-brand-dark group-hover:text-brand-blue'}`}>
//                   {faq.question}
//                 </span>
//                 <span className={`text-2xl transition-transform duration-500 ${openIndex === i ? 'rotate-45 text-brand-blue' : 'text-brand-silver'}`}>
//                   +
//                 </span>
//               </button>
              
//               <div 
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
//               >
//                 <p className="text-gray-500 font-light leading-relaxed pr-12">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }4

// import React, { useState } from 'react';

// export default function SupportFAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How do I book a live product demonstration?",
//       answer: "Experience Bosch technology firsthand. You can book a demo via our portal or visit our Velachery 100ft Road center. We recommend 24-hour prior booking for personalized attention."
//     },
//     {
//       question: "What is the typical installation timeline?",
//       answer: "Standard installations are prioritized and typically completed within 24-48 hours. For built-in luxury suites, our specialists coordinate directly with your site engineers."
//     },
//     {
//       question: "Do you provide genuine Bosch spare parts?",
//       answer: "Exclusively. As an authorized destination, every component, filter, and accessory is 100% genuine Bosch German engineering, ensuring peak performance."
//     },
//     {
//       question: "Can I upgrade my warranty after purchase?",
//       answer: "Yes. We offer seamless warranty extension programs. Our consultants can transition your standard coverage into a comprehensive multi-year protection plan."
//     }
//   ];

//   return (
//     <section className="bg-white py-24 overflow-hidden">
//       <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
//         {/* Header with Shine Navy Effect */}
//         <div className="text-center mb-24 reveal-text">
//           <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-blue mb-4">
//             Clarity & Support
//           </h2>
//           <h3 className="text-5xl lg:text-6xl font-serif italic shine-navy-text leading-tight">
//             Frequently Asked <br /> Questions.
//           </h3>
//         </div>

//         <div className="grid gap-6">
//           {faqs.map((faq, i) => (
//             <div 
//               key={i} 
//               className={`group transition-all duration-700 ease-in-out border border-transparent ${
//                 openIndex === i 
//                 ? 'bg-brand-blue/[0.03] border-brand-blue/10 shadow-xl shadow-brand-blue/5' 
//                 : 'hover:border-brand-silver/30'
//               }`}
//               style={{ animationDelay: `${i * 0.1}s` }}
//             >
//               <button 
//                 onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
//                 className="w-full flex justify-between items-center p-8 text-left"
//               >
//                 <div className="flex items-center gap-6">
//                   <span className={`text-[10px] font-bold transition-colors duration-500 ${
//                     openIndex === i ? 'text-brand-blue' : 'text-brand-silver'
//                   }`}>
//                     0{i + 1}
//                   </span>
//                   <span className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-all duration-500 ${
//                     openIndex === i ? 'text-brand-blue translate-x-2' : 'text-brand-dark group-hover:text-brand-blue'
//                   }`}>
//                     {faq.question}
//                   </span>
//                 </div>
                
//                 {/* Custom Animated Icon */}
//                 <div className="relative w-6 h-6 flex items-center justify-center">
//                   <div className={`absolute w-full h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}></div>
//                   <div className={`absolute w-full h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : 'rotate-90'}`}></div>
//                 </div>
//               </button>
              
//               <div 
//                 className={`transition-all duration-700 ease-in-out overflow-hidden ${
//                   openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-8 pb-10 ml-12">
//                   <div className="w-12 h-[1px] bg-brand-blue/30 mb-6"></div>
//                   <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-lg italic font-serif">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Visual Decoration */}
//         <div className="mt-20 flex justify-center opacity-20">
//             <div className="w-px h-20 bg-gradient-to-b from-brand-blue to-transparent"></div>
//         </div>
//       </div>
//     </section>
//   );
// }   


// import React, { useState } from 'react';

// export default function SupportFAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How do I book a live product demonstration?",
//       answer: "Experience Bosch technology firsthand. You can book a demo via our portal or visit our Velachery 100ft Road center. We recommend 24-hour prior booking for personalized attention."
//     },
//     {
//       question: "What is the typical installation timeline?",
//       answer: "Standard installations are prioritized and typically completed within 24-48 hours. For built-in luxury suites, our specialists coordinate directly with your site engineers."
//     },
//     {
//       question: "Do you provide genuine Bosch spare parts?",
//       answer: "Exclusively. As an authorized destination, every component, filter, and accessory is 100% genuine Bosch German engineering, ensuring peak performance."
//     },
//     {
//       question: "Can I upgrade my warranty after purchase?",
//       answer: "Yes. We offer seamless warranty extension programs. Our consultants can transition your standard coverage into a comprehensive multi-year protection plan."
//     }
//   ];

//   return (
//     /* Light Blue Shade Background */
//     <section className="bg-brand-blue/[0.04] py-24 relative overflow-hidden">
      
//       {/* Decorative Gradient Line (Top) */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
      
//       <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
//         {/* Header Section */}
//         <div className="text-center mb-24 reveal-text">
//           <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-blue mb-4">
//             Clarity & Support
//           </h2>
//           <h3 className="text-5xl lg:text-6xl font-serif italic shine-navy-text leading-tight">
//             Frequently Asked <br /> Questions.
//           </h3>
//         </div>

//         {/* FAQ Grid */}
//         <div className="grid gap-4">
//           {faqs.map((faq, i) => (
//             <div 
//               key={i} 
//               className={`group transition-all duration-700 ease-in-out border ${
//                 openIndex === i 
//                 ? 'bg-white shadow-2xl shadow-brand-blue/10 border-brand-blue/20 translate-y-[-4px]' 
//                 : 'bg-white/40 backdrop-blur-sm border-white/60 hover:border-brand-blue/20 hover:bg-white/60'
//               }`}
//               style={{ animationDelay: `${i * 0.1}s` }}
//             >
//               <button 
//                 onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
//                 className="w-full flex justify-between items-center p-8 text-left"
//               >
//                 <div className="flex items-center gap-6">
//                   <span className={`text-[10px] font-bold transition-all duration-500 ${
//                     openIndex === i ? 'text-brand-blue scale-125' : 'text-brand-silver'
//                   }`}>
//                     0{i + 1}
//                   </span>
//                   <span className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-all duration-500 ${
//                     openIndex === i ? 'text-brand-blue translate-x-2' : 'text-brand-dark group-hover:text-brand-blue'
//                   }`}>
//                     {faq.question}
//                   </span>
//                 </div>
                
//                 {/* Custom Animated Icon */}
//                 <div className="relative w-6 h-6 flex items-center justify-center">
//                   <div className={`absolute w-4 h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}></div>
//                   <div className={`absolute w-4 h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : 'rotate-90'}`}></div>
//                 </div>
//               </button>
              
//               <div 
//                 className={`transition-all duration-700 ease-in-out overflow-hidden ${
//                   openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-8 pb-10 ml-12">
//                   <div className="w-12 h-[2px] bg-brand-blue/30 mb-6"></div>
//                   <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-lg italic font-serif">
//                     {faq.answer}
//                   </p>
                  
//                   {/* Subtle Call to Action inside FAQ */}
//                   <button className="mt-6 text-[9px] uppercase tracking-widest font-bold text-brand-blue border-b border-brand-blue/20 hover:border-brand-blue transition-all">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Visual Decoration (Bottom) */}
//         <div className="mt-24 flex flex-col items-center gap-4 opacity-30">
//             <p className="text-[9px] uppercase tracking-[0.4em] text-brand-blue font-bold">End of Inquiries</p>
//             <div className="w-px h-16 bg-gradient-to-b from-brand-blue to-transparent"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a live product demonstration?",
      answer: "Experience Bosch technology firsthand. You can book a demo via our portal or visit our Velachery 100ft Road center. We recommend 24-hour prior booking for personalized attention."
    },
    {
      question: "What is the typical installation timeline?",
      answer: "Standard installations are prioritized and typically completed within 24-48 hours. For built-in luxury suites, our specialists coordinate directly with your site engineers."
    },
    {
      question: "Do you provide genuine Bosch spare parts?",
      answer: "Exclusively. As an authorized destination, every component, filter, and accessory is 100% genuine Bosch German engineering, ensuring peak performance."
    },
    {
      question: "Can I upgrade my warranty after purchase?",
      answer: "Yes. We offer seamless warranty extension programs. Our consultants can transition your standard coverage into a comprehensive multi-year protection plan."
    }
  ];

  return (
    /* Light Blue Shade Background */
    <section className="bg-brand-blue/[0.04] py-24 relative overflow-hidden">
      
      {/* Decorative Gradient Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 reveal-text">
          <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-blue mb-4">
            Clarity & Support
          </h2>
          <h3 className="text-5xl lg:text-6xl font-serif italic shine-navy-text leading-tight">
            Frequently Asked <br /> Questions.
          </h3>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-700 ease-in-out border ${
                openIndex === i 
                ? 'bg-white shadow-2xl shadow-brand-blue/10 border-brand-blue/20 translate-y-[-4px]' 
                : 'bg-white/40 backdrop-blur-sm border-white/60 hover:border-brand-blue/20 hover:bg-white/60'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] font-bold transition-all duration-500 ${
                    openIndex === i ? 'text-brand-blue scale-125' : 'text-brand-silver'
                  }`}>
                    0{i + 1}
                  </span>
                  <span className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-all duration-500 ${
                    openIndex === i ? 'text-brand-blue translate-x-2' : 'text-brand-dark group-hover:text-brand-blue'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                {/* Custom Animated Icon */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className={`absolute w-4 h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}></div>
                  <div className={`absolute w-4 h-[1px] bg-brand-blue transition-transform duration-500 ${openIndex === i ? 'rotate-180' : 'rotate-90'}`}></div>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-10 ml-12">
                  <div className="w-12 h-[2px] bg-brand-blue/30 mb-6"></div>
                  <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-lg italic font-serif">
                    {faq.answer}
                  </p>
                  
                  {/* Subtle Call to Action inside FAQ */}
                  <button className="mt-6 text-[9px] uppercase tracking-widest font-bold text-brand-blue border-b border-brand-blue/20 hover:border-brand-blue transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual Decoration (Bottom) */}
        <div className="mt-14 flex flex-col items-center gap-4 opacity-30">
            <p className="text-[9px] uppercase tracking-[0.4em] text-brand-blue font-bold">End of Inquiries</p>

        </div>
      </div>
    </section>
  );
}