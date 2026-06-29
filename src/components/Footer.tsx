import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1a19] text-stone-300 py-16 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
        
        {/* Left: Initials Logo */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-display tracking-[0.1em] text-white">
            E <span className="text-stone-600 font-light">|</span> J
          </span>
          <span className="text-[9px] tracking-[0.2em] text-stone-500 font-sans mt-1 uppercase">
            LAKE COMO • ITALY
          </span>
        </div>

        {/* Center: Heartwarming quote / note */}
        <div className="flex flex-col items-center space-y-3 max-w-sm text-center">
          <p className="text-xs tracking-[0.25em] font-sans text-stone-200 font-light uppercase">
            WE CAN'T WAIT TO CELEBRATE WITH YOU!
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <Heart className="w-4 h-4 text-stone-500 fill-stone-500" />
          </motion.div>
        </div>

        {/* Right: Follow social links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <span className="text-[10px] tracking-widest text-stone-500 font-sans uppercase">
            FOLLOW ALONG
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-stone-900 hover:bg-white/10 hover:text-white rounded-full transition-colors text-stone-400"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 stroke-[1.5]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-stone-900 hover:bg-white/10 hover:text-white rounded-full transition-colors text-stone-400"
              title="Facebook"
            >
              <Facebook className="w-4 h-4 stroke-[1.5]" />
            </a>
            <a
              href="mailto:eleanorandjames2027@gmail.com"
              className="p-2 bg-stone-900 hover:bg-white/10 hover:text-white rounded-full transition-colors text-stone-400"
              title="Send Mail"
            >
              <Mail className="w-4 h-4 stroke-[1.5]" />
            </a>
          </div>
        </div>

      </div>

      {/* Small copyright / watermark lines */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800/50 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-widest text-stone-600 font-sans">
        <p>© {currentYear} ELEANOR & JAMES WEDDING. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 sm:mt-0">DESIGNED IN ITALY • BUILT WITH LOVE</p>
      </div>
    </footer>
  );
}
