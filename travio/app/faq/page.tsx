'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

const FAQPage = () => {
  const faqs = [
    {
      key: '1',
      title: 'How do I book a trip package on Travio?',
      content: 'Browse through our curated packages, select your desired destination and dates, and click "Book Now" to proceed with reservation details.'
    },
    {
      key: '2',
      title: 'What is your cancellation and refund policy?',
      content: 'Full refunds are available up to 14 days prior to departure. For cancellations within 14 days, partial refunds or travel credits will be issued.'
    },
    {
      key: '3',
      title: 'Are travel insurance and visas included in the package?',
      content: 'Packages include accommodations, guided tours, and local transport. Visa assistance and travel insurance options are available during checkout.'
    },
    {
      key: '4',
      title: 'Can I customize a travel package for a group?',
      content: 'Yes! We offer tailored group packages and custom itineraries for families, corporate teams, and private groups. Contact our support team for custom arrangements.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#FFF8F0]"
    >
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-serif font-bold text-[#3E2C23] mb-8 text-center font-['Playfair_Display']">
          Frequently Asked Questions
        </h1>
        <Accordion variant="splitted" selectionMode="multiple">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.key} 
              aria-label={faq.title} 
              title={<span className="font-semibold text-[#3E2C23]">{faq.title}</span>}
              className="bg-white rounded-xl shadow-sm border border-[#E6D5B8] my-2"
            >
              <p className="text-gray-600 font-['Poppins'] text-sm pb-2">{faq.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default FAQPage;