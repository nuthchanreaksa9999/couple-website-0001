import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORY_SECTIONS } from '../data';
import { X, Heart, Calendar, MapPin } from 'lucide-react';

export default function Story() {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  // Expanded stories for the immersive overlay reading experience
  const storyDetails: Record<string, {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    content: string[];
    extraImage: string;
    quote: string;
  }> = {
    'how-we-met': {
      title: 'OUR STORY',
      subtitle: 'How We Met',
      date: 'OCTOBER 14, 2021',
      location: 'Paris, France',
      content: [
        "It all started on a crisp, rainy Tuesday afternoon in Saint-Germain-des-Prés. Eleanor had ducked into a small, crowded corner cafe called Les Deux Magots to escape the sudden downpour, holding a damp sketchbook. James was sitting at the adjacent tiny round marble table, typing away with an espresso.",
        "When the waiter accidentally swapped our orders—bringing Eleanor's café crème to James and James's double espresso to Eleanor—we laughed and struck up a polite conversation. What was supposed to be a quick coffee turned into a four-hour discussion about art, architecture, and our favorite cities.",
        "Before the rain stopped, James asked if Eleanor would like to walk through the Jardin du Luxembourg. By the end of that evening, strolling along the Seine under the glowing streetlamps, we both felt a deep, unspoken connection. Paris had woven its classic magic, and our hearts were irrevocably intertwined."
      ],
      extraImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800', // Paris photo
      quote: "Every love story is beautiful, but ours is my favorite."
    },
    'the-proposal': {
      title: 'THE PROPOSAL',
      subtitle: 'The Best Day of Our Lives',
      date: 'SEPTEMBER 21, 2025',
      location: 'Positano, Amalfi Coast',
      content: [
        "James spent months planning the perfect surprise. Under the guise of a sunset dinner celebration for Eleanor's birthday, he arranged for a private stone terrace hanging off the sheer cliffs of Positano, overlooking the glittering Tyrrhenian Sea.",
        "As we arrived, the entire path was lined with hundreds of delicate glowing candles and white rose petals. Violinists played a soft, acoustic rendition of our favorite song in the background. Eleanor was completely breathless, thinking it was a very grand birthday dinner setup.",
        "James took Eleanor's hand, led her to the edge of the terrace as the twilight turned the sky deep indigo, and got down on one knee. With the sound of the crashing waves below and the towns' lights sparkling like a vertical galaxy of gold, Eleanor happily cried and said yes. It was truly the best day of our lives."
      ],
      extraImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800', // Positano photo
      quote: "I have found the one whom my soul loves."
    }
  };

  const activeStory = selectedStoryId ? storyDetails[selectedStoryId] : null;

  return (
    <section id="story" className="py-20 md:py-32 bg-[#f4f1ea] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Section 1: How We Met Image */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1 relative h-[450px] lg:h-auto overflow-hidden shadow-md border-4 border-white group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={STORY_SECTIONS[0].image}
              alt={STORY_SECTIONS[0].imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-300" />
          </motion.div>

          {/* Section 2: How We Met Text Block */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2 flex flex-col justify-center bg-white p-8 md:p-10 shadow-sm border border-stone-200/40 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span className="text-[10px] tracking-[0.3em] font-sans text-stone-500 font-light uppercase mb-2">
              {STORY_SECTIONS[0].title}
            </span>
            <h3 className="text-2xl font-serif-elegant tracking-wide text-stone-900 mb-4 font-light">
              {STORY_SECTIONS[0].subtitle}
            </h3>
            <div className="w-10 h-[1px] bg-stone-300 mb-4" />
            <p className="text-stone-600 text-[13.5px] font-sans leading-relaxed font-light mb-6">
              {STORY_SECTIONS[0].content}
            </p>
            <button
              onClick={() => setSelectedStoryId('how-we-met')}
              className="text-[10px] tracking-[0.25em] font-sans font-medium text-stone-900 hover:text-stone-600 uppercase flex items-center group cursor-pointer mt-auto"
            >
              READ OUR STORY
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1.5">
                →
              </span>
            </button>
          </motion.div>

          {/* Section 3: The Proposal Text Block */}
          <motion.div
            className="lg:col-span-3 order-3 lg:order-3 flex flex-col justify-center bg-white p-8 md:p-10 shadow-sm border border-stone-200/40 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] tracking-[0.3em] font-sans text-stone-500 font-light uppercase mb-2">
              {STORY_SECTIONS[1].title}
            </span>
            <h3 className="text-2xl font-serif-elegant tracking-wide text-stone-900 mb-4 font-light">
              {STORY_SECTIONS[1].subtitle}
            </h3>
            <div className="w-10 h-[1px] bg-stone-300 mb-4" />
            <p className="text-stone-600 text-[13.5px] font-sans leading-relaxed font-light mb-6">
              {STORY_SECTIONS[1].content}
            </p>
            <button
              onClick={() => setSelectedStoryId('the-proposal')}
              className="text-[10px] tracking-[0.25em] font-sans font-medium text-stone-900 hover:text-stone-600 uppercase flex items-center group cursor-pointer mt-auto"
            >
              SEE THE MOMENT
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1.5">
                →
              </span>
            </button>
          </motion.div>

          {/* Section 4: The Proposal Image */}
          <motion.div
            className="lg:col-span-3 order-4 lg:order-4 relative h-[450px] lg:h-auto overflow-hidden shadow-md border-4 border-white group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={STORY_SECTIONS[1].image}
              alt={STORY_SECTIONS[1].imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-300" />
          </motion.div>

        </div>
      </div>

      {/* Full-Screen Immersive Story Details Reading Overlay Drawer */}
      <AnimatePresence>
        {selectedStoryId && activeStory && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/40 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-[#f7f5f0] shadow-2xl overflow-hidden rounded-sm"
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedStoryId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-stone-800 hover:text-stone-950 rounded-full transition-colors shadow-sm"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Side: Images Column */}
                <div className="md:col-span-5 h-[280px] md:h-auto relative bg-stone-100">
                  <img
                    src={selectedStoryId === 'how-we-met' ? STORY_SECTIONS[0].image : STORY_SECTIONS[1].image}
                    alt={activeStory.subtitle}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-4 text-white md:hidden">
                    <p className="text-xs uppercase tracking-widest text-stone-200">
                      {activeStory.title}
                    </p>
                    <h4 className="text-2xl font-serif-elegant">{activeStory.subtitle}</h4>
                  </div>
                </div>

                {/* Right Side: Narrative Scrolling Content Column */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col max-h-[85vh] overflow-y-auto no-scrollbar">
                  <span className="hidden md:inline-block text-[10px] tracking-[0.3em] text-stone-500 uppercase font-sans mb-2">
                    {activeStory.title}
                  </span>
                  <h4 className="hidden md:block text-3xl font-serif-elegant text-stone-900 font-light tracking-wide mb-6">
                    {activeStory.subtitle}
                  </h4>

                  {/* Date and Location Badge */}
                  <div className="flex flex-wrap gap-4 items-center text-xs text-stone-500 font-sans tracking-wider mb-6 pb-6 border-b border-stone-200">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{activeStory.date}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{activeStory.location}</span>
                    </div>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-stone-600 font-serif-elegant text-base md:text-[17px] leading-relaxed font-light text-left">
                    {activeStory.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Romantic Callout Quote */}
                  <div className="mt-8 p-6 bg-[#f4f1ea] border-l-2 border-stone-400 italic text-center text-stone-700 font-serif-elegant text-lg flex flex-col items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-stone-400 fill-stone-300" />
                    <span className="font-light">"{activeStory.quote}"</span>
                  </div>

                  {/* Extra Visual Atmosphere */}
                  <div className="mt-8 rounded-sm overflow-hidden shadow-md">
                    <img
                      src={activeStory.extraImage}
                      alt="Atmosphere location photography"
                      className="w-full aspect-[16/9] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
