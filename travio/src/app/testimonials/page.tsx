"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Singapore",
    role: "Travel Photographer",
    image: "/hero1.jpg",
    quote: "Travio helped me discover hidden gems that became the highlight of my photography portfolio. The local insights are invaluable!",
    rating: 5
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Italy",
    role: "Digital Nomad",
    image: "/culture 1.jpg",
    quote: "As someone who works while traveling, Travio's detailed location guides and community tips have been a game-changer.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "UK",
    role: "Solo Backpacker",
    image: "/culture 2.jpg",
    quote: "The solo traveler features made me feel confident exploring new destinations. I've met amazing people through Travio's community!",
    rating: 5
  },
];

const GeometricShape = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="w-8 h-8 bg-[#E6D5B8] rounded-full opacity-20" />
  </motion.div>
);

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#3E2C23] font-['Poppins']">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-6">
            What Our Travelers Say About Travio
          </h1>
          <p className="text-xl text-[#5A4633] max-w-2xl mx-auto">
            Real stories from people who've turned journeys into lasting memories.
          </p>
        </motion.div>

        {/* Geometric Accents */}
        <GeometricShape className="top-20 left-[10%]" />
        <GeometricShape className="top-40 right-[15%]" />
        <GeometricShape className="bottom-20 left-[20%]" />
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex transition-transform duration-500 ease-out"
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-3xl">
                    <div className="flex items-start gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-[#5A4633]">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-[#3E2C23]' : 'bg-[#E6D5B8]'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section ref={containerRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ y }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-[#5A4633]">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-[#3E2C23] italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{testimonial.role}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3E2C23] text-white py-16">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
            Loved your journey with Travio?
          </h2>
          <p className="text-lg text-[#E6D5B8] mb-8 max-w-2xl mx-auto">
            Share your adventure with us and inspire fellow travelers around the world.
          </p>
          <button className="bg-[#E6D5B8] hover:bg-[#A08B6D] text-[#3E2C23] px-8 py-3 rounded-full transition-colors duration-300 font-medium">
            Share Your Story
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}