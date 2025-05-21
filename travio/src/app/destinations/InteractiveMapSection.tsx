"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const hotspots = [
  { name: "Bali", left: "38%", top: "62%", image: "/dest-bali.jpg" },
  { name: "Kyoto", left: "60%", top: "38%", image: "/dest-kyoto.jpg" },
  { name: "Santorini", left: "30%", top: "32%", image: "/dest-santorini.jpg" },
  { name: "Banff", left: "12%", top: "18%", image: "/dest-banff.jpg" },
  { name: "Phuket", left: "52%", top: "70%", image: "/dest-phuket.jpg" },
  { name: "Marrakech", left: "18%", top: "48%", image: "/dest-marrakech.jpg" },
];

export default function InteractiveMapSection() {
  return (
    <section className="relative py-16 bg-[#F5E8D8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold text-[#3E2C23] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Explore Destinations on the Map
        </motion.h2>
        <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] rounded-3xl overflow-hidden shadow-xl">
          {/* Parallax background */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/map-asia-artistic.jpg"
              alt="Artistic Asia/world map"
              fill
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/70 via-[#3E2C23]/30 to-transparent" />
          </motion.div>
          {/* Hotspots */}
          {hotspots.map((spot, idx) => (
            <motion.div
              key={spot.name}
              className="absolute group cursor-pointer"
              style={{ left: spot.left, top: spot.top, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#E6D5B8] border-4 border-[#3E2C23] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#3E2C23"/></svg>
              </div>
              {/* Preview on hover */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20">
                <div className="bg-[#FFF8F0] rounded-xl shadow-xl p-2 flex flex-col items-center min-w-[120px]">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden mb-2">
                    <Image src={spot.image} alt={spot.name} fill className="object-cover" />
                  </div>
                  <span className="text-[#3E2C23] font-semibold text-sm">{spot.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}