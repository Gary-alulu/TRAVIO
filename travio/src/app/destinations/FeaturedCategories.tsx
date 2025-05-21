"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Beaches",
    tagline: "Breathe, Swim, Escape",
    image: "/category-beach.jpg",
  },
  {
    title: "Mountains",
    tagline: "Climb, Explore, Refresh",
    image: "/category-mountain.jpg",
  },
  {
    title: "Cities",
    tagline: "Vibrant, Modern, Alive",
    image: "/category-city.jpg",
  },
  {
    title: "Cultural Escapes",
    tagline: "Tradition, Heritage, Wonder",
    image: "/category-culture.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-14 md:py-20 bg-[#F5E8D8]">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold text-[#3E2C23] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Explore by Category
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer min-h-[260px] flex items-end"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                quality={90}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/50 to-transparent group-hover:from-[#3E2C23]/60 transition-all duration-300" />
              <div className="relative z-10 p-6 w-full flex flex-col gap-2">
                <motion.h3
                  className="text-2xl md:text-3xl font-serif font-bold text-[#FFF8F0] drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.08 }}
                >
                  {cat.title}
                </motion.h3>
                <span className="text-[#E6D5B8] text-base md:text-lg font-light drop-shadow-md group-hover:opacity-90 transition-opacity duration-300">
                  {cat.tagline}
                </span>
                <motion.span
                  className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#E6D5B8" className="drop-shadow"/><path d="M14 18h8m0 0-3-3m3 3-3 3" stroke="#3E2C23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}