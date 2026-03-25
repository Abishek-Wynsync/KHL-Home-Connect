// // // import { Link } from "react-router-dom";

// // // export default function Footer() {
// // //   const currentYear = new Date().getFullYear();

// // //   return (
// // //     <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
// // //       {/* 🧩 Subtle Background Branding */}
// // //       <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none">
// // //         <span className="text-[200px] font-serif italic -tracking-widest">Live life</span>
// // //       </div>

// // //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
// // //         {/* 🔝 Main Content Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
// // //           {/* 🏷️ Brand & Story (4 Cols) */}
// // //           <div className="lg:col-span-4 space-y-8">
// // //             <Link to="/" className="flex items-center gap-3">
// // //               <div className="w-10 h-10 border border-brand-silver/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
// // //                 <span className="text-white font-light text-xl">H</span>
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <h2 className="text-md font-bold tracking-tighter leading-none">
// // //                   KHL <span className="text-brand-silver font-light">HOME CONNECT</span>
// // //                 </h2>
// // //                 <span className="text-[9px] uppercase tracking-[0.3em] text-brand-silver/60 font-medium mt-1">
// // //                   Authorized Bosch Dealer
// // //                 </span>
// // //               </div>
// // //             </Link>
// // //             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm italic">
// // //               "Part of the KHL Group, we bridge the gap between premium retail experiences and efficient B2B supply solutions across South Chennai."
// // //             </p>
// // //             <div className="flex gap-10 pt-4">
// // //                <div>
// // //                   <p className="text-[10px] uppercase tracking-widest text-brand-silver mb-2">Chairman</p>
// // //                   <p className="text-xs font-medium">Mr. Mayilvaganan T.</p>
// // //                </div>
// // //                <div>
// // //                   <p className="text-[10px] uppercase tracking-widest text-brand-silver mb-2">Director</p>
// // //                   <p className="text-xs font-medium">Mr. Kishore S</p>
// // //                </div>
// // //             </div>
// // //           </div>

// // //           {/* 🔗 Quick Navigation (2 Cols) */}
// // //           <div className="lg:col-span-2 space-y-6">
// // //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Explore</h3>
// // //             <ul className="space-y-4">
// // //               {["Home", "About", "Products", "Technologies"].map((item) => (
// // //                 <li key={item}>
// // //                   <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-light hover:text-white hover:translate-x-1 transition-all inline-block">
// // //                     {item}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* 🛠️ Support (2 Cols) */}
// // //           <div className="lg:col-span-2 space-y-6">
// // //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Liaison</h3>
// // //             <ul className="space-y-4">
// // //               <li><Link to="/experience-support" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Experience & Support</Link></li>
// // //               <li><Link to="/contact-visit" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Contact & Visit</Link></li>
// // //               <li><a href="mailto:khlprivatelimited@gmail.com" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Book a Store Visit</a></li>
// // //             </ul>
// // //           </div>

// // //           {/* 📍 Location & Contact (4 Cols) */}
// // //           <div className="lg:col-span-4 space-y-6">
// // //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Showroom</h3>
// // //             <div className="space-y-4 text-sm font-light text-gray-400">
// // //               <p className="leading-relaxed">
// // //                 No.4, Ahand Garden, 100ft Bypass Road,<br /> 
// // //                 {/* Velachery, Chennai – 600042 */}
// // //               </p>
// // //               <div className="pt-2 flex flex-col gap-2">
// // //                 <a href="tel:7358619429" className="text-white font-medium hover:text-brand-silver transition-colors tracking-widest">+91 73586 19429</a>
// // //                 <a href="mailto:khlprivatelimited@gmail.com" className="hover:text-white transition-colors">khlprivatelimited@gmail.com</a>
// // //               </div>
// // //               <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-silver/20 rounded-full text-[10px] uppercase tracking-widest">
// // //                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
// // //                 Open All Days
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>

// // //         {/* 🔻 Bottom Copyright Section */}
// // //         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
// // //           <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
// // //             © {currentYear} KHL Home Connect Pvt Ltd. Designed with Precision.
// // //           </p>
          
// // //           {/* Logo Signature */}
// // //           <div className="flex flex-col items-center md:items-end">
// // //             <span className="text-2xl font-serif italic text-white/90 tracking-widest">Live life</span>
// // //             <span className="text-[8px] uppercase tracking-[0.5em] text-brand-silver mt-1">Authorized Bosch Dealer</span>
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </footer>
// // //   );
// // // }


