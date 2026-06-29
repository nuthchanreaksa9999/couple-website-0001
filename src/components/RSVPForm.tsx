import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RsvpResponse } from '../types';
import { X, Check, ArrowRight, ArrowLeft, Heart, Music, AlertCircle, Sparkles } from 'lucide-react';

interface RsvpFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRsvp: (rsvp: RsvpResponse) => void;
}

export default function RsvpForm({ isOpen, onClose, onAddRsvp }: RsvpFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    isAttending: true,
    guestsCount: 1,
    dietaryRestrictions: '',
    welcomeDinner: true,
    theWedding: true,
    farewellBrunch: true,
    shuttleRequired: true,
    hotelSelection: '',
    songRequest: '',
    notes: '',
  });

  const [validationError, setValidationError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAttendanceChange = (attending: boolean) => {
    setFormData((prev) => ({ ...prev, isAttending: attending }));
    setValidationError('');
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setValidationError('Please enter your full name.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setValidationError('Please enter a valid email address.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (!formData.isAttending) {
      // If declining, skip to step 4 (final notes & submit)
      setStep(4);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setValidationError('');
    if (step === 4 && !formData.isAttending) {
      setStep(1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newResponse: RsvpResponse = {
      id: `rsvp-${Date.now()}`,
      fullName: formData.fullName,
      email: formData.email,
      isAttending: formData.isAttending,
      guestsCount: formData.isAttending ? Number(formData.guestsCount) : 0,
      dietaryRestrictions: formData.isAttending ? formData.dietaryRestrictions : '',
      welcomeDinner: formData.isAttending ? formData.welcomeDinner : false,
      theWedding: formData.isAttending ? formData.theWedding : false,
      farewellBrunch: formData.isAttending ? formData.farewellBrunch : false,
      shuttleRequired: formData.isAttending ? formData.shuttleRequired : false,
      hotelSelection: formData.isAttending ? formData.hotelSelection : '',
      songRequest: formData.isAttending ? formData.songRequest : '',
      notes: formData.notes,
      submittedAt: new Date().toISOString(),
    };

    onAddRsvp(newResponse);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      isAttending: true,
      guestsCount: 1,
      dietaryRestrictions: '',
      welcomeDinner: true,
      theWedding: true,
      farewellBrunch: true,
      shuttleRequired: true,
      hotelSelection: '',
      songRequest: '',
      notes: '',
    });
    setValidationError('');
    setIsSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Reset form after exit animation finishes
    setTimeout(resetForm, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="rsvp-modal-overlay"
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/40 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-xl bg-[#f7f5f0] shadow-2xl overflow-hidden rounded-sm border border-stone-200/40 p-6 sm:p-10 text-stone-800"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Close button */}
            <button
              id="close-rsvp-modal"
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Close RSVP modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Header info */}
                <div className="text-center mb-8">
                  <span className="text-[10px] tracking-[0.3em] text-stone-400 font-sans block uppercase mb-1.5">
                    RESPONSE REQUESTED
                  </span>
                  <h3 className="text-3xl font-serif-elegant text-stone-900 font-light tracking-wide">
                    {formData.isAttending ? 'We\'d Love to Celebrate with You!' : 'We\'ll Miss Your Presence'}
                  </h3>
                  <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4" />
                </div>

                {/* Progress bar indicator */}
                <div className="flex items-center justify-between text-[10px] font-sans tracking-widest text-stone-400 uppercase mb-8 pb-3 border-b border-stone-200/40">
                  <span>STEP {formData.isAttending ? step : (step === 1 ? 1 : 4)} OF {formData.isAttending ? 4 : 2}</span>
                  <div className="flex gap-1.5 items-center">
                    <div className={`w-3 h-3 rounded-full border border-stone-300 ${step >= 1 ? 'bg-stone-800 border-stone-800' : 'bg-transparent'}`} />
                    {formData.isAttending && (
                      <>
                        <div className={`w-3 h-3 rounded-full border border-stone-300 ${step >= 2 ? 'bg-stone-800 border-stone-800' : 'bg-transparent'}`} />
                        <div className={`w-3 h-3 rounded-full border border-stone-300 ${step >= 3 ? 'bg-stone-800 border-stone-800' : 'bg-transparent'}`} />
                      </>
                    )}
                    <div className={`w-3 h-3 rounded-full border border-stone-300 ${step >= 4 ? 'bg-stone-800 border-stone-800' : 'bg-transparent'}`} />
                  </div>
                </div>

                {/* Error Banner */}
                {validationError && (
                  <motion.div
                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm text-left font-sans"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}

                {/* STEP 1: Basic details & RSVP state */}
                {step === 1 && (
                  <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Attendance button selector */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Your Response
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => handleAttendanceChange(true)}
                          className={`py-4 px-4 text-xs tracking-widest font-sans font-medium uppercase border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 rounded-sm ${
                            formData.isAttending
                              ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                          }`}
                        >
                          <Check className={`w-4 h-4 ${formData.isAttending ? 'opacity-100' : 'opacity-0'}`} />
                          <span>Accepts with Joy</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAttendanceChange(false)}
                          className={`py-4 px-4 text-xs tracking-widest font-sans font-medium uppercase border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 rounded-sm ${
                            !formData.isAttending
                              ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                          }`}
                        >
                          <X className={`w-4 h-4 ${!formData.isAttending ? 'opacity-100' : 'opacity-0'}`} />
                          <span>Declines with Regret</span>
                        </button>
                      </div>
                    </div>

                    {/* Guest Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800 shadow-inner"
                        required
                      />
                    </div>

                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. eleanor@vance.com"
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800 shadow-inner"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Events & Guest headcount (only if attending) */}
                {step === 2 && formData.isAttending && (
                  <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Guest Count Selector */}
                    <div className="space-y-2">
                      <label htmlFor="guestsCount" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block">
                        Number of Attending Guests
                      </label>
                      <select
                        id="guestsCount"
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800"
                      >
                        <option value={1}>1 Guest (Just Me)</option>
                        <option value={2}>2 Guests (Me & Partner/Plus One)</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                      </select>
                    </div>

                    {/* Events Selection Checklist */}
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold block">
                        Which Events Will You Attend?
                      </label>
                      <div className="space-y-3 mt-2">
                        {/* Welcome Dinner check */}
                        <label className="flex items-center gap-3 p-3 bg-white border border-stone-200 hover:border-stone-300 rounded-sm cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.welcomeDinner}
                            onChange={(e) => handleCheckboxChange('welcomeDinner', e.target.checked)}
                            className="w-4 h-4 text-stone-800 focus:ring-stone-500 border-stone-300 rounded cursor-pointer"
                          />
                          <div className="text-left font-sans text-xs">
                            <p className="font-semibold text-stone-800">Welcome Dinner (Friday, June 16)</p>
                            <p className="text-stone-500">7:00 PM • Villa del Balbianello</p>
                          </div>
                        </label>

                        {/* The Wedding check */}
                        <label className="flex items-center gap-3 p-3 bg-white border border-stone-200 hover:border-stone-300 rounded-sm cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.theWedding}
                            onChange={(e) => handleCheckboxChange('theWedding', e.target.checked)}
                            className="w-4 h-4 text-stone-800 focus:ring-stone-500 border-stone-300 rounded cursor-pointer"
                          />
                          <div className="text-left font-sans text-xs">
                            <p className="font-semibold text-stone-800">The Wedding (Saturday, June 18)</p>
                            <p className="text-stone-500">5:00 PM • Villa Pizzo</p>
                          </div>
                        </label>

                        {/* Farewell Brunch check */}
                        <label className="flex items-center gap-3 p-3 bg-white border border-stone-200 hover:border-stone-300 rounded-sm cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.farewellBrunch}
                            onChange={(e) => handleCheckboxChange('farewellBrunch', e.target.checked)}
                            className="w-4 h-4 text-stone-800 focus:ring-stone-500 border-stone-300 rounded cursor-pointer"
                          />
                          <div className="text-left font-sans text-xs">
                            <p className="font-semibold text-stone-800">Farewell Brunch (Sunday, June 19)</p>
                            <p className="text-stone-500">11:00 AM • Hotel Lenno</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Accommodation, dietary & song preferences (only if attending) */}
                {step === 3 && formData.isAttending && (
                  <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Hotel staying selection */}
                    <div className="space-y-1.5">
                      <label htmlFor="hotelSelection" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Where are you staying?
                      </label>
                      <select
                        id="hotelSelection"
                        name="hotelSelection"
                        value={formData.hotelSelection}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800"
                      >
                        <option value="">-- Please Select Accommodation --</option>
                        <option value="Grand Hotel Tremezzo">Grand Hotel Tremezzo</option>
                        <option value="Villa Serbelloni">Villa Serbelloni</option>
                        <option value="Passalacqua">Passalacqua</option>
                        <option value="Other Hotel/AirBnB">Other local Hotel / AirBnB</option>
                        <option value="Not Booked Yet">Not Booked Yet / Undecided</option>
                      </select>
                    </div>

                    {/* Shuttle check */}
                    <div className="p-3 bg-white border border-stone-200 rounded-sm">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.shuttleRequired}
                          onChange={(e) => handleCheckboxChange('shuttleRequired', e.target.checked)}
                          className="w-4 h-4 mt-0.5 text-stone-800 focus:ring-stone-500 border-stone-300 rounded cursor-pointer"
                        />
                        <div className="text-left font-sans text-xs">
                          <p className="font-semibold text-stone-800">Shuttle Transport Required?</p>
                          <p className="text-stone-500">Complimentary pick-up and drop-off shuttles will operate to the venues from partner hotels on Saturday.</p>
                        </div>
                      </label>
                    </div>

                    {/* Dietary restrictions */}
                    <div className="space-y-1.5">
                      <label htmlFor="dietaryRestrictions" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Dietary Restrictions or Allergies
                      </label>
                      <input
                        type="text"
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        placeholder="e.g. Vegetarian, Gluten Free, Nut Allergy"
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800 shadow-inner"
                      />
                    </div>

                    {/* Song request on dance floor */}
                    <div className="space-y-1.5">
                      <label htmlFor="songRequest" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold flex items-center gap-1.5">
                        <Music className="w-3.5 h-3.5 text-stone-400" />
                        Song request for the dance floor
                      </label>
                      <input
                        type="text"
                        id="songRequest"
                        name="songRequest"
                        value={formData.songRequest}
                        onChange={handleInputChange}
                        placeholder="e.g. Dancing Queen - ABBA"
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800 shadow-inner"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Final message notes & Submit */}
                {step === 4 && (
                  <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Brief Summary of choices */}
                    <div className="p-4 bg-white border border-stone-200 rounded-sm font-sans text-xs space-y-2.5">
                      <h4 className="font-semibold text-stone-800 uppercase tracking-wider border-b border-stone-100 pb-1.5">
                        Selection Summary
                      </h4>
                      <p className="text-stone-700">
                        <span className="font-medium">Guest Name:</span> {formData.fullName}
                      </p>
                      <p className="text-stone-700">
                        <span className="font-medium">Attendance status:</span>{' '}
                        {formData.isAttending ? (
                          <span className="text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                            Attending ({formData.guestsCount} {formData.guestsCount === 1 ? 'person' : 'people'})
                          </span>
                        ) : (
                          <span className="text-red-700 font-medium bg-red-50 px-1.5 py-0.5 rounded-sm">
                            Declining with Regret
                          </span>
                        )}
                      </p>
                      {formData.isAttending && (
                        <>
                          <p className="text-stone-700">
                            <span className="font-medium">Events:</span>{' '}
                            {[
                              formData.welcomeDinner && 'Welcome Dinner',
                              formData.theWedding && 'Wedding Day',
                              formData.farewellBrunch && 'Brunch',
                            ]
                              .filter(Boolean)
                              .join(', ') || 'None'}
                          </p>
                          {formData.hotelSelection && (
                            <p className="text-stone-700">
                              <span className="font-medium">Hotel:</span> {formData.hotelSelection}
                            </p>
                          )}
                        </>
                      )}
                    </div>

                    {/* Personal message to Eleanor & James */}
                    <div className="space-y-1.5">
                      <label htmlFor="notes" className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold">
                        Leave a Note for Eleanor & James (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. Can't wait to see you both in Italy! Wishing you a lifetime of happiness."
                        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-500 font-sans text-sm text-stone-800 shadow-inner resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step Controls Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-stone-200/40 mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 border border-stone-300 hover:border-stone-500 text-stone-700 hover:text-stone-900 font-sans text-xs tracking-widest uppercase transition-all flex items-center gap-1.5 rounded-sm cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step === 4 || (!formData.isAttending && step === 1) ? (
                    <button
                      type="submit"
                      id="submit-rsvp-btn"
                      className="px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs tracking-[0.2em] uppercase transition-all flex items-center gap-2 rounded-sm cursor-pointer shadow-md font-medium"
                    >
                      <span>SUBMIT RESPONSE</span>
                      <Check className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs tracking-widest uppercase transition-all flex items-center gap-1.5 rounded-sm cursor-pointer ml-auto font-medium"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              // SUBMISSION SUCCESS CARD
              <motion.div
                className="text-center py-12 flex flex-col items-center justify-center space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Visual ring/crown sparkles */}
                <div className="p-5 bg-stone-100 rounded-full border border-stone-200/40 relative">
                  <Heart className="w-10 h-10 text-stone-800 fill-stone-200" />
                  <Sparkles className="w-5 h-5 text-stone-500 absolute top-1.5 right-1.5 animate-pulse" />
                </div>

                <div className="space-y-3 max-w-sm">
                  <h3 className="text-3xl font-serif-elegant font-light text-stone-900">
                    Thank You, {formData.fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-stone-500 font-sans text-sm font-light leading-relaxed">
                    {formData.isAttending ? (
                      <>
                        Your wedding weekend RSVP response has been successfully received. We are so excited to toast and celebrate with you on the scenic shores of Lake Como!
                        <br />
                        <span className="block mt-3 text-xs italic text-stone-400">
                          A confirmation reference has been logged.
                        </span>
                      </>
                    ) : (
                      <>
                        We are sorry to hear you won't be able to make it to Italy, but your warm wishes are deeply appreciated. We will raise a glass to you!
                      </>
                    )}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs tracking-widest uppercase transition-all rounded-sm cursor-pointer shadow-md"
                >
                  Close Window
                </button>
              </motion.div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
