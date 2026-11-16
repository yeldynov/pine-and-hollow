// All page content lives here so components stay presentational.
// Photos from Unsplash, credited in CREDITS.md.
import heroImage from '../assets/hero.jpg';
import aboutImage from '../assets/about.jpg';
import getawayInsetImage from '../assets/getaway-inset.jpg';
import getawayImage from '../assets/getaway.jpg';
import insta1 from '../assets/insta-1.jpg';
import insta2 from '../assets/insta-2.jpg';
import insta3 from '../assets/insta-3.jpg';
import insta4 from '../assets/insta-4.jpg';
import insta5 from '../assets/insta-5.jpg';
import insta6 from '../assets/insta-6.jpg';

const email = 'hello@pineandhollow.com';
const bookingUrl = 'https://yeldynov.netlify.app/';

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
  booking: { label: 'Booking', href: bookingUrl },

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
    cta: { label: 'Booking', href: bookingUrl },
    image: { src: heroImage, alt: 'A-frame timber cabin among tall pines in deep snow' },
  },

  about: {
    heading: 'About Us',
    body: [
      'Pine & Hollow is a handful of timber cabins tucked into an old pine forest, an hour above the valley. Each one is built for quiet: wide windows onto the trees, a wood stove, linen sheets and nothing that beeps.',
      'Spend the day on the ridge trails or by the creek, then come back to a fire and a sky full of stars. We keep things simple so you can slow down.',
    ],
    link: { label: 'Check our availability', href: '#prices' },
    image: { src: aboutImage, alt: 'Close-up of silver-blue spruce branches' },
  },

  // Houses carousel. Houses 2 and 3 reuse Instagram photos as placeholders: swap for their own shots
  getaway: {
    label: 'Our houses',
    houses: [
      {
        name: 'The Hollow Cabin',
        href: '#prices',
        tagline: [
          { text: 'Unique Getaway ' },
          { text: 'in', italic: true },
          { text: ' the Pines' },
        ],
        insetImage: { src: getawayInsetImage, alt: 'Unmade bed beneath a sunny window looking out onto green trees' },
        image: { src: getawayImage, alt: 'Open living and dining room with a vaulted ceiling, wood stove and windows onto the forest' },
      },
      {
        name: 'The Stove House',
        href: '#prices',
        tagline: [
          { text: 'Slow Evenings ' },
          { text: 'by', italic: true },
          { text: ' the Fire' },
        ],
        insetImage: { src: insta1, alt: 'Wood-burning stove inside a timber cabin' },
        image: { src: insta4, alt: 'Cabin living room gathered around a wood stove' },
      },
      {
        name: 'The Ridge Hut',
        href: '#prices',
        tagline: [
          { text: 'Snowed In ' },
          { text: 'and', italic: true },
          { text: ' Happy' },
        ],
        insetImage: { src: insta5, alt: 'Mountain lake framed by rocks and grass' },
        image: { src: insta6, alt: 'Wooden cabin half buried in snow among the trees' },
      },
    ],
  },

  prices: {
    heading: [
      { text: 'Simple Rates, ' },
      { text: 'all', italic: true },
      { text: ' Year Round' },
    ],
    rates: [
      { label: 'Weeknight', detail: 'Sunday to Thursday', price: '€180' },
      { label: 'Weekend night', detail: 'Friday and Saturday', price: '€220' },
      { label: 'Full week', detail: 'Seven nights', price: '€1,150' },
    ],
    note: 'Per cabin, up to four guests. Firewood, linen and a breakfast basket are included. Two-night minimum.',
    cta: { label: 'Request a stay', href: bookingUrl },
  },

  testimonial: {
    quote: '“A quiet place to stay for our family weekend in the mountains.”',
    rating: 5,
    text: 'We woke up to mist in the trees and fell asleep by the stove. The cabin was spotless, warm and beautifully simple. The kids are already asking when we can go back.',
    name: 'Anna K.',
    date: 'October 2026',
  },

  instagram: {
    handle: '@pineandhollow',
    href: 'https://instagram.com/pineandhollow',
    images: [
      { src: insta1, alt: 'Wood-burning stove inside a timber cabin' },
      { src: insta2, alt: 'Aerial view of a dense pine forest crossed by a path' },
      { src: insta3, alt: 'Still lake ringed by pines and mountain peaks' },
      { src: insta4, alt: 'Cabin living room gathered around a wood stove' },
      { src: insta5, alt: 'Mountain lake framed by rocks and grass' },
      { src: insta6, alt: 'Wooden cabin half buried in snow among the trees' },
    ],
  },

  footer: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Terms and conditions', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
    address: ['Pine & Hollow Cabins', 'Hollow Ridge Valley'],
    email,
    phone: '+1 555 0142 300',
    language: 'English',
  },
};
