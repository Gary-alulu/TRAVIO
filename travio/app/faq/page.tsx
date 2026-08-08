'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

const FAQPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-primary-600 mb-8">FAQ</h1>
        <Accordion variant="splitted">
          {/* FAQ items here */}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default FAQPage;