// // import { Link } from "react-router-dom";

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="bg-brand-dark text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">
      
// //       {/* 🧩 Responsive Background Branding */}
// //       <div className="absolute top-0 right-[-10%] md:right-0 opacity-[0.02] md:opacity-[0.03] pointer-events-none select-none">
// //         {/* Scaled down on mobile to prevent layout overflow */}
// //         <span className="text-[100px] md:text-[200px] font-serif italic -tracking-widest whitespace-nowrap">
// //           Live life
// //         </span>
// //       </div>

// //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
// //         {/* 🔝 Main Content Grid */}
// //         {/* gap-12 on mobile, gap-16 on desktop */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          
// //           {/* 🏷️ Brand & Story (Full width on mobile, 4 Cols on LG) */}
// //           <div className="sm:col-span-2 lg:col-span-4 space-y-6 md:space-y-8">
// //             <Link to="/" className="flex items-center gap-3">
// //               <div className="w-10 h-10 border border-brand-silver/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
// //                 <span className="text-white font-light text-xl">H</span>
// //               </div>
// //               <div className="flex flex-col">
// //                 <h2 className="text-md font-bold tracking-tighter leading-none">
// //                   KHL <span className="text-brand-silver font-light">HOME CONNECT</span>
// //                 </h2>
// //                 <span className="text-[9px] uppercase tracking-[0.3em] text-brand-silver/60 font-medium mt-1">
// //                   Authorized Bosch Dealer
// //                 </span>
// //               </div>
// //             </Link>
// //             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm italic">
// //               "Part of the KHL Group, we bridge the gap between premium retail experiences and efficient B2B supply solutions across South Chennai."
// //             </p>
// //             {/* Leadership - Stacked on tiny screens, side-by-side on sm+ */}
// //             <div className="flex flex-wrap gap-8 md:gap-10 pt-4">
// //                <div>
// //                   <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-silver mb-2">Chairman</p>
// //                   <p className="text-xs font-medium">Mr. Mayilvaganan T.</p>
// //                </div>
// //                <div>
// //                   <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-silver mb-2">Director</p>
// //                   <p className="text-xs font-medium">Mr. Kishore S</p>
// //                </div>
// //             </div>
// //           </div>

// //           {/* 🔗 Quick Navigation (1 Col on mobile, 2 Cols on LG) */}
// //           <div className="lg:col-span-2 space-y-6">
// //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver border-b border-white/5 pb-2 md:border-none">Explore</h3>
// //             <ul className="space-y-4">
// //               {["Home", "About", "Products", "Technologies"].map((item) => (
// //                 <li key={item}>
// //                   <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-light hover:text-white md:hover:translate-x-1 transition-all inline-block py-1">
// //                     {item}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* 🛠️ Liaison (1 Col on mobile, 2 Cols on LG) */}
// //           <div className="lg:col-span-2 space-y-6">
// //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver border-b border-white/5 pb-2 md:border-none">Liaison</h3>
// //             <ul className="space-y-4">
// //               <li><Link to="/experience-support" className="text-gray-400 text-xs font-light hover:text-white transition-colors py-1 inline-block">Experience & Support</Link></li>
// //               <li><Link to="/contact-visit" className="text-gray-400 text-xs font-light hover:text-white transition-colors py-1 inline-block">Contact & Visit</Link></li>
// //               <li><a href="mailto:khlprivatelimited@gmail.com" className="text-gray-400 text-xs font-light hover:text-white transition-colors py-1 inline-block">Book a Store Visit</a></li>
// //             </ul>
// //           </div>

