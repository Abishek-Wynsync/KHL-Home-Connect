import {
  WashingMachine,
  Refrigerator,
  Microwave,
  Flame,
  CookingPot,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Image imports remain the same
import washingImg from "../../assets/washing.jpg";
import fridgeImg from "../../assets/fridge.jpg";
import dishwasherImg from "../../assets/dishwasher.jpg";
import builtinImg from "../../assets/builtin.jpg";
import chimneyImg from "../../assets/chimney.jpg";
import microwaveImg from "../../assets/microwave.jpg";

export default function Categories() {
  const categories = [
    { name: "Washing Machines", icon: <WashingMachine size={24} />, image: washingImg, tag: "Laundry" },
    { name: "Refrigerators", icon: <Refrigerator size={24} />, image: fridgeImg, tag: "Cooling" },
    { name: "Dishwashers", icon: <Sparkles size={24} />, image: dishwasherImg, tag: "Cleaning" },
    { name: "Built-in Appliances", icon: <CookingPot size={24} />, image: builtinImg, tag: "Kitchen" },
    { name: "Chimneys & Hobs", icon: <Flame size={24} />, image: chimneyImg, tag: "Cooking" },
    { name: "Microwave Ovens", icon: <Microwave size={24} />, image: microwaveImg, tag: "Heating" },
  ];

  return (
    <section className="relative py-6 bg-[#fdfdfe] px-6 overflow-hidden">
      {/* Refined Background: Using Logo Deep Blue for subtle depth */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0a4275]/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-200/60 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="uppercase tracking-[0.4em] text-xs font-serif text-[#0a4275] mb-4"
            >
              Our Collection
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight"
            >
              Precision Engineering <br />
              <span className="text-[#0a4275]">in Every Category</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 md:max-w-xs text-sm leading-relaxed border-l-2 border-slate-200 pl-6"
          >
            Discover the perfect harmony of technology and design, reflecting the high standards of the HC brand.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(10,66,117,0.25)] transition-all duration-700"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Overlay: Transitioning to the logo's Deep Blue on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-slate-900/90 group-hover:to-[#0a4275]/90 transition-colors duration-500"></div>

              {/* Floating Tag: Silver Metallic effect */}
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <p className="text-[10px] uppercase tracking-widest text-white font-serif">
                  {item.tag}
                </p>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-4">
                  {/* Icon Box: Using Logo Blue */}
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:bg-[#0a4275] group-hover:border-[#0a4275] transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/40 to-transparent"></div>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3 tracking-tight">
                  {item.name}
                </h3>

                {/* Hidden content reveal */}
                <div className="overflow-hidden">
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    High-performance {item.name.toLowerCase()} designed for modern efficiency and lasting durability.
                  </p>
                  
                  <button className="flex items-center gap-2 text-[#0a4275] bg-white px-5 py-2 rounded-full font-serif text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:bg-slate-100 shadow-xl">
                    View Range 
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}