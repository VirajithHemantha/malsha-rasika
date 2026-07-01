import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: "/pre/3Z6A3622 copy.jpg.jpeg",
    aspectRatio: "3/4",
    rotate: "0deg"
  },
  {
    id: 2,
    src: "/pre/3Z6A3631 copy.jpg.jpeg",
    aspectRatio: "4/3",
    rotate: "0.4deg"
  },
  {
    id: 3,
    src: "/pre/3Z6A3690 copy.jpg.jpeg",
    aspectRatio: "1/1",
    rotate: "-0.35deg"
  },
  {
    id: 4,
    src: "/pre/3Z6A3868 copy.jpg.jpeg",
    aspectRatio: "2/3",
    rotate: "0deg"
  },
  {
    id: 5,
    src: "/pre/3Z6A3914 copy.jpg.jpeg",
    aspectRatio: "5/4",
    rotate: "0.4deg"
  },
  {
    id: 6,
    src: "/pre/3Z6A4139 copy.jpg.jpeg",
    aspectRatio: "3/2",
    rotate: "-0.35deg"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" aria-label="Our Gallery" className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 bg-[#12100C] text-[#FAFAF8]">
      <div className="pointer-events-none absolute inset-0 opacity-100" style={{ background: "radial-gradient(ellipse 75% 58% at 18% 28%, rgba(232,197,71,0.16) 0%, transparent 52%), radial-gradient(ellipse 50% 48% at 90% 72%, rgba(212,175,55,0.1) 0%, transparent 50%)" }} />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[min(60vw,480px)] w-[min(60vw,480px)] rounded-full blur-3xl opacity-30 bg-[#D4AF37]" />
      
      <div className="relative mx-auto max-w-6xl">
        <motion.div 
          className="mb-14 sm:mb-16 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "#E8C547" }}>
            <span className="inline-flex flex-col items-center sm:items-start justify-center gap-1 text-center sm:text-left">
              <span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Our Gallery</span>
              <span className="leading-none">අපගේ ඡායාරූප</span>
            </span>
          </p>
          <div className="flex items-center justify-center sm:justify-start mb-6" aria-hidden="true">
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-light italic" style={{ color: "rgba(255,252,245,0.96)" }}>
            <span className="inline-flex flex-col items-center sm:items-start justify-center gap-1 text-center sm:text-left">
              <span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Moments Together</span>
              <span className="leading-none">අපගේ මතකයන්</span>
            </span>
          </h2>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
          {galleryImages.map((img, index) => (
            <motion.button 
              key={img.id}
              type="button" 
              aria-label={`Open photo ${img.id} in full screen`}
              className="group mb-4 w-full break-inside-avoid text-left sm:mb-5 lg:mb-6 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/80"
              style={{ rotate: img.rotate }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <span 
                className="relative block overflow-hidden rounded-2xl shadow-2xl ring-1 transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] sm:rounded-[1.35rem]" 
                style={{ backgroundColor: "rgba(255,252,245,0.045)", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.48)" }}
              >
                <span className="relative block w-full overflow-hidden" style={{ aspectRatio: img.aspectRatio }}>
                  <img src={img.src} alt="" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]" loading="lazy" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-60 transition duration-500 group-hover:opacity-90" aria-hidden="true" />
                  
                  <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[10px] font-medium uppercase tracking-[0.35em] font-sans" style={{ color: "rgba(250,246,236,0.52)" }}>
                      <span className="inline-flex flex-col items-start gap-1">
                        <span className="leading-none">View</span>
                        <span className="leading-none">බලන්න</span>
                      </span>
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition duration-300 group-hover:scale-110 sm:h-10 sm:w-10" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(212,175,55,0.48)" }} aria-hidden="true">
                      <svg className="h-4 w-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};
