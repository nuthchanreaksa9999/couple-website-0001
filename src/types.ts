export interface TimelineEvent {
  id: string;
  dayOfWeek: string;
  date: string;
  title: string;
  time: string;
  location: string;
  description?: string;
}

export interface HotelRecommendation {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  bookingUrl?: string;
  distanceToVenue?: string;
  priceRange?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface StorySection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  imageAlt: string;
}

export interface RsvpResponse {
  id: string;
  fullName: string;
  email: string;
  isAttending: boolean;
  guestsCount: number;
  dietaryRestrictions: string;
  welcomeDinner: boolean;
  theWedding: boolean;
  farewellBrunch: boolean;
  shuttleRequired: boolean;
  hotelSelection: string;
  songRequest: string;
  notes?: string;
  submittedAt: string;
}
