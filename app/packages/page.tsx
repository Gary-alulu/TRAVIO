'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaLandmark,
  FaStar,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  { 
    key: 'beaches', 
    label: 'Beaches', 
    desc: 'Sun-soaked tropical escapes', 
    icon: FaUmbrellaBeach, 
    bg: '/destinations/categories/beaches.jpg' 
  },
  { 
    key: 'mountains', 
    label: 'Mountains', 
    desc: 'Serene nature and hiking adventures', 
    icon: FaMountain, 
    bg: '/destinations/categories/mountains.jpg' 
  },
  { key: 'cities', label: 'Cities', desc: 'Urban explorations and nightlife', icon: FaCity, bg: '/destinations/categories/cities.jpg' },
  { key: 'culture', label: 'Cultural Escapes', desc: 'Historical and local immersion', icon: FaLandmark, bg: '/destinations/categories/cultural-escape.jpg' },
];

const trips = [
  {
    id: 'bali-beach-escape',
    name: 'Bali Beach Escape',
    location: 'Bali, Indonesia',
    duration: '7 Days, 6 Nights',
    price: 899,
    category: 'beaches',
    image: '/destinations/categories/beaches.jpg',
    badge: 'Best Seller',
    rating: 4.8,
    highlights: ['Snorkeling', 'Private Villa', 'Island Tour'],
    overview: 'Experience the magic of Bali with sun, sand, and culture.',
  },
  {
    id: 'alpine-mountain-trek',
    name: 'Alpine Mountain Trek',
    location: 'Swiss Alps',
    duration: '5 Days, 4 Nights',
    price: 1199,
    category: 'mountains',
    image: '/destinations/categories/mountains.jpg',
    badge: 'Popular',
    rating: 4.9,
    highlights: ['Hiking', 'Panoramic Views', 'Luxury Lodge'],
    overview: 'Conquer scenic trails and enjoy world-class hospitality.',
  },
  {
    id: 'kyoto-cultural-tour',
    name: 'Kyoto Cultural Discovery',
    location: 'Kyoto, Japan',
    duration: '6 Days, 5 Nights',
    price: 1050,
    category: 'culture',
    image: '/destinations/categories/cultural-escape.jpg',
    badge: 'Cultural Highlight',
    rating: 4.9,
    highlights: ['Ancient Temples', 'Tea Ceremony', 'Local Guides'],
    overview: 'Immerse yourself in Japan’s historic capital.',
  },
];

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredTrips = selectedCategory === 'all' ? trips : trips.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#3E2C23]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero1.jpg" 
              alt="Packages Hero" 
              fill 
              priority 
              className="object-cover opacity-60" 
              sizes="100vw" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/60 to-transparent" />
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-2">Find Your Perfect Trip Package</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg md:text-xl">Explore by experience, vibe, or budget — your dream getaway starts here.</motion.p>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[#3E2C23]">Choose by Vibe</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map(cat => (
              <motion.div
                key={cat.key}
                whileHover={{ scale: 1.05 }}
                className={`relative min-w-[220px] h-40 rounded-xl overflow-hidden cursor-pointer group border-2 transition-all ${selectedCategory === cat.key ? 'border-[#3E2C23]' : 'border-transparent'}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <Image 
                  src={cat.bg} 
                  alt={cat.label} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-2">
                  <cat.icon aria-hidden="true" className="h-8 w-8 mb-1 text-white drop-shadow" />
                  <span className="text-lg font-bold text-white drop-shadow">{cat.label}</span>
                  <span className="text-xs text-white/80">{cat.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Trip Packages Grid */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[#3E2C23]">All Available Trips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map(trip => (
              <motion.div
                key={trip.id}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={trip.image} 
                    alt={trip.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-[#3E2C23]">{trip.name}</span>
                      <span className="bg-[#FFF8F0] text-[#3E2C23] px-2 py-1 rounded text-xs font-semibold">From ${trip.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{trip.location} • {trip.duration}</div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      {trip.highlights.map(h => <span key={h} className="bg-[#FFF8F0] text-[#3E2C23] px-2 py-0.5 rounded text-xs">{h}</span>)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {trip.badge && <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-bold">{trip.badge}</span>}
                      <span className="text-yellow-600 text-sm font-semibold inline-flex items-center gap-1">
                        <FaStar aria-hidden="true" /> {trip.rating}
                      </span>
                    </div>
                    <button
                      className="bg-[#3E2C23] hover:bg-[#5A4633] text-white px-4 py-1.5 rounded text-sm font-semibold transition-colors"
                      onClick={() => window.location.href = `/bookings?trip=${trip.id}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Filter / Search Bar */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-[#E6D5B8]">
            <input className="border border-[#E6D5B8] rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#3E2C23]" placeholder="Search destination, tag, or keyword..." />
            <select className="border border-[#E6D5B8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E2C23]">
              <option>Sort by</option>
              <option>Price: Low–High</option>
              <option>Duration: Short–Long</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}