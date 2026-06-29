import { TimelineEvent, HotelRecommendation, GalleryItem, StorySection } from './types';
import heroImage from './assets/images/angkor-wat-prewedding-v2.png';
import welcomeImage from './assets/images/celebration_welcome_1782709672972.jpg';
import storyHowWeMetImage from './assets/images/story_how_we_met_1782709688775.jpg';
import proposalMomentImage from './assets/images/proposal_moment_1782709705853.jpg';

export const HERO_DATA = {
  names: 'ELEANOR & JAMES',
  subtitle: "WE'RE GETTING MARRIED",
  date: 'JUNE 18, 2027',
  location: 'Lake Como, Italy',
  image: heroImage
};

export const WELCOME_DATA = {
  subtitle: 'WELCOME',
  title: 'A Celebration of Love',
  description: 'Together with our families, we invite you to celebrate our wedding weekend in beautiful Lake Como, Italy.',
  image: welcomeImage
};

export const STORY_SECTIONS: StorySection[] = [
  {
    id: 'how-we-met',
    title: 'OUR STORY',
    subtitle: 'How We Met',
    content: 'It all started in a little coffee shop on a rainy day in Paris. A chance meeting that turned into the greatest love story we ever could have imagined. Over countless conversations, late-night walks, and shared adventures around the world, we realized we had found our forever in each other.',
    image: storyHowWeMetImage,
    imageAlt: 'Eleanor and James walking in Italy'
  },
  {
    id: 'the-proposal',
    title: 'THE PROPOSAL',
    subtitle: 'The Best Day of Our Lives',
    content: 'Overlooking the majestic cliffs of Positano, surrounded by hundreds of flickering candles and the gentle sound of the crashing waves, James asked and Eleanor said yes. It was a perfect, magical moment that we will cherish for the rest of our lives, and the beginning of our journey to the altar.',
    image: proposalMomentImage,
    imageAlt: 'James proposing to Eleanor'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'welcome-dinner',
    dayOfWeek: 'FRIDAY',
    date: 'JUNE 16',
    title: 'Welcome Dinner',
    time: '7:00 PM',
    location: 'Villa del Balbianello',
    description: 'Join us for cocktails and an elegant lakeside dinner to kick off our wedding weekend celebrations. Attire: Cocktail Chic.'
  },
  {
    id: 'the-wedding',
    dayOfWeek: 'SATURDAY',
    date: 'JUNE 18',
    title: 'The Wedding',
    time: '5:00 PM',
    location: 'Villa Pizzo',
    description: 'The ceremony will begin at five o\'clock in the lakeside gardens, followed by cocktails, dinner, and dancing under the stars. Attire: Black Tie.'
  },
  {
    id: 'farewell-brunch',
    dayOfWeek: 'SUNDAY',
    date: 'JUNE 19',
    title: 'Farewell Brunch',
    time: '11:00 AM',
    location: 'Hotel Lenno',
    description: 'A relaxed outdoor brunch to bid farewell, share memories, and express our gratitude before we depart. Attire: Resort Casual.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    alt: 'Eleanor and James on terrace',
    caption: 'Sunset moments by the water',
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800',
    alt: 'Wedding stationery',
    caption: 'Our custom invitations',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800',
    alt: 'Wooden speed boat on Lake Como',
    caption: 'Cruising across Lake Como',
    aspect: 'landscape'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800',
    alt: 'Wedding floral centerpiece',
    caption: 'Elegant table settings',
    aspect: 'square'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800',
    alt: 'Couple walking in gardens',
    caption: 'Strolling through historic villa grounds',
    aspect: 'portrait'
  }
];

export const HOTELS_DATA: HotelRecommendation[] = [
  {
    id: 'hotel-1',
    name: 'GRAND HOTEL TREMEZZO',
    type: 'Luxury Hotel',
    description: 'An iconic Art Nouveau masterpiece offering spectacular views of Bellagio and legendary floating pools. Enjoy historic hospitality, luxurious spa services, and fine dining.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800',
    bookingUrl: 'https://www.grandhoteltremezzo.com/',
    distanceToVenue: '10 mins by shuttle',
    priceRange: '$$$$$'
  },
  {
    id: 'hotel-2',
    name: 'VILLA SERBELLONI',
    type: 'Boutique Hotel',
    description: 'Nestled in the heart of Bellagio, this historic estate blends neoclassical grandeur with lush Mediterranean gardens, quiet indoor pools, and unmatched romantic charm.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    bookingUrl: 'https://www.villaserbelloni.com/',
    distanceToVenue: '15 mins by ferry',
    priceRange: '$$$$'
  },
  {
    id: 'hotel-3',
    name: 'PASSALACQUA',
    type: 'Lakefront Retreat',
    description: 'An ultra-exclusive luxury villa with beautifully restored frescoes, spectacular terraced gardens, and an intimate atmosphere directly on the shores of Lake Moltrasio.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800',
    bookingUrl: 'https://www.passalacqua.it/',
    distanceToVenue: '5 mins by shuttle',
    priceRange: '$$$$$'
  }
];
