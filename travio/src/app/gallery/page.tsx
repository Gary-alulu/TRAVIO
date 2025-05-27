"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  location: string;
  contributor: string;
  date: string;
  className: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/hero1.jpg",
    alt: "Mountain landscape",
    category: "WANDER",
    location: "Swiss Alps",
    contributor: "Jane Doe",
    date: "2024-01",
    className: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: "/culture 1.jpg",
    alt: "Cultural festival",
    category: "CULTURE",
    location: "Kyoto, Japan",
    contributor: "John Smith",
    date: "2024-02",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: "/culture 2.jpg",
    alt: "Street scene",
    category: "SOULFUL SPOTS",
    location: "Paris, France",
    contributor: "Alice Johnson",
    date: "2024-03",
    className: "col-span-1 row-span-2"
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-['Poppins']">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/hero1.jpg"
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6">
            Captured Across the World
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            A visual story of every journey, soul, and place Travio has touched.
          </p>
          <button className="bg-[#3E2C23] hover:bg-[#5A4633] text-white px-8 py-3 rounded-full transition-colors duration-300">
            Submit Your Photo
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white text-sm">Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl ${image.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-sm font-medium tracking-wider text-[#E6D5B8]">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-['Playfair_Display'] mt-2">{image.location}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    By {image.contributor} • {image.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-7xl mx-auto px-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-['Playfair_Display']">{selectedImage.location}</h3>
              <p className="text-sm mt-2">
                {selectedImage.category} • By {selectedImage.contributor} • {selectedImage.date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* User Submission Section */}
      <section className="bg-[#3E2C23] py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
              Want to see your journey here?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Share your travel moments with our community and inspire fellow wanderers.
            </p>
            <button className="bg-[#E6D5B8] hover:bg-[#A08B6D] text-[#3E2C23] px-8 py-3 rounded-full transition-colors duration-300 font-medium">
              Submit Your Story
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}