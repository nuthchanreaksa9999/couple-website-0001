import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Travel from './components/Travel';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';
import RsvpForm from './components/RSVPForm';
import GuestList from './components/GuestList';
import { RsvpResponse } from './types';

// Curated initial mock RSVPs to make the dashboard immediately interesting and functional!
const INITIAL_MOCK_RSVPS: RsvpResponse[] = [
  {
    id: 'mock-1',
    fullName: 'Arthur Pendragon & Guinevere',
    email: 'arthur.king@camelot.org',
    isAttending: true,
    guestsCount: 2,
    dietaryRestrictions: 'None',
    welcomeDinner: true,
    theWedding: true,
    farewellBrunch: true,
    shuttleRequired: true,
    hotelSelection: 'Grand Hotel Tremezzo',
    songRequest: 'Perfect - Ed Sheeran',
    notes: 'So incredibly thrilled to witness your gorgeous celebration in beautiful Italy! See you there!',
    submittedAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString() // 3 days ago
  },
  {
    id: 'mock-2',
    fullName: 'Elizabeth Bennet',
    email: 'elizabeth@pemberley.co.uk',
    isAttending: true,
    guestsCount: 1,
    dietaryRestrictions: 'Nut Allergy (Mild)',
    welcomeDinner: false,
    theWedding: true,
    farewellBrunch: true,
    shuttleRequired: true,
    hotelSelection: 'Passalacqua',
    songRequest: 'La Vie En Rose - Edith Piaf',
    notes: 'Wouldn\'t miss this romantic wedding for the world! Wishing you both a lifetime of spectacular love.',
    submittedAt: new Date(Date.now() - 3600000 * 12).toISOString() // 12 hours ago
  },
  {
    id: 'mock-3',
    fullName: 'Fitzwilliam Darcy',
    email: 'darcy@pemberley.co.uk',
    isAttending: true,
    guestsCount: 1,
    dietaryRestrictions: 'None',
    welcomeDinner: true,
    theWedding: true,
    farewellBrunch: false,
    shuttleRequired: false,
    hotelSelection: 'Passalacqua',
    songRequest: 'Fly Me to the Moon - Frank Sinatra',
    notes: 'Delighted to attend the ceremony. Looking forward to celebrating with Eleanor and James.',
    submittedAt: new Date(Date.now() - 3600000 * 10).toISOString() // 10 hours ago
  },
  {
    id: 'mock-4',
    fullName: 'Winston Churchill',
    email: 'winston@downingstreet.gov.uk',
    isAttending: false,
    guestsCount: 0,
    dietaryRestrictions: '',
    welcomeDinner: false,
    theWedding: false,
    farewellBrunch: false,
    shuttleRequired: false,
    hotelSelection: '',
    songRequest: '',
    notes: 'Regretfully unable to make the trip to Lombardy due to state business, but raising an honorary glass of champagne to you both from London!',
    submittedAt: new Date(Date.now() - 3600000 * 48).toISOString() // 2 days ago
  }
];

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isGuestListOpen, setIsGuestListOpen] = useState(false);
  const [rsvps, setRsvps] = useState<RsvpResponse[]>([]);

  // Load RSVPs from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('eleanor_james_wedding_rsvps');
    if (stored) {
      try {
        setRsvps(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse RSVPs', e);
        setRsvps(INITIAL_MOCK_RSVPS);
      }
    } else {
      // Pre-fill with curated mock data on first visit
      setRsvps(INITIAL_MOCK_RSVPS);
      localStorage.setItem('eleanor_james_wedding_rsvps', JSON.stringify(INITIAL_MOCK_RSVPS));
    }
  }, []);

  // Save RSVPs to LocalStorage whenever updated
  const saveRsvps = (updated: RsvpResponse[]) => {
    setRsvps(updated);
    localStorage.setItem('eleanor_james_wedding_rsvps', JSON.stringify(updated));
  };

  const handleAddRsvp = (newRsvp: RsvpResponse) => {
    const updated = [newRsvp, ...rsvps];
    saveRsvps(updated);
  };

  const handleRemoveRsvp = (id: string) => {
    const updated = rsvps.filter((r) => r.id !== id);
    saveRsvps(updated);
  };

  const handleAddMockData = () => {
    // Merge or reset with the default curated ones
    const existingIds = new Set(rsvps.map((r) => r.fullName));
    const toAdd = INITIAL_MOCK_RSVPS.filter((m) => !existingIds.has(m.fullName));
    if (toAdd.length === 0) {
      // Reset completely to mock
      saveRsvps(INITIAL_MOCK_RSVPS);
    } else {
      saveRsvps([...rsvps, ...toAdd]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden antialiased">
      {/* Top Header bar */}
      <Header
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenGuestList={() => setIsGuestListOpen(true)}
        hasGuests={rsvps.length > 0}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenRsvp={() => setIsRsvpOpen(true)} />
        <Welcome />
        <Story />
        <Timeline />
        <Gallery />
        <Travel />
        <RsvpSection onOpenRsvp={() => setIsRsvpOpen(true)} />
      </main>

      {/* Elegant Footer block */}
      <Footer />

      {/* Slide-in RSVP Step Wizard Dialog overlay */}
      <RsvpForm
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        onAddRsvp={handleAddRsvp}
      />

      {/* Immersive Dashboard to view RSVP Guest Submissions */}
      <GuestList
        isOpen={isGuestListOpen}
        onClose={() => setIsGuestListOpen(false)}
        rsvps={rsvps}
        onRemoveRsvp={handleRemoveRsvp}
        onAddMockData={handleAddMockData}
      />
    </div>
  );
}
