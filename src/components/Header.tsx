import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenRsvp: () => void;
  onOpenGuestList: () => void;
  hasGuests: boolean;
}

export default function Header({ onOpenRsvp, onOpenGuestList, hasGuests }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    name: string;
    href: string;
    action?: () => void;
  }

  const navItemsLeft: NavItem[] = [
    { name: 'HOME', href: '#home' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'WEDDING WEEKEND', href: '#timeline' },
  ];

  const navItemsRight: NavItem[] = [
    { name: 'TRAVEL', href: '#travel' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp', action: onOpenRsvp },
  ];

  const handleNavClick = (href: string, action?: () => void) => {
    setIsMobileMenuOpen(false);
    if (action) {
      action();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#f7f5f0]/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 py-3'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-stone-800 hover:text-stone-600' : 'text-stone-100 hover:text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center lg:space-x-12 w-1/3 justify-end">
            {navItemsLeft.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-[11px] tracking-[0.25em] font-sans transition-colors relative py-1 group ${
                  isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-[1px] group-hover:w-1/2 transition-all duration-300 origin-right ${
                  isScrolled ? 'bg-stone-900' : 'bg-white'
                }`}></span>
                <span className={`absolute bottom-0 right-1/2 w-0 h-[1px] group-hover:w-1/2 transition-all duration-300 origin-left ${
                  isScrolled ? 'bg-stone-900' : 'bg-white'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center flex-1 lg:w-1/3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-2 md:space-x-4 group"
            >
              <span className={`text-2xl md:text-3xl font-display tracking-[0.1em] font-normal transition-colors duration-500 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}>
                E <span className={`font-light mx-1 transition-colors duration-500 ${isScrolled ? 'text-stone-300' : 'text-white/40'}`}>|</span> J
              </span>
            </a>
          </div>

          {/* Right Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center lg:space-x-12 w-1/3 justify-start">
            {navItemsRight.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.action)}
                className={`text-[11px] tracking-[0.25em] font-sans transition-colors relative py-1 group cursor-pointer ${
                  item.name === 'RSVP'
                    ? `${isScrolled ? 'text-stone-900 border-stone-800' : 'text-white border-white'} font-medium border-b pb-0.5`
                    : isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.name}
                {item.name !== 'RSVP' && (
                  <>
                    <span className={`absolute bottom-0 left-1/2 w-0 h-[1px] group-hover:w-1/2 transition-all duration-300 origin-right ${
                      isScrolled ? 'bg-stone-900' : 'bg-white'
                    }`}></span>
                    <span className={`absolute bottom-0 right-1/2 w-0 h-[1px] group-hover:w-1/2 transition-all duration-300 origin-left ${
                      isScrolled ? 'bg-stone-900' : 'bg-white'
                    }`}></span>
                  </>
                )}
              </button>
            ))}

            {hasGuests && (
              <button
                id="view-guestlist-btn"
                onClick={onOpenGuestList}
                className={`ml-4 p-1 transition-colors ${
                  isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-300 hover:text-white'
                }`}
                title="View RSVP Submissions"
              >
                <Heart className={`w-4 h-4 transition-colors ${isScrolled ? 'fill-stone-400 text-stone-500' : 'fill-white/80 text-white'}`} />
              </button>
            )}
          </nav>

          {/* Placeholder for responsive layout balance on mobile */}
          <div className="lg:hidden flex items-center space-x-4">
            {hasGuests && (
              <button
                onClick={onOpenGuestList}
                className={`transition-colors ${
                  isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-300 hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 transition-colors ${isScrolled ? 'fill-stone-400 text-stone-500' : 'fill-white/80 text-white'}`} />
              </button>
            )}
            <button
              onClick={onOpenRsvp}
              className={`text-[11px] tracking-[0.2em] font-sans border-b pb-0.5 transition-colors ${
                isScrolled ? 'border-stone-800 text-stone-900' : 'border-white text-white'
              }`}
            >
              RSVP
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            className="fixed inset-0 z-50 bg-[#f7f5f0] flex flex-col justify-between p-8"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          >
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-stone-200">
                <span className="text-2xl font-display tracking-[0.1em] text-stone-900">
                  E <span className="text-stone-300 font-light mx-1">|</span> J
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-stone-800 hover:text-stone-600 p-1"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 mt-12">
                {[...navItemsLeft, ...navItemsRight].map((item, idx) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleNavClick(item.href, item.action)}
                    className="text-left text-lg tracking-[0.2em] text-stone-800 hover:text-stone-900 font-serif-elegant font-medium border-b border-transparent py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="text-center text-xs tracking-widest text-stone-400 font-sans border-t border-stone-200 pt-6">
              LAKE COMO, ITALY • JUNE 2027
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
