import { motion } from 'motion/react';

interface RsvpSectionProps {
  onOpenRsvp: () => void;
}

export default function RsvpSection({ onOpenRsvp }: RsvpSectionProps) {
  // Delicate line-art vector leaf SVG to frame both sides of the RSVP card
  const LeftLeafSketch = () => (
    <svg
      className="w-32 h-32 md:w-48 md:h-48 opacity-25 text-stone-400 select-none pointer-events-none transform -rotate-12"
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 110 C 30 90, 45 60, 50 10" />
      <path d="M50 10 C 51 15, 42 28, 38 32 C 34 35, 30 38, 22 28 C 24 22, 33 16, 50 10 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M42 42 C 43 46, 30 58, 26 62 C 22 66, 15 65, 12 55 C 16 48, 26 42, 42 42 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M28 68 C 29 72, 18 80, 15 84 C 12 88, 8 85, 9 78 C 10 72, 18 68, 28 68 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M48 25 C 50 21, 62 18, 68 15 C 74 12, 78 16, 70 24 C 64 30, 52 28, 48 25 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M45 52 C 47 48, 58 45, 64 42 C 70 39, 72 44, 65 50 C 58 56, 48 54, 45 52 Z" fill="currentColor" fillOpacity="0.03" />
    </svg>
  );

  const RightLeafSketch = () => (
    <svg
      className="w-32 h-32 md:w-48 md:h-48 opacity-25 text-stone-400 select-none pointer-events-none transform scale-x-[-1] rotate-12"
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 110 C 30 90, 45 60, 50 10" />
      <path d="M50 10 C 51 15, 42 28, 38 32 C 34 35, 30 38, 22 28 C 24 22, 33 16, 50 10 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M42 42 C 43 46, 30 58, 26 62 C 22 66, 15 65, 12 55 C 16 48, 26 42, 42 42 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M28 68 C 29 72, 18 80, 15 84 C 12 88, 8 85, 9 78 C 10 72, 18 68, 28 68 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M48 25 C 50 21, 62 18, 68 15 C 74 12, 78 16, 70 24 C 64 30, 52 28, 48 25 Z" fill="currentColor" fillOpacity="0.03" />
      <path d="M45 52 C 47 48, 58 45, 64 42 C 70 39, 72 44, 65 50 C 58 56, 48 54, 45 52 Z" fill="currentColor" fillOpacity="0.03" />
    </svg>
  );

  return (
    <section id="rsvp" className="py-24 md:py-36 bg-[#f4f1ea] relative overflow-hidden border-b border-stone-200/50">
      
      {/* Centered RSVP Content box framed by leaves */}
      <div className="max-w-4xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
        {/* Left Leaf overlay sketch */}
        <div className="absolute left-4 md:left-24 top-1/2 -translate-y-1/2 hidden sm:block select-none">
          <LeftLeafSketch />
        </div>

        {/* Content Card Panel */}
        <motion.div
          className="relative z-10 text-center py-6 px-8 max-w-lg flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span className="text-[10px] tracking-[0.35em] text-stone-500 font-sans block uppercase mb-4">
            KINDLY RESPOND
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif-elegant tracking-[0.05em] text-stone-900 font-light mb-4 uppercase">
            Kindly Respond
          </h2>
          <p className="text-stone-600 font-sans text-sm tracking-wider mb-8 font-light italic">
            Please RSVP by April 18, 2027
          </p>

          <button
            onClick={onOpenRsvp}
            className="px-12 py-3.5 bg-stone-900 text-white font-sans text-xs tracking-[0.25em] hover:bg-stone-800 transition-all duration-300 shadow-lg cursor-pointer uppercase rounded-sm font-medium hover:shadow-xl active:scale-[0.98]"
          >
            RSVP NOW
          </button>
        </motion.div>

        {/* Right Leaf overlay sketch */}
        <div className="absolute right-4 md:right-24 top-1/2 -translate-y-1/2 hidden sm:block select-none">
          <RightLeafSketch />
        </div>

      </div>

    </section>
  );
}
