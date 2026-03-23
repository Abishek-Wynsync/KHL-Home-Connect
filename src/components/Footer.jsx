import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
      {/* 🧩 Subtle Background Branding */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[200px] font-serif italic -tracking-widest">Live life</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 🔝 Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 🏷️ Brand & Story (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 border border-brand-silver/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <span className="text-white font-light text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-md font-bold tracking-tighter leading-none">
                  KHL <span className="text-brand-silver font-light">HOME CONNECT</span>
                </h2>
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-silver/60 font-medium mt-1">
                  Authorized Bosch Dealer
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm italic">
              "Part of the KHL Group, we bridge the gap between premium retail experiences and efficient B2B supply solutions across South Chennai."
            </p>
            <div className="flex gap-10 pt-4">
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver mb-2">Chairman</p>
                  <p className="text-xs font-medium">Mr. Mayilvaganan T.</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-silver mb-2">Director</p>
                  <p className="text-xs font-medium">Mr. Kishore S</p>
               </div>
            </div>
          </div>

          {/* 🔗 Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Explore</h3>
            <ul className="space-y-4">
              {["Home", "About", "Products", "Technologies"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 text-xs font-light hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🛠️ Support (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Liaison</h3>
            <ul className="space-y-4">
              <li><Link to="/experience-support" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Experience & Support</Link></li>
              <li><Link to="/contact-visit" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Contact & Visit</Link></li>
              <li><a href="mailto:khlprivatelimited@gmail.com" className="text-gray-400 text-xs font-light hover:text-white transition-colors">Book a Store Visit</a></li>
            </ul>
          </div>

          {/* 📍 Location & Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-silver">Showroom</h3>
            <div className="space-y-4 text-sm font-light text-gray-400">
              <p className="leading-relaxed">
                No.4, Ahand Garden, 100ft Bypass Road,<br /> 
                Velachery, Chennai – 600042
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a href="tel:7358619429" className="text-white font-medium hover:text-brand-silver transition-colors tracking-widest">+91 73586 19429</a>
                <a href="mailto:khlprivatelimited@gmail.com" className="hover:text-white transition-colors">khlprivatelimited@gmail.com</a>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-silver/20 rounded-full text-[10px] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Open All Days
              </div>
            </div>
          </div>

        </div>

        {/* 🔻 Bottom Copyright Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
            © {currentYear} KHL Home Connect Pvt Ltd. Designed with Precision.
          </p>
          
          {/* Logo Signature */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-2xl font-serif italic text-white/90 tracking-widest">Live life</span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-brand-silver mt-1">Authorized Bosch Dealer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}