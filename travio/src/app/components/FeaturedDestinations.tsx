"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedDestinations() {
  return (
    <section className="py-16 bg-[#FFF8F0] px-8 md:px-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#3E2C23] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Destinations
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large Featured Card */}
          <motion.div 
            className="md:col-span-6 relative group rounded-xl overflow-hidden h-full bg-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/hero1.jpg"
              alt="Featured Destination"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Bali, Indonesia</h3>
                <p className="text-sm opacity-90">Experience paradise on Earth</p>
              </div>
            </div>
          </motion.div>
          
          {/* Grid of 4 Smaller Cards */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <motion.div 
              className="relative group rounded-xl overflow-hidden aspect-square bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/hero2.jpg"
                alt="Destination 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Santorini</h3>
                  <p className="text-xs opacity-90">Greek Paradise</p>
                </div>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="relative group rounded-xl overflow-hidden aspect-square bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/hero3.jpg"
                alt="Destination 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Maldives</h3>
                  <p className="text-xs opacity-90">Tropical Luxury</p>
                </div>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              className="relative group rounded-xl overflow-hidden aspect-square bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/hero1.jpg"
                alt="Destination 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Dubai</h3>
                  <p className="text-xs opacity-90">Modern Marvel</p>
                </div>
              </div>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div 
              className="relative group rounded-xl overflow-hidden aspect-square bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/hero2.jpg"
                alt="Destination 4"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Paris</h3>
                  <p className="text-xs opacity-90">City of Love</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}