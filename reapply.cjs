const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Groom Name
content = content.replace(/groom: "රසික"/g, 'groom: "නුවන්"');
content = content.replace(/>Rasika<\/span>/g, '>Nuwan</span>');
content = content.replace(/ සහ <span className="inline-flex flex-col items-center justify-center"><span className="text-\[0\.4em\] md:text-\[0\.35em\] font-sans uppercase tracking-\[0\.2em\] opacity-100 mb-2 leading-none">Rasika<\/span>/g, ' සහ <span className="inline-flex flex-col items-center justify-center"><span className="text-[0.4em] md:text-[0.35em] font-sans uppercase tracking-[0.2em] opacity-100 mb-2 leading-none">Nuwan</span>');

// 2. Timeline properties
content = content.replace(
  /time: \{\s*ceremonyStart: "ප\.ව\. 04:00",\s*ceremonyEnd: "ප\.ව\. 09:30",\s*registration: "ප\.ව\. 04:00",\s*welcome: "ප\.ව\. 04:00",\s*\}/g,
  `time: {
    ceremonyStart: "පෙ.ව. 09:30",
    ceremonyEnd: "ප.ව. 04:30",
    pooruwa: "පෙ.ව. 10:11",
    registration: "පෙ.ව. 11:21",
    welcome: "පෙ.ව. 09:30",
  }`
);

// 3. Timeline English times replacements
content = content.replace(/04:00 PM<\/span><span>\{INVITATION\.time\.ceremonyStart\}<\/span>/g, '09:30 AM</span><span>{INVITATION.time.ceremonyStart}</span>');

// Wait, the pooruwa one was explicitly replaced to INVITATION.time.pooruwa
content = content.replace(/පෝරු උත්සවය <span className="inline-flex flex-col items-center"><span className="text-\[0\.8em\] md:text-\[0\.65em\] font-sans uppercase opacity-100">04:00 PM<\/span><span>\{INVITATION\.time\.ceremonyStart\}<\/span><\/span>ට/g, 
  'පෝරු උත්සවය <span className="inline-flex flex-col items-center"><span className="text-[0.8em] md:text-[0.65em] font-sans uppercase opacity-100">10:11 AM</span><span>{INVITATION.time.pooruwa}</span></span>ට');

content = content.replace(/<span className="inline-flex flex-col items-center"><span className="text-\[0\.8em\] md:text-\[0\.65em\] font-sans uppercase opacity-100">04:00 PM<\/span><span>\{INVITATION\.time\.ceremonyStart\}<\/span><\/span>\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<button\s*onClick=\{\(\) => window\.open\(INVITATION\.venue\.googleMapsLink/g, 
  `<span className="inline-flex flex-col items-center"><span className="text-[0.8em] md:text-[0.65em] font-sans uppercase opacity-100">10:11 AM</span><span>{INVITATION.time.pooruwa}</span></span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => window.open(INVITATION.venue.googleMapsLink`);

// 4. Timeline mapping 
content = content.replace(/\[<span className="inline-flex flex-col items-start gap-1"><span className="text-\[0\.75em\] md:text-\[0\.8em\] md:text-\[0\.65em\] uppercase tracking-\[0\.2em\] font-sans opacity-100 leading-none mt-1 mb-1">Poruwa Ceremony<\/span><span className="leading-none">පෝරු උත්සවය<\/span><\/span>, INVITATION\.time\.ceremonyStart\], \[<span className="inline-flex flex-col items-start gap-1"><span className="text-\[0\.75em\] md:text-\[0\.8em\] md:text-\[0\.65em\] uppercase tracking-\[0\.2em\] font-sans opacity-100 leading-none mt-1 mb-1">End of Ceremony<\/span><span className="leading-none">උත්සවය අවසානය<\/span><\/span>, INVITATION\.time\.ceremonyEnd\],/g, 
  `[<span className="inline-flex flex-col items-start gap-1"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Welcome</span><span className="leading-none">පිළිගැනීම</span></span>, INVITATION.time.ceremonyStart],
                      [<span className="inline-flex flex-col items-start gap-1"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Poruwa Ceremony</span><span className="leading-none">පෝරු උත්සවය</span></span>, INVITATION.time.pooruwa],
                      [<span className="inline-flex flex-col items-start gap-1"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">Registration</span><span className="leading-none">විවාහ ලියාපදිංචිය</span></span>, INVITATION.time.registration],
                      [<span className="inline-flex flex-col items-start gap-1"><span className="text-[0.75em] md:text-[0.8em] md:text-[0.65em] uppercase tracking-[0.2em] font-sans opacity-100 leading-none mt-1 mb-1">End of Ceremony</span><span className="leading-none">උත්සවය අවසානය</span></span>, INVITATION.time.ceremonyEnd],`
);

// 5. Button class replace
content = content.replace(/className="absolute bottom-10 right-10 z-\[110\] px-8 py-3 bg-white\/10 backdrop-blur-md text-white text-\[10px\] tracking-\[0\.35em\] rounded-full border border-white\/20 hover:bg-white\/20 transition-all font-bold"/g, 
  `className="absolute bottom-10 right-10 z-[110] px-8 py-3 bg-white backdrop-blur-md text-[#8c6b2b] text-[11px] tracking-[0.35em] rounded-full border border-[#8c6b2b]/20 shadow-xl hover:bg-gray-50 transition-all font-extrabold"`
);


// 6. Move the Gallery section before Save the Date
const galleryRegex = /(<section className="relative py-28 md:py-48 overflow-hidden bg-white">\s*<div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">\s*<motion\.div\s*initial=\{\{ opacity: 0, y: 30 \}\}\s*whileInView=\{\{ opacity: 1, y: 0 \}\}\s*viewport=\{\{ once: true \}\}\s*className="space-y-6 mb-20"\s*>\s*<h2 className="text-4xl md:text-6xl text-\[#8c6b2b\] drop-shadow-sm italic">\s*අපගේ මතකයන්\s*<\/h2>\s*<\/motion\.div>[\s\S]*?<\/section>)/;

const match = content.match(galleryRegex);
if (match) {
  const galleryBlock = match[1];
  content = content.replace(galleryRegex, ''); // remove it from its current place
  
  const saveTheDateRegex = /<section className="relative py-28 md:py-48 flex flex-col items-center overflow-hidden bg-\[#8c6b2b\]">/;
  content = content.replace(saveTheDateRegex, galleryBlock + '\n\n            <section className="relative py-28 md:py-48 flex flex-col items-center overflow-hidden bg-[#8c6b2b]">');
}

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('App.tsx updated successfully');