// //           {/* 📍 Location & Contact (Full width on mobile, 4 Cols on LG) */}
// //           <div className="sm:col-span-2 lg:col-span-4 space-y-6">
// //             <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver border-b border-white/5 pb-2 md:border-none">Showroom</h3>
// //             <div className="space-y-5 text-sm font-light text-gray-400">
// //               <p className="leading-relaxed text-xs md:text-sm">
// //                 No.4, Anand Garden, 100ft Bypass Road,<br /> 
// //                 Velachery, Chennai – 600042
// //               </p>
// //               <div className="pt-2 flex flex-col gap-4 md:gap-2">
// //                 {/* Large touch targets for phone and email */}
// //                 <a href="tel:7358619429" className="text-white font-medium hover:text-brand-silver transition-colors tracking-widest text-base md:text-sm">
// //                   +91 73586 19429
// //                 </a>
// //                 <a href="mailto:khlprivatelimited@gmail.com" className="hover:text-white transition-colors text-xs md:text-sm break-all">
// //                   khlprivatelimited@gmail.com
// //                 </a>
// //               </div>
// //               <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-silver/20 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest">
// //                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
// //                 Open All Days
// //               </div>
// //             </div>
// //           </div>

// //         </div>

// //         {/* 🔻 Bottom Copyright Section */}
// //         <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
// //           <p className="text-[9px] md:text-[10px] text-gray-500 tracking-[0.15em] md:tracking-[0.2em] uppercase order-2 md:order-1">
// //             © {currentYear} KHL Home Connect Pvt Ltd. <br className="md:hidden" /> Designed with Precision.
// //           </p>
          
// //           {/* Logo Signature */}
// //           <div className="flex flex-col items-center md:items-end order-1 md:order-2">
// //             <span className="text-xl md:text-2xl font-serif italic text-white/90 tracking-widest">Live life</span>
// //             <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-brand-silver mt-1">Authorized Bosch Dealer</span>
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }


// // import { Link } from "react-router-dom";
// // import { MoveUp } from "lucide-react"; // Optional: Use an icon library for the Back to Top
// // import logo from "../assets/logo.webp";

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <footer className="bg-[#000d1a] text-white pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden relative">
      
// //       {/* 🧩 Enhanced Background Branding: Parallax-style effect */}
// //       <div className="absolute top-10 right-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
// //         <span className="text-[250px] font-serif italic -tracking-tighter leading-none text-white transition-transform duration-1000 group-hover:translate-x-10">
// //           Live life
// //         </span>
// //       </div>

// //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
// //         {/* 🔝 Main Content Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
// //           {/* 🏷️ Brand & Story */}
// //           <div className="sm:col-span-2 lg:col-span-4 space-y-8">
// //             <Link to="/" className="group inline-flex items-center gap-4">
// //               <div className="w-12 h-12 border border-brand-silver/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:border-white transition-all duration-500">
// //                 <span className="text-white font-light text-2xl group-hover:scale-110 transition-transform">H</span>
// //               </div>
// //               <div className="flex flex-col">
// //                 <h2 className="text-lg font-bold tracking-tighter leading-none">
// //                   KHL <span className="text-brand-silver font-extralight italic">HOME CONNECT</span>
// //                 </h2>
// //                 <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mt-1.5">
// //                   Authorized Bosch Dealer
// //                 </span>
// //               </div>
// //             </Link>
            
// //             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
// //               <span className="text-white font-serif italic text-lg mr-1">“</span>
// //               Bridging the gap between premium retail experiences and efficient B2B supply solutions across South Chennai.
// //             </p>

// //             <div className="flex flex-wrap gap-12 border-l border-white/10 pl-6 py-2">
// //                <div>
// //                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Chairman</p>
// //                   <p className="text-xs font-semibold tracking-wide">Mr. Mayilvaganan T.</p>
// //                </div>
// //                <div>
// //                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Director</p>
// //                   <p className="text-xs font-semibold tracking-wide">Mr. Kishore S</p>
// //                </div>
// //             </div>
// //           </div>

// //           {/* 🔗 Quick Navigation */}
// //           <div className="lg:col-span-2 lg:ml-8 space-y-8">
// //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Explore</h3>
// //             <ul className="space-y-4">
// //               {["Home", "About", "Products", "Technologies"].map((item) => (
// //                 <li key={item}>
// //                   <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-medium hover:text-brand-blue hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
// //                     <span className="w-0 h-px bg-brand-blue group-hover:w-3 transition-all duration-300"></span>
// //                     {item}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* 🛠️ Liaison */}
// //           <div className="lg:col-span-2 space-y-8">
// //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Liaison</h3>
// //             <ul className="space-y-4">
// //               <li><Link to="/experience-support" className="text-gray-400 text-xs hover:text-white transition-colors">Experience & Support</Link></li>
// //               <li><Link to="/contact-visit" className="text-gray-400 text-xs hover:text-white transition-colors">Contact & Visit</Link></li>
// //               <li><a href="mailto:khlprivatelimited@gmail.com" className="text-gray-400 text-xs hover:text-white transition-colors">Book Store Visit</a></li>
// //             </ul>
// //           </div>

