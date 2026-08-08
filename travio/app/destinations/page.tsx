"use client";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import { Suspense } from "react";

// Section components (to be created modularly)
const DestinationsHero = dynamic(() => import("./HeroSection"), { ssr: false });
const FeaturedCategories = dynamic(() => import("./FeaturedCategories"), { ssr: false });
const BentoPopularDestinations = dynamic(() => import("./BentoPopularDestinations"), { ssr: false });
const InteractiveMapSection = dynamic(() => import("./InteractiveMapSection"), { ssr: false });
const ItinerariesCarousel = dynamic(() => import("./ItinerariesCarousel"), { ssr: false });
const CTASection = dynamic(() => import("./CTASection"), { ssr: false });
const FAQSection = dynamic(() => import("./FAQSection"), { ssr: false });

export default function DestinationsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF8F0] text-[#3E2C23] font-sans">
      <Suspense fallback={<div className="h-[60vh] flex items-center justify-center">Loading...</div>}>
        <DestinationsHero />
        <FeaturedCategories />
        <BentoPopularDestinations />
        <InteractiveMapSection />
        <ItinerariesCarousel />
        <CTASection />
        <FAQSection />
      </Suspense>
      <LogoCarousel />
      <Footer />
    </div>
  );
}