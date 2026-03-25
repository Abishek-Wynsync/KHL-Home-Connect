import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const words = ["Smart", "Modern", "Elegant"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Navigate to Visit Us → Enquiry
  const handleBookDemo = () => {
    navigate("/visit-us");

    setTimeout(() => {
      const section = document.getElementById("enquiry");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* Background Video */}
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
          <source
            src="https://res.cloudinary.com/dxwotbb5s/video/upload/v1774426682/video.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a4275]/30 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center text-white px-6">

        {/* Tagline */}
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

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                transition={{ duration: 0.5 }}
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
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-serif"
        >
          Experience the pinnacle of German engineering. Discover <br className="hidden md:block"/>
          <span className="text-white font-serif border-b border-[#0a4275]">
            Bosch Excellence
          </span>{" "}
          in the heart of Velachery.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <button
            onClick={handleBookDemo}
            className="group relative px-10 py-4 bg-[#0a4275] text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">
              Book Demo
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-serif">
            Explore
          </span>
          <ChevronDown className="text-[#0a4275] animate-bounce" />
        </motion.div>

      </div>

      {/* Side Text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="rotate-90 origin-right text-[10px] tracking-[0.8em] font-serif text-slate-500 uppercase opacity-30">
          Velachery Showroom 2026
        </p>
      </div>

    </section>
  );
}