// //           {/* 📍 Location & Contact */}
// //           <div className="sm:col-span-2 lg:col-span-4 space-y-8">
// //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">The Flagship</h3>
// //             <div className="space-y-6">
// //               <p className="text-gray-400 text-sm leading-relaxed font-light">
// //                 No.4, Anand Garden, 100ft Bypass Road,<br /> 
// //                 <span className="text-white font-medium">Velachery, Chennai – 600042</span>
// //               </p>
              
// //               <div className="space-y-4">
// //                 <a href="tel:7358619429" className="group flex items-center gap-4 text-white hover:text-brand-blue transition-colors">
// //                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-blue transition-colors">
// //                     <span className="text-[10px]">📞</span>
// //                   </div>
// //                   <span className="text-sm font-bold tracking-widest">+91 73586 19429</span>
// //                 </a>
// //               </div>

// //               <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors cursor-default">
// //                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
// //                 Experience Center Open
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 🔻 Enhanced Bottom Bar */}
// //         <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          
// //           <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-1">
// //             <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
// //               © {currentYear} KHL Home Connect Pvt Ltd.
// //             </p>
// //             <p className="text-[9px] text-gray-600 tracking-[0.1em]">
// //               Crafted for Precision • Authorized Bosch Retailer
// //             </p>
// //           </div>

// //           {/* Back to Top Circle */}
// //           <button 
// //             onClick={scrollToTop}
// //             className="order-1 md:order-2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-500 group"
// //           >
// //             <MoveUp size={18} className="group-hover:-translate-y-1 transition-transform" />
// //           </button>
          
// //           {/* Brand Signature */}
// //           <div className="flex flex-col items-center md:items-end order-3">
// //             <span className="text-3xl font-serif italic text-white tracking-tighter">Live life</span>
// //             <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent mt-1"></div>
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }


// import { Link } from "react-router-dom";
// import { MoveUp } from "lucide-react"; 
// import logo from "../assets/logo.webp";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-[#000d1a] text-white pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden relative">
      
//       {/* 🧩 Enhanced Background Branding: Parallax-style effect */}
//       <div className="absolute top-10 right-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
//         <span className="text-[250px] font-serif italic -tracking-tighter leading-none text-white transition-transform duration-1000 group-hover:translate-x-10">
//           Live life
//         </span>
//       </div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
//         {/* 🔝 Main Content Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
//           {/* 🏷️ Brand & Story */}
//           <div className="sm:col-span-2 lg:col-span-4 space-y-8">
//             <Link to="/" className="group inline-flex items-center gap-4">
//               {/* 🖼️ Logo Image Upgrade */}
//               <div className="w-16 h-16 border border-white/10 flex items-center justify-center bg-white p-2 group-hover:border-brand-blue transition-all duration-500 shadow-xl shadow-black/20">
//                 <img 
//                   src={logo} 
//                   alt="KHL Home Connect Logo" 
//                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
//                 />
//               </div>
              
//               <div className="flex flex-col">
//                 <h2 className="text-lg font-bold tracking-tighter leading-none">
//                   KHL <span className="text-brand-silver font-extralight italic">HOME CONNECT</span>
//                 </h2>
//                 <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mt-1.5">
//                   Authorized Bosch Dealer
//                 </span>
//               </div>
//             </Link>
            
//             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
//               <span className="text-white font-serif italic text-lg mr-1">“</span>
//               Bridging the gap between premium retail experiences and efficient B2B supply solutions across South Chennai.
//             </p>

//             <div className="flex flex-wrap gap-12 border-l border-white/10 pl-6 py-2">
//                <div>
//                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Chairman</p>
//                   <p className="text-xs font-semibold tracking-wide">Mr. Mayilvaganan T.</p>
//                </div>
//                <div>
//                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Director</p>
//                   <p className="text-xs font-semibold tracking-wide">Mr. Kishore S</p>
//                </div>
//             </div>
//           </div>

