"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function DestinationsHero() {
  const [heroImages, setHeroImages] = useState<string[]>([]);

  useEffect(() => {
    setHeroImages([
      "/destinations/hero/hero 1.jpg",
      "/destinations/hero/hero 2.jpg",
      "/destinations/hero/hero 3.jpg",
      "/destinations/hero/hero 4.jpg",
      "/destinations/hero/hero 5.jpg"
    ]);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#E6D5B8]">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={src}
                  alt={`Destination hero image ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority
                  quality={100}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/60 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
        <div className="flex justify-center mt-6">
          <Link href="/packages">
            <motion.button
              className="px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-colors"
              style={{ backgroundColor: '#FFF8F0', color: '#3E2C23' }}
            >
              Explore All Trips
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}