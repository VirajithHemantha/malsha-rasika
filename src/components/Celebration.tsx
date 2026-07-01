import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Celebration: React.FC = () => {
  return (
    <section aria-label="Celebration details" id="celebration" className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[#0C0B09]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.07) 0%, transparent 100%)" }} aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl" style={{ color: "#E8C547", textShadow: "0 0 40px rgba(232,197,71,0.22)" }}>
            <span className="inline-flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-[0.55em] md:text-[0.6em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Senuri Grand Castello</span>
              <span className="leading-none">උත්සව ස්ථානය</span>
            </span>
          </h2>
          <div className="flex items-center justify-center mt-4" aria-hidden="true">
            <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
              <line x1="0" y1="12" x2="86" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
              <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#D4AF37" fillOpacity="0.3" />
              <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#D4AF37" fillOpacity="0.3" />
              <circle cx="110" cy="12" r="3" fill="#D4AF37" fillOpacity="0.9" />
              <circle cx="110" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
              <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <line x1="134" y1="12" x2="220" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative overflow-hidden mx-auto max-w-2xl" style={{ border: "1.5px solid rgba(212,175,55,0.38)", boxShadow: "0 0 0 5px rgba(212,175,55,0.05), 0 24px 48px -16px rgba(0,0,0,0.65)" }}>
            <div className="aspect-[2.15/1] min-h-[10rem] sm:min-h-[13rem] max-h-[20rem] w-full">
              <img src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t1.6435-9/132493057_1338730883157286_6024845483998170464_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFSotDBkjMip0_6d3ZTNmgF1aLGQZzNAYbVosZBnM0Bhqrz9aBnNw3hz-WvzBCl4JO-Zcjpj812KSyVe9Kum_sn&_nc_ohc=YMWctpIz7usQ7kNvwFwvIyc&_nc_oc=Adrdehh3j4yltE9ulsfLF02LJkMhS9eEEAKEilbTTWUj32rLzCSRkNGExdLT2TZYYyE&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=00Uq2WhKgf-x3vGtm6OnZg&_nc_ss=7b2a8&oh=00_AQBkqrE9FkUWHigdMdv4OjUVKjfXm8hGLcdCxZugajqZaA&oe=6A6BB1FF" alt="Wedding venue" className="h-full w-full object-cover" loading="lazy" decoding="async" style={{ filter: "brightness(0.84) contrast(1.04)" }} />
            </div>
            {/* Corner accents */}
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "7px", right: "auto", borderTop: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "auto", right: "7px", borderTop: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "7px", right: "auto", borderBottom: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "auto", right: "7px", borderBottom: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
          </div>
          <p className="mt-6 text-center text-[10px] sm:text-xs font-medium tracking-[0.15em] font-sans max-w-xl mx-auto px-4" style={{ color: "rgba(232,197,71,0.75)" }}>
            <span className="inline-flex flex-col items-center gap-3">
              <span className="leading-relaxed font-bold">සම්ප්රදාය, අලංකාරය සහ නව ඇරඹුමක සුන්දරත්වය එක්වන තැන</span>
              <span className="text-[0.9em] opacity-80 leading-relaxed italic">“අපගේ ආදර කතාවේ අලංකාරම පරිච්ඡේදය ඔබ සමඟ සැමරීමට අප සතුටින් බලා සිටිමු.”</span>
            </span>
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mt-8">
          <motion.div 
            className="relative p-7 sm:p-9 text-center" 
            style={{ background: "rgba(255, 252, 245, 0.024)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(212, 175, 55, 0.22)", boxShadow: "rgba(232, 197, 71, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.55) 0px 8px 32px -8px" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", left: "-1px", borderTop: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", right: "-1px", borderTop: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", left: "-1px", borderBottom: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", right: "-1px", borderBottom: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            
            <h3 className="font-display text-2xl sm:text-3xl font-light italic mb-2" style={{ color: "#E8C547" }}>
              <span className="inline-flex flex-col items-center justify-center gap-1 text-center">
                <span className="text-[0.6em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-2">Location</span>
                <span className="leading-none">ගමනාන්තය</span>
              </span>
            </h3>
            <div className="h-px w-10 mx-auto mb-5 mt-4" style={{ background: "linear-gradient(90deg, transparent, #D4AF3788, transparent)" }} />
            <div className="space-y-4 text-sm sm:text-base font-light leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>
                <span className="inline-flex flex-col items-center gap-1 mt-2">
                  <span className="text-[1.1em]">Senuri Grand Castello, Divulapitiya</span>
                </span>
              </p>
              <p>
                <span className="inline-flex flex-col items-center gap-1 mt-3">
                  <span className="text-[0.75em] uppercase opacity-80 tracking-widest">09:30 AM</span>
                  <span className="text-[1.1em]">පෝරු උත්සවය පෙ.ව. 09:30</span>
                </span>
              </p>
            </div>
          </motion.div>
        </div>



        {/* Map Section */}
        <motion.div 
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative p-[1.5px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#E8C547]/30 to-[#D4AF37]/10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#0a0908] rounded-[22px] overflow-hidden">
              <div className="aspect-video w-full relative grayscale-[0.5] contrast-125 sepia-[0.3] brightness-[0.8] hover:grayscale-0 hover:sepia-0 hover:contrast-100 transition-all duration-1000">
                <iframe
                  src="https://maps.google.com/maps?q=Senuri%20Grand%20Castello%2C%20Divulapitiya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full scale-[1.02]"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#D4AF37]/10 to-transparent mix-blend-overlay" />
              </div>
              
              <button
                onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Senuri+Grand+Castello+Divulapitiya", "_blank")}
                className="w-full group/btn relative inline-flex items-center justify-center gap-3 py-5 bg-[#0C0B09] border-t border-[#D4AF37]/20 text-[#E8C547] text-[10px] md:text-xs font-bold tracking-[0.4em] overflow-hidden transition-all hover:bg-[#D4AF37] hover:text-black mt-0"
              >
                <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  සිතියම විවෘත කරන්න
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
