"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ClientSlider from "./ClientSlider";



export default function CoreValuesSection() {
  return (
    <section className="bg-[#FFF8F0] py-12 md:py-20 px-4 sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20">
        {/* Left Column */}
        <div className="flex-1 w-full max-w-xl">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3E2C23] mb-4 md:mb-6 font-sans"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Experience The New Adventure
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-[#5A4633] mb-6 md:mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the thrill of exploring new cultures, creating unforgettable memories, and traveling with peace of mind. Travio brings you journeys to the world’s most beautiful destinations.
          </motion.p>
        </div>
        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col gap-4 md:gap-6 items-center">
          <div className="w-full max-w-md">
            <ClientSlider 
              settings={{
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                fade: true,
                cssEase: 'linear',
                pauseOnHover: false,
                arrows: false
              }}
            >
              {['/scenic-main.jpg', '/hero2.jpg', '/hero3.jpg'].map((src, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64"
                >
                  <div className="w-full h-full">
                    <Image
                      src={src}
                      alt={`Scenic image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E6D5B8]/60 to-transparent pointer-events-none" />
                  </div>
                </div>
              ))}
            </ClientSlider>
          </div>
        </div>
      </div>
    </section>
  );
}