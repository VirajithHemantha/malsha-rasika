import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Sparkles, MapPin, Calendar, Clock, Send, ChevronDown } from "lucide-react";
import { IntroVideo } from "./components/IntroVideo";
import { Countdown } from "./components/Countdown";
import { Gallery } from "./components/Gallery";
import { Celebration } from "./components/Celebration";

const INVITATION = {
  couple: {
    bride: "මල්ෂා",
    groom: "නුවන්",
    brideFull: "පීරිස්ගේ මල්ෂා මධුවන්ති",
    groomFull: "එච්. කේ. ජී. රසික නුවන් රාජපක්ෂ",
  },
  date: {
    displayNumeric: "13 . 08 . 2026",
    displayLong: "13 අගෝස්තු 2026",
    countdownTarget: "2026-08-13T16:00:00+05:30",
  },
  time: {
    ceremonyStart: "පෙ.ව. 09:30",
    ceremonyEnd: "ප.ව. 04:30",
    pooruwa: "පෙ.ව. 10:11",
    registration: "පෙ.ව. 11:21",
    welcome: "පෙ.ව. 09:30",
  },
  venue: {
    name: "Senuri Grand Castello",
    city: "Divulapitiya",
    mapQuery: "Senuri Grand Castello, Divulapitiya",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Senuri+Grand+Castello+Divulapitiya",
  },
  rsvpContacts: ["රසික: 071-XXXXXXX", "මල්ෂා: 071-XXXXXXX"],
} as const;

const backgroundMusic = "/sinhanada.net-Thawthisa-Lowen-Ashen-Sheenadi-Wedding-Song.mp3";
const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbyI1qJ_zkiTXl-5TeuA29VeY3RA4bssHn8TJIbNu2v0ORbktF7GMkCZiqKFUSKVJYCn/exec";

const HERO_BACKGROUND_IMAGE = "/ChatGPT Image May 14, 2026, 03_15_02 PM.png";
const DETAILS_BACKGROUND_IMAGE = "/ChatGPT Image May 22, 2026, 12_26_02 AM.png";
const TIMELINE_BACKGROUND_IMAGE = "/ChatGPT Image May 22, 2026, 12_28_21 AM.png";
const WISHES_BACKGROUND_IMAGE = "/ChatGPT Image May 14, 2026, 03_54_56 PM.png";

