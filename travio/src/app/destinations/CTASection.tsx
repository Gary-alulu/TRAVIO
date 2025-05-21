"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#E6D5B8] overflow-hidden">
      {/* Parallax/Faded Scenic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-scenic.jpg"
          alt="Scenic background"
          fill
          className="object-cover object-center opacity-70"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F0]/90 via-[#E6D5B8]/80 to-transparent" />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-serif font-bold text-[#3E2C23] mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-[#5A4633] mb-8 max-w-2xl font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let our experts craft your dream vacation.
        </motion.p>
        <motion.button
          className="bg-[#3E2C23] text-[#E6D5B8] font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-[#5A4633] transition-all duration-300 text-lg mt-2 border-2 border-[#E6D5B8] hover:border-[#3E2C23]"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px #3E2C23AA" }}
          whileTap={{ scale: 0.97 }}
        >
          Plan Your Trip
        </motion.button>
      </motion.div>
    </section>
  );
}