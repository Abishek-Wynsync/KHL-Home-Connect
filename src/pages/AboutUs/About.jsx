// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function About() {
// //   return (
// //     <div className="bg-[#F8F9FA] pt-20 font-heading">
      
// //       {/* 🏛️ HERO SECTION - Minimalist & Bold */}

// //       <section className="relative h-[80vh] flex items-center overflow-hidden">

// //         <div className="absolute inset-0 z-0">

// //           <img 

// //             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 

// //             className="w-full h-full object-cover opacity-20 grayscale" 

// //             alt="Luxury Interior" 

// //           />

// //         </div>

// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">

// //           <div className="max-w-3xl space-y-6">

// //             <span className="text-[10px] uppercase tracking-[0.5em] text-brand-blue font-bold">Velachery, Chennai</span>

// //             <h1 className="text-5xl lg:text-7xl font-serif italic text-brand-blue leading-tight">

// //               Premium Home Appliances <br />

// //               <span className="not-italic font-bold tracking-tighter">Experience Redefined.</span>

// //             </h1>

// //             <p className="text-lg text-brand-dark/70 font-light max-w-xl leading-relaxed">

// //               Discover, experience, and upgrade your home with world-class appliances from Bosch and other leading brands — all under one roof. [cite: 3, 4]

// //             </p>

// //             <div className="flex gap-6 pt-4">

// //               <button className="px-10 py-4 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold hover:shadow-2xl transition-all">Visit Store [cite: 6]</button>

// //               <button className="px-10 py-4 border border-brand-blue text-brand-blue text-[10px] uppercase tracking-widest font-bold hover:bg-brand-blue hover:text-white transition-all">Book a Demo [cite: 7]</button>

// //             </div>

// //           </div>

// //         </div>

// //       </section>

// //       {/* 🏢 WHO WE ARE */}
// //       <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
// //         <div className="grid lg:grid-cols-2 gap-24 items-center">
// //           <div className="relative">
// //             <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
// //                <img 
// //                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
// //                  alt="Luxury Kitchen" 
// //                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
// //                />
// //             </div>
// //             <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-2xl hidden md:block border-t-4 border-brand-blue">
// //                <p className="text-brand-blue text-4xl font-bold tracking-tighter">KHL</p>
// //                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-silver font-bold">Group Excellence</p>
// //             </div>
// //           </div>
          
// //           <div className="space-y-8">
// //             <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue">Who We Are</h2>
// //             <h3 className="text-4xl font-serif italic text-brand-dark leading-tight">
// //               Bridging the gap between premium retail and global engineering.
// //             </h3>
// //             <div className="space-y-6 text-gray-600 font-light leading-relaxed text-sm">
// //               <p>
// //                 KHL Home Connect Pvt Ltd is a premier retail and distribution company specializing in home appliances and consumer durables.
// //               </p>
// //               <p>
// //                 As part of the diversified KHL Group, we bring together expertise in real estate, construction, and customer-centric retail.
// //               </p>
// //               <p className="border-l-2 border-brand-blue pl-6 italic text-brand-dark font-medium">
// //                 We are committed to providing efficient B2B supply solutions across South Chennai.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 💡 BUSINESS MODEL */}
// //       <section className="bg-white py-32 border-y border-brand-silver/10">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20">
// //           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-4">Our Business Model</h2>
// //           <p className="font-serif italic text-3xl text-brand-dark font-light">Tailored Solutions for Every Need</p>
// //         </div>
        
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-0 border border-brand-silver/20">
// //           <div className="p-16 border-b md:border-b-0 md:border-r border-brand-silver/20 hover:bg-brand-bg transition-colors duration-500 group">
// //             <span className="text-brand-silver text-5xl font-light mb-8 block group-hover:text-brand-blue transition-colors">01</span>
// //             <h4 className="text-xl font-bold text-brand-blue mb-6 tracking-tight uppercase">Premium Retail Experience</h4>
// //             <ul className="space-y-4 text-sm text-gray-500 font-light">
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Exclusive Bosch Brand Store in Velachery</li>
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Live product demonstrations</li>
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Experience before you buy</li>
// //             </ul>
// //           </div>
          
