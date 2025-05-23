"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DestinationsHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#E6D5B8]">
      {/* Parallax Background Collage */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <Image
            src="/destinations-hero-collage.jpg"
            alt="Scenic collage of destinations"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/60 to-transparent" />
        </div>
      </div>
      {/* Overlay Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-sans font-bold text-[#FFF8F0] mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover Our Curated Travel Destinations
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[#E6D5B8] mb-8 max-w-2xl font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          From tropical beaches to cultural cities, find your perfect getaway.
        </motion.p>
        <motion.button
          className="bg-[#E6D5B8] text-[#3E2C23] font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg mt-2"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px #3E2C23AA" }}
          whileTap={{ scale: 0.97 }}
        >
          Explore All Trips
        </motion.button>
      </motion.div>
    </section>
  );
}