import React from "react";
import { Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessHours() {
  const schedule = [
    { days: "Mon – Sat", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { days: "Sunday", hours: "11:00 AM – 06:00 PM", status: "Special Hours" },
  ];

  return (
    <section className="flex-grow py-10 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock size={24} className="text-[#0a4275]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Showroom <span className="italic text-[#0a4275]">Hours</span>
          </h2>
        </div>

        {/* Single Line Schedule */}
        <div className="flex flex-wrap justify-center gap-10 text-center">

          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  {item.days}
                </p>
                <p className="text-lg text-slate-800 italic">
                  {item.hours}
                </p>
              </div>

              <span className="text-xs font-bold bg-[#0a4275]/10 text-[#0a4275] px-3 py-1 rounded-full">
                {item.status}
              </span>

            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
          <CalendarDays size={16} />
          Open All Holidays • Private appointments available
        </div>

      </div>

    </section>
  );
}