//           {/* 🔗 Quick Navigation */}
//           <div className="lg:col-span-2 lg:ml-8 space-y-8">
//             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Explore</h3>
//             <ul className="space-y-4">
//               {["Home", "About", "Products", "Technologies"].map((item) => (
//                 <li key={item}>
//                   <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-medium hover:text-brand-blue hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
//                     <span className="w-0 h-px bg-brand-blue group-hover:w-3 transition-all duration-300"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 🛠️ Support (2 Cols) */}
//           {/* Update the Liaison section */}
// <ul className="space-y-4">
//   <li><Link to="/experience-support" className="...">Experience & Support</Link></li>
//   {/* Link specifically to the enquiry form or booking section */}
//   <li><Link to="/contact-visit#enquiry" className="...">Inquiry Form</Link></li>
//   <li><Link to="/contact-visit#booking" className="...">Book a Store Visit</Link></li>
// </ul>

//           {/* 📍 Location & Contact (4 Cols) */}
//           <div className="lg:col-span-4 space-y-6">
//   <h3 className="...">Showroom</h3>
//   <div className="space-y-4 text-sm font-light text-gray-400">
//     <Link to="/contact-visit#map" className="hover:text-white transition-all block italic">
//       No.4, Ahand Garden, 100ft Bypass Road,<br /> 
//       Velachery, Chennai – 600042
//     </Link>
//     {/* ... rest of contact info */}
//   </div>
// </div>

//         </div>

//         {/* 🔻 Enhanced Bottom Bar */}
//         <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          
//           <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-1">
//             <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
//               © {currentYear} KHL Home Connect Pvt Ltd.
//             </p>
//             <p className="text-[9px] text-gray-600 tracking-[0.1em]">
//               Crafted for Precision • Authorized Bosch Retailer
//             </p>
//           </div>

//           {/* Back to Top Circle */}
//           <button 
//             onClick={scrollToTop}
//             className="order-1 md:order-2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-500 group"
//           >
//             <MoveUp size={18} className="group-hover:-translate-y-1 transition-transform" />
//           </button>
          
