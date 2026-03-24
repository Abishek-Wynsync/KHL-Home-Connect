//     // import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

//     // export default function Navbar() {
//     // const [menuOpen, setMenuOpen] = useState(false);
//     // const [scrolled, setScrolled] = useState(false);
//     // const location = useLocation();

//     // useEffect(() => {
//     //     const handleScroll = () => setScrolled(window.scrollY > 20);
//     //     window.addEventListener("scroll", handleScroll);
//     //     return () => window.removeEventListener("scroll", handleScroll);
//     // }, []);

//     // const navLinks = [
//     //     { name: "Home", path: "/" },
//     //     { name: "About", path: "/about" },
//     //     { name: "Products", path: "/products" },
//     //     { name: "Technologies", path: "/technologies" },
//     //     { name: "Support", path: "/experience-support" },
//     //     { name: "Visit Us", path: "/contact-visit" },
//     // ];

//     // return (
//     //     <header 
//     //     className={`fixed w-full top-0 z-[100] transition-all duration-700 ease-in-out ${
//     //         scrolled 
//     //         ? "bg-white/70 backdrop-blur-2xl py-3 border-b border-brand-silver/20 shadow-[0_10px_40px_rgba(0,0,0,0.04)]" 
//     //         : "bg-transparent py-8"
//     //     }`}
//     //     >
//     //     <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
//     //         {/* 🔷 Brand Logo Section - Responsive & Elegant */}
//     //         <Link to="/" className="flex items-center gap-4 group">
//     //         <div className="relative overflow-hidden w-10 h-10 md:w-12 md:h-12 border border-brand-blue/30 flex items-center justify-center bg-white transition-all duration-500 group-hover:border-brand-blue group-hover:shadow-[0_0_20px_rgba(0,61,124,0.15)]">
//     //             <span className="text-brand-blue font-light text-xl md:text-2xl transition-transform duration-700 group-hover:scale-110">H</span>
//     //             {/* Animated Silver Glint Effect */}
//     //             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//     //         </div>
            
//     //         <div className="flex flex-col">
//     //             <span className="text-sm md:text-lg font-bold tracking-[0.1em] text-brand-blue leading-none">
//     //             KHR <span className="text-brand-silver font-light">HOME CONNECT</span>
//     //             </span>
//     //             <div className="flex items-center gap-2 mt-1">
//     //             <div className="h-[1px] w-4 bg-brand-blue/40"></div>
//     //             <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-brand-dark font-medium">
//     //                 Authorized Bosch Dealer
//     //             </span>
//     //             </div>
//     //         </div>
//     //         </Link>

//     //         {/* 🖥️ Desktop Menu - Minimalist spacing */}
//     //         <nav className="hidden xl:flex items-center gap-10">
//     //         {navLinks.map((link) => (
//     //             <Link
//     //             key={link.name}
//     //             to={link.path}
//     //             className={`group relative text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
//     //                 location.pathname === link.path ? "text-brand-blue" : "text-brand-dark/60 hover:text-brand-blue"
//     //             }`}
//     //             >
//     //             {link.name}
//     //             {/* Modern Underline Animation */}
//     //             <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-blue transition-all duration-500 ease-out ${
//     //                 location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
//     //             }`} />
//     //             </Link>
//     //         ))}
//     //         </nav>

//     //         {/* 🔘 Premium CTA - High Contrast */}
//     //         <div className="hidden lg:flex items-center gap-6">
//     //         <Link
//     //             to="/contact-visit"
//     //             className="group relative overflow-hidden px-8 py-3 border border-brand-blue text-brand-blue text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 hover:shadow-xl active:scale-95"
//     //         >
//     //             <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Enquire Now</span>
//     //             <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
//     //         </Link>
//     //         </div>

//     //         {/* 📱 Mobile Toggle - Custom thin-line icon */}
//     //         <button
//     //         className="xl:hidden flex flex-col items-end gap-2 group p-2 z-[110]"
//     //         onClick={() => setMenuOpen(!menuOpen)}
//     //         >
//     //         <span className={h-[1px] bg-brand-blue transition-all duration-500 ${menuOpen ? "w-8 rotate-45 translate-y-[4.5px]" : "w-8"}} />
//     //         <span className={h-[1px] bg-brand-blue transition-all duration-500 ${menuOpen ? "opacity-0" : "w-5 group-hover:w-8"}} />
//     //         <span className={h-[1px] bg-brand-blue transition-all duration-500 ${menuOpen ? "w-8 -rotate-45 -translate-y-[4.5px]" : "w-3 group-hover:w-8"}} />
//     //         </button>
//     //     </div>

