"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CulturalHook() {
  return (
    <section className="w-full bg-[#3E2C23] py-20 px-6 md:px-16 relative overflow-hidden">
      <motion.div 
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover A Mesmerizing Nature Landscape & Stunning Culture
        </motion.h2>
        
        <motion.p 
          className="text-lg text-[#E6D5B8] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Travel isn't just about destinations — it's about the soul of a place. 
          Embrace breathtaking nature, authentic culture, and meaningful moments across the globe.
        </motion.p>
        
        <motion.button
          className="bg-[#E6D5B8] text-[#3E2C23] font-bold py-3 px-8 rounded-full hover:bg-[#D4C4A8] transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Learn More
        </motion.button>
      </motion.div>
      
      {/* Optional background image with overlay */}
      {/* 
        The following Image component was commented out because 'cultural-bg.jpg' was not found in the /public directory.
        Please ensure the image exists in /public/cultural-bg.jpg or update the src path.
      */}
      {/*
      <div className="absolute inset-0 z-0 opacity-70">
        <Image 
          src="/cultural-bg.jpg" 
          alt="Cultural background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2C23]/90 to-[#3E2C23]/70" />
      </div>
      */}
    </section>
  );
}