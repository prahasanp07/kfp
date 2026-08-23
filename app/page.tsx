'use client';

import React from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import { InquiryProvider } from '@/context/InquiryContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CulinaryArchive from '@/components/CulinaryArchive';
import MarqueeStrip from '@/components/MarqueeStrip';
import BrandStory from '@/components/BrandStory';
import CinematicSection from '@/components/CinematicSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import OrderInquiryDrawer from '@/components/OrderInquiryDrawer';
import QuickCallFloating from '@/components/QuickCallFloating';

export default function HomePage() {
  return (
    <InquiryProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-[#fbf9f4] text-[#333333] flex flex-col relative selection:bg-[#E53935] selection:text-white">
          {/* Top Navigation */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-1 w-full">
            {/* 1. Hero Section with Infinite Product Carousel */}
            <HeroSection />

            {/* 1.2. High-impact Marquee Banner */}
            <MarqueeStrip />

            {/* 2. Curated Offerings - The Culinary Archive */}
            <CulinaryArchive />

            {/* 3. High-impact Marquee Banner */}
            <MarqueeStrip />

            {/* 4. Origin & Brand Heritage Story (2017) */}
            <BrandStory />

            {/* 5. The Process - Cinematic Glimpses Video & Gallery */}
            <CinematicSection />

            {/* 6. Echoes of Home - Patron Testimonials */}
            <TestimonialsSection />

            {/* 7. Visit Us - Our Sanctuary in V.V Mohalla, Mysuru */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Modals and Floating Drawers */}
          <ProductDetailModal />
          <OrderInquiryDrawer />
          <QuickCallFloating />
        </div>
      </SmoothScroll>
    </InquiryProvider>
  );
}
