"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image: string;
}

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-[#3E2C23] mb-8">Your Journey</h2>
      <div className="space-y-8">
        {itinerary.map((day, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start group"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-[#3E2C23] rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
              Day {day.day}
            </div>
            <div className="flex-grow">
              <motion.h3 
                className="text-xl font-semibold text-[#3E2C23] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
              >
                {day.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.3 }}
              >
                {day.description}
              </motion.p>
              <motion.div 
                className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.4 }}
              >
                <Image
                  src={day.image}
                  alt={day.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}