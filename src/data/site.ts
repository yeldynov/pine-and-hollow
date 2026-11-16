// All page content lives here so components stay presentational.
// Images get added once photos are picked (src/assets + CREDITS.md).
import heroImage from '../assets/hero-placeholder.svg';
// ponytail: placeholders reuse the hero SVG; swap each for its own photo
const aboutImage = heroImage;
const getawayInsetImage = heroImage;
const getawayImage = heroImage;

export const site = {
  meta: {
    title: 'Pine & Hollow · Forest cabins in the mountains',
    description:
      'Quiet forest cabins in the mountains. Slow mornings, wood fires and pine air: the perfect stay to rest and enjoy.',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Houses', href: '#houses' },
    { label: 'Prices', href: '#prices' },
    { label: 'Contact', href: '#contact' },
  ],

  location: { label: 'Hollow Ridge Valley', href: 'https://maps.google.com/?q=Hollow+Ridge+Valley' },
  booking: { label: 'Booking', href: '#booking' },

  hero: {
    eyebrow: 'Welcome to Pine & Hollow',
    // Segments with `italic: true` render in the display italic
    headline: [
      { text: 'The Perfect Stay ' },
      { text: 'to', italic: true },
      { text: ' Rest ' },
      { text: 'and', italic: true },
      { text: ' Enjoy' },
    ],
    cta: { label: 'Booking', href: '#booking' },
    image: { src: heroImage, alt: 'Timber cabins among tall pines on a misty mountain slope' },
  },

  about: {
    heading: 'About Us',
    body: [
      'Pine & Hollow is a handful of timber cabins tucked into an old pine forest, an hour above the valley. Each one is built for quiet: wide windows onto the trees, a wood stove, linen sheets and nothing that beeps.',
      'Spend the day on the ridge trails or by the creek, then come back to a fire and a sky full of stars. We keep things simple so you can slow down.',
    ],
    link: { label: 'Check our availability', href: '#booking' },
    image: { src: aboutImage, alt: 'Pine branches against the weathered timber wall of a cabin' },
  },

  getaway: {
    heading: [
      { text: 'Unique Getaway ' },
      { text: 'in', italic: true },
      { text: ' the Pines' },
    ],
    house: { name: 'The Hollow Cabin', href: '#houses' },
    insetImage: { src: getawayInsetImage, alt: 'Linen curtains and soft morning light in a cabin bedroom' },
    image: { src: getawayImage, alt: 'Open living room with a wood stove and tall windows facing the forest' },
  },

  testimonial: {
    quote: '“A quiet place to stay for our family weekend in the mountains.”',
    rating: 5,
    text: 'We woke up to mist in the trees and fell asleep by the stove. The cabin was spotless, warm and beautifully simple. The kids are already asking when we can go back.',
    name: 'Anna K.',
    date: 'October 2026',
  },

  instagram: { handle: '@pineandhollow', href: 'https://instagram.com/pineandhollow' },

  footer: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Terms and conditions', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
    address: ['Pine & Hollow Cabins', 'Hollow Ridge Valley'],
    email: 'hello@pineandhollow.com',
    phone: '+1 555 0142 300',
    language: 'English',
  },
};
