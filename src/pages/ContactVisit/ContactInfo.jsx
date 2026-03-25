import React from "react";
import { MapPin, Phone, MessageSquare, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion"; 

export default function ContactInfo() {
  const contactMethods = [
    { 
      icon: <Phone size={20} />, 
      label: "Call Our Consultants",
      value: "+91 98765 43210",
      action: "tel:+919876543210",
      primary: true,
    }, 
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp Support",
      value: "Chat with Experts",
      action: "https://wa.me/919876543210",
      primary: false,
    },
    {  
      icon: <Mail size={20} />,
      label: "Email Enquiries",
      value: "velachery.bosch@hc.com",
      action: "mailto:velachery.bosch@hc.com",
      primary: false,
    },
  ];

  return (  
    <section className="flex-grow py-20 px-6 bg-[#f5f7fa] border-y border-gray-100 font-serif text-[#003B73] relative">
      <div className="max-w-md mx-auto">
        
        {/* Header with Serif Styling */}
        <header className="mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#0a4275] font-serif font-bold text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            Direct Concierge
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Get In <span className="italic text-[#0a4275]">Touch</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#0a4275] mx-auto mt-4 opacity-20"></div>
        </header>

        {/* Contact Grid */}
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-5 p-5 rounded-2xl transition-all group ${
                method.primary 
                ? "bg-[#0a4275] text-white shadow-lg shadow-[#0a4275]/20 hover:scale-[1.02]" 
                : "bg-slate-50 text-slate-700 border border-slate-100 hover:border-[#0a4275]/30 hover:bg-white"
              }`}
            >
              <div className={`${method.primary ? "text-slate-200" : "text-[#0a4275]"} group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              
              <div className="flex-1 text-left">
                <p className={`text-[10px] font-serif font-bold uppercase tracking-widest ${method.primary ? "text-slate-300" : "text-slate-400"}`}>
                  {method.label}
                </p>
                <p className="text-base font-medium italic tracking-tight">
                  {method.value}
                </p>
              </div>

              <ExternalLink size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Address Card */}
        <div className="mt-8 pt-8 border-t border-slate-50 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-[#0a4275]">
              <MapPin size={18} />
              <span className="font-serif font-bold text-[11px] uppercase tracking-[0.2em]">Our Location</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              123, Luxury Retail Hub, Gandhi Road, <br />
              Velachery, Chennai - 600042
            </p>
          </div>
        </div>

        {/* HC Branding Branding Footer */}
        <footer className="mt-10 text-center">
          <p className="text-[9px] font-serif font-bold text-slate-300 uppercase tracking-[0.5em]">
            HC • Live Life
          </p>
        </footer>
      </div>
    </section>
  );
}