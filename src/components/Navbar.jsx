import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for a "glass" effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Technologies", path: "/technologies" },
    { name: "Support", path: "/experience-support" },
    { name: "Visit Us", path: "/contact-visit" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* 🔷 Brand Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#003D7C] rounded-sm flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-[#003D7C] leading-none">
              KHR <span className="text-gray-400 font-light">HOME CONNECT</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
              Authorized Bosch Dealer
            </span>
          </div>
        </Link>

        {/* 🖥️ Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[13px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-[#003D7C]"
                  : "text-gray-500 hover:text-[#003D7C]"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#003D7C] animate-in fade-in slide-in-from-left-2" />
              )}
            </Link>
          ))}
        </nav>

        {/* 🔘 Premium CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact-visit"
            className="border-2 border-[#003D7C] text-[#003D7C] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#003D7C] hover:text-white transition-all duration-300 rounded-none"
          >
            Enquire Now
          </Link>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-0.5 w-6 bg-[#003D7C] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#003D7C] ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#003D7C] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute w-full bg-white border-b transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px] py-8" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-bold text-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}   