// import React from 'react';

// export default function AboutTeam() {
//   const team = [
//     { name: "Mr. Kishore S", role: "Chief Executive Officer", initials: "RE" },
//     { name: "Mr. Hemachandran", role: "Finance & Accounts", initials: "HM" },
//     { name: "Mr. Srikanth", role: "E-Commerce Head", initials: "SR" },
//     { name: "Mr. Santosh", role: "Senior Sales Associate", initials: "SA" }
//   ];

//   return (
//     /* Background matches your alternating theme: Clean White */
//     <section className="py-24 lg:py-48 bg-white text-brand-dark">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
//         {/* SECTION HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
//           <div className="space-y-4">
//             <h2 className="text-[11px] uppercase tracking-[0.5em] text-brand-blue font-bold">
//               Operational Excellence
//             </h2>
//             <h3 className="text-5xl font-serif italic">
//               The Core Team
//             </h3>
//           </div>
//           <p className="text-gray-500 font-light max-w-xs leading-relaxed border-l border-brand-blue/20 pl-6">
//             Driving innovation and customer satisfaction through dedicated leadership.
//           </p>
//         </div>

//         {/* TEAM GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, i) => (
//             <div 
//               key={i} 
//               className="group relative p-10 bg-brand-blue/[0.02] border border-brand-blue/[0.05] hover:bg-brand-blue/[0.05] hover:border-brand-blue/20 transition-all duration-700"
//             >
//               {/* INDEX NUMBER (Top Right) */}
//               <div className="absolute top-6 right-8 text-[10px] font-bold text-brand-blue/20 group-hover:text-brand-blue transition-colors duration-500">
//                 0{i + 1}
//               </div>

//               {/* CARD CONTENT */}
//               <div className="space-y-6">
//                 {/* Visual Placeholder / Initials Circle */}
//                 <div className="w-12 h-12 rounded-full border border-brand-blue/10 flex items-center justify-center bg-white text-brand-blue text-xs font-bold tracking-widest group-hover:scale-110 transition-transform duration-500">
//                   {member.initials}
//                 </div>

//                 <div>
//                   <p className="text-xl font-bold tracking-tight uppercase leading-tight group-hover:text-brand-blue transition-colors duration-500">
//                     {member.name}
//                   </p>
//                   <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-2">
//                     {member.role}
//                   </p>
//                 </div>

//                 {/* ANIMATED LINE */}
//                 <div className="pt-4">
//                    <div className="w-8 h-[2px] bg-brand-blue/30 group-hover:w-full group-hover:bg-brand-blue transition-all duration-700"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';

// export default function AboutTeam() {
//   const team = [
//     { name: "Mr. Srikanth", role: "E-Commerce Head", initials: "SR" },
//     { name: "Mr. Hemachandran", role: "Finance & Accounts", initials: "HM" },
//     { name: "Mr. Kishore S", role: "Chief Executive Officer", initials: "KS" },
//     { name: "Mr. Santosh", role: "Senior Sales Associate", initials: "SA" }
//   ];

//   return (
//     <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
//       {/* 🧩 Subtle Background Accent */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* --- SECTION HEADER --- */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="w-8 h-px bg-[#0056b3]"></span>
//               <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-[#0056b3] font-black">
//                 Operational Excellence
//               </h2>
//             </div>
//             <h3 className="text-5xl md:text-6xl font-serif italic text-slate-900 leading-tight">
//               The Core <span className="not-italic font-bold">Team.</span>
//             </h3>
//           </div>
          
//           <div className="max-w-sm lg:text-right">
//              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed lg:border-r-2 lg:border-[#0056b3]/20 lg:pr-8">
//                Driving innovation and customer satisfaction through dedicated professional leadership across Chennai.
//              </p>
//           </div>
//         </div>

//         {/* --- TEAM GRID --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {team.map((member, i) => (
//             <div 
//               key={i} 
//               className="group relative p-8 md:p-10 bg-[#f8f9fa] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,86,179,0.1)] overflow-hidden"
//             >
//               {/* 🔢 Background Index */}
//               <div className="absolute -top-4 -right-2 text-7xl font-serif italic text-slate-900/[0.03] group-hover:text-[#0056b3]/[0.05] group-hover:-translate-y-2 transition-all duration-700 select-none">
//                 0{i + 1}
//               </div>

//               <div className="relative z-10 space-y-10">
//                 {/* 🏷️ Monogram Badge */}
//                 <div className="relative inline-flex items-center justify-center">
//                    <div className="w-14 h-14 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#0056b3] text-sm font-black tracking-tighter transition-all duration-500 group-hover:border-[#0056b3] group-hover:rotate-[10deg] shadow-sm">
//                      {member.initials}
//                    </div>
//                    {/* Decorative Dot */}
//                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#0056b3] rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-500"></div>
//                 </div>

//                 <div className="space-y-2">
//                   <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tighter leading-tight group-hover:text-[#0056b3] transition-colors duration-300">
//                     {member.name}
//                   </h4>
//                   <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-black">
//                     {member.role}
//                   </p>
//                 </div>

//                 {/* ⚡ Status Line Animation */}
//                 <div className="relative h-[2px] w-12 bg-slate-200 overflow-hidden group-hover:w-full transition-all duration-700 ease-in-out">
//                    <div className="absolute inset-0 bg-[#0056b3] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
//                 </div>
//               </div>

//               {/* Subtle hover background accent */}
//               <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#0056b3]/[0.02] to-transparent group-hover:h-full transition-all duration-700 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function AboutTeam() {
  const team = [
    { 
      name: "Mr. Srikanth", 
      role: "E-Commerce Head", 
      initials: "SR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" // Replace with your actual paths
    },
    { 
      name: "Mr. Hemachandran", 
      role: "Finance & Accounts", 
      initials: "HM",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "Mr. Kishore S", 
      role: "Founding Promoter", 
      initials: "KS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "Mr. Santosh", 
      role: "Senior Sales Associate", 
      initials: "SA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative py-24 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#0056b3]"></span>
              <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-[#0056b3] font-black">
                Operational Excellence
              </h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-serif italic text-slate-900 leading-tight">
              The Core <span className="not-italic font-bold">Team.</span>
            </h3>
          </div>
          
          <div className="max-w-sm lg:text-right">
             <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed lg:border-r-2 lg:border-[#0056b3]/20 lg:pr-8">
                Driving innovation and customer satisfaction through dedicated professional leadership across Chennai.
             </p>
          </div>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="group relative bg-[#f8f9fa] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,86,179,0.15)] overflow-hidden rounded-2xl"
            >
              {/* 📷 Team Image Container */}
              <div className="relative h-80 w-full overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Monogram (Visible initially, fades on hover) */}
                <div className="absolute bottom-4 left-4 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                   <div className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded text-[#0056b3] text-[10px] font-black tracking-widest uppercase">
                     {member.initials}
                   </div>
                </div>

                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0056b3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 📝 Content Area */}
              <div className="p-8 relative z-10 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900 tracking-tighter group-hover:text-[#0056b3] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">
                    {member.role}
                  </p>
                </div>

                {/* ⚡ Animated Progress Line */}
                <div className="relative h-[2px] w-8 bg-slate-200 overflow-hidden group-hover:w-full transition-all duration-700 ease-in-out">
                   <div className="absolute inset-0 bg-[#0056b3] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
                </div>
              </div>

              {/* 🔢 Background Index Number */}
              <div className="absolute top-2 right-4 text-6xl font-serif italic text-slate-900/[0.03] group-hover:text-white/[0.1] transition-all duration-700 select-none z-10">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}