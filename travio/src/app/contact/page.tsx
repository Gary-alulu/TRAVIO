"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

const HERO_IMAGE = "/hero1.jpg";
const PARTNER_LOGOS = [
  "/file.svg",
  "/globe.svg",
  "/window.svg",
  "/vercel.svg"
];

const SUBJECTS = [
  "General Inquiry",
  "Custom Booking",
  "Partnership",
  "Feedback",
  "Other"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
    honey: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [showThankYou, setShowThankYou] = useState(false);

  function validate(f) {
    let e = {};
    if (!f.name.trim()) e.name = "Name required";
    if (!f.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email required";
    if (f.phone && !/^\+?\d{7,}$/.test(f.phone)) e.phone = "Invalid phone";
    if (!f.message.trim()) e.message = "Message required";
    if (f.honey) e.honey = "Spam detected";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      // Replace with Formspree endpoint or keep as mock
      const res = await fetch("https://formspree.io/f/mnqkzjyz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("success");
        setShowThankYou(true);
        setForm({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "", honey: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#E6D5B8] flex flex-col items-center justify-start">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
        <Image src={HERO_IMAGE} alt="Distant mountains" fill priority className="object-cover opacity-80" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2C23] drop-shadow-lg">Let’s Start a Conversation</h1>
          <p className="mt-4 text-lg md:text-xl text-[#3E2C23] opacity-80">Every great journey begins with a single message. Let us guide yours.</p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E6D5B8] via-transparent to-transparent" />
      </section>

      {/* Main Content */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-10 mt-10 px-4">
        {/* Contact Form */}
        <motion.form initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-[#E6D5B8]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-[#3E2C23]">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white/90 ${errors.name ? 'border-red-400' : 'border-[#E6D5B8]'}`} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-[#3E2C23]">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white/90 ${errors.email ? 'border-red-400' : 'border-[#E6D5B8]'}`} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold text-[#3E2C23]">Phone <span className="text-xs text-[#3E2C23]/60">(optional)</span></label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white/90 ${errors.phone ? 'border-red-400' : 'border-[#E6D5B8]'}`} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-semibold text-[#3E2C23]">Subject</label>
            <select id="subject" name="subject" className="rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white/90 border-[#E6D5B8]" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-[#3E2C23]">Message</label>
            <textarea id="message" name="message" rows={4} className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] bg-white/90 ${errors.message ? 'border-red-400' : 'border-[#E6D5B8]'}`} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          {/* Honeypot anti-spam */}
          <input type="text" name="honey" value={form.honey} onChange={e => setForm(f => ({ ...f, honey: e.target.value }))} className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" disabled={status === "sending"} className="mt-4 rounded-xl bg-[#3E2C23] text-[#E6D5B8] font-bold py-3 transition-all shadow-lg hover:bg-[#5a3d2b] focus:ring-2 focus:ring-[#E6D5B8] disabled:opacity-60 disabled:cursor-not-allowed">
            {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Try Again" : "Send Message"}
          </button>
          {showThankYou && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-700 font-semibold">Thank you for reaching out! We’ll be in touch soon.</motion.div>}
        </motion.form>

        {/* Contact Details Panel */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="bg-[#3E2C23]/90 text-[#E6D5B8] rounded-2xl shadow-xl p-8 flex flex-col gap-6 justify-between border border-[#E6D5B8]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="#E6D5B8" strokeWidth="2" className="inline"><rect x="4" y="8" width="16" height="12" rx="4"/><path d="M4 12l8 6 8-6"/></svg>
              <span>hello@travio.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="#E6D5B8" strokeWidth="2" className="inline"><path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z"/><circle cx="12" cy="14" r="2"/></svg>
              <span>+62 812-3456-789</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="#E6D5B8" strokeWidth="2" className="inline"><path d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z"/></svg>
              <span>123 Wanderer Lane, Bali, Indonesia</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="#E6D5B8" strokeWidth="2" className="inline"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8"/></svg>
              <span>Mon–Fri, 9 AM–6 PM (GMT+8)</span>
            </div>
          </div>
          {/* Optional: Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden border border-[#E6D5B8]">
            <iframe title="Travio Office Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789!2d115.188916!3d-8.409518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2470b0b0b0b0b%3A0x0!2sBali!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid" width="100%" height="180" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>
      </section>

      {/* Add spacing before footer */}
      <div className="mb-16" />

      <Footer />
    </main>
  );
}