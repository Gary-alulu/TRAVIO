"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  "/culture 1.jpg",
  "/culture 2.jpg",
  "/culture 3.jpg",
  "/culture 4.jpg"
];

export default function CulturalHook() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Image Slider */}
      <AnimatePresence mode="wait">
        {sliderImages.map((src, idx) => (
          current === idx && (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={src}
                alt={`Cultural background ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
                quality={100}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Immerse Yourself in Cultural Wonders
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-[#E6D5B8] mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the rich tapestry of global cultures and breathtaking landscapes.
            Every journey is an opportunity to create lasting memories and discover the hidden treasures of the world.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-[#E6D5B8] text-[#3E2C23] font-bold py-4 px-12 rounded-full transition-all"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#D4C4A8",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Cultures
            </motion.button>
          </motion.div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {sliderImages.map((_, idx) => (
              <motion.div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-[#E6D5B8]' : 'w-2 bg-white/50'}`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrent(idx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}