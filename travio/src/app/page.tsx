"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ClientSlider from "./components/ClientSlider";
import dynamic from 'next/dynamic';
import CoreValuesSection from "./components/CoreValuesSection";
import Footer from "./components/Footer";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

import Navbar from "./components/Navbar";
const FeaturedDestinations = dynamic(() => import('./components/FeaturedDestinations'), { ssr: false });
const CulturalHook = dynamic(() => import('./components/CulturalHook'), { ssr: false });
import LogoCarousel from "./components/LogoCarousel";

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
          <ClientSlider settings={settings}>
            {images.map((src, index) => (
              <div key={index} className="relative h-screen w-full">
                <Image
                  src={src}
                  alt={`Hero image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent" />
              </div>
            ))}
          </ClientSlider>
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
        
        <main className="hidden">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