//     //     {/* 📱 Full-Screen Premium Menu Overlay */}
//     //     <div className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-[105] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
//     //         menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
//     //     }`}>
//     //         <div className="flex flex-col items-center justify-center h-full space-y-12">
//     //         {navLinks.map((link, i) => (
//     //             <Link
//     //             key={link.name}
//     //             to={link.path}
//     //             onClick={() => setMenuOpen(false)}
//     //             style={{ transitionDelay: ${i * 100}ms }}
//     //             className={`text-2xl md:text-4xl font-serif italic tracking-[0.1em] text-brand-blue transition-all duration-700 transform ${
//     //                 menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//     //             }`}
//     //             >
//     //             {link.name}
//     //             </Link>
//     //         ))}
            
//     //         <div className={transition-all duration-1000 delay-[700ms] ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"}}>
//     //             <span className="text-brand-silver font-serif italic text-xl">Live life</span>
//     //         </div>
//     //         </div>
//     //     </div>
//     //     </header>
//     // );
//     // }


// //     import { useState, useEffect } from "react";
// // import { Link, useLocation } from "react-router-dom";

// // export default function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close mobile menu when route changes
// //   useEffect(() => {
// //     setMenuOpen(false);
// //   }, [location]);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "About", path: "/about" },
// //     { name: "Products", path: "/products" },
// //     { name: "Technologies", path: "/technologies" },
// //     { name: "Support", path: "/experience-support" },
// //     { name: "Visit Us", path: "/contact-visit" },
// //   ];

// //   return (
// //     <header 
// //       className={`fixed w-full top-0 z-[100] transition-all duration-500 ease-in-out ${
// //         scrolled 
// //           ? "bg-white/90 backdrop-blur-xl py-3 border-b border-brand-silver/10 shadow-sm" 
// //           : "bg-white lg:bg-transparent py-1 lg:py-8"
// //       }`}
// //     >
// //       <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
// //         {/* 🔷 Brand Logo Section */}
// //         <Link to="/" className="flex items-center gap-4 group">
// //           <div className="relative overflow-hidden w-10 h-10 border border-brand-blue/30 flex items-center justify-center bg-white transition-all duration-500 group-hover:border-brand-blue">
// //             <span className="text-brand-blue font-light text-xl">H</span>
// //             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
// //           </div>
          
// //           <div className="flex flex-col">
// //             <span className="text-sm md:text-lg font-bold tracking-[0.1em] text-brand-blue leading-none">
// //               KHL <span className="text-brand-silver font-light">HOME CONNECT</span>
// //             </span>
// //             <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-brand-dark/60 font-medium mt-1">
// //                Authorized Bosch Dealer
// //             </span>
// //           </div>
// //         </Link>

// //         {/* 🖥️ Desktop Menu */}
// //         <nav className="hidden xl:flex items-center gap-10">
// //           {navLinks.map((link) => (
// //             <Link
// //               key={link.name}
// //               to={link.path}
// //               className={`group relative text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
// //                 location.pathname === link.path ? "text-brand-blue" : "text-brand-dark/60 hover:text-brand-blue"
// //               }`}
// //             >
// //               {link.name}
// //               <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-blue transition-all duration-500 ${
// //                 location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
// //               }`} />
// //             </Link>
// //           ))}
// //         </nav>

// //         {/* 🔘 Premium CTA */}
// //         <div className="hidden lg:flex items-center gap-6">
// //           <Link
// //             to="/contact-visit"
// //             className="px-8 py-3 bg-brand-blue text-white text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 hover:bg-brand-dark shadow-lg active:scale-95"
// //           >
// //             Enquire Now
// //           </Link>
// //         </div>

