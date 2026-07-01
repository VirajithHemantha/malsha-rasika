const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add import
content = content.replace('import { Countdown } from "./components/Countdown";', 'import { Countdown } from "./components/Countdown";\nimport { Celebration } from "./components/Celebration";');

// 2. We want to replace the whole id="details" block and the timeline block.
const startDetails = content.indexOf('<section\n              id="details"');
const startGallery = content.indexOf('<Gallery />');

if (startDetails !== -1 && startGallery !== -1) {
  const before = content.substring(0, startDetails);
  const after = content.substring(startGallery);

  const newDetails = `
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
                        ඔබට / ඔබ දෙපළට / ඔබ සැමට කෙරෙන ගෞරවණීය ඇරයූමයි!
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <Celebration />

            `;

  fs.writeFileSync('src/App.tsx', before + newDetails.trim() + '\n\n            ' + after);
  console.log('Replaced successfully');
} else {
  console.log('Could not find start/end bounds');
}