//           {/* Brand Signature */}
//           <div className="flex flex-col items-center md:items-end order-3">
//             <span className="text-3xl font-serif italic text-white tracking-tighter">Live life</span>
//             <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent mt-1"></div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


  // import { Link } from "react-router-dom";
  // import { MoveUp, Phone, Mail, MapPin } from "lucide-react"; 
  // import logo from "../assets/logo.webp";

  // export default function Footer() {
  //   const currentYear = new Date().getFullYear();

  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  //   return (
  //     <footer className="bg-[#000d1a] text-white pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden relative">
        
  //       {/* 🧩 Parallax Background Text */}
  //       <div className="absolute top-10 right-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
  //         <span className="text-[250px] font-serif italic -tracking-tighter leading-none text-white">
  //           Live life
  //         </span>
  //       </div>

  //       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          
  //         {/* 🔝 Main Content Grid */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
  //           {/* 🏷️ Brand & Story */}
  //           <div className="sm:col-span-2 lg:col-span-4 space-y-8">
  //             <Link to="/" className="group inline-flex items-center gap-4">
  //               <div className="w-16 h-16 border border-white/10 flex items-center justify-center bg-white p-2 group-hover:border-brand-blue transition-all duration-500 shadow-xl shadow-black/20">
  //                 <img 
  //                   src={logo} 
  //                   alt="KHL Home Connect Logo" 
  //                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
  //                 />
  //               </div>
                
  //               <div className="flex flex-col">
  //                 <h2 className="text-lg font-bold tracking-tighter leading-none">
  //                   KHL <span className="text-brand-silver font-extralight italic">HOME CONNECT</span>
  //                 </h2>
  //                 <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mt-1.5">
  //                   Authorized Bosch Dealer
  //                 </span>
  //               </div>
  //             </Link>
              
  //             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
  //               <span className="text-white font-serif italic text-lg mr-1">“</span>
  //               Bridging the gap between premium retail experiences and efficient B2B supply solutions across South Chennai.
  //             </p>

  //             <div className="flex flex-wrap gap-12 border-l border-white/10 pl-6 py-2">
  //               <div>
  //                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Chairman</p>
  //                   <p className="text-xs font-semibold tracking-wide">Mr. Mayilvaganan Thanikavelu</p>
  //               </div>
  //               <div>
  //                   <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Director</p>
  //                   <p className="text-xs font-semibold tracking-wide">Mr. Ramesh EK</p>
  //               </div>
  //             </div>
  //           </div>

  //           {/* 🔗 Quick Navigation */}
  //           <div className="lg:col-span-2 lg:ml-8 space-y-8">
  //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Explore</h3>
  //             <ul className="space-y-4">
  //               {["Home", "About", "Products", "Technologies"].map((item) => (
  //                 <li key={item}>
  //                   <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-medium hover:text-brand-blue hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
  //                     <span className="w-0 h-px bg-brand-blue group-hover:w-3 transition-all duration-300"></span>
  //                     {item}
  //                   </Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>

  //           {/* 🛠️ Support & Liaison */}
  //           <div className="lg:col-span-2 space-y-8">
  //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Liaison</h3>
  //             <ul className="space-y-4">
  //               <li>
  //                 <Link to="/experience-support" className="text-gray-400 text-xs hover:text-white transition-colors">Experience & Support</Link>
  //               </li>
  //               <li>
  //                 <Link to="/contact-visit#enquiry" className="text-gray-400 text-xs hover:text-white transition-colors">Inquiry Form</Link>
  //               </li>
  //               <li>
  //                 <Link to="/contact-visit#booking" className="text-gray-400 text-xs hover:text-white transition-colors">Book a Store Visit</Link>
  //               </li>
  //             </ul>
  //           </div>

  //           {/* 📍 Location & Contact */}
  //           <div className="sm:col-span-2 lg:col-span-4 space-y-8">
  //             <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Showroom</h3>
  //             <div className="space-y-6 text-sm font-light text-gray-400">
  //               <a 
  //                 href="https://maps.google.com/?q=No.4,Anand+Garden,100ft+Bypass+Road,Velachery,Chennai" 
  //                 target="_blank" 
  //                 rel="noreferrer"
  //                 className="hover:text-white transition-all block group"
  //               >
  //                 <div className="flex gap-3">
  //                   <MapPin size={16} className="text-brand-blue shrink-0 mt-1" />
  //                   <p className="leading-relaxed">
  //                     No.4, Anand Garden, 100ft Bypass Road,<br /> 
  //                     <span className="text-white font-medium">Velachery, Chennai – 600042</span>
  //                   </p>
  //                 </div>
  //               </a>
                
  //               <div className="space-y-3">
  //                 <a href="tel:7358619429" className="flex items-center gap-3 text-white hover:text-brand-blue transition-colors group">
  //                   <Phone size={16} className="text-brand-blue" />
  //                   <span className="text-sm font-bold tracking-widest">+91 73586 19429</span>
  //                 </a>
  //                 <a href="mailto:khlprivatelimited@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
  //                   <Mail size={16} className="text-brand-blue" />
  //                   <span className="text-xs truncate">khlprivatelimited@gmail.com</span>
  //                 </a>
  //               </div>

  //               <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em]">
  //                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
  //                 Experience Center Open
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* 🔻 Bottom Bar */}
  //         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            
  //           <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-1">
  //             <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
  //               © {currentYear} KHL Home Connect Pvt Ltd.
  //             </p>
  //             <p className="text-[9px] text-gray-600 tracking-[0.1em]">
  //               Crafted for Precision • Authorized Bosch Retailer
  //             </p>
  //           </div>

  //           <button 
  //             onClick={scrollToTop}
  //             aria-label="Back to top"
  //             className="order-1 md:order-2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-500 group"
  //           >
  //             <MoveUp size={18} className="group-hover:-translate-y-1 transition-transform" />
  //           </button>
            
  //           <div className="flex flex-col items-center md:items-end order-3">
  //             <span className="text-3xl font-serif italic text-white tracking-tighter">Live life</span>
  //             <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent mt-1"></div>
  //           </div>
  //         </div>

  //       </div>
  //     </footer>
  //   );
  // }

  import { Link } from "react-router-dom";
