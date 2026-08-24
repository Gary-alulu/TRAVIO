"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const INQUIRY_TYPES = [
  "Booking",
  "Refund",
  "General Info",
  "Collaborations"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: INQUIRY_TYPES[0],
    message: "",
    newsletter: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #3E2C23 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF8F0]/80" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2C23] mb-4">
            Let&apos;s Get You on the Right Path
          </h1>
          <p className="text-lg text-[#5A4633]">
            Whether it&apos;s a question, concern, or booking help, we&apos;re here for you!
          </p>
        </motion.div>
      </section>

      {/* Main Contact Area */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#3E2C23] mb-4">Get in Touch With Us</h2>
            <p className="text-[#5A4633]">
              Planning your next adventure? Need help with bookings or destination info? 
              Drop us a message &mdash; we&apos;d love to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3E2C23] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFF8F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#3E2C23]">Email</p>
                <p className="text-[#5A4633]">support@travio.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3E2C23] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFF8F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#3E2C23]">Phone</p>
                <p className="text-[#5A4633]">+1 (800) 123-TRAV</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3E2C23] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FFF8F0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#3E2C23]">Office</p>
                <p className="text-[#5A4633]">789 Explorer Blvd, New York, NY</p>
                <p className="text-sm text-[#5A4633]">Mon–Fri, 9 AM – 6 PM EST</p>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a href="/blog" className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#3E2C23]">Looking for a travel guide?</h3>
              <p className="text-sm text-[#5A4633]">Check our blog →</p>
            </a>
            <a href="/support" className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#3E2C23]">Need help with flight packages?</h3>
              <p className="text-sm text-[#5A4633]">Visit support center →</p>
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#3E2C23] mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-[#E6D5B8] focus:ring-2 focus:ring-[#3E2C23] focus:border-transparent"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3E2C23] mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-[#E6D5B8] focus:ring-2 focus:ring-[#3E2C23] focus:border-transparent"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E2C23] mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-[#E6D5B8] focus:ring-2 focus:ring-[#3E2C23] focus:border-transparent"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E2C23] mb-1">Type of Inquiry</label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-[#E6D5B8] focus:ring-2 focus:ring-[#3E2C23] focus:border-transparent"
                value={form.inquiryType}
                onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
              >
                {INQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E2C23] mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-[#E6D5B8] focus:ring-2 focus:ring-[#3E2C23] focus:border-transparent"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={form.newsletter}
                onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                className="rounded border-[#E6D5B8] text-[#3E2C23] focus:ring-[#3E2C23]"
              />
              <label htmlFor="newsletter" className="text-sm text-[#5A4633]">
                Subscribe to our newsletter for travel tips & deals
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#FF8C42] to-[#FF5733] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Send My Message
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}