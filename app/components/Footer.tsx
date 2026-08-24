"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import React from 'react';

const socialIcons = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.8.3 1.9.3 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-.8-.3-1.9-.3-1.3-.1-1.6-.1-4.8-.1zm0 3.1a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.2-3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    viewBox: "0 0 24 24"
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V13h2.7v8h3z",
    viewBox: "0 0 24 24"
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23 12s0-3.3-.4-4.8c-.2-.8-.9-1.5-1.7-1.7C19.4 5 12 5 12 5s-7.4 0-8.9.5c-.8.2-1.5.9-1.7 1.7C1 8.7 1 12 1 12s0 3.3.4 4.8c.2.8.9 1.5 1.7 1.7 1.5.5 8.9.5 8.9.5s7.4 0 8.9-.5c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.8.4-4.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z",
    viewBox: "0 0 24 24"
  }
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
                aria-label={icon.label}
                className="rounded-full bg-[#E6D5B8]/10 p-2 hover:bg-[#E6D5B8]/30 transition-colors"
                whileHover={{ scale: 1.15, backgroundColor: "#E6D5B8" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox={icon.viewBox} width={24} height={24} fill="currentColor" className="text-[#E6D5B8]" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
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