import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTELS_DATA } from '../data';
import { MapPin, Calendar, Plane, Bus, Compass, X } from 'lucide-react';

export default function Travel() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <section id="travel" className="py-20 md:py-32 bg-[#f7f5f0] border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-4 text-left flex flex-col items-start sticky top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-[0.35em] text-stone-500 font-sans uppercase mb-2">
              ACCOMMODATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-elegant tracking-wide text-stone-900 font-light mb-6">
              Plan Your Stay
            </h2>
            <div className="w-12 h-[1px] bg-stone-300 mb-6" />
            <p className="text-stone-600 font-sans text-[14px] leading-relaxed font-light mb-8 max-w-sm">
              We have reserved exclusive guest room blocks at our favorite local hotels around Lake Como. 
              Please be sure to book your accommodation by <strong className="font-semibold text-stone-800">May 1, 2027</strong> to lock in our special wedding rates.
            </p>
            <button
              onClick={() => setIsGuideOpen(true)}
              className="text-[10px] tracking-[0.25em] font-sans font-medium text-stone-900 border-b border-stone-800 pb-1 hover:text-stone-600 hover:border-stone-500 transition-all uppercase flex items-center group cursor-pointer"
            >
              VIEW TRAVEL GUIDE
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1.5">
                →
              </span>
            </button>
          </motion.div>

          {/* Right Hotel Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HOTELS_DATA.map((hotel, idx) => (
              <motion.div
                key={hotel.id}
                className="bg-white border border-stone-200/40 shadow-sm overflow-hidden flex flex-col group h-full rounded-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
              >
                {/* Hotel Thumbnail Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[9px] tracking-widest text-stone-700 font-semibold font-sans rounded-sm border border-stone-200/50">
                    {hotel.priceRange}
                  </div>
                </div>

                {/* Hotel Details Description */}
                <div className="p-5 flex-1 flex flex-col text-left">
                  <p className="text-[10px] tracking-[0.2em] text-stone-400 font-sans uppercase mb-1.5">
                    {hotel.type}
                  </p>
                  <h3 className="text-base font-display tracking-wider text-stone-900 font-normal mb-3 leading-snug group-hover:text-stone-700 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-stone-500 font-serif-elegant text-xs leading-relaxed font-light mb-4 flex-1">
                    {hotel.description}
                  </p>

                  {/* Distance details */}
                  <div className="mt-auto pt-4 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-400 font-sans tracking-wide">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                      <span>{hotel.distanceToVenue}</span>
                    </p>
                  </div>

                  {/* Action Link */}
                  {hotel.bookingUrl && (
                    <a
                      href={hotel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full text-center py-2.5 bg-stone-50 hover:bg-stone-900 hover:text-white border border-stone-200/60 hover:border-stone-900 text-stone-800 text-[10px] tracking-widest font-sans uppercase transition-all duration-300 rounded-sm font-medium"
                    >
                      BOOK RESERVATION
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide-out Immersive Travel Guide Drawer panel using Framer Motion */}
      <AnimatePresence>
        {isGuideOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setIsGuideOpen(false)} />

            <motion.div
              className="relative w-full max-w-lg bg-[#f7f5f0] h-full shadow-2xl flex flex-col p-8 md:p-12 overflow-y-auto z-10 no-scrollbar border-l border-stone-200"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Drawer Close Trigger */}
              <button
                onClick={() => setIsGuideOpen(false)}
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
                aria-label="Close travel guide"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <span className="text-[10px] tracking-[0.3em] text-stone-400 font-sans uppercase block mb-2">
                ASSISTED TRAVEL
              </span>
              <h3 className="text-3xl font-serif-elegant tracking-wide text-stone-900 font-light mb-8 text-left">
                Travel Guide
              </h3>

              {/* Guide Contents */}
              <div className="space-y-8 text-left flex-1">
                {/* section: Flights */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-800">
                    <Plane className="w-5 h-5 stroke-[1.5] text-stone-500" />
                    <h4 className="text-sm tracking-widest font-sans uppercase font-medium">
                      Arriving By Flight
                    </h4>
                  </div>
                  <p className="text-stone-600 font-serif-elegant text-sm leading-relaxed font-light pl-8">
                    The closest international airports are <strong className="font-semibold">Milan Malpensa (MXP)</strong> and <strong className="font-semibold">Milan Linate (LIN)</strong>. 
                    From Milan, Lake Como is easily accessible in about 1 hour by taxi, private shuttle, or a direct scenic train line from Milano Centrale to Como San Giovanni.
                  </p>
                </div>

                {/* section: Shuttles */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-800">
                    <Bus className="w-5 h-5 stroke-[1.5] text-stone-500" />
                    <h4 className="text-sm tracking-widest font-sans uppercase font-medium">
                      Shuttle Service
                    </h4>
                  </div>
                  <p className="text-stone-600 font-serif-elegant text-sm leading-relaxed font-light pl-8">
                    To make your weekend worry-free, we will be providing complimentary shuttle guest transport on Friday afternoon, Saturday pre and post-wedding ceremony, and Sunday morning. 
                    Pickups will be scheduled directly from Grand Hotel Tremezzo, Villa Serbelloni, and Passalacqua.
                  </p>
                </div>

                {/* section: Local Exploration */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-800">
                    <Compass className="w-5 h-5 stroke-[1.5] text-stone-500" />
                    <h4 className="text-sm tracking-widest font-sans uppercase font-medium">
                      Local Exploration
                    </h4>
                  </div>
                  <p className="text-stone-600 font-serif-elegant text-sm leading-relaxed font-light pl-8">
                    During free hours, we highly recommend renting a classic wooden speedboat from Como Classic Boats to cruise the lake, visiting the majestic gardens of Villa Carlotta, or enjoying a lakeside espresso in the picturesque streets of Bellagio or Varenna.
                  </p>
                </div>

                {/* Booking Notice */}
                <div className="p-6 bg-[#f4f1ea] border border-stone-200/50 rounded-sm mt-8">
                  <div className="flex items-center gap-2 text-stone-700 font-medium font-sans text-xs uppercase mb-2">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    <span>Booking Deadline Reminder</span>
                  </div>
                  <p className="text-stone-600 font-sans text-xs leading-relaxed font-light">
                    To receive special discounted group wedding rates, please book your rooms through the recommended links or by calling the hotel direct booking desk mentioning the "Eleanor & James Wedding Block" before May 1, 2027.
                  </p>
                </div>
              </div>

              {/* Footer action button */}
              <button
                onClick={() => setIsGuideOpen(false)}
                className="mt-8 w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs tracking-widest font-sans uppercase transition-all rounded-sm cursor-pointer"
              >
                Done Reading
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
