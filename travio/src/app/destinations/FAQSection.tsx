"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the best months to travel?",
    answer: "The best months depend on your destination. For Southeast Asia, November to March offers pleasant weather. Europe is great from May to September. Always check local climate and festivals!"
  },
  {
    question: "Do I need a visa for Bali?",
    answer: "Many nationalities can get a visa on arrival for Bali (Indonesia), but requirements change. Always check the latest government guidelines before booking."
  },
  {
    question: "How do I book accommodations?",
    answer: "You can book directly through our platform or let our travel experts handle all arrangements for a seamless experience."
  },
  {
    question: "Are trips customizable?",
    answer: "Absolutely! We offer fully customizable itineraries to match your interests, pace, and budget."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#FFF8F0]">
      <div className="container mx-auto px-4 md:px-16 max-w-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold text-[#3E2C23] mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              className="rounded-2xl bg-[#F5E8D8] shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-lg md:text-xl font-semibold text-[#3E2C23] flex items-center gap-3">
                  <span>{faq.question}</span>
                </span>
                <motion.span
                  className="ml-4"
                  animate={{ rotate: openIdx === idx ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#3E2C23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-[#5A4633] text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}