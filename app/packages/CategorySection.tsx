"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "beaches",
    title: "Beaches",
    description: "Sun-soaked tropical escapes",
    image: "/destinations/beach.jpg"
  },
  {
    id: "mountains",
    title: "Mountains",
    description: "Serene nature and hiking adventures",
    image: "/destinations/mountain.jpg"
  },
  {
    id: "cities",
    title: "Cities",
    description: "Urban explorations and nightlife",
    image: "/destinations/city.jpg"
  },
  {
    id: "cultural",
    title: "Cultural Escapes",
    description: "Historical and local immersion experiences",
    image: "/destinations/cultural.jpg"
  }
];

export default function CategorySection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FFF8F0]">
      <h2 className="text-4xl font-bold text-center text-[#3E2C23] mb-12">Choose by Vibe</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm opacity-90 mb-4">{category.description}</p>
              
              <motion.button
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full text-white font-semibold"
              >
                View Packages
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}