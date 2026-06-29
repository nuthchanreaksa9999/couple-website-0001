import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_EVENTS } from '../data';
import { Wine, Heart, Coffee, MapPin, Clock, Shirt, Info, X } from 'lucide-react';

export default function Timeline() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Icon mapping helper
  const getEventIcon = (id: string) => {
    switch (id) {
      case 'welcome-dinner':
        return <Wine className="w-6 h-6 stroke-[1.25] text-stone-600" />;
      case 'the-wedding':
        return <Heart className="w-6 h-6 stroke-[1.25] text-stone-600 fill-stone-100" />;
      case 'farewell-brunch':
        return <Coffee className="w-6 h-6 stroke-[1.25] text-stone-600" />;
      default:
        return <Heart className="w-6 h-6 stroke-[1.25] text-stone-600" />;
    }
  };

  const selectedEvent = TIMELINE_EVENTS.find((e) => e.id === selectedEventId);

  return (
    <section id="timeline" className="py-20 md:py-32 bg-[#f7f5f0] border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Section Header */}
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.4em] text-stone-500 font-sans mb-3 uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE CELEBRATION
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-display tracking-[0.25em] text-stone-950 font-normal mb-16 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          WEDDING WEEKEND
        </motion.h2>

        {/* Timeline Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch relative">
          {TIMELINE_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              className="flex-1 px-6 py-12 flex flex-col items-center justify-between text-center group cursor-pointer bg-transparent hover:bg-white/50 border border-transparent hover:border-stone-200/50 hover:shadow-sm transition-all duration-500 rounded-sm relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              onClick={() => setSelectedEventId(event.id)}
            >
              {/* Event Icon / Motif */}
              <div className="mb-6 p-4 rounded-full bg-stone-100 border border-stone-200/30 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                {getEventIcon(event.id)}
              </div>

              {/* Day & Date Headers */}
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.3em] font-sans text-stone-500 uppercase">
                  {event.dayOfWeek}
                </p>
                <div className="w-8 h-[1px] bg-stone-300 mx-auto my-1.5" />
                <p className="text-xs tracking-[0.25em] font-sans text-stone-500 uppercase">
                  {event.date}
                </p>
              </div>

              {/* Event Title (Cursive script calligraphy vibe) */}
              <h3 className="text-3xl md:text-4xl font-script text-stone-800 font-normal leading-none mb-4 lowercase italic first-letter:uppercase">
                {event.title}
              </h3>

              {/* Details (Time & Location) */}
              <div className="space-y-1.5 mt-auto">
                <p className="text-xs tracking-wider text-stone-500 font-sans flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
                  {event.time}
                </p>
                <p className="text-[13px] tracking-wide text-stone-700 font-serif-elegant italic font-medium flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                  {event.location}
                </p>
              </div>

              {/* Learn More Floating Tooltip Hint */}
              <div className="mt-6 text-[10px] tracking-widest text-stone-400 font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VIEW MORE DETAILS
              </div>

              {/* Vertical Dividers for Desktop Layout */}
              {idx < 2 && (
                <div className="hidden md:block absolute right-0 top-1/6 bottom-1/6 w-[1px] bg-stone-200/60" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Event Details Overlay Modal */}
      <AnimatePresence>
        {selectedEventId && selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/45 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden rounded-sm border border-stone-200/40 p-8 md:p-10"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEventId(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
                aria-label="Close event details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Event Header with Icon */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="p-3 bg-stone-50 rounded-full border border-stone-200/40 mb-4 shadow-inner">
                  {getEventIcon(selectedEvent.id)}
                </div>
                <p className="text-[10px] tracking-[0.3em] text-stone-400 font-sans uppercase">
                  {selectedEvent.dayOfWeek}, {selectedEvent.date}
                </p>
                <h4 className="text-4xl font-script text-stone-900 mt-2 font-normal lowercase italic first-letter:uppercase">
                  {selectedEvent.title}
                </h4>
                <div className="w-12 h-[1px] bg-stone-300 mt-4" />
              </div>

              {/* Event Specific Card Details */}
              <div className="space-y-6 text-left border-t border-b border-stone-100 py-6 my-6">
                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-stone-50 rounded-sm">
                    <Clock className="w-4 h-4 text-stone-500" />
                  </div>
                  <div>
                    <h5 className="text-[11px] tracking-widest text-stone-400 uppercase font-sans font-semibold">
                      Timing
                    </h5>
                    <p className="text-stone-700 font-sans text-sm font-medium mt-0.5">
                      {selectedEvent.time}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-stone-50 rounded-sm">
                    <MapPin className="w-4 h-4 text-stone-500" />
                  </div>
                  <div>
                    <h5 className="text-[11px] tracking-widest text-stone-400 uppercase font-sans font-semibold">
                      Venue Location
                    </h5>
                    <p className="text-stone-700 font-sans text-sm font-medium mt-0.5">
                      {selectedEvent.location}
                    </p>
                    <p className="text-xs text-stone-500 font-sans mt-0.5 italic">
                      Lake Como, Lombardy Region, Italy
                    </p>
                  </div>
                </div>

                {/* Attire Guide */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-stone-50 rounded-sm">
                    <Shirt className="w-4 h-4 text-stone-500" />
                  </div>
                  <div>
                    <h5 className="text-[11px] tracking-widest text-stone-400 uppercase font-sans font-semibold">
                      Dress Code / Attire
                    </h5>
                    <p className="text-stone-700 font-sans text-sm font-medium mt-0.5">
                      {selectedEvent.id === 'welcome-dinner'
                        ? 'Cocktail Chic (Lawn-friendly footwear recommended)'
                        : selectedEvent.id === 'the-wedding'
                        ? 'Black Tie (Formal tuxedo & floor-length gowns)'
                        : 'Resort Casual (Lighter fabrics, sunglasses, sun hats)'}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {selectedEvent.description && (
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-stone-50 rounded-sm">
                      <Info className="w-4 h-4 text-stone-500" />
                    </div>
                    <div>
                      <h5 className="text-[11px] tracking-widest text-stone-400 uppercase font-sans font-semibold">
                        Details & Transport
                      </h5>
                      <p className="text-stone-600 font-serif-elegant text-sm md:text-base leading-relaxed font-light mt-1">
                        {selectedEvent.description}
                      </p>
                      <p className="text-xs text-stone-500 font-sans mt-2">
                        * Shuttles will be operating between the recommended partner hotels and the venue prior to the ceremony and at midnight.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Close Footer Action */}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedEventId(null)}
                  className="px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs tracking-widest font-sans uppercase transition-colors rounded-sm cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
