"use client";
import { motion } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface TripOverviewProps {
  features: Feature[];
}

export default function TripOverview({ features }: TripOverviewProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-[#3E2C23] mb-8">What is Included</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E6D5B8]/20"
          >
            <div className="flex flex-col items-center text-center">
              <motion.span 
                className="text-4xl mb-4 block transform-gpu"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.span>
              <h3 className="text-xl font-semibold text-[#3E2C23] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}