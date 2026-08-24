"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

const CoreValuesSection = dynamic(() => import('./components/CoreValuesSection'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });
const ClientSlider = dynamic(() => import('./components/ClientSlider'), { ssr: false });
const FeaturedDestinations = dynamic(() => import('./components/FeaturedDestinations'), { ssr: false });
const CulturalHook = dynamic(() => import('./components/CulturalHook'), { ssr: false });

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

export default function Home() {
  const settings = {
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
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          {/* Static LCP image: renders in initial HTML so painting starts before JS loads.
              The slider (same first image) hydrates on top of it seamlessly. */}
          <Image
            src="/hero1.jpg"
            alt="Discover your next adventure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent" />
          <Suspense fallback={null}>
            <ClientSlider settings={settings}>
              {images.map((src, index) => (
                <div key={index} className="relative h-screen w-full">
                  <Image
                    src={src}
                    alt={`Hero image ${index + 1}`}
                    fill
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent" />
                </div>
              ))}
            </ClientSlider>
          </Suspense>
        </div>
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl text-center"
            whileHover={{ scale: 1.02 }}
          >
            Explore breathtaking destinations around the world
          </motion.p>
          <motion.button
            className="bg-[#E6D5B8] hover:bg-[#D4C4A8] text-gray-800 font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </section>
      
      <FeaturedDestinations />
      <CoreValuesSection />
      <CulturalHook />
      <Footer />
    </div>
  );
}
