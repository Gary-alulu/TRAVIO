'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";

const categories = [
  { 
    key: 'beaches', 
    label: 'Beaches', 
    desc: 'Sun-soaked tropical escapes', 
    icon: '/public/beach-icon.svg', 
    bg: '/public/beach.jpg' 
  },
  { 
    key: 'mountains', 
    label: 'Mountains', 
    desc: 'Serene nature and hiking adventures', 
    icon: '/public/mountain-icon.svg', 
    bg: '/public/mountain.jpg' 
  },
  { key: 'cities', label: 'Cities', desc: 'Urban explorations and nightlife', icon: '🏙️', bg: '/public/city.jpg' },
  { key: 'culture', label: 'Cultural Escapes', desc: 'Historical and local immersion', icon: '🏛️', bg: '/public/culture.jpg' },
];

const trips = [
  {
    id: 'bali-beach-escape',
    name: 'Bali Beach Escape',
    location: 'Bali, Indonesia',
    duration: '7 Days, 6 Nights',
    price: 899,
    category: 'beaches',
    image: '/public/destinations/bali.jpg',
    badge: 'Best Seller',
    rating: 4.8,
    highlights: ['Snorkeling', 'Private Villa', 'Island Tour'],
    overview: 'Experience the magic of Bali with sun, sand, and culture.',
  },
  // Add more trip objects for each category...
];

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredTrips = selectedCategory === 'all' ? trips : trips.filter(t => t.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#FFF8F0] font-sans">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/public/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/60 to-transparent" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-2">Find Your Perfect Trip Package</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg md:text-xl">Explore by experience, vibe, or budget — your dream getaway starts here.</motion.p>
        </div>
        {/* Optional: Filter bar can go here */}
      </section>

      {/* Category Section */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[#3E2C23]">Choose by Vibe</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map(cat => (
            <motion.div
              key={cat.key}
              whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #3E2C23AA' }}
              className={`relative min-w-[220px] h-40 rounded-xl overflow-hidden cursor-pointer group border-2 transition-all ${selectedCategory === cat.key ? 'border-[#3E2C23]' : 'border-transparent'}`}
              style={{ background: `url(${cat.bg}) center/cover` }}
              onClick={() => setSelectedCategory(cat.key)}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <img src={cat.icon} alt={cat.label} className="w-12 h-12 mb-2" />
                <span className="text-lg font-bold text-white drop-shadow">{cat.label}</span>
                <span className="text-sm text-white/80">{cat.desc}</span>
                <motion.button
                  className="mt-3 px-4 py-1 bg-[#FFF8F0] text-[#3E2C23] rounded shadow opacity-0 group-hover:opacity-100 transition"
                >
                  View Packages
                </motion.button>
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
              whileHover={{ scale: 1.03, boxShadow: '0 4px 24px #3E2C23AA' }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <img src={trip.image} alt={trip.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-[#3E2C23]">{trip.name}</span>
                  <span className="bg-[#FFF8F0] text-[#3E2C23] px-2 py-1 rounded text-xs font-semibold">From ${trip.price}</span>
                </div>
                <div className="text-sm text-gray-600 mb-1">{trip.location} • {trip.duration}</div>
                <div className="flex gap-2 flex-wrap mb-2">
                  {trip.highlights.map(h => <span key={h} className="bg-[#FFF8F0] text-[#3E2C23] px-2 py-0.5 rounded text-xs">{h}</span>)}
                </div>
                <div className="flex items-center gap-2">
                  {trip.badge && <span className="bg-orange-200 text-orange-800 px-2 py-0.5 rounded text-xs font-bold">{trip.badge}</span>}
                  <span className="text-yellow-500">★ {trip.rating}</span>
                </div>
                <motion.button
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-[#3E2C23] to-[#FFF8F0] text-[#3E2C23] px-4 py-2 rounded shadow-lg font-semibold group-hover:scale-105 transition"
                  onClick={() => window.location.href = `/bookings?trip=${trip.id}`}
                >Book Now</motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[#3E2C23]">Popular Right Now</h2>
        {/* Carousel or masonry layout for popular packages can go here */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* Example popular package card */}
          <div className="min-w-[260px] bg-white rounded-xl shadow-lg p-4">
            <img src="/public/destinations/bali.jpg" alt="Bali Beach Escape" className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-bold text-[#3E2C23]">Bali Beach Escape</div>
            <div className="text-xs text-orange-600 font-semibold">Trending</div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Smart Additions: Search, Sort, Filters (UI only, logic can be added as needed) */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input className="border rounded px-4 py-2 w-full md:w-1/3" placeholder="Search destination, tag, or keyword..." />
          <select className="border rounded px-4 py-2">
            <option>Sort by</option>
            <option>Price: Low–High</option>
            <option>Duration: Short–Long</option>
            <option>Rating</option>
            <option>Newest</option>
          </select>
          {/* Add more filters as needed */}
        </div>
      </section>
    </main>
  )
  <Footer />
}