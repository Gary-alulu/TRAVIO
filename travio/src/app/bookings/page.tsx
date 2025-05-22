"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const destinationImages = [
  { src: "/bali-1.jpg", alt: "Bali Temple" },
  { src: "/bali-2.jpg", alt: "Bali Beach" },
  { src: "/bali-3.jpg", alt: "Rice Terraces" },
  { src: "/bali-4.jpg", alt: "Local Culture" },
];

const includedFeatures = [
  { icon: "✈️", title: "Flights", description: "Return flights included" },
  { icon: "🏨", title: "Accommodation", description: "Luxury resort stay" },
  { icon: "🍴", title: "Meals", description: "Full board meals" },
  { icon: "🚍", title: "Transportation", description: "Private transfers" },
  { icon: "🏞️", title: "Activities", description: "Guided tours" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Welcome",
    description: "Arrive in Bali, transfer to your luxury resort, welcome dinner",
    image: "/bali-day1.jpg",
  },
  {
    day: 2,
    title: "Temple & Culture Tour",
    description: "Visit ancient temples, traditional dance performance",
    image: "/bali-day2.jpg",
  },
  {
    day: 3,
    title: "Nature & Adventure",
    description: "Rice terrace trek, waterfall visit, spa treatment",
    image: "/bali-day3.jpg",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    comment: "An unforgettable experience in paradise!",
    image: "/reviewer1.jpg",
  },
  {
    name: "John D.",
    rating: 5,
    comment: "Perfect blend of luxury and adventure.",
    image: "/reviewer2.jpg",
  },
];

export default function BookingsPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />

      {/* Hero Section with Parallax */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/bali-hero.jpg"
            alt="Bali Paradise"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2C23]/60 to-transparent z-10" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-sans font-bold mb-4"
          >
            Bali, Indonesia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Where serenity meets adventure
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery Section */}
            <section className="mb-16">
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                <Image
                  src={destinationImages[currentImageIndex].src}
                  alt={destinationImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {destinationImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* What's Included Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-[#3E2C23] mb-8">What is Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {includedFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-4xl mb-4 block">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-[#3E2C23] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Itinerary Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-[#3E2C23] mb-8">Your Journey</h2>
              <div className="space-y-8">
                {itinerary.map((day, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-[#3E2C23] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      Day {day.day}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#3E2C23] mb-2">{day.title}</h3>
                      <p className="text-gray-600 mb-4">{day.description}</p>
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={day.image}
                          alt={day.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-sans font-bold text-[#3E2C23] mb-8">Traveler Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#3E2C23]">{review.name}</h3>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-sans font-bold text-[#3E2C23] mb-6">Book Your Journey</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E2C23]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <div className="text-lg font-semibold text-[#3E2C23]">5 Days / 4 Nights</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <div className="text-2xl font-bold text-[#3E2C23]">$1,999 <span className="text-sm font-normal text-gray-600">per person</span></div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-yellow-400">★</span>
                  <span>4.9 (128 reviews)</span>
                </div>
              </div>

              <button
                className="w-full bg-[#3E2C23] text-white py-3 rounded-lg font-semibold hover:bg-[#4d382c] transition-colors"
                onClick={() => alert('Booking functionality coming soon!')}
              >
                Book Now
              </button>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Free cancellation up to 24 hours before the trip
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}