// //           <div className="p-16 hover:bg-brand-bg transition-colors duration-500 group">
// //             <span className="text-brand-silver text-5xl font-light mb-8 block group-hover:text-brand-blue transition-colors">02</span>
// //             <h4 className="text-xl font-bold text-brand-blue mb-6 tracking-tight uppercase">B2B & Institutional Supply</h4>
// //             <ul className="space-y-4 text-sm text-gray-500 font-light">
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Bulk supply for builders & corporates</li>
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Multi-brand distribution</li>
// //               <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Reliable partner for large-scale requirements</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🏬 FLAGSHIP STORE */}
// //       <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-20 items-center">
// //           <div className="lg:col-span-5 space-y-8 relative z-10">
// //             <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-silver font-bold">Bosch Experience Center</h2>
// //             <h3 className="text-5xl font-serif italic leading-tight">Touch, Feel & Experience.</h3>
// //             <p className="text-gray-400 font-light leading-relaxed">
// //               Located on the 100ft Bypass Road, Velachery, our flagship store is designed to give you a hands-on experience unlike traditional stores.
// //             </p>
// //             <div className="grid grid-cols-2 gap-y-6 pt-6">
// //               {[
// //                 "Built-in kitchen setups", 
// //                 "Live washing demos", 
// //                 "Dishwasher trial zones", 
// //                 "Expert consultation"
// //               ].map((item, i) => (
// //                 <div key={i} className="flex flex-col gap-2">
// //                   <span className="h-[1px] w-8 bg-brand-blue"></span>
// //                   <span className="text-[10px] uppercase tracking-widest text-brand-silver">{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="lg:col-span-7 h-[500px] bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
// //              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>
// //              <h4 className="text-white/10 text-[12vw] font-bold italic tracking-tighter select-none">SHOWROOM</h4>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ⭐ WHY CHOOSE US */}
// //       <section className="py-32 bg-white">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
// //           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-20">The KHL Advantage</h2>
// //           <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 text-left">
// //             {[
// //               "Exclusive Bosch Brand Experience",
// //               "Premium Showroom with Live Demos",
// //               "Expert Consultation-Based Sales",
// //               "Trusted Multi-Brand Partnerships",
// //               "Strong B2B Supply Network",
// //               "Convenient Location in Velachery"
// //             ].map((title, i) => (
// //               <div key={i} className="group cursor-default border-t border-brand-silver/20 pt-8">
// //                 <div className="text-brand-blue/20 text-5xl font-serif italic group-hover:text-brand-blue transition-colors duration-500 mb-4">0{i+1}</div>
// //                 <h4 className="text-lg font-bold text-brand-dark tracking-tighter uppercase leading-tight">
// //                   {title}
// //                 </h4>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🧩 BRANDS */}
// //       <section className="py-24 bg-brand-bg border-y border-brand-silver/20">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
// //           <p className="text-[10px] uppercase tracking-[0.5em] text-brand-silver font-bold mb-12">Authorized Partnerships</p>
// //           <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100">
// //             {["BOSCH", "CROMPTON", "WHIRLPOOL", "KENSTAR", "BUTTERFLY", "MILTON"].map((brand, i) => (
// //               <span key={i} className="text-2xl font-bold tracking-tighter text-brand-blue">{brand}</span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 👥 LEADERSHIP TEAM */}
// //       <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
// //         <h2 className="text-center text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-20">Leadership</h2>
// //         <div className="grid md:grid-cols-2 gap-24">
// //           <div className="space-y-6">
// //             <div className="aspect-[4/5] bg-gray-100 border border-brand-silver/20"></div>
// //             <div>
// //               <h4 className="text-2xl font-bold text-brand-blue uppercase tracking-tighter">Mr. Mayilvaganan Thanikavelu</h4>
// //               <p className="text-[10px] uppercase tracking-widest text-brand-silver font-bold mt-1 mb-4">Chairman & Director</p>
// //               <p className="text-sm text-gray-500 font-light leading-relaxed">Provides strategic direction and brings strong industry experience in real estate and construction.</p>
// //             </div>
// //           </div>
// //           <div className="space-y-6">
// //             <div className="aspect-[4/5] bg-gray-100 border border-brand-silver/20"></div>
// //             <div>
// //               <h4 className="text-2xl font-bold text-brand-blue uppercase tracking-tighter">Mr. Kishore S</h4>
// //               <p className="text-[10px] uppercase tracking-widest text-brand-silver font-bold mt-1 mb-4">Director & Founding Promoter</p>
// //               <p className="text-sm text-gray-500 font-light leading-relaxed">Drives operations, expansion, and brand growth across South Chennai.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ⚙️ OPERATIONAL TEAM */}
// //       <section className="py-24 bg-brand-dark text-white">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
// //           <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver mb-16">Operational Excellence</h3>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
// //             {[
// //               { name: "Mr. Ramesh EK", role: "CEO" },
// //               { name: "Ms. Hema", role: "Finance & Accounts" },
// //               { name: "Mr. Srikanth", role: "E-Commerce" },
// //               { name: "Mr. Santosh", role: "Senior Sales Associate" }
// //             ].map((member, i) => (
// //               <div key={i} className="border-l border-brand-silver/20 pl-6 group">
// //                 <p className="text-xl font-bold tracking-tight group-hover:text-brand-silver transition-colors uppercase">{member.name}</p>
// //                 <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">{member.role}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 📍 FINAL CTA */}
// //       <section className="bg-white py-40">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-12">
// //            <p className="text-[11px] uppercase tracking-[0.6em] text-brand-blue font-bold">Visit Our Experience Center</p>
// //            <h3 className="text-5xl lg:text-8xl font-serif italic text-brand-dark">Velachery, Chennai</h3>
// //            <p className="text-lg font-light text-gray-500 tracking-wide">No.4, Ahand Garden, 100ft Bypass Road, Velachery, Chennai – 600042</p>
// //            <div className="flex flex-col md:flex-row justify-center items-center gap-10 pt-10 font-bold">
// //               <Link to="/contact-visit" className="text-2xl hover:text-brand-blue transition-colors border-b border-brand-dark hover:border-brand-blue pb-2 tracking-tighter">Book a Store Visit</Link>
// //               <div className="hidden md:block w-2 h-2 bg-brand-silver rounded-full"></div>
// //               <a href="tel:7358619429" className="text-2xl hover:text-brand-blue transition-colors border-b border-brand-dark hover:border-brand-blue pb-2 tracking-tighter">Talk to Our Expert</a>
// //            </div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function About() {
//   return (
//     // <div className="bg-[#F8F9FA] pt-20 overflow-x-hidden">
//     <div className="bg-[] pt-[80px] md:pt-[100px] overflow-x-hidden">
      