import { MoveUp, Phone, Mail, MapPin } from "lucide-react"; 
import logo from "../assets/logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000d1a] text-white pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden relative">
      
      {/* 🧩 BRAND WATERMARK: KHL (Main) & Home Connect (Sub) */}
{/* 🧩 BRAND WATERMARK: KHL (Main) & Home Connect (Sub) */}
<div className="absolute top-10 right-[15%] opacity-[0.06] pointer-events-none select-none hidden lg:block">
  <div className="relative">
    {/* Main Word */}
    <h2 className="text-[280px] font-black italic uppercase leading-none tracking-tighter text-white">
      KHL
    </h2>
    
    {/* ⬇️ CHANGE THE BOTTOM VALUE HERE ⬇️ */}
    {/* Try bottom-[10px], bottom-[0px], or bottom-[-20px] to move it lower */}
    <span className="absolute bottom-[-50px] left-[40%] text-[50px] font-light uppercase tracking-[0.4em] text-white whitespace-nowrap">
      Home Connect
    </span>
  </div>
</div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 🔝 Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* 🏷️ Brand & Story */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-8">
            <Link to="/" className="group inline-flex items-center gap-4">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center bg-white p-2 group-hover:border-brand-blue transition-all duration-500 shadow-xl shadow-black/20">
                <img 
                  src={logo} 
                  alt="KHL Home Connect Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="flex flex-col">
                <h2 className="text-lg font-bold tracking-tighter leading-none">
                  KHL <span className="text-brand-silver font-extralight italic">HOME CONNECT</span>
                </h2>
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold mt-1.5">
                  Authorized Bosch Dealer
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              <span className="text-white font-serif italic text-lg mr-1">“</span>
              Bridging the gap between premium retail experiences and efficient B2B supply solutions across South Chennai.
            </p>

            <div className="flex flex-wrap gap-12 border-l border-white/10 pl-6 py-2">
               <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Chairman</p>
                  <p className="text-xs font-semibold tracking-wide">Mr. Mayilvaganan Thanikavelu</p>
               </div>
               <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-silver/50 mb-1">Director</p>
                  <p className="text-xs font-semibold tracking-wide">Mr. Ramesh EK</p>
               </div>
            </div>
          </div>

          {/* 🔗 Quick Navigation */}
          <div className="lg:col-span-2 lg:ml-8 space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Explore</h3>
            <ul className="space-y-4">
              {["Home", "About", "Products", "Technologies"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-medium hover:text-brand-blue hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-blue group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🛠️ Support & Liaison */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Liaison</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/experience-support" className="text-gray-400 text-xs hover:text-white transition-colors">Experience & Support</Link>
              </li>
              <li>
                <Link to="/contact-visit#enquiry" className="text-gray-400 text-xs hover:text-white transition-colors">Inquiry Form</Link>
              </li>
              <li>
                <Link to="/contact-visit#booking" className="text-gray-400 text-xs hover:text-white transition-colors">Book a Store Visit</Link>
              </li>
            </ul>
          </div>

          {/* 📍 Location & Contact */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Showroom</h3>
            <div className="space-y-6 text-sm font-light text-gray-400">
              <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-all block group"
              >
                <div className="flex gap-3">
                  <MapPin size={16} className="text-brand-blue shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    No.4, Anand Garden, 100ft Bypass Road,<br /> 
                    <span className="text-white font-medium">Velachery, Chennai – 600042</span>
                  </p>
                </div>
              </a>
              
              <div className="space-y-3">
                <a href="tel:7358619429" className="flex items-center gap-3 text-white hover:text-brand-blue transition-colors group">
                  <Phone size={16} className="text-brand-blue" />
                  <span className="text-sm font-bold tracking-widest">+91 73586 19429</span>
                </a>
                <a href="mailto:khlprivatelimited@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail size={16} className="text-brand-blue" />
                  <span className="text-xs truncate">khlprivatelimited@gmail.com</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                Experience Center Open
              </div>
            </div>
          </div>
        </div>

        {/* 🔻 Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-1">
            <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
              © {currentYear} KHL Home Connect Pvt Ltd.
            </p>
            <p className="text-[9px] text-gray-600 tracking-[0.1em]">
              Crafted for Precision • Authorized Bosch Dealer
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
            className="order-1 md:order-2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#000d1a] transition-all duration-500 group"
          >
            <MoveUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <div className="flex flex-col items-center md:items-end order-3">
            <span className="text-3xl font-serif italic text-white tracking-tighter">Live life</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent mt-1"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}