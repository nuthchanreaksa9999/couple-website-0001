import { useState } from 'react';
import { motion } from 'motion/react';
import { RsvpResponse } from '../types';
import { X, Search, Trash2, Heart, Calendar, Users, Music, Plane, ShieldAlert } from 'lucide-react';

interface GuestListProps {
  isOpen: boolean;
  onClose: () => void;
  rsvps: RsvpResponse[];
  onRemoveRsvp: (id: string) => void;
  onAddMockData: () => void;
}

export default function GuestList({ isOpen, onClose, rsvps, onRemoveRsvp, onAddMockData }: GuestListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRsvps = rsvps.filter((r) =>
    r.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Stats calculation
  const totalGuests = rsvps
    .filter((r) => r.isAttending)
    .reduce((acc, curr) => acc + curr.guestsCount, 0);

  const totalAccepts = rsvps.filter((r) => r.isAttending).length;
  const totalDeclines = rsvps.filter((r) => !r.isAttending).length;

  const welcomeDinnerCount = rsvps
    .filter((r) => r.isAttending && r.welcomeDinner)
    .reduce((acc, curr) => acc + curr.guestsCount, 0);

  const weddingCount = rsvps
    .filter((r) => r.isAttending && r.theWedding)
    .reduce((acc, curr) => acc + curr.guestsCount, 0);

  const farewellBrunchCount = rsvps
    .filter((r) => r.isAttending && r.farewellBrunch)
    .reduce((acc, curr) => acc + curr.guestsCount, 0);

  const shuttleCount = rsvps.filter((r) => r.isAttending && r.shuttleRequired).length;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto bg-stone-950/45 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <motion.div
        className="bg-[#f7f5f0] w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]"
        initial={{ scale: 0.95, y: 15 }}
        animate={isOpen ? { scale: 1, y: 0 } : { scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Header bar */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-[10px] tracking-widest text-stone-400 font-sans block uppercase">
              COUPLE ADMIN DASHBOARD
            </span>
            <h3 className="text-xl font-serif-elegant tracking-wide font-normal flex items-center gap-2">
              <Heart className="w-5 h-5 fill-white text-white" />
              RSVP Guest Response Submissions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dashboard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8 no-scrollbar">
          
          {/* Summary stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Total Guests box */}
            <div className="bg-white p-4 border border-stone-200/50 shadow-sm rounded-sm text-left">
              <div className="flex items-center justify-between text-stone-400 mb-2">
                <span className="text-[10px] tracking-widest font-sans uppercase">Total Guests</span>
                <Users className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-3xl font-serif-elegant font-semibold text-stone-900">{totalGuests}</p>
              <p className="text-[10px] font-sans text-stone-500 mt-1 uppercase tracking-wider">
                From {totalAccepts} RSVPs
              </p>
            </div>

            {/* Event break box */}
            <div className="bg-white p-4 border border-stone-200/50 shadow-sm rounded-sm text-left col-span-1">
              <div className="flex items-center justify-between text-stone-400 mb-2">
                <span className="text-[10px] tracking-widest font-sans uppercase">The Wedding</span>
                <Calendar className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-3xl font-serif-elegant font-semibold text-stone-900">{weddingCount}</p>
              <p className="text-[10px] font-sans text-stone-500 mt-1 uppercase tracking-wider">
                {welcomeDinnerCount} Dinner • {farewellBrunchCount} Brunch
              </p>
            </div>

            {/* Shuttles requests */}
            <div className="bg-white p-4 border border-stone-200/50 shadow-sm rounded-sm text-left col-span-1">
              <div className="flex items-center justify-between text-stone-400 mb-2">
                <span className="text-[10px] tracking-widest font-sans uppercase">Shuttle Seats</span>
                <Plane className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-3xl font-serif-elegant font-semibold text-stone-900">{shuttleCount}</p>
              <p className="text-[10px] font-sans text-stone-500 mt-1 uppercase tracking-wider">
                Pickup requested
              </p>
            </div>

            {/* Regret decliners */}
            <div className="bg-white p-4 border border-stone-200/50 shadow-sm rounded-sm text-left col-span-1">
              <div className="flex items-center justify-between text-stone-400 mb-2">
                <span className="text-[10px] tracking-widest font-sans uppercase">Declines</span>
                <Trash2 className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-3xl font-serif-elegant font-semibold text-stone-900">{totalDeclines}</p>
              <p className="text-[10px] font-sans text-stone-500 mt-1 uppercase tracking-wider">
                Sent regrets
              </p>
            </div>

          </div>

          {/* Controls Bar: Search & Fill Mock */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-stone-200/40 pt-6">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search guests by name..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 text-xs font-sans text-stone-700 shadow-inner"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onAddMockData}
                className="w-full sm:w-auto px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 text-[10px] tracking-widest font-sans font-medium uppercase rounded-sm transition-colors cursor-pointer"
              >
                Pre-fill Mock RSVPs
              </button>
            </div>
          </div>

          {/* Guest Responses Table */}
          <div className="bg-white border border-stone-200/60 shadow-sm rounded-sm overflow-hidden text-left">
            {filteredRsvps.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-xs font-sans">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase font-semibold tracking-wider text-[9px]">
                      <th className="px-5 py-3">Guest Name & Email</th>
                      <th className="px-5 py-3">Attendance</th>
                      <th className="px-5 py-3 text-center">Plus Ones</th>
                      <th className="px-5 py-3">Events Attending</th>
                      <th className="px-5 py-3">Hotel & Details</th>
                      <th className="px-5 py-3">Notes & Songs</th>
                      <th className="px-5 py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {filteredRsvps.map((rsvp) => (
                      <tr key={rsvp.id} className="hover:bg-stone-50/50 transition-colors">
                        {/* Name/Email */}
                        <td className="px-5 py-4">
                          <p className="font-semibold text-stone-900 text-sm font-serif-elegant">{rsvp.fullName}</p>
                          <p className="text-[10px] text-stone-400 font-sans mt-0.5">{rsvp.email}</p>
                        </td>

                        {/* Status */}
                        <td className="px-5 py-4">
                          {rsvp.isAttending ? (
                            <span className="px-2 py-0.5 font-medium text-[9px] tracking-wider uppercase text-emerald-700 bg-emerald-50 rounded-sm border border-emerald-100">
                              Attending
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 font-medium text-[9px] tracking-wider uppercase text-red-700 bg-red-50 rounded-sm border border-red-100">
                              Declined
                            </span>
                          )}
                        </td>

                        {/* Plus Ones */}
                        <td className="px-5 py-4 text-center font-semibold text-stone-800 text-sm">
                          {rsvp.isAttending ? rsvp.guestsCount : '—'}
                        </td>

                        {/* Events Checklist summary */}
                        <td className="px-5 py-4 font-sans text-[11px] leading-relaxed">
                          {rsvp.isAttending ? (
                            <div className="space-y-0.5 text-stone-600">
                              {rsvp.welcomeDinner && <p className="flex items-center gap-1">✓ <span className="text-stone-400">Welcome Dinner</span></p>}
                              {rsvp.theWedding && <p className="flex items-center gap-1">✓ <span className="font-medium text-stone-800">Wedding Ceremony</span></p>}
                              {rsvp.farewellBrunch && <p className="flex items-center gap-1">✓ <span className="text-stone-400">Farewell Brunch</span></p>}
                              {!rsvp.welcomeDinner && !rsvp.theWedding && !rsvp.farewellBrunch && <span className="text-stone-400">None selected</span>}
                            </div>
                          ) : (
                            <span className="text-stone-400">Declined</span>
                          )}
                        </td>

                        {/* Hotel, dietary & shuttle */}
                        <td className="px-5 py-4 max-w-[180px]">
                          {rsvp.isAttending ? (
                            <div className="space-y-1">
                              <p className="font-semibold text-stone-800 truncate" title={rsvp.hotelSelection}>
                                {rsvp.hotelSelection || 'No Hotel logged'}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {rsvp.shuttleRequired && (
                                  <span className="px-1.5 py-0.5 text-[8px] bg-stone-100 text-stone-600 font-semibold tracking-wider rounded-sm uppercase">
                                    Shuttle Req
                                  </span>
                                )}
                                {rsvp.dietaryRestrictions && (
                                  <span className="px-1.5 py-0.5 text-[8px] bg-amber-50 text-amber-700 border border-amber-100 font-semibold tracking-wider rounded-sm uppercase max-w-[120px] truncate" title={rsvp.dietaryRestrictions}>
                                    Allergy: {rsvp.dietaryRestrictions}
                                  </span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <span className="text-stone-400">Declined</span>
                          )}
                        </td>

                        {/* Notes & Dance Floor Song */}
                        <td className="px-5 py-4 max-w-[200px] text-[11px] leading-relaxed">
                          {rsvp.notes && (
                            <p className="text-stone-600 italic mb-1.5 line-clamp-2" title={rsvp.notes}>
                              "{rsvp.notes}"
                            </p>
                          )}
                          {rsvp.isAttending && rsvp.songRequest && (
                            <p className="flex items-center gap-1 text-stone-500 font-sans text-[10px]">
                              <Music className="w-3 h-3 text-stone-400 shrink-0" />
                              <span className="font-semibold text-stone-700 truncate" title={rsvp.songRequest}>
                                {rsvp.songRequest}
                              </span>
                            </p>
                          )}
                          {!rsvp.notes && !rsvp.songRequest && <span className="text-stone-400">—</span>}
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4 text-center">
                          <button
                            onClick={() => onRemoveRsvp(rsvp.id)}
                            className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-all cursor-pointer"
                            title="Delete submission"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-stone-400 space-y-3 flex flex-col items-center">
                <ShieldAlert className="w-10 h-10 text-stone-300" />
                <p className="text-sm font-sans">No RSVP responses matching your search query were found.</p>
                <p className="text-xs text-stone-400">Fill in the RSVP form on the homepage to log responses, or click "Pre-fill Mock RSVPs" to populate mock data.</p>
              </div>
            )}
          </div>

        </div>

        {/* Footer controls */}
        <div className="bg-stone-100 p-4 border-t border-stone-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white text-[10px] tracking-widest font-sans uppercase font-medium transition-colors rounded-sm cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}
