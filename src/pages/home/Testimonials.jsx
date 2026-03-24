import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Dhanasekar",
      location: "Velachery, Chennai",
      text: "The experience at the Velachery showroom was seamless. The staff didn't just sell; they explained the tech. My Bosch dishwasher has been a life-changer.",
      rating: 5,
    },
    {
      name: "Arun Kumar",
      location: "Adyar, Chennai",
      text: "I visited three showrooms before this one. The live demos here are what sold me. Seeing the built-in hobs in action made the decision easy.",
      rating: 5,
    },
    {
      name: "Suresh Raina",
      location: "Madipakkam, Chennai",
      text: "Excellent after-sales support. The installation was professional and they even gave a full demo of the washing machine features afterward.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 bg-[#fcfdfe] overflow-hidden">
      {/* Background Decorative Text in Logo Silver/Gray */}
      <div className="absolute top-10 left-10 text-[12rem] font- serif text-slate-100 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
        Elite
      </div>
      <div className="absolute bottom-10 right-10 text-[12rem] font-serif text-slate-100 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
        Care
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4 text-[#0a4275] font-serif uppercase tracking-[0.3em] text-xs"
            >
              <div className="h-px w-8 bg-[#0a4275]"></div>
              Customer Stories
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight tracking-tight"
            >
              Trusted by Homeowners <br />
              <span className="text-[#0a4275] italic font-serif">Across the City</span>
            </motion.h2>
          </div>

          {/* Branded Google Review Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(10,66,117,0.15)] border border-slate-100"
          >
            <div className="bg-[#0a4275] p-2.5 rounded-xl shadow-lg shadow-[#0a4275]/20">
              <Star className="text-white fill-white" size={20} />
            </div>
            <div>
              <p className="text-sm font-serif text-slate-900">4.9 / 5.0 Rating</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font- serif">500+ Google Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#0a4275]/30 hover:shadow-[0_30px_60px_-20px_rgba(10,66,117,0.12)] transition-all duration-500"
            >
              {/* Floating Quote Icon in Logo Blue */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0a4275] text-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 shadow-xl shadow-[#0a4275]/30">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#0a4275] text-[#0a4275]" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-lg mb-10 font- serif">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                {/* Branded Avatar: Blue/Silver Gradient */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0a4275] to-slate-400 flex items-center justify-center text-white font-serif text-xl shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font- serif text-slate-900 tracking-tight">{review.name}</h4>
                    <CheckCircle2 size={14} className="text-[#0a4275] fill-[#0a4275]/10" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-serif uppercase tracking-[0.15em]">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Text */}
        <div className="mt-20 text-center">
        
        </div>
      </div>
    </section>
  );
}