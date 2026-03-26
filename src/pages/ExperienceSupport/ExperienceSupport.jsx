// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function ExperienceSupport() {
//   const services = [
//     {
//       title: "Product Consultation",
//       desc: "Get expert, one-on-one advice before making a purchase decision. We help you choose the right Bosch technology for your lifestyle.",
//       icon: "01"
//     },
//     {
//       title: "Installation Support",
//       desc: "Hassle-free setup by Bosch-trained professionals ensuring your appliances are perfectly integrated into your home.",
//       icon: "02"
//     },
//     {
//       title: "Warranty Assistance",
//       desc: "Complete support for all Bosch official warranties, protecting your investment for years to come.",
//       icon: "03"
//     },
//     {
//       title: "After-Sales Excellence",
//       desc: "Our relationship doesn't end at delivery. We provide reliable maintenance support and quick service response.",
//       icon: "04"
//     }
//   ];

//   return (
//     <div className="bg-white pt-[80px] md:pt-[100px] overflow-x-hidden">
      
//       {/* 🏛️ HERO SECTION */}
//       <section className="relative h-[60vh] flex items-center bg-brand-dark text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-20 grayscale">
//           <img 
//             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
//             className="w-full h-full object-cover" 
//             alt="Support Background" 
//           />
//         </div>
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
//           <span className="text-[10px] uppercase tracking-[0.5em] text-brand-silver font-bold block mb-4">Dedicated Support</span>
//           <h1 className="text-6xl lg:text-8xl font-serif italic leading-none">
//             Service & <br />
//             <span className="not-italic font-bold text-brand-silver">Expertise.</span>
//           </h1>
//           <p className="mt-8 text-lg text-gray-300 max-w-xl font-light leading-relaxed">
//             Discover, experience, and receive world-class support for your appliances — all in one destination.
//           </p>
//         </div>
//       </section>

//       {/* 🏬 EXPERIENCE CENTER SECTION */}
//       <section className="py-32 max-w-[1440px] mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-6">Hands-on Immersion</h2>
//             <h3 className="text-5xl font-serif italic text-brand-dark leading-tight mb-8">
//               The Velachery <br />Experience Center.
//             </h3>
//             <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
//               Visit our flagship showroom on the 100ft Bypass Road to explore Bosch appliances with live, hands-on demonstrations.
//             </p>
            
//             <div className="space-y-8">
//               <div className="flex gap-6 group">
//                 <div className="w-12 h-12 border border-brand-blue flex items-center justify-center text-brand-blue font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">✓</div>
//                 <div>
//                   <h4 className="font-bold text-brand-dark uppercase tracking-tighter">Live Demonstrations</h4>
//                   <p className="text-gray-500 text-sm font-light">Experience washing machines and ovens in real-time before you buy.</p>
//                 </div>
//               </div>
//               <div className="flex gap-6 group">
//                 <div className="w-12 h-12 border border-brand-blue flex items-center justify-center text-brand-blue font-bold shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">✓</div>
//                 <div>
//                   <h4 className="font-bold text-brand-dark uppercase tracking-tighter">Product Experience Zones</h4>
//                   <p className="text-gray-500 text-sm font-light">Walk through built-in kitchen setups to visualize your dream home.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative aspect-square lg:aspect-video bg-gray-100 overflow-hidden shadow-2xl">
//              <img 
//                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1500" 
//                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
//                alt="Showroom"
//              />
//              <div className="absolute inset-0 border-[20px] border-white/10"></div>
//           </div>
//         </div>
//       </section>