// //         {/* 📱 Mobile Toggle */}
// //         <button
// //           className="xl:hidden flex flex-col items-end gap-1.5 p-2 z-[110]"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <span className={h-[2px] bg-brand-blue transition-all duration-300 ${menuOpen ? "w-8 rotate-45 translate-y-[5px]" : "w-8"}} />
// //           <span className={h-[2px] bg-brand-blue transition-all duration-300 ${menuOpen ? "opacity-0" : "w-6"}} />
// //           <span className={h-[2px] bg-brand-blue transition-all duration-300 ${menuOpen ? "w-8 -rotate-45 -translate-y-[5px]" : "w-4"}} />
// //         </button>
// //       </div>

// //       {/* 📱 Full-Screen Mobile Menu */}
// //       <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
// //         menuOpen ? "translate-x-0" : "translate-x-full"
// //       }`}>
// //         <div className="flex flex-col items-center justify-center h-full space-y-8">
// //           {navLinks.map((link, i) => (
// //             <Link
// //               key={link.name}
// //               to={link.path}
// //               className="text-3xl font-serif italic text-brand-blue"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               {link.name}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header 
//             className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
//                 scrolled 
//                 ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-brand-silver/20" 
//                 : "bg-transparent py-6"
//             }`}
//         >
//             <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
//                 {/* Branding Fix: KHL instead of KHR */}
//                 <Link to="/" className="flex items-center gap-3">
//                     <div className="w-10 h-10 border border-brand-blue flex items-center justify-center font-bold text-brand-blue">
//                         H
//                     </div>
//                     <div className="flex flex-col">
//                         <span className="text-brand-blue font-bold tracking-tighter text-lg leading-none">
//                             KHL <span className="text-brand-silver font-light tracking-normal">HOME CONNECT</span>
//                         </span>
//                         <span className="text-[9px] uppercase tracking-[0.2em] text-brand-dark font-medium">
//                             Authorized Bosch Dealer
//                         </span>
//                     </div>
//                 </Link>

//                 {/* Desktop Nav - Using your Brand Blue for active links */}
//                 <nav className="hidden lg:flex items-center gap-8">
//                     {["Home", "About", "Products", "Technologies", "Support", "Visit Us"].map((item) => (
//                         <Link 
//                             key={item} 
//                             to={item === "Home" ? "/" : /${item.toLowerCase().replace(" ", "-")}}
//                             className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
//                                 location.pathname.includes(item.toLowerCase().replace(" ", "-"))
//                                 ? "text-brand-blue border-b-2 border-brand-blue"
//                                 : "text-brand-dark/70 hover:text-brand-blue"
//                             }`}
//                         >
//                             {item}
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Premium CTA Button */}
//                 <Link 
//                     to="/contact-visit"
//                     className="hidden lg:block px-6 py-2 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold hover:bg-brand-dark transition-all"
//                 >
//                     Enquire Now
//                 </Link>
//             </div>
//         </header>
//     );
// }

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Technologies", path: "/technologies" },
    { name: "Support", path: "/experience-support" },
    { name: "Visit Us", path: "/visit-us" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "bg-white py-3 shadow-lg border-b border-brand-silver/20" 
          : "bg-white lg:bg-transparent py-4 lg:py-7"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Branding: Logo + KHL Home Connect */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group z-[110]">
          
          {/* LOGO CONTAINER */}
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src={logo} // Replace with your actual logo path (e.g., /assets/logo.svg)
              alt="KHL Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xs md:text-lg font-extrabold tracking-[0.1em] text-brand-blue leading-none">
              KHL <span className="text-brand-blue font-medium opacity-90">HOME CONNECT</span> 
            </span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-dark/70 font-bold mt-1">
              Authorized Bosch Dealer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
                location.pathname === link.path ? "text-brand-blue" : "text-brand-dark/60 hover:text-brand-blue"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-blue" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact-visit"
            className="hidden lg:block px-8 py-3 bg-brand-blue text-white text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-brand-dark transition-all shadow-md"
          >
            Enquire Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-brand-blue p-2 z-[110]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out z-[105] xl:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg uppercase tracking-[0.4em] font-bold ${
                location.pathname === link.path ? "text-brand-blue" : "text-brand-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact-visit"
            className="mt-4 px-10 py-4 bg-brand-blue text-white text-xs uppercase tracking-widest font-bold"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}