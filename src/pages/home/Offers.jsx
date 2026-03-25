import { Tag, Gift, Truck, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Offers() {
  const offers = [
    {
      title: "Festive Discounts",
      desc: "Enjoy exclusive seasonal offers on premium appliances with limited-time price drops.",
      icon: <Tag className="text-blue-200" size={28} />,
    },
    {
      title: "Exchange Benefits",
      desc: "Upgrade your lifestyle by trading in old appliances for significant credit.",
      icon: <Gift className="text-blue-200" size={28} />,
    },
    {
      title: "Free Installation",
      desc: "White-glove delivery and professional setup at zero cost to you.",
      icon: <Truck className="text-blue-200" size={28} />,
    },
  ];

  return (
     <section className="flex-grow py-10 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      
      {/* --- Branded Ambient Background --- */}
      <div className="absolute inset-0 z-0">
        {/* Navy Glow (Reduced Intensity) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#003B73]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <ShieldCheck size={14} className="text-[#003B73]" />
            <span className="text-[10px] font-serif font-black uppercase tracking-[0.3em] text-[#003B73]/70">
              Limited Time Advantage
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-[#003B73] tracking-tight leading-tight"
          >
            Elevate Your Home <br />
            <span className="italic font-light text-slate-400">with Premium Offers</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Secure world-class <span className="text-[#003B73] font-bold">Bosch appliances</span> with 
            unparalleled benefits designed for the modern lifestyle.
          </motion.p>
        </div>

        {/* --- Offers Grid --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,59,115,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Metallic Shimmer Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#003B73]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Icon: Using Navy/Silver Gradient */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#003B73] text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#003B73] mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm italic">
                {item.desc}
              </p>

              {/* Brand Signal Underline (Logo Reference) */}
              <div className="mt-8 flex gap-1">
                 <div className="h-[2px] w-8 bg-[#003B73] rounded-full group-hover:w-16 transition-all duration-500"></div>
                 <div className="h-[2px] w-2 bg-blue-300 rounded-full"></div>
                 <div className="h-[2px] w-1 bg-blue-200 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Footer CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8"
        >
          
        </motion.div>

      </div>

      {/* Decorative Oval - Brand Motif */}
      <div className="absolute -top-24 -right-24 w-96 h-96 border border-[#003B73]/5 rounded-full pointer-events-none"></div>
    </section>
  );
}