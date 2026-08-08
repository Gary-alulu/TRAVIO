"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const itineraries = [
  {
    title: "7 Days in Northern Thailand",
    description: "Temples, jungles, and vibrant markets in Chiang Mai & Chiang Rai.",
    price: "$1,299",
    duration: "7 Days",
    image: "/itinerary-thailand.jpg"
  },
  {
    title: "Romantic Santorini Escape",
    description: "Sunsets, whitewashed villages, and Aegean bliss.",
    price: "$2,150",
    duration: "5 Days",
    image: "/itinerary-santorini.jpg"
  },
  {
    title: "Cultural Japan Highlights",
    description: "Kyoto, Tokyo, and ancient traditions meet modern wonders.",
    price: "$2,800",
    duration: "10 Days",
    image: "/itinerary-japan.jpg"
  },
  {
    title: "Canadian Rockies Adventure",
    description: "Banff, Lake Louise, and breathtaking mountain scenery.",
    price: "$1,950",
    duration: "8 Days",
    image: "/itinerary-banff.jpg"
  }
];

export default function ItinerariesCarousel() {
  return (
    <section className="py-16 bg-[#F5E8D8]">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2
          className="text-2xl md:text-4xl font-sans font-bold text-[#3E2C23] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Recommended Itineraries
        </motion.h2>
        <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
          {itineraries.map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative min-w-[320px] max-w-xs rounded-3xl overflow-hidden shadow-xl group bg-[#FFF8F0] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  quality={90}
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/70 via-[#3E2C23]/30 to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-sans font-bold text-[#3E2C23] mb-1">{item.title}</h3>
                <p className="text-[#5A4633] text-base font-light mb-2">{item.description}</p>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#E6D5B8] text-[#3E2C23] text-xs font-bold px-3 py-1 rounded-full shadow">{item.price}</span>
                  <span className="bg-[#3E2C23] text-[#E6D5B8] text-xs font-bold px-3 py-1 rounded-full shadow">{item.duration}</span>
                </div>
                <motion.button
                  className="mt-auto w-full rounded-full bg-gradient-to-r from-[#E6D5B8] to-[#F5E8D8] text-[#3E2C23] font-bold py-2 shadow-lg hover:shadow-2xl hover:from-[#FFF8F0] hover:to-[#E6D5B8] transition-all duration-300 border-2 border-transparent hover:border-[#E6D5B8]"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #E6D5B8AA" }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Details
                </motion.button>
              </div>
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-[0_0_24px_6px_#E6D5B8] transition-shadow duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}