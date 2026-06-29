import { motion } from 'motion/react';
import { WELCOME_DATA } from '../data';

export default function Welcome() {
  // Leaf drawing SVG to act as elegant floral sketches in the margins
  const LeafSketch = () => (
    <svg
      className="w-48 h-48 opacity-25 text-stone-400 select-none pointer-events-none"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 95 C 50 60, 45 35, 20 15" />
      <path d="M50 80 C 48 65, 30 55, 25 45" />
      <path d="M25 45 C 23 41, 28 35, 33 40 C 35 42, 33 50, 25 45 Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M50 65 C 49 53, 38 43, 33 35" />
      <path d="M33 35 C 31 31, 36 26, 41 31 C 43 33, 41 40, 33 35 Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M50 48 C 49 38, 40 31, 38 25" />
      <path d="M38 25 C 36 22, 41 18, 45 22 C 47 24, 45 29, 38 25 Z" fill="currentColor" fillOpacity="0.05" />
      {/* Right facing branches */}
      <path d="M50 75 C 52 62, 68 53, 72 45" />
      <path d="M72 45 C 74 41, 69 35, 64 40 C 62 42, 64 50, 72 45 Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M50 58 C 51 47, 63 39, 66 31" />
      <path d="M66 31 C 68 27, 63 23, 58 28 C 56 30, 58 37, 66 31 Z" fill="currentColor" fillOpacity="0.05" />
    </svg>
  );

  return (
    <section id="welcome" className="relative py-20 md:py-32 overflow-hidden bg-[#f7f5f0] border-b border-stone-200/40">
      {/* Decorative top-left leaf sketch */}
      <div className="absolute top-12 left-6 md:left-16 hidden lg:block select-none">
        <LeafSketch />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Text Panel */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className="text-xs tracking-[0.35em] font-sans text-stone-500 font-light uppercase mb-3">
              {WELCOME_DATA.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-elegant tracking-[0.02em] font-light text-stone-900 mb-6 leading-tight">
              {WELCOME_DATA.title}
            </h2>
            <div className="w-16 h-[1px] bg-stone-400/80 mb-6" />
            <p className="text-stone-600 font-serif-elegant text-lg md:text-xl leading-relaxed font-light italic max-w-md">
              "{WELCOME_DATA.description}"
            </p>
          </motion.div>

          {/* Right: Landscape Image Frame with Rotating Circular Stamp Seal */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Main Picture Frame */}
            <div className="relative overflow-hidden shadow-xl border-8 border-white">
              <img
                src={WELCOME_DATA.image}
                alt="Beautiful Lake Como Landscape"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Circular Stamp / Seal overlay in the bottom right corner */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 w-32 h-32 md:w-40 md:h-40 bg-[#f7f5f0] rounded-full p-2 shadow-lg border border-stone-200/60 flex items-center justify-center select-none"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: 'spring', damping: 20 }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* SVG Text curving around the outer edge */}
                <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                  <path
                    id="stamp-path"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                  <text className="text-[7.5px] font-sans tracking-[0.2em] fill-stone-600 font-light">
                    <textPath href="#stamp-path" startOffset="0%">
                      ELEANOR & JAMES • JUNE 18, 2027 •
                    </textPath>
                  </text>
                </svg>

                {/* Inner Logo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-800">
                  <span className="text-base md:text-lg font-display tracking-widest font-normal">
                    E <span className="text-stone-300 font-light">|</span> J
                  </span>
                  <span className="text-[7px] tracking-widest text-stone-500 font-sans mt-0.5">
                    ITALY
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