//       {/* 🛠️ SERVICES GRID */}
//       <section className="bg-brand-bg py-32 border-y border-brand-silver/10">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20">
//           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-4">Support Lifecycle</h2>
//           <p className="font-serif italic text-4xl text-brand-dark">Our Service Ecosystem</p>
//         </div>
        
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, i) => (
//             <div key={i} className="bg-white p-10 shadow-sm border border-brand-silver/10 hover:shadow-xl transition-all duration-500 group">
//               <span className="text-brand-blue/20 text-4xl font-serif italic mb-6 block group-hover:text-brand-blue transition-colors">{service.icon}</span>
//               <h4 className="text-lg font-bold text-brand-dark mb-4 tracking-tighter uppercase">{service.title}</h4>
//               <p className="text-gray-500 text-sm font-light leading-relaxed">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ⭐ TESTIMONIALS */}
//       <section className="py-32 max-w-[1440px] mx-auto px-6 lg:px-12">
//         <div className="text-center mb-20">
//           <h2 className="text-3xl font-serif italic text-brand-dark">Customer Reflections</h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="p-12 border-l-4 border-brand-blue bg-gray-50 italic text-gray-600 text-lg relative">
//             <span className="text-8xl absolute top-0 left-4 opacity-5 font-serif">“</span>
//             “Amazing showroom experience. The live demo helped us choose the perfect appliance for our new kitchen.”
//             <h4 className="mt-6 not-italic font-bold text-brand-blue text-[10px] uppercase tracking-widest">– Verified Customer</h4>
//           </div>
//           <div className="p-12 border-l-4 border-brand-blue bg-gray-50 italic text-gray-600 text-lg relative">
//             <span className="text-8xl absolute top-0 left-4 opacity-5 font-serif">“</span>
//             “Excellent support and professional guidance. The installation team was very precise and helpful.”
//             <h4 className="mt-6 not-italic font-bold text-brand-blue text-[10px] uppercase tracking-widest">– Verified Customer</h4>
//           </div>
//         </div>
//       </section>

//       {/* 🚀 CALL TO ACTION */}
//       <section className="bg-brand-dark text-white py-24 text-center px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-brand-blue/10 animate-pulse"></div>
//         <div className="relative z-10">
//           <h2 className="text-4xl font-serif italic mb-4">Experience Perfection Firsthand.</h2>
//           <p className="text-gray-400 mb-10 tracking-widest uppercase text-[10px]">Velachery, Chennai</p>
//           <Link 
//             to="/contact-visit" 
//             className="inline-block px-12 py-5 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl"
//           >
//             Book a Demo
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// // }
// import React from 'react';
// import SupportHero from "../../components/support/SupportHero";
// import SupportExperience from "../../components/support/SupportExperience";
// import SupportServices from "../../components/support/SupportServices";
// import SupportTestimonials from "../../components/support/SupportTestimonials";
// import SupportFAQ from "../../components/support/SupportFAQ";
// import SupportCTA from "../../components/support/SupportCTA";

// export default function ExperienceSupport() {
//   return (
//     <div className="bg-white overflow-x-hidden">
//       {/* 1. Global Animations for Child Components */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes revealUp {
//           from { 
//             opacity: 0; 
//             transform: translateY(60px); 
//             clip-path: inset(100% 0 0 0); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//             clip-path: inset(0 0 0 0); 
//           }
//         }

//         @keyframes scaleImage {
//           from { transform: scale(1.2); }
//           to { transform: scale(1); }
//         }

//         @keyframes shineSweep {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }

//         .reveal-text {
//           animation: revealUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }

//         .parallax-img {
//           animation: scaleImage 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }

//         .shine-navy-text {
//           background: linear-gradient(110deg, #001e3c 30%, #005bb7 50%, #001e3c 70%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           animation: shineSweep 6s linear infinite;
//         }
//       `}} />

//       {/* 2. Page Structure */}
//       <main>
//         <SupportHero />
        
//         {/* Zebra Layout: Light Blue -> White -> Light Blue */}
//         <section className="bg-brand-blue/[0.03]">
//           <SupportExperience />
//         </section>

//         <section className="bg-white">
//           <SupportServices />
//         </section>

//         <section className="bg-brand-blue/[0.03]">
//           <SupportTestimonials />
//         </section>

//         <section className="bg-white">
//           <SupportFAQ />
//         </section>

//         <SupportCTA />
//       </main>
//     </div>
//   );
// }

import React from 'react';
import SupportHero from "../../components/support/SupportHero";
import SupportExperience from "../../components/support/SupportExperience";
import SupportServices from "../../components/support/SupportServices";
import SupportTestimonials from "../../components/support/SupportTestimonials";
import SupportFAQ from "../../components/support/SupportFAQ";
import SupportCTA from "../../components/support/SupportCTA";
import { Helmet } from "react-helmet-async";
export default function ExperienceSupport() {
  return (
    /* pt-20 ensures content starts below fixed nav; overflow-x-hidden prevents animation "wobble" */
    <div className="bg-white overflow-x-hidden">
      <Helmet>
  {/* Title */}
  <title>
    Bosch Customer Support & Service Experience | Velachery Chennai
  </title>

  {/* SEO Description */}
  <meta
    name="description"
    content="Experience premium Bosch customer support in Velachery, Chennai. Explore our service offerings, expert assistance, FAQs, and customer testimonials."
  />

  <meta
    name="keywords"
    content="Bosch customer support Chennai, Bosch service center Velachery, Bosch appliance service, Bosch after sales support"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Bosch Customer Support & Service Experience" />
  <meta
    property="og:description"
    content="Discover Bosch’s premium customer support, expert service, and dedicated assistance for all home appliances in Velachery, Chennai."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://wynsynccc-homee-connecttt.netlify.app/support"
  />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png"
  />
  <meta
    property="og:image:secure_url"
    content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png"
  />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="KHL Connect - Bosch Appliances Velachery" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bosch Customer Support & Service Experience" />
  <meta
    name="twitter:description"
    content="Premium Bosch appliance support and service in Velachery, Chennai. Get expert help, service plans, and customer assistance."
  />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png"
  />

  {/* Local SEO */}
  <meta name="geo.region" content="IN-TN" />
  <meta name="geo.placename" content="Velachery, Chennai" />
</Helmet>
      
      {/* 1. Optimized Global Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes revealUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); /* Reduced for mobile stability */
            clip-path: inset(100% 0 0 0); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
            clip-path: inset(0 0 0 0); 
          }
        }

        @keyframes scaleImage {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        @keyframes shineSweep {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .reveal-text {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .parallax-img {
          animation: scaleImage 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .shine-navy-text {
          background: linear-gradient(110deg, #001e3c 30%, #005bb7 50%, #001e3c 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shineSweep 6s linear infinite;
        }

        /* Prevent animations from firing if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .reveal-text, .parallax-img {
            animation: none !important;
            opacity: 1 !important;
            clip-path: none !important;
            transform: none !important;
          }
        }
      `}} />

      {/* 2. Responsive Page Structure */}
      <main className="relative">
        {/* Sections use responsive padding: py-16 (Mobile) up to py-32 (Desktop) */}
        
        <SupportHero />
        
        <section className="bg-brand-blue/[0.03] ">
          <SupportExperience />
        </section>

        <section className="bg-white ">
          <SupportServices />
        </section>

        <section className="bg-brand-blue/[0.03] ">
          <SupportTestimonials />
        </section>

        <section className="bg-white border-b border-brand-silver/10">
          <SupportFAQ />
        </section>

        <SupportCTA />
      </main>
    </div>
  );
}