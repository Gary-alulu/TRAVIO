"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 2.8s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF8F0]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background decorative circles */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#E6D5B8]/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full bg-[#D4C4A8]/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/images/travio logo navbar-01-01.png"
              alt="Travio"
              width={220}
              height={80}
              className="w-auto h-20 object-contain"
              priority
            />

            {/* Tagline */}
            <motion.p
              className="text-[#3E2C23]/70 text-sm tracking-[0.3em] uppercase font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Wander More. Worry Less.
            </motion.p>

            {/* Loading bar */}
            <motion.div className="w-40 h-[2px] bg-[#E6D5B8] rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-[#3E2C23] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
