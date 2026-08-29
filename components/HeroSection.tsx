'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Sparkles, ChevronDown } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { PRODUCTS } from '@/lib/data';

export default function HeroSection() {
  const { openWithProduct } = useInquiry();

  const carouselItems = [
    {
      id: 'mango-tokku-hero',
      name: 'MANGO TOKKU',
      tagline: 'Signature Preservative-Free Preserve',
      bgClass: 'bg-rose-500',
      textAccent: 'text-rose-300',
      image: '/assets/pickles.JPG',
      matchProduct: PRODUCTS.find((p) => p.id === 'mango-tokku-signature') || PRODUCTS[10],
    },
    {
      id: 'vangibath-hero',
      name: 'VANGIBATH POWDER',
      tagline: 'Slow-Roasted Whole Spice Blend',
      bgClass: 'bg-amber-500',
      textAccent: 'text-amber-300',
      image: '/assets/chutney-puliyogare-kari-methi.JPG',
      matchProduct: PRODUCTS.find((p) => p.id === 'vangibath-powder') || PRODUCTS[1],
    },
    {
      id: 'puliyogare-gojju',
      name: 'PULIYOGARE GOJJU',
      tagline: 'Authentic Temple Tamarind Paste',
      bgClass: 'bg-emerald-500',
      textAccent: 'text-emerald-300',
      image: '/assets/chutney-puliyogare-kari-methi.JPG',
      matchProduct: PRODUCTS.find((p) => p.id === 'puliyogare-gojju') || PRODUCTS[0],
    },
    {
      id: 'sambar-powder',
      name: 'SAMBAR POWDER',
      tagline: 'Stone-Ground Authentic Masala',
      bgClass: 'bg-sky-500',
      textAccent: 'text-sky-300',
      image: '/assets/sambar-powder.JPG',
      matchProduct: PRODUCTS.find((p) => p.id === 'sambar-powder') || PRODUCTS[3],
    },
    {
      id: 'besan-laddu-hero',
      name: 'BESAN LADDU',
      tagline: 'Pure Desi Ghee Confection',
      bgClass: 'bg-orange-500',
      textAccent: 'text-orange-300',
      image: '/assets/besan-ladoo.JPG',
      matchProduct: PRODUCTS.find((p) => p.id === 'besan-laddu') || PRODUCTS[24],
    },
  ];

  // Repeat for continuous marquee/carousel illusion
  const fullCarousel = [...carouselItems, ...carouselItems];

  return (
    <section
      id="hero"
      className="hero-bg text-center pt-32 md:pt-44 pb-20 md:pb-28 relative overflow-hidden text-white"
    >
      {/* Background radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Decorative Traditional Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 opacity-60" />

      <div className="max-w-5xl mx-auto relative z-10 px-6">
        {/* Eyebrow / Tagline */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase drop-shadow">
            Handcrafted by Smt. Vaidehi • 100% Preservative-Free • Mysuru
          </p>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-white text-3xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-anton leading-tight tracking-wide mb-8 text-shadow drop-shadow-2xl uppercase">
          Keshavashree Food Products
        </h1>

        {/* Sub-description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-red-50/90 font-sans mb-10 leading-relaxed drop-shadow">
          Founded in Mysuru with ₹800 and pure devotion to heirloom Iyengar recipes. Preservative-free masalas, pickles, and festive delicacies loved locally and exported globally to the USA, Australia & Canada.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            id="hero-call-inquiries"
            href="tel:+918553375288"
            className="inline-flex items-center gap-2.5 bg-white text-[#E53935] hover:bg-gray-100 font-anton text-lg sm:text-xl py-3.5 px-8 sm:px-10 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider"
          >
            <Phone className="w-5 h-5 text-[#E53935]" />
            <span>Call for Inquiries</span>
          </a>

          <a
            id="hero-whatsapp-inquiries"
            href="https://wa.me/918553375288?text=Hello%20Keshavashree%20Food%20Products!%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-anton text-lg sm:text-xl py-3.5 px-8 sm:px-10 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Hero Product Images Carousel */}
      <div className="mt-4 md:mt-8 carousel-container pb-8 px-4 relative z-10">
        <div className="carousel-track">
          {fullCarousel.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => openWithProduct(item.matchProduct)}
              className="shrink-0 relative w-64 sm:w-72 md:w-80 group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Arch Silhouette Backdrop */}
              <div
                className={`absolute inset-0 ${item.bgClass} rounded-t-full -z-10 group-hover:scale-105 transition-transform duration-300 opacity-90 shadow-xl`}
              />

              {/* Product Circular Plate */}
              <div className="p-4 flex flex-col items-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white mb-4 bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 250px, 320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <h3 className="text-white font-anton text-xl sm:text-2xl text-center tracking-wide drop-shadow-md">
                  {item.name}
                </h3>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider mt-1">
                  Click to View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down indicator */}
      <div className="mt-6 flex justify-center">
        <a
          href="#menu"
          className="inline-flex flex-col items-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down to menu"
        >
          <span className="text-xs uppercase tracking-widest font-semibold mb-1">
            Explore The Archive
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
