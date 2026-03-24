import { ShieldCheck, Zap, Settings, Cpu, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyBosch() {
  const features = [
    {
      title: "German Engineering",
      desc: "Precision-built appliances designed with world-class technology for unmatched performance.",
      icon: <Settings size={28} />,
    },
    {
      title: "Energy Efficient",
      desc: "Save power and reduce bills with eco-friendly appliances built for maximum efficiency.",
      icon: <Zap size={28} />,
    },
    {
      title: "Durable & Reliable",
      desc: "Engineered for long-lasting performance with minimal maintenance and consistent results.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Smart Integration",
      desc: "Seamlessly connect and control your appliances with modern smart home technology.",
      icon: <Cpu size={28} />,
    },
  ];

  return (
     <section className="flex-grow py-10 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      {/* Background Accent: Subtle Logo Blue Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a4275]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-[#0a4275]"></span>
              <p className="uppercase tracking-[0.4em] text-[10px] font-serif text-[#0a4275]">
                Innovation Excellence
              </p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight tracking-tight"
            >
              The Power of <br />
              <span className="text-[#0a4275] italic font-serif">German Heritage.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-md text-lg font-serif leading-relaxed border-l border-slate-200 pl-8"
          >
            Discover why millions trust Bosch for appliances that 
            blend high-end innovation with legendary durability.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(10,66,117,0.12)] hover:border-[#0a4275]/20 transition-all duration-500"
            >
              {/* Branded Icon Container */}
              <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-[#0a4275] group-hover:bg-[#0a4275] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0a4275]/30 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font- serif text-slate-900 mb-4 tracking-tight group-hover:text-[#0a4275] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-serif">
                {item.desc}
              </p>

              {/* Minimal Link */}
              <div className="flex items-center gap-2 text-[10px] font-serif uppercase tracking-widest text-slate-400 group-hover:text-[#0a4275] transition-colors cursor-pointer">
                Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust bar in Silver & Blue */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 py-8 px-12 rounded-[2rem] bg-gradient-to-r from-[#0a4275] to-[#1e3a8a] flex flex-col md:flex-row items-center justify-between gap-6 text-white"
        >
          <div className="flex items-center gap-6">
            <div className="hidden sm:block p-3 bg-white/10 rounded-full border border-white/20">
              <ShieldCheck size={24} />
            </div>
            <p className="text-xl font-serif tracking-tight">Experience it live at our Velachery Showroom.</p>
          </div>
          <button className="bg-white text-[#0a4275] px-8 py-3 rounded-full font-serif text-sm hover:bg-slate-100 transition-colors shadow-xl">
            Schedule a Private Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
}