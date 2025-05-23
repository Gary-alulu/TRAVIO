"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    title: "Ubud, Bali",
    country: "Indonesia",
    image: "/dest-bali.jpg",
    trending: true,
    size: "row-span-2 col-span-2"
  },
  {
    title: "Kyoto",
    country: "Japan",
    image: "/dest-kyoto.jpg",
    trending: false,
    size: "col-span-1"
  },
  {
    title: "Santorini",
    country: "Greece",
    image: "/dest-santorini.jpg",
    trending: true,
    size: "row-span-2"
  },
  {
    title: "Marrakech",
    country: "Morocco",
    image: "/dest-marrakech.jpg",
    trending: false,
    size: "col-span-1"
  },
  {
    title: "Banff",
    country: "Canada",
    image: "/dest-banff.jpg",
    trending: false,
    size: "col-span-1"
  },
  {
    title: "Phuket",
    country: "Thailand",
    image: "/dest-phuket.jpg",
    trending: true,
    size: "col-span-1"
  },
  {
    title: "Rome",
    country: "Italy",
    image: "/dest-rome.jpg",
    trending: false,
    size: "col-span-1"
  },
  {
    title: "Queenstown",
    country: "New Zealand",
    image: "/dest-queenstown.jpg",
    trending: false,
    size: "col-span-1"
  }
];

export default function BentoPopularDestinations() {
  return (
    <section className="py-16 bg-[#FFF8F0]">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2
          className="text-2xl md:text-4xl font-sans font-bold text-[#3E2C23] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Popular Destinations
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-6 bento-grid">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.title}
              className={`relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer flex flex-col justify-end ${dest.size} min-h-[180px] md:min-h-[220px]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.09 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                quality={90}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-[#3E2C23]/40 to-transparent group-hover:from-[#3E2C23]/60 transition-all duration-300" />
              <div className="relative z-10 p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <motion.h3
                    className="text-xl md:text-2xl font-sans font-bold text-[#FFF8F0] drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.08 }}
                  >
                    {dest.title}
                  </motion.h3>
                  <span className="ml-2 text-[#E6D5B8] text-sm flex items-center gap-1">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#E6D5B8"/></svg>
                    {dest.country}
                  </span>
                  {dest.trending && (
                    <span className="ml-2 bg-gradient-to-r from-[#E6D5B8] to-[#F5E8D8] text-[#3E2C23] text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">Trending</span>
                  )}
                </div>
                <motion.button
                  className="mt-3 w-10 h-10 rounded-full bg-[#E6D5B8] flex items-center justify-center shadow-lg hover:shadow-2xl group-hover:scale-110 transition-all duration-300 absolute right-5 bottom-5"
                  whileHover={{ scale: 1.15, boxShadow: "0 8px 32px #3E2C23AA" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0-3-3m3 3-3 3" stroke="#3E2C23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}