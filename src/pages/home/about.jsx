import { Sparkles, ShieldCheck, Store, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Premium Quality",
      desc: "Carefully curated appliances from top global brands like Bosch, ensuring durability and style.",
      icon: <Sparkles size={26} />,
    },
    {
      title: "Live Showroom",
      desc: "Don't just look—interact. Experience live demos in our Velachery store before making a choice.",
      icon: <Store size={26} />,
    },
    {
      title: "Trusted Guidance",
      desc: "Our consultants don't just sell; they help you find the perfect fit for your specific lifestyle.",
      icon: <ShieldCheck size={26} />,
    },
  ];

  return (
     <section className="flex-grow py-10 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      {/* Background Accent: Using the Deep Blue from the logo in a subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#1e3a8a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            {/* Logo Deep Blue Line */}
            <span className="h-px w-8 bg-[#0a4275]"></span> 
            <span className="uppercase tracking-[0.4em] text-xs font-serif text-[#0a4275]">
              The Bosch Experience
            </span>
            <span className="h-px w-8 bg-[#0a4275]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif tracking-tight text-slate-900 leading-[1.1]"
          >
             <span className="text-[#0a4275]">Engineering Excellence</span> <br />
            <span className="text-slate-400 font-serif">For Your Modern Home</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mt-8 text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            Located in the heart of <span className="text-[#0a4275] font-serif underline decoration-slate-300 decoration-4 underline-offset-4">Velachery</span>, 
            we bridge the gap between world-class German technology and your everyday comfort.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(10,66,117,0.12)] hover:border-slate-300 transition-all duration-500"
            >
              {/* Icon Container with Logo Colors: Deep Blue & Silver Shadow */}
              <div className="relative w-16 h-16 mb-8">
                <div className="absolute inset-0 bg-[#0a4275] rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-10 group-hover:opacity-100"></div>
                <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#0a4275] group-hover:bg-gradient-to-br from-[#0a4275] to-[#1e3a8a] group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-serif text-slate-900 mb-4 flex items-center gap-2">
                {feature.title}
                <CheckCircle2 size={16} className="text-[#0a4275] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat/Highlight in Logo Silver and Deep Blue */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-12 text-center"
        >
          <div>
            <p className="text-3xl font-serif text- slate-900">100%</p>
            <p className="text-sm text-slate-400 font-serif uppercase tracking-widest">Authentic Products</p>
          </div>
          <div>
            <p className="text-3xl font-serif text- slate-900">5+ Years</p>
            <p className="text-sm text-slate-400 font-serif uppercase tracking-widest">Serving Velachery</p>
          </div>
          <div>
            <p className="text-3xl font-serif text- slate-900">24/7</p>
            <p className="text-sm text-slate-400 font-serif uppercase tracking-widest">Support Readiness</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}