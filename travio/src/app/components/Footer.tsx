"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const socialIcons = [
  { src: "/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/youtube.svg", alt: "YouTube", href: "#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Tips", href: "/travel-tips" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Travel Guides", href: "#" },
  { label: "Popular Trips", href: "#" },
  { label: "Special Offers", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Packages", href: "#" },
];

const policyLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Site Map", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-[#3E2C23] text-[#E6D5B8] py-12 md:py-16 relative">


      {/* Main Footer Grid */}
      <motion.div
        className="container mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Brand Identity */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-3xl md:text-4xl font-serif font-bold text-[#E6D5B8] tracking-tight mb-2">Travio</span>
          <span className="text-[#E6D5B8] text-base mb-3">Wander More. Worry Less.</span>
          <div className="flex gap-4 mt-2">
            {socialIcons.map((icon, idx) => (
              <motion.a
                key={idx}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#E6D5B8]/10 p-2 hover:bg-[#E6D5B8]/30 transition-colors"
                whileHover={{ scale: 1.15, backgroundColor: "#E6D5B8" }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={icon.src} alt={icon.alt} width={28} height={28} className="object-contain" />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Navigation */}
        <div>
          <div className="font-semibold text-lg mb-4 text-[#E6D5B8]">Navigation</div>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <motion.li key={idx} whileHover={{ x: 8, opacity: 0.8 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={link.href}
                  className="text-[#F5F5F5] hover:text-[#E6D5B8] transition-colors relative group"
                >
                  <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-200">{link.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Explore More */}
        <div>
          <div className="font-semibold text-lg mb-4 text-[#E6D5B8]">Explore More</div>
          <ul className="flex flex-col gap-2">
            {exploreLinks.map((link, idx) => (
              <motion.li key={idx} whileHover={{ x: 8, opacity: 0.8 }} transition={{ type: "spring", stiffness: 300 }}>
                <a
                  href={link.href}
                  className="text-[#F5F5F5] hover:text-[#E6D5B8] transition-colors relative group"
                >
                  <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-200">{link.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg mb-2 text-[#E6D5B8]">Newsletter</div>
          <div className="text-sm md:text-base text-[#E6D5B8] mb-2">Subscribe to our newsletter for travel inspiration and offers!</div>
          <form
            className="flex flex-col sm:flex-row items-center gap-3"
            onSubmit={e => { e.preventDefault(); setSubmitted(true); setEmail(""); }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-full px-4 py-2 w-full text-[#3E2C23] focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white"
              required
            />
            <button
              type="submit"
              className="bg-[#E6D5B8] text-[#3E2C23] font-bold px-6 py-2 rounded-full hover:bg-[#d4c4a8] transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <div className="text-green-200 text-sm">Thank you for subscribing!</div>
          )}
        </div>
      </motion.div>

      {/* Bottom Footer Bar */}
      <motion.div
        className="w-full border-t border-[#E6D5B8]/30 py-4 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-2 text-sm bg-[#3E2C23]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-[#E6D5B8]">© 2025 Travio. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          {policyLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="hover:text-[#E6D5B8] transition-colors"
              whileHover={{ opacity: 0.8 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Optional: Subtle Firefly Animation Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* You can add a firefly/dust animation here with CSS or Framer Motion if desired */}
      </div>
    </footer>
  );
}