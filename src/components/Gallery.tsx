import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx(
        activeImageIdx === 0 ? GALLERY_ITEMS.length - 1 : activeImageIdx - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#f4f1ea] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <p className="text-[10px] tracking-[0.4em] text-stone-500 font-sans mb-3 uppercase">
          CAPTURED MOMENTS
        </p>
        <h2 className="text-2xl sm:text-3xl font-display tracking-[0.2em] text-stone-900 font-normal mb-16 uppercase">
          A FEW OF OUR FAVORITES
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Card 1: Couple kissing on Lake terrace */}
          <motion.div
            className="md:col-span-4 relative group overflow-hidden border-4 border-white shadow-sm cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveImageIdx(0)}
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-stone-800 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs uppercase tracking-widest text-stone-200">GALLERY</p>
              <h4 className="font-serif-elegant text-base font-light italic">{GALLERY_ITEMS[0].caption}</h4>
            </div>
          </motion.div>

          {/* Card 2: Custom Stationery invitation */}
          <motion.div
            className="md:col-span-3 relative group overflow-hidden border-4 border-white shadow-sm cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => setActiveImageIdx(1)}
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-stone-800 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs uppercase tracking-widest text-stone-200">DETAILS</p>
              <h4 className="font-serif-elegant text-base font-light italic">{GALLERY_ITEMS[1].caption}</h4>
            </div>
          </motion.div>

          {/* Card 3: Classic wooden boat ride */}
          <motion.div
            className="md:col-span-5 relative group overflow-hidden border-4 border-white shadow-sm cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setActiveImageIdx(2)}
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-stone-800 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs uppercase tracking-widest text-stone-200">LAKE COMO</p>
              <h4 className="font-serif-elegant text-base font-light italic">{GALLERY_ITEMS[2].caption}</h4>
            </div>
          </motion.div>

          {/* Card 4: Floral table decorations */}
          <motion.div
            className="md:col-span-5 relative group overflow-hidden border-4 border-white shadow-sm cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveImageIdx(3)}
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-stone-800 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs uppercase tracking-widest text-stone-200">RECEPTION</p>
              <h4 className="font-serif-elegant text-base font-light italic">{GALLERY_ITEMS[3].caption}</h4>
            </div>
          </motion.div>

          {/* Card 5: Couple walking in villa grounds */}
          <motion.div
            className="md:col-span-7 relative group overflow-hidden border-4 border-white shadow-sm cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onClick={() => setActiveImageIdx(4)}
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-stone-800 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs uppercase tracking-widest text-stone-200">MEMORIES</p>
              <h4 className="font-serif-elegant text-base font-light italic">{GALLERY_ITEMS[4].caption}</h4>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Fully Animated Lightbox Slider overlay */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-lg flex flex-col justify-between p-4 md:p-8 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIdx(null)}
          >
            {/* Lightbox Header Controls */}
            <div className="flex items-center justify-between text-white w-full max-w-7xl mx-auto border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] tracking-widest text-stone-400 font-sans block uppercase">
                  OUR FAVORITES
                </span>
                <span className="font-serif-elegant italic text-stone-100 text-lg">
                  {GALLERY_ITEMS[activeImageIdx].caption}
                </span>
              </div>
              <button
                onClick={() => setActiveImageIdx(null)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Stage */}
            <div className="flex-1 flex items-center justify-between w-full max-w-7xl mx-auto py-8">
              {/* Previous Trigger */}
              <button
                onClick={handlePrev}
                className="p-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer mr-2 md:mr-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Immersive Picture Display */}
              <div className="flex-1 flex items-center justify-center max-h-[65vh] md:max-h-[75vh] max-w-full overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={GALLERY_ITEMS[activeImageIdx].image}
                    alt={GALLERY_ITEMS[activeImageIdx].alt}
                    className="max-h-[65vh] md:max-h-[75vh] max-w-full object-contain shadow-2xl border-4 border-white/10"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>

              {/* Next Trigger */}
              <button
                onClick={handleNext}
                className="p-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer ml-2 md:ml-8"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Count Counter */}
            <div className="text-center text-xs tracking-widest text-stone-400 font-sans">
              {activeImageIdx + 1} OF {GALLERY_ITEMS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
