// import React from 'react';

// export default function SupportServices() {
//   const services = [
//     { title: "Product Consultation", icon: "01", desc: "Get expert advice before making a purchase. We help you choose the right Bosch technology." },
//     { title: "Installation Support", icon: "02", desc: "Hassle-free setup by Bosch-trained professionals ensuring perfect integration." },
//     { title: "Warranty Assistance", icon: "03", desc: "Complete support for official Bosch warranties, protecting your investment." },
//     { title: "After-Sales Excellence", icon: "04", desc: "Reliable maintenance support and quick service response across Chennai." }
//   ];

//   return (
//     <section className="bg-brand-bg py-24 border-y border-brand-silver/10">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20">
//         <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-4">Support Lifecycle</h2>
//         <p className="font-serif italic text-4xl text-brand-dark">Our Service Ecosystem</p>
//       </div>
      
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, i) => (
//           <div key={i} className="bg-white p-10 shadow-sm border border-brand-silver/10 hover:shadow-xl transition-all duration-500 group">
//             <span className="text-brand-blue/20 text-4xl font-serif italic mb-6 block group-hover:text-brand-blue transition-colors">{service.icon}</span>
//             <h4 className="text-lg font-bold text-brand-dark mb-4 tracking-tighter uppercase">{service.title}</h4>
//             <p className="text-gray-500 text-sm font-light leading-relaxed">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }   

// import React from 'react';

// export default function SupportServices() {
//   const services = [
//     { title: "Product Consultation", icon: "01", desc: "Get expert, one-on-one advice before making a purchase. We help you choose the right Bosch technology for your lifestyle." },
//     { title: "Installation Support", icon: "02", desc: "Hassle-free setup by Bosch-trained professionals ensuring your appliances are perfectly integrated into your home." },
//     { title: "Warranty Assistance", icon: "03", desc: "Complete support for all Bosch official warranties, protecting your investment for years to come." },
//     { title: "After-Sales Excellence", icon: "04", desc: "Our relationship doesn't end at delivery. We provide reliable maintenance and quick service response." }
//   ];

//   return (
//     /* Changed to a soft light blue wash with subtle vertical borders */
//     <section className="bg-brand-blue/[0.04] py-24 relative overflow-hidden">
      
//       {/* Subtle Background Decoration */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
      
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24 reveal-text">
//         <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-blue mb-4">Support Lifecycle</h2>
//         <p className="font-serif italic text-5xl lg:text-6xl shine-navy-text">Our Service Ecosystem</p>
//       </div>
      
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, i) => (
//           <div 
//             key={i} 
//             className="group relative bg-white/60 backdrop-blur-sm p-10 border border-white hover:border-brand-blue/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5 overflow-hidden"
//             style={{ animationDelay: `${i * 0.15}s` }}
//           >
//             {/* Animated Background Icon */}
//             <span className="absolute -right-4 -bottom-4 text-9xl font-serif italic text-brand-blue/[0.03] group-hover:text-brand-blue/[0.07] transition-all duration-700 group-hover:scale-110">
//               {service.icon}
//             </span>

//             <div className="relative z-10">
//               <span className="text-brand-blue text-xs font-bold tracking-[0.3em] mb-8 block opacity-50 group-hover:opacity-100 transition-opacity">
//                 PHASE {service.icon}
//               </span>
              
//               <h4 className="text-xl font-bold text-brand-dark mb-5 tracking-tighter uppercase leading-tight">
//                 {service.title}
//               </h4>
              
//               <div className="w-8 h-[2px] bg-brand-blue mb-6 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              
//               <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-700 transition-colors">
//                 {service.desc}
//               </p>
//             </div>

//             {/* Bottom Shine Border */}
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
//           </div>
//         ))}
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
//     </section>
//   );
// }


import React from 'react';

export default function SupportServices() {
  const services = [
    { title: "Product Consultation", icon: "01", desc: "Get expert, one-on-one advice before making a purchase. We help you choose the right Bosch technology for your lifestyle." },
    { title: "Installation Support", icon: "02", desc: "Hassle-free setup by Bosch-trained professionals ensuring your appliances are perfectly integrated into your home." },
    { title: "Warranty Assistance", icon: "03", desc: "Complete support for all Bosch official warranties, protecting your investment for years to come." },
    { title: "After-Sales Excellence", icon: "04", desc: "Our relationship doesn't end at delivery. We provide reliable maintenance and quick service response across Chennai." }
  ];

  return (
    /* Responsive Vertical Padding: py-16 on mobile, py-24/32 on desktop */
    <section className="bg-brand-blue/[0.04] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-16 md:mb-24 reveal-text">
        <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold text-brand-blue mb-4">
          Support Lifecycle
        </h2>
        {/* Fluid Heading: Scales from text-3xl to text-6xl */}
        <p className="font-serif italic text-3xl sm:text-5xl lg:text-6xl shine-navy-text leading-tight px-4">
          Our Service Ecosystem
        </p>
      </div>
      
      {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group relative bg-white/70 backdrop-blur-sm p-8 md:p-10 border border-white hover:border-brand-blue/30 transition-all duration-700 md:hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5 overflow-hidden"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Animated Background Icon - Scaled down for mobile */}
            <span className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 text-7xl md:text-9xl font-serif italic text-brand-blue/[0.03] group-hover:text-brand-blue/[0.07] transition-all duration-700 group-hover:scale-110 pointer-events-none">
              {service.icon}
            </span>

            <div className="relative z-10">
              <span className="text-brand-blue text-[10px] md:text-xs font-bold tracking-[0.3em] mb-6 md:mb-8 block opacity-60 group-hover:opacity-100 transition-opacity">
                PHASE {service.icon}
              </span>
              
              <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-4 md:mb-5 tracking-tighter uppercase leading-tight">
                {service.title}
              </h4>
              
              {/* Responsive underline: shorter on mobile by default */}
              <div className="w-6 md:w-8 h-[2px] bg-brand-blue mb-5 md:mb-6 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              
              <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.desc}
              </p>
            </div>

            {/* Bottom Shine Border - Desktop Only for better touch performance */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
    </section>
  );
}