function FloatingPetals() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [petals, setPetals] = useState<
    Array<{
      id: number;
      x: number;
      size: number;
      rotation: number;
      duration: number;
      delay: number;
      color: string;
      drift: number;
    }>
  >([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    setIsLowPowerMode(reduceMotion || isMobile);

    if (reduceMotion) {
      setPetals([]);
      return;
    }

    const colors = ["#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#fbcfe8"];
    const petalCount = isMobile ? 10 : 18;

    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 7 + 7,
      rotation: Math.random() * 360,
      duration: Math.random() * 11 + 16,
      delay: Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 24 - 12,
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-40 ${isLowPowerMode ? "opacity-70" : ""}`}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute drop-shadow-[0_2px_10px_rgba(195,14,89,0.3)]"
          style={{ color: petal.color }}
          initial={{
            x: `${petal.x}vw`,
            y: "-10vh",
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: `${petal.x + petal.drift}vw`,
            rotate: petal.rotation + (isLowPowerMode ? 360 : 720),
            opacity: [0, 0.9, 0.8, 0],
          }}
          transition={{
            duration: isLowPowerMode ? petal.duration * 1.2 : petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C12,2 10,6 10,10C10,14 12,22 12,22C12,22 14,14 14,10C14,6 12,2 12,2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function CountdownTimer({ isDark = false }: { isDark?: boolean }) {
  const targetDate = new Date(INVITATION.date.countdownTarget).getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const stats = [
    { label: "දින", value: days, en: "DAYS" },
    { label: "පැය", value: hours, en: "HOURS" },
    { label: "මිනිත්තු", value: minutes, en: "MINS" },
    { label: "තත්පර", value: seconds, en: "SECS" },
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 justify-center w-full max-w-4xl mx-auto mt-8 md:mt-16 z-20 px-2">
      {stats.map((stat, i) => (
        <motion.div
          key=<span className="inline-flex flex-col items-center gap-0.5"><span className="text-[0.8em] md:text-[0.65em] uppercase opacity-80">{stat.en}</span><span>{stat.label}</span></span>
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
          className="relative group"
        >
          <div
            className={`relative w-[4.5rem] h-[6.5rem] sm:w-20 sm:h-28 md:w-32 md:h-44 rounded-t-full shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)] border flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:-translate-y-3 ${isDark ? "bg-[#8c6b2b] border-white/20" : "bg-white border-sky-100/60"
              }`}
          >
            <div
              className={`absolute inset-1.5 sm:inset-2 md:inset-3 border-[0.5px] rounded-t-full pointer-events-none ${isDark ? "border-white/30" : "border-theme-300/50"
                }`}
            />

            <span
              className={`font-numeric text-2xl sm:text-3xl md:text-5xl leading-none relative z-10 drop-shadow-sm mt-3 sm:mt-4 md:mt-6 transition-transform duration-500 group-hover:scale-110 ${isDark ? "text-white" : "text-[#8c6b2b]"
                }`}
            >
              {Math.max(0, stat.value).toString().padStart(2, "0")}
            </span>

            <div className="w-full flex justify-center mt-2 sm:mt-3 md:mt-6 mb-1 sm:mb-2 relative z-10">
              <span
                className={`text-[5px] sm:text-[6px] md:text-[8px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border shadow-sm whitespace-nowrap ${isDark
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-stone-50 text-stone-500 border-sky-100/50"
                  }`}
              >
                <span className="inline-flex flex-col items-center gap-0.5"><span className="text-[0.8em] md:text-[0.65em] uppercase opacity-80">{stat.en}</span><span>{stat.label}</span></span>
              </span>
            </div>

            <div
              className={`absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-[3px] h-[3px] sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 rotate-45 ${isDark ? "bg-white/40" : "bg-[#fde047]"
                }`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}


export default function WeddingInvitation() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAttemptedAutoplay, setHasAttemptedAutoplay] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    guests: "1",
  });

  const [wishForm, setWishForm] = useState({
    name: "",
    message: "",
  });

  const [rsvpStatus, setRsvpStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [wishStatus, setWishStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const submitToGoogleSheet = async (payload: Record<string, string>) => {
    if (!googleScriptUrl) {
      throw new Error("Google Script URL tl ilid ke;");
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: new URLSearchParams(payload),
    });

    if (!response.ok) {
      throw new Error("b,a,Su id¾:l fkdùh");
    }
  };

  const handleRsvpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!rsvpForm.name.trim()) {
      setRsvpStatus("error");
      return;
    }

    setRsvpStatus("sending");

    try {
      await submitToGoogleSheet({
        action: "rsvp",
        name: rsvpForm.name.trim(),
        guests: rsvpForm.guests,
        dietaryNotes: "",
      });

      setRsvpStatus("success");
      setRsvpForm({ name: "", guests: "1" });
    } catch {
      setRsvpStatus("error");
    }
  };

  const handleWishSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!wishForm.name.trim() || !wishForm.message.trim()) {
      setWishStatus("error");
      return;
    }

    setWishStatus("sending");

    try {
      await submitToGoogleSheet({
        action: "wish",
        name: wishForm.name.trim(),
        message: wishForm.message.trim(),
      });

      setWishStatus("success");
      setWishForm({ name: "", message: "" });
    } catch {
      setWishStatus("error");
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isOpened && !isPlaying && !hasAttemptedAutoplay && audioRef.current) {
      setHasAttemptedAutoplay(true);

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          const playOnInteraction = () => {
            if (audioRef.current && !isPlaying) {
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  window.removeEventListener("click", playOnInteraction);
                })
                .catch(() => { });
            }
          };

          window.addEventListener("click", playOnInteraction);
        });
    }
  }, [isOpened, isPlaying, hasAttemptedAutoplay]);

  return (
    <main
      className={`dl-manel-bold h-[100dvh] w-full bg-white transition-all duration-1000 ${isOpened ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden flex items-center justify-center"
        } relative scroll-smooth`}
    >
      <FloatingPetals />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="video-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          >
            {!hasStarted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-[120] bg-black/40 backdrop-blur-[2px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-12"
                  >
                    <h2 className="text-4xl md:text-6xl text-white mb-2 drop-shadow-2xl">
                      <span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Wedding Ceremony</span><span className="leading-none">විවාහ මංගල්‍යය</span></span>
                    </h2>
                  </motion.div>

                  <button
                    onClick={() => setHasStarted(true)}
                    className="group relative px-12 py-5 overflow-hidden rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-[#8c6b2b] opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 font-bold text-white text-sm tracking-[0.35em]">
                      ආරාධනය විවෘත කරන්න
                    </span>
                  </button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 text-white/50 text-[10px] tracking-[0.35em]"
                  >
                    ආරම්භ කිරීමට ක්ලික් කරන්න
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <IntroVideo onComplete={() => setIsOpened(true)} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="website-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="website-shell relative z-20 w-full"
          >
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsOpened(false)}
              className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-sky-100 text-[#8c6b2b] hover:bg-sky-50 transition-colors"
            >
              <div className="flex flex-col items-center">
                <div className="text-[8px] tracking-widest font-bold"><span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Close</span><span className="leading-none">වසා දමන්න</span></span></div>
              </div>
            </motion.button>

            <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 h-[115%] -top-[7.5%]" style={{ transform: "translateY(2.07039%)" }}>
                <img 
                  src="/pre/3Z6A3622 copy.jpg.jpeg" 
                  alt="Wedding Background" 
                  className="h-full w-full object-cover object-[center_22%]" 
                  loading="eager" 
                  decoding="async" 
                  style={{ filter: "brightness(0.65) saturate(0.9)" }} 
                />
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: `radial-gradient(ellipse 85% 75% at 50% 50%, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.72) 100%),
                                 linear-gradient(180deg, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.05) 25%, rgba(8,8,8,0.05) 75%, rgba(8,8,8,0.8) 100%)`
                  }} 
                />
                <div 
                  className="pointer-events-none absolute inset-0" 
                  style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} 
                  aria-hidden="true" 
                />
                <div 
                  className="pointer-events-none absolute inset-0" 
                  aria-hidden="true" 
                  style={{
                    background: `radial-gradient(circle 180px at 20% 70%, rgba(212,175,55,0.09) 0%, transparent 60%),
                                 radial-gradient(circle 120px at 78% 30%, rgba(232,197,71,0.07) 0%, transparent 55%)`
                  }} 
                />
              </div>

              <motion.div 
                className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10 py-24 max-w-2xl mx-auto w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <p className="font-serif text-2xl sm:text-3xl mb-2" style={{ color: "#E8C547", textShadow: "0 0 48px rgba(232,197,71,0.35)" }}>
                  <span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Wedding Invitation</span><span className="leading-none">විවාහ ආරාධනය</span></span>
                </p>
                
                <h1 className="font-display font-light italic leading-[0.95] tracking-wide mt-10" style={{ fontSize: "clamp(2.4rem, 10vw, 5.5rem)", color: "#FFFFFF", textShadow: "0 2px 48px rgba(0,0,0,0.45), 0 0 80px #F5EDD01f", overflowWrap: "break-word", wordBreak: "break-word", maxWidth: "100%" }}>
                  <span className="inline-flex flex-col items-center justify-center"><span className="text-[0.4em] md:text-[0.35em] font-sans uppercase tracking-[0.2em] opacity-100 mb-2 leading-none">Malsha</span><span>{INVITATION.couple.bride}</span></span>
                </h1>
                <p className="font-serif leading-none select-none" style={{ fontSize: "clamp(3.5rem, 13vw, 6.5rem)", color: "#E8C547", textShadow: "0 0 72px rgba(232,197,71,0.4), 0 0 120px #F5EDD02e", margin: "0.05em 0" }}>
                  <span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">&</span><span className="leading-none">සහ</span></span>
                </p>
                <h1 className="font-display font-light italic leading-[0.95] tracking-wide" style={{ fontSize: "clamp(2.4rem, 10vw, 5.5rem)", color: "#FFFFFF", textShadow: "0 2px 48px rgba(0,0,0,0.45), 0 0 80px #F5EDD01f", overflowWrap: "break-word", wordBreak: "break-word", maxWidth: "100%" }}>
                  <span className="inline-flex flex-col items-center justify-center"><span className="text-[0.4em] md:text-[0.35em] font-sans uppercase tracking-[0.2em] opacity-100 mb-2 leading-none">Nuwan</span><span>{INVITATION.couple.groom}</span></span>
                </h1>
                
                <div className="mt-9 sm:mt-11 mb-6 sm:mb-7 flex items-center gap-3 w-full max-w-[14rem]">
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #D4AF37bb)" }} />
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <polygon points="4,0 8,4 4,8 0,4" fill="#D4AF37" fillOpacity="0.9" />
                  </svg>
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(270deg, transparent, #D4AF37bb)" }} />
                </div>
                
                <p className="text-sm sm:text-base font-light leading-snug font-sans" style={{ color: "rgba(255,255,255,0.82)" }}>
                  <span className="inline-flex flex-col items-center"><span className="text-[0.8em] md:text-[0.65em] font-sans uppercase opacity-100">13 August 2026</span><span>{INVITATION.date.displayLong}</span></span>
                </p>
                <p className="mt-2 text-xs sm:text-sm font-light font-sans" style={{ color: "rgba(232,197,71,0.72)" }}>{INVITATION.venue.city}</p>
              </motion.div>

              <motion.div 
                className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer" 
                aria-hidden="true"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-px h-7" style={{ background: "linear-gradient(180deg, transparent, #D4AF3790)" }} />
                <div>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" />
                  </svg>
                </div>
              </motion.div>
            </section>

            <Countdown targetDate={new Date(INVITATION.date.countdownTarget)} />

            <section
              id="details"
              className="relative pt-12 md:pt-20 pb-12 w-full flex flex-col items-center overflow-hidden bg-[#0C0B09]"
            >
              <div className="absolute inset-4 md:inset-8 border-[1.5px] border-[#D4AF37]/20 pointer-events-none z-10" />
              <div className="absolute inset-5 md:inset-10 border-[0.5px] border-[#E8C547]/10 pointer-events-none z-10" />

              <div className="max-w-[1100px] w-full flex flex-col items-center text-center relative z-20 px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center mb-16 space-y-6"
                >
                  <div className="flex items-center gap-4 opacity-40">
                    <div className="h-px w-8 bg-[#D4AF37]" />
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <div className="h-px w-8 bg-[#D4AF37]" />
                  </div>

                  <div className="text-[#E8C547] space-y-4">
                    <div className="space-y-4 mb-8">
                      <p className="text-[11px] md:text-sm tracking-[0.4em] mb-2 font-bold font-sans opacity-80">
                        පවුල් දෙකක් ආදරයෙන් එක්වන මොහොතක්
                      </p>

                      <div className="flex flex-col items-center justify-center gap-2">
                        <span className="text-sm md:text-base tracking-wider text-[rgba(255,255,255,0.7)]">
                          එච්. කේ. ජී. නිමල් රාජපක්ෂ මැතිතුමාගේ සහ ඒ. ජී. ආරියවතී මැතිනියගේ ආදරණීය පුතණුවන්
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-[#E8C547] my-1 drop-shadow-[0_0_15px_rgba(232,197,71,0.2)]">
                          {INVITATION.couple.groomFull}
                        </span>
                        <span className="text-2xl text-[#D4AF37] italic my-2"><span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">With</span><span className="leading-none">සමඟ</span></span></span>
                        <span className="text-sm md:text-base tracking-wider text-[rgba(255,255,255,0.7)]">
                          පී. සමන්ත මැතිතුමාගේ සහ ඊ. පුෂ්පලතා මැතිනියගේ ආදරණීය දියණිය
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-[#E8C547] my-1 drop-shadow-[0_0_15px_rgba(232,197,71,0.2)]">
                          {INVITATION.couple.brideFull}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] md:text-[13px] tracking-[0.2em] md:tracking-[0.4em] font-medium leading-loose max-w-3xl border-t border-b border-[#D4AF37]/30 py-6 text-[rgba(255,255,255,0.85)]">
                      අතිනත ගැනීමේ ප්‍රීතිය නිමිත්තෙන් පැවැත්වෙන ප්‍රිය සම්භාෂණයට සහභාගී වන මෙන්
                      <br />
                      <span className="text-[#E8C547] font-bold text-base md:text-lg my-2 block drop-shadow-sm">
                        ඔබට කෙරෙන ගෞරවණීය ඇරයූමයි!
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <Celebration />

            <Gallery />



            <section className="relative py-32 md:py-48 flex flex-col items-center overflow-hidden bg-[#0C0B09]">
              <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center relative z-10 w-full">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl text-[#E8C547] tracking-[0.3em] mb-12 text-center"
                >
                  පැමිණීම තහවුරු කිරීම
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-[650px] bg-[#0a0908] p-6 md:p-10 shadow-[0_40px_100px_-25px_rgba(212,175,55,0.05)] border border-[#D4AF37]/20 flex flex-col items-center"
                >
                  <div className="w-full border border-[#D4AF37]/30 rounded-[1.5rem] p-6 md:p-8 flex flex-col items-center">
                    <h3 className="text-2xl md:text-4xl text-[#E8C547] mb-8 text-center">
                      ඔබ පැමිණෙන්නේද?
                    </h3>

                    <form className="w-full space-y-6 text-left" onSubmit={handleRsvpSubmit}>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[rgba(255,255,255,0.7)] ml-1"><span className="inline-flex flex-col items-start gap-1"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Your Name</span><span className="leading-none">ඔබගේ නම</span></span></label>
                        <input
                          type="text"
                          placeholder="Your Name / ඔබගේ නම මෙහි ලියන්න..."
                          value={rsvpForm.name}
                          onChange={(e) => {
                            setRsvpStatus("idle");
                            setRsvpForm((prev) => ({ ...prev, name: e.target.value }));
                          }}
                          className="w-full bg-transparent border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-[#E8C547] placeholder:text-[#E8C547]/30 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-base font-numeric"
                          required
                        />
                      </div>

                      <div className="space-y-4 pt-2">
                        <label className="text-xs font-bold text-[rgba(255,255,255,0.7)] ml-1">
                          අපගේ විශේෂ දිනයට ඔබ පැමිණෙන්නේද?
                        </label>

                        <button
                          type="button"
                          onClick={() => {
                            setRsvpStatus("idle");
                            setRsvpForm((prev) => ({ ...prev, guests: "1" }));
                          }}
                          aria-pressed={rsvpForm.guests !== "0"}
                          className={`w-full py-5 md:py-6 rounded-xl text-[11px] md:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center px-4 leading-relaxed active:scale-[0.98] ${rsvpForm.guests === "1" ? "bg-[#D4AF37] text-black font-bold" : "bg-[#111] hover:bg-[#222] text-[#E8C547] border border-[#D4AF37]/30"}`}
                        >
                          ඔව්, මම ආදරයෙන් පැමිණෙන්නම්!
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setRsvpStatus("idle");
                            setRsvpForm((prev) => ({ ...prev, guests: "0" }));
                          }}
                          aria-pressed={rsvpForm.guests === "0"}
                          className={`w-full py-5 md:py-6 rounded-xl text-[11px] md:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center px-4 leading-relaxed active:scale-[0.98] ${rsvpForm.guests === "0" ? "bg-[#D4AF37] text-black font-bold" : "bg-[#111] hover:bg-[#222] text-[#E8C547] border border-[#D4AF37]/30"}`}
                        >
                          කණගාටුයි, මට පැමිණිය නොහැක. නමුත් මගේ ආශීර්වාදය ඔබ සමඟයි.
                        </button>
                      </div>

                      {(rsvpStatus === "success" || rsvpStatus === "error") && (
                        <p
                          className={`text-[10px] text-center font-semibold ${rsvpStatus === "success" ? "text-emerald-400" : "text-red-400"
                            }`}
                        >
                          {rsvpStatus === "success"
                            ? "ඔබගේ පැමිණීම තහවුරු කිරීම සාර්ථකව යවා ඇත."
                            : "කරුණාකර ඔබගේ නම ඇතුළත් කර නැවත උත්සාහ කරන්න."}
                        </p>
                      )}

                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={rsvpStatus === "sending"}
                          className="w-full bg-[#D4AF37] text-black py-4 md:py-5 rounded-xl text-xs md:text-sm tracking-[0.2em] font-bold hover:bg-[#E8C547] transition-all shadow-md disabled:opacity-70"
                        >
                          {rsvpStatus === "sending" ? "යවමින්..." : "තහවුරු කරන්න"}
                        </button>

                        <p className="text-[10px] text-[rgba(255,255,255,0.4)] mt-4 text-center leading-relaxed">
                          ඔබගේ ප්‍රතිචාරය පුද්ගලිකව තබා ගනු ලැබේ.
                        </p>
                      </div>
                    </form>
                  </div>
                </motion.div>

              </div>
            </section>



            <section className="relative py-24 md:py-32 w-full flex justify-center bg-[#0C0B09]">
              <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 md:mb-16"
                >
                  <h2 className="text-3xl md:text-5xl text-[#D4AF37] italic drop-shadow-sm">
                    <span className="inline-flex flex-col items-center justify-center gap-1 text-center">
                      <span className="text-[0.6em] md:text-[0.45em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">
                        A Beautiful Journey
                      </span>
                      <span className="leading-none">සුන්දර ගමනක්</span>
                    </span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative p-4 md:p-6 bg-[#0a0908] shadow-[0_20px_50px_-10px_rgba(212,175,55,0.05)] border border-[#D4AF37]/30 max-w-2xl w-full"
                >
                  <div className="absolute inset-2 border-[0.5px] border-[#D4AF37]/40 pointer-events-none" />
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />

                  <img
                    src="/pre/Gemini_Generated_Image_s7xpors7xpors7xp (1).png"
                    alt="Highlighted Moment"
                    className="w-full h-auto object-cover border border-[#D4AF37]/20"
                  />

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0C0B09] px-8 py-3 border border-[#D4AF37]/30 shadow-lg text-[#E8C547]">
                    <span className="inline-flex flex-col items-center justify-center gap-1 text-center">
                      <span className="text-[0.65em] uppercase tracking-[0.3em] font-sans font-bold">Forever</span>
                      <span className="italic">සදාකාලිකයි</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </section>



            <section className="relative py-28 md:py-48 overflow-hidden bg-[#0C0B09]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] text-[#D4AF37]/5 whitespace-nowrap pointer-events-none select-none italic">
                මිහිරි පණිවිඩ
              </div>

              <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 mb-20"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-[#D4AF37] font-bold tracking-[0.6em] text-[10px] md:text-xs opacity-70">
                      අමුත්තන්ගේ සටහන් පොත
                    </span>
                    <div className="h-px w-16 bg-[#D4AF37]/30" />
                  </div>

                  <h2 className="text-5xl md:text-8xl bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] bg-clip-text text-transparent leading-none drop-shadow-sm italic">
                    ආදරණීය පැතුම්
                  </h2>

                  <p className="text-[rgba(255,255,255,0.7)] text-xs md:text-sm tracking-[0.3em] font-medium max-w-xl mx-auto pt-4 leading-loose">
                    <span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Your love and blessings are the most valuable gifts we receive. Leave a memorable note for our new life.</span><span className="leading-none">ඔබගේ ආදරය සහ ආශීර්වාදය අපට ලැබෙන වටිනාම ත්‍යාගයකි. නව ජීවිතයට මතක සටහනක් තබා යන්න.</span></span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="bg-[#0a0908] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(212,175,55,0.05)] border border-[#D4AF37]/20 relative overflow-hidden">
                    <div className="absolute inset-4 border border-[#D4AF37]/10 pointer-events-none" />
                    <div className="absolute inset-6 border-[0.5px] border-[#D4AF37]/10 pointer-events-none" />

                    <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#D4AF37]/40 rounded-tl-xl" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#D4AF37]/40 rounded-br-xl" />

                    <form className="space-y-16 text-left relative z-10" onSubmit={handleWishSubmit}>
                      <div className="space-y-6 group">
                        <label className="text-sm tracking-[0.4em] font-bold text-[rgba(255,255,255,0.4)] group-focus-within:text-[#D4AF37] transition-colors">
                          ඔබගේ නම
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="ඔබගේ නම"
                            value={wishForm.name}
                            onChange={(e) => {
                              setWishStatus("idle");
                              setWishForm((prev) => ({ ...prev, name: e.target.value }));
                            }}
                            className="w-full bg-transparent border-b border-[#D4AF37]/40 px-0 py-4 text-[#E8C547] placeholder:text-[#E8C547]/30 focus:outline-none focus:border-[#D4AF37] transition-all text-base tracking-widest font-numeric"
                            required
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full" />
                        </div>
                      </div>

                      <div className="space-y-6 group">
                        <label className="text-sm tracking-[0.4em] font-bold text-[rgba(255,255,255,0.4)] group-focus-within:text-[#D4AF37] transition-colors">
                          ඔබගේ පණිවිඩය
                        </label>
                        <div className="relative">
                          <textarea
                            rows={4}
                            placeholder="Your warm wishes / නව යුවළට ඔබගේ ආදරණීය පැතුම් ලියන්න..."
                            value={wishForm.message}
                            onChange={(e) => {
                              setWishStatus("idle");
                              setWishForm((prev) => ({ ...prev, message: e.target.value }));
                            }}
                            className="w-full bg-transparent border-b border-[#D4AF37]/40 px-0 py-4 text-[#E8C547] placeholder:text-[#E8C547]/30 focus:outline-none focus:border-[#D4AF37] transition-all text-sm tracking-widest resize-none leading-relaxed font-numeric"
                            required
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {(wishStatus === "success" || wishStatus === "error") && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`text-[10px] text-center font-bold tracking-widest ${wishStatus === "success" ? "text-emerald-400" : "text-red-400"
                              }`}
                          >
                            {wishStatus === "success"
                              ? "ඔබගේ ආදරණීය පණිවිඩය සාර්ථකව යවා ඇත"
                              : "කරුණාකර නම සහ පණිවිඩය සම්පූර්ණ කරන්න"}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <div className="pt-8 flex justify-center">
                        <button
                          type="submit"
                          disabled={wishStatus === "sending"}
                          className="group relative px-16 py-6 bg-[#D4AF37] text-black font-bold tracking-[0.5em] text-[10px] hover:bg-[#E8C547] transition-all duration-500 shadow-xl disabled:opacity-70 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                          <span className="relative z-10 flex items-center gap-3">
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            {wishStatus === "sending" ? "යවමින්..." : "පැතුම් යවන්න"}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className="w-full relative overflow-hidden py-24 md:py-32 bg-[#0C0B09]">
              <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-center gap-3 opacity-70">
                    <div className="h-px w-10 bg-[#D4AF37]/40" />
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <div className="h-px w-10 bg-[#D4AF37]/40" />
                  </div>

                  <h2 className="text-5xl md:text-7xl bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] bg-clip-text text-transparent italic drop-shadow-sm">
                    ස්තූතියි
                  </h2>

                  <p className="text-[rgba(255,255,255,0.7)] text-xs md:text-sm tracking-[0.25em] font-medium leading-loose max-w-3xl mx-auto">
                    <span className="inline-flex flex-col items-center justify-center gap-1 text-center"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">We look forward to celebrating our special day with you with love.</span><span className="leading-none">අපගේ විශේෂ දිනය ඔබ සමඟ ආදරයෙන් සැමරීමට අපි බලා සිටිමු.</span></span>
                  </p>

                  <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#D4AF37]/50 font-bold">
                    © 2026 <span className="inline-flex flex-col items-center justify-center"><span className="text-[0.4em] md:text-[0.35em] font-sans uppercase tracking-[0.2em] opacity-100 mb-2 leading-none">Malsha</span><span>{INVITATION.couple.bride}</span></span> සහ <span className="inline-flex flex-col items-center justify-center"><span className="text-[0.4em] md:text-[0.35em] font-sans uppercase tracking-[0.2em] opacity-100 mb-2 leading-none">Nuwan</span><span>{INVITATION.couple.groom}</span></span>
                  </p>
                  
                  <p className="text-[8px] md:text-[10px] tracking-[0.3em] text-[#D4AF37]/40 font-medium font-sans uppercase pt-4">
                    Designed by Invitemint - 0707819074
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <audio ref={audioRef} src={backgroundMusic} loop />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[60] bg-white text-[#87937a] p-3 rounded-full shadow-lg border border-[#ccbaa2]/40 hover:bg-[#87937a]/10 transition-colors"
      >
        <div className="flex flex-col items-center">
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </div>
      </motion.button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .dl-manel-bold,
            .dl-manel-bold * {
              font-family: 'Abhaya Libre', Arial, sans-serif !important;
            }

            input,
            textarea,
            button {
              font-family: 'Abhaya Libre', Arial, sans-serif !important;
            }

            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            .animate-spin-slow {
              animation: spin-slow linear infinite;
            }

            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: #ccbaa233;
            }

            ::-webkit-scrollbar-thumb {
              background: #87937a66;
              border-radius: 10px;
            }

            @media (max-width: 768px) {
              html {
                font-size: 120% !important;
              }
              
              .text-\[5px\] {
                font-size: 8px !important;
              }
              
              .text-\[8px\] {
                font-size: 11px !important;
              }
              
              .text-\[10px\] {
                font-size: 13px !important;
              }
              
              .text-\[11px\] {
                font-size: 14px !important;
              }
            }
          `,
        }}
      />
    </main>
  );
}