//       {/* 🏛️ HERO SECTION - Cinematic Entrance */}
//       <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark">
//         {/* Animated Background Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
//             className="w-full h-full object-cover opacity-30 scale-105 animate-[ken-burns_20s_ease_infinite]" 
//             alt="Luxury Interior" 
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
//         </div>

//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
//           <div className="max-w-4xl space-y-8">
//             <div className="flex items-center gap-4 animate-[fadeInLeft_1s_ease-out]">
//                <span className="h-[1px] w-12 bg-brand-silver"></span>
//                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-silver font-bold">Velachery, Chennai</span>
//             </div>
            
//             <h1 className="text-6xl lg:text-8xl font-serif italic text-white leading-[1.1] animate-[fadeInUp_1.2s_ease-out]">
//               Premium Home <br />
//               <span className="not-italic font-bold tracking-tighter text-brand-silver drop-shadow-2xl">
//                 Experience Redefined
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed animate-[fadeInUp_1.5s_ease-out]">
//               Discover, experience, and upgrade your home with world-class appliances from Bosch and other leading brands — all under one roof.
//             </p>

//             <div className="flex flex-wrap gap-6 pt-10 animate-[fadeInUp_1.8s_ease-out]">
//               <Link to="/contact-visit" className="group relative overflow-hidden px-12 py-5 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-500 shadow-2xl">
//                 <span className="relative z-10">Visit Our Store</span>
//                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference"></div>
//               </Link>
//               <button className="group px-12 py-5 border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all duration-500">
//                 Book a Demo
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Animated Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//            <span className="text-[9px] uppercase tracking-widest text-brand-silver/50">Scroll</span>
//            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-silver to-transparent animate-pulse"></div>
//         </div>
//       </section>

