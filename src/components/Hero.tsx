import { motion } from 'motion/react';
import { HERO_DATA } from '../data';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenRsvp: () => void;
}

export default function Hero({ onOpenRsvp }: HeroProps) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('welcome');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Image with Zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_DATA.image}')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 0.85 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />

      {/* Subtle overlay gradient to make text ultra-legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      {/* Floating dust/particles or delicate ambiance */}
      <div className="absolute inset-0 bg-stone-950/20" />

      {/* Centered Content Card */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl flex flex-col items-center">
        {/* Subtitle */}
        <motion.p
          className="text-xs sm:text-[13px] tracking-[0.4em] text-stone-200/90 font-sans mb-4 sm:mb-6 font-light uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Names */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-serif-elegant tracking-[0.05em] leading-[1.1] mb-6 sm:mb-8 font-light"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          ELEANOR
          <span className="block text-3xl sm:text-5xl md:text-6xl font-script text-stone-200 my-2 sm:my-3 lowercase italic font-normal">
            &
          </span>
          JAMES
        </motion.h1>

        {/* Date and Location */}
        <motion.div
          className="flex flex-col items-center mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <p className="text-sm sm:text-base tracking-[0.3em] font-sans text-stone-100 font-light uppercase">
            {HERO_DATA.date}
          </p>
          <div className="w-8 h-[1px] bg-stone-300/60 my-3" />
          <p className="text-xs sm:text-sm tracking-[0.25em] font-sans text-stone-200/90 italic font-light">
            {HERO_DATA.location}
          </p>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            onClick={onOpenRsvp}
            className="px-8 py-3 bg-white text-stone-900 text-xs tracking-[0.25em] font-sans hover:bg-stone-100 transition-colors duration-300 shadow-md uppercase cursor-pointer"
          >
            RSVP NOW
          </button>
          <button
            onClick={handleScrollDown}
            className="px-8 py-3 bg-transparent text-white border border-white/40 text-xs tracking-[0.25em] font-sans hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm uppercase cursor-pointer"
          >
            VIEW DETAILS
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 2 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-stone-300 uppercase mb-2">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-stone-300" />
      </motion.div>
    </section>
  );
}
