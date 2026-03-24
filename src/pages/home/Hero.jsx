
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";

const words = ["Smart", "Modern", "Elegant"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Word rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* Background Video with subtle Zoom-in effect */}
      <motion.div 
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 10, ease: "easeOut" }}
  className="absolute inset-0 w-full h-full"
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-60"
  >
    <source src="https://res.cloudinary.com/dsa0chszi/video/upload/v1774338498/ServicePromo1_jgrnlu.mp4" type="video/mp4" />
  </video>
</motion.div>

      {/* Branded Overlay: Gradient from Black to Logo Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a4275]/30 backdrop-blur-[1px]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl text-center text-white px-6">
        
        {/* Elite Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-slate-400"></span>
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-serif text-slate-300">
            Premium Appliance Gallery
          </p>
          <span className="h-[1px] w-8 bg-slate-400"></span>
        </motion.div>

        {/* Heading with Animated Presence */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
        >
          Elevate Living With <br />
          <div className="relative h-[1.2em] flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 italic font-serif"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-serif"
        >
          Experience the pinnacle of German engineering. Discover <br className="hidden md:block"/>
          <span className="text-white font-serif border-b border-[#0a4275]">Bosch Excellence</span> in the heart of Velachery.
        </motion.p>

        {/* Branded Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          {/* Main Action: Logo Blue */}
          
        </motion.div>

        {/* Scroll Indicator: Branded Silver */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-serif">Explore</span>
          <ChevronDown className="text-[#0a4275] animate-bounce" />
        </motion.div>

      </div>

      {/* Side "Showroom" Vertical Text - Elite Touch */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="rotate-90 origin-right text-[10px] tracking-[0.8em] font-serif text-slate-500 uppercase opacity-30">
          Velachery Showroom 2026
        </p>
      </div>

    </section>
  );
}