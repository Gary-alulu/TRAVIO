"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png"
];

export default function LogoCarousel() {
  return (
    <section className="w-full py-10 bg-[#FFF8F0] flex items-center justify-center overflow-x-auto">
      <div className="flex gap-12 items-center w-full max-w-6xl mx-auto px-6 md:px-0">
        {logos.map((src, idx) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Partner logo ${idx + 1}`}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}