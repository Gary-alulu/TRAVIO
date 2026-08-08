"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import ClientSlider from '../components/ClientSlider';
import Footer from '../components/Footer';

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const AboutUsPage = () => {
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
    arrows: false,
    dotsClass: 'slick-dots flex justify-center gap-2 absolute bottom-10 w-full z-30',
    customPaging: () => (
      <div className="w-2 h-2 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300" />
    )
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-poppins">
      <section className="relative h-screen flex items-center justify-center text-center text-white">
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
        <motion.div 
          className="relative z-20 p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair-display font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            More Than Just Travel — It is a Journey of Discovery
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-inter mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Travio, we do not just take you places—we create unforgettable stories.
          </motion.p>
          <motion.button 
            className="bg-[#E6D5B8] hover:bg-[#3E2C23] text-[#3E2C23] hover:text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Mission, Vision & Values Section */}
      <section className="py-16 md:py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                icon: '🧭',
                text: 'To inspire meaningful travel through authentic experiences, cultural connections, and stunning destinations.'
              },
              {
                title: 'Our Vision',
                icon: '🌏',
                text: 'A world where travel enriches lives, unites people, and preserves local heritage.'
              },
              {
                title: 'Our Values',
                icon: '💝',
                content: ['Sustainability', 'Cultural Respect', 'Customer Delight', 'Community Empowerment']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-playfair-display font-semibold mb-4 text-[#3E2C23]">
                  {item.title}
                </h3>
                {item.text ? (
                  <p className="text-gray-600 font-inter">{item.text}</p>
                ) : (
                  <ul className="list-none text-gray-600 font-inter space-y-2">
                    {item.content?.map((value, i) => (
                      <li key={i}>{value}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-playfair-display font-bold mb-6 text-[#3E2C23]">
              Travio in Motion
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Watch how we turn travel dreams into reality
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/hero2.jpg"
                alt="Video thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#3E2C23] border-b-[15px] border-b-transparent ml-2" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-playfair-display font-bold mb-8 text-[#3E2C23]">
              Ready to Explore the World with Us?
            </h2>
            <motion.button
              className="bg-[#3E2C23] hover:bg-[#E6D5B8] text-white hover:text-[#3E2C23] font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Destinations
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;