//       {/* 🏢 WHO WE ARE - Parallax Story */}
//       <section className="py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
//         <div className="grid lg:grid-cols-2 gap-32 items-center">
//           <div className="relative group">
//             <div className="absolute -top-10 -left-10 w-full h-full border border-brand-silver/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
//             <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
//                <img 
//                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
//                  alt="Luxury Kitchen" 
//                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
//                />
//             </div>
//             <div className="absolute -bottom-12 -right-12 bg-brand-blue text-white p-12 shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
//                <p className="text-5xl font-bold tracking-tighter leading-none">KHL</p>
//                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-silver font-bold mt-2">Group Excellence</p>
//             </div>
//           </div>
          
//           <div className="space-y-10">
//             <div className="inline-block px-4 py-1 border border-brand-blue/20 rounded-full text-[10px] uppercase tracking-widest text-brand-blue font-bold">Since Inception</div>
//             <h3 className="text-5xl lg:text-6xl font-serif italic text-brand-dark leading-tight">
//               Bridging the gap between <span className="text-brand-blue not-italic font-bold">premium retail</span> and global engineering.
//             </h3>
//             <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
//               <p>
//                 KHL Home Connect Pvt Ltd is a premier retail and distribution company specializing in home appliances and consumer durables.
//               </p>
//               <p className="bg-brand-bg p-8 border-l-4 border-brand-blue italic text-brand-dark font-medium shadow-inner">
//                 "As part of the diversified KHL Group, we bring together expertise in real estate, construction, and customer-centric retail to provide efficient B2B supply solutions across South Chennai."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 💡 BUSINESS MODEL - Interactive Reveal Cards */}
//       <section className="bg-white py-40">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
//           {[
//             { 
//               step: "01", 
//               title: "Premium Retail Experience", 
//               desc: "Exclusive Bosch Brand Store in Velachery featuring live product demonstrations and 'Experience before you buy' philosophy." 
//             },
//             { 
//               step: "02", 
//               title: "B2B & Institutional Supply", 
//               desc: "Multi-brand distribution and bulk supply for builders & corporates. A reliable partner for large-scale requirements." 
//             }
//           ].map((item, i) => (
//             <div key={i} className="group relative p-16 bg-brand-bg overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,61,124,0.1)]">
//               <div className="absolute top-0 right-0 p-8 text-8xl font-serif italic text-white group-hover:text-brand-blue/5 transition-colors duration-700">{item.step}</div>
//               <div className="relative z-10 space-y-6">
//                 <h4 className="text-2xl font-bold text-brand-blue uppercase tracking-tighter">{item.title}</h4>
//                 <p className="text-gray-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
//                 <div className="w-12 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-700"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🏬 FLAGSHIP STORE - Ultra Luxury Dark Section */}
//       <section className="py-40 bg-brand-dark text-white relative">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-24 items-center">
//           <div className="lg:col-span-5 space-y-10">
//             <h2 className="text-[11px] uppercase tracking-[0.5em] text-brand-silver font-bold">The Experience Center</h2>
//             <h3 className="text-6xl font-serif italic leading-tight">Touch, Feel <br /> & Experience.</h3>
//             <p className="text-gray-400 font-light text-lg">
//               Located on the 100ft Bypass Road, Velachery, our flagship store is designed for immersion.
//             </p>
//             <div className="space-y-6">
//               {[
//                 "Built-in kitchen setups", "Live washing demos", "Dishwasher trial zones", "Expert consultation"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-6 group cursor-default">
//                   <div className="w-8 h-[1px] bg-brand-blue group-hover:w-16 transition-all duration-500"></div>
//                   <span className="text-xs uppercase tracking-[0.3em] text-brand-silver group-hover:text-white transition-colors">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="lg:col-span-7 h-[600px] relative">
//              <div className="absolute inset-0 border border-white/10 translate-x-8 translate-y-8"></div>
//              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/20 flex items-center justify-center overflow-hidden">
//                 <span className="text-white/5 text-[20vw] font-bold italic select-none animate-pulse">BOSCH</span>
//                 <div className="absolute bottom-10 right-10 flex gap-4">
//                     <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white transition-all cursor-pointer">
//                         <span className="text-white group-hover:text-brand-dark">→</span>
//                     </div>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* ⭐ WHY CHOOSE US - Clean Modern Grid */}
//       <section className="py-40 bg-white">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//           <div className="text-center space-y-4 mb-24">
//             <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue">Strategic Edge</h2>
//             <p className="text-4xl font-serif italic text-brand-dark">The KHL Advantage</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//             {[
//               "Exclusive Bosch Brand Experience", "Premium Showroom with Live Demos",
//               "Expert Consultation-Based Sales", "Trusted Multi-Brand Partnerships",
//               "Strong B2B Supply Network", "Convenient Location in Velachery"
//             ].map((title, i) => (
//               <div key={i} className="group hover:-translate-y-3 transition-transform duration-500">
//                 <div className="text-brand-blue/10 text-7xl font-serif italic mb-2">0{i+1}</div>
//                 <h4 className="text-lg font-bold text-brand-dark tracking-tighter uppercase border-b border-brand-silver/10 pb-6 group-hover:border-brand-blue transition-colors">
//                   {title}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 👥 LEADERSHIP - Signature Profiles */}
//       <section className="py-40 bg-brand-bg">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//           <h2 className="text-center text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-24">Leadership</h2>
//           <div className="grid md:grid-cols-2 gap-32">
//             {[
//               { 
//                 name: "Mr. Mayilvaganan Thanikavelu", 
//                 role: "Chairman & Director", 
//                 desc: "Provides strategic direction and brings strong industry experience in real estate and construction." 
//               },
//               { 
//                 name: "Mr. Kishore S", 
//                 role: "Director & Founding Promoter", 
//                 desc: "Drives operations, expansion, and brand growth across South Chennai." 
//               }
//             ].map((leader, i) => (
//               <div key={i} className="space-y-8 group">
//                 <div className="aspect-[4/5] bg-white border border-brand-silver/20 relative overflow-hidden">
//                    <div className="absolute inset-0 bg-brand-blue/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
//                 </div>
//                 <div>
//                   <h4 className="text-3xl font-bold text-brand-blue uppercase tracking-tighter">{leader.name}</h4>
//                   <p className="text-[10px] uppercase tracking-widest text-brand-silver font-black mt-2 mb-6">{leader.role}</p>
//                   <p className="text-gray-500 font-light text-lg leading-relaxed">{leader.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ⚙️ OPERATIONAL TEAM - Minimalist Signature List */}
//       <section className="py-32 bg-brand-dark text-white">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
//             {[
//               { name: "Mr. Ramesh EK", role: "CEO" },
//               { name: "Ms. Hema", role: "Finance & Accounts" },
//               { name: "Mr. Srikanth", role: "E-Commerce" },
//               { name: "Mr. Santosh", role: "Senior Sales Associate" }
//             ].map((member, i) => (
//               <div key={i} className="border-l border-brand-blue pl-8 group hover:pl-12 transition-all duration-500">
//                 <p className="text-xl font-bold tracking-tight uppercase group-hover:text-brand-silver">{member.name}</p>
//                 <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 📍 FINAL CTA - The Grand Exit */}
//       <section className="bg-white py-60 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-16">
//            <h3 className="text-7xl lg:text-[10rem] font-serif italic text-brand-dark opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none w-full">Velachery</h3>
//            <div className="relative z-10 space-y-8">
//               <p className="text-[11px] uppercase tracking-[0.8em] text-brand-blue font-bold">Experience Perfection</p>
//               <h3 className="text-6xl lg:text-8xl font-serif italic text-brand-dark leading-none">Live Life.</h3>
//               <p className="text-xl font-light text-gray-400 tracking-wide max-w-lg mx-auto leading-relaxed">
//                 No.4, Ahand Garden, 100ft Bypass Road, Velachery, Chennai
//               </p>
//            </div>
           
//            <div className="flex flex-col md:flex-row justify-center items-center gap-16 pt-10 font-bold relative z-10">
//               <Link to="/contact-visit" className="group text-2xl tracking-tighter uppercase relative">
//                 Book a Store Visit
//                 <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
//               </Link>
//               <a href="tel:7358619429" className="group text-2xl tracking-tighter uppercase relative">
//                 Talk to Our Expert
//                 <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
//               </a>
//            </div>
//         </div>
//       </section>

//       {/* Tailwind Animations & Global Styles */}
//       <style jsx global>{`
//         @keyframes ken-burns {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.15) translate(1%, 1%); }
//           100% { transform: scale(1); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//       `}</style>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    /* FIXED: Added 'bg-white' instead of empty brackets.
       FIXED: Maintained responsive padding-top (pt) to prevent Navbar overlap. 
    */
    <div className="bg-white pt-[80px] md:pt-[100px] overflow-x-hidden">
      
      {/* 🏛️ HERO SECTION - Cinematic Entrance */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[ken-burns_20s_ease_infinite]" 
            alt="Luxury Interior" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-4 animate-[fadeInLeft_1s_ease-out]">
               <span className="h-[1px] w-12 bg-brand-silver"></span>
               <span className="text-[10px] uppercase tracking-[0.6em] text-brand-silver font-bold">Velachery, Chennai</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif italic text-white leading-[1.1] animate-[fadeInUp_1.2s_ease-out]">
              Premium Home <br />
              <span className="not-italic font-bold tracking-tighter text-brand-silver drop-shadow-2xl">
                Experience Redefined
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed animate-[fadeInUp_1.5s_ease-out]">
              Discover, experience, and upgrade your home with world-class appliances from Bosch and other leading brands — all under one roof.
            </p>

            <div className="flex flex-wrap gap-6 pt-10 animate-[fadeInUp_1.8s_ease-out]">
              <Link to="/contact-visit" className="group relative overflow-hidden px-12 py-5 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-500 shadow-2xl">
                <span className="relative z-10">Visit Our Store</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference"></div>
              </Link>
              <button className="group px-12 py-5 border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all duration-500">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-brand-silver/50">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-silver to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* 🏢 WHO WE ARE - Parallax Story */}
      <section className="py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-full h-full border border-brand-silver/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
               <img 
                 src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
                 alt="Luxury Kitchen" 
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
               />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-brand-blue text-white p-12 shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
               <p className="text-5xl font-bold tracking-tighter leading-none">KHL</p>
               <p className="text-[10px] uppercase tracking-[0.4em] text-brand-silver font-bold mt-2">Group Excellence</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="inline-block px-4 py-1 border border-brand-blue/20 rounded-full text-[10px] uppercase tracking-widest text-brand-blue font-bold">Since Inception</div>
            <h3 className="text-5xl lg:text-6xl font-serif italic text-brand-dark leading-tight">
              Bridging the gap between <span className="text-brand-blue not-italic font-bold">premium retail</span> and global engineering.
            </h3>
            <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                KHL Home Connect Pvt Ltd is a premier retail and distribution company specializing in home appliances and consumer durables.
              </p>
              <p className="bg-brand-bg p-8 border-l-4 border-brand-blue italic text-brand-dark font-medium shadow-inner">
                "As part of the diversified KHL Group, we bring together expertise in real estate, construction, and customer-centric retail to provide efficient B2B supply solutions across South Chennai."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 BUSINESS MODEL - Interactive Reveal Cards */}
      <section className="bg-white py-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
          {[
            { 
              step: "01", 
              title: "Premium Retail Experience", 
              desc: "Exclusive Bosch Brand Store in Velachery featuring live product demonstrations and 'Experience before you buy' philosophy." 
            },
            { 
              step: "02", 
              title: "B2B & Institutional Supply", 
              desc: "Multi-brand distribution and bulk supply for builders & corporates. A reliable partner for large-scale requirements." 
            }
          ].map((item, i) => (
            <div key={i} className="group relative p-16 bg-brand-bg overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,61,124,0.1)]">
              <div className="absolute top-0 right-0 p-8 text-8xl font-serif italic text-white group-hover:text-brand-blue/5 transition-colors duration-700">{item.step}</div>
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-bold text-brand-blue uppercase tracking-tighter">{item.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
                <div className="w-12 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏬 FLAGSHIP STORE - Ultra Luxury Dark Section */}
      <section className="py-40 bg-brand-dark text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-[11px] uppercase tracking-[0.5em] text-brand-silver font-bold">The Experience Center</h2>
            <h3 className="text-6xl font-serif italic leading-tight">Touch, Feel <br /> & Experience.</h3>
            <p className="text-gray-400 font-light text-lg">
              Located on the 100ft Bypass Road, Velachery, our flagship store is designed for immersion.
            </p>
            <div className="space-y-6">
              {[
                "Built-in kitchen setups", "Live washing demos", "Dishwasher trial zones", "Expert consultation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-default">
                  <div className="w-8 h-[1px] bg-brand-blue group-hover:w-16 transition-all duration-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-silver group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 h-[600px] relative">
             <div className="absolute inset-0 border border-white/10 translate-x-8 translate-y-8"></div>
             <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/20 flex items-center justify-center overflow-hidden">
                <span className="text-white/5 text-[20vw] font-bold italic select-none animate-pulse">BOSCH</span>
                <div className="absolute bottom-10 right-10 flex gap-4">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white transition-all cursor-pointer">
                        <span className="text-white group-hover:text-brand-dark">→</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ⭐ WHY CHOOSE US - Clean Modern Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue">Strategic Edge</h2>
            <p className="text-4xl font-serif italic text-brand-dark">The KHL Advantage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              "Exclusive Bosch Brand Experience", "Premium Showroom with Live Demos",
              "Expert Consultation-Based Sales", "Trusted Multi-Brand Partnerships",
              "Strong B2B Supply Network", "Convenient Location in Velachery"
            ].map((title, i) => (
              <div key={i} className="group hover:-translate-y-3 transition-transform duration-500">
                <div className="text-brand-blue/10 text-7xl font-serif italic mb-2">0{i+1}</div>
                <h4 className="text-lg font-bold text-brand-dark tracking-tighter uppercase border-b border-brand-silver/10 pb-6 group-hover:border-brand-blue transition-colors">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👥 LEADERSHIP - Signature Profiles */}
      <section className="py-40 bg-brand-bg">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-center text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue mb-24">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-32">
            {[
              { 
                name: "Mr. Mayilvaganan Thanikavelu", 
                role: "Chairman & Director", 
                desc: "Provides strategic direction and brings strong industry experience in real estate and construction." 
              },
              { 
                name: "Mr. Kishore S", 
                role: "Director & Founding Promoter", 
                desc: "Drives operations, expansion, and brand growth across South Chennai." 
              }
            ].map((leader, i) => (
              <div key={i} className="space-y-8 group">
                <div className="aspect-[4/5] bg-white border border-brand-silver/20 relative overflow-hidden">
                   <div className="absolute inset-0 bg-brand-blue/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-blue uppercase tracking-tighter">{leader.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver font-black mt-2 mb-6">{leader.role}</p>
                  <p className="text-gray-500 font-light text-lg leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ OPERATIONAL TEAM - Minimalist Signature List */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Mr. Ramesh EK", role: "CEO" },
              { name: "Ms. Hema", role: "Finance & Accounts" },
              { name: "Mr. Srikanth", role: "E-Commerce" },
              { name: "Mr. Santosh", role: "Senior Sales Associate" }
            ].map((member, i) => (
              <div key={i} className="border-l border-brand-blue pl-8 group hover:pl-12 transition-all duration-500">
                <p className="text-xl font-bold tracking-tight uppercase group-hover:text-brand-silver">{member.name}</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 FINAL CTA - The Grand Exit */}
      <section className="bg-white py-60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-16">
           <h3 className="text-7xl lg:text-[10rem] font-serif italic text-brand-dark opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none w-full">Velachery</h3>
           <div className="relative z-10 space-y-8">
              <p className="text-[11px] uppercase tracking-[0.8em] text-brand-blue font-bold">Experience Perfection</p>
              <h3 className="text-6xl lg:text-8xl font-serif italic text-brand-dark leading-none">Live Life.</h3>
              <p className="text-xl font-light text-gray-400 tracking-wide max-w-lg mx-auto leading-relaxed">
                No.4, Ahand Garden, 100ft Bypass Road, Velachery, Chennai
              </p>
           </div>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-16 pt-10 font-bold relative z-10">
              <Link to="/contact-visit" className="group text-2xl tracking-tighter uppercase relative">
                Book a Store Visit
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
              </Link>
              <a href="tel:7358619429" className="group text-2xl tracking-tighter uppercase relative">
                Talk to Our Expert
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-500"></span>
              </a>
           </div>
        </div>
      </section>

      {/* Tailwind Animations & Global Styles */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}