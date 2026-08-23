'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu as MenuIcon, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalCount, setIsOpen: setInquiryOpen } = useInquiry();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu & Archive', href: '#menu' },
    { label: 'Cinematic Glimpses', href: '#cinematic' },
    { label: 'Patron Echoes', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#E53935]/95 backdrop-blur-md shadow-md py-3 md:py-4'
          : 'bg-[#E53935] py-4 md:py-6'
          } text-white px-6 md:px-12 flex justify-between items-center`}
      >
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Keshavashree Food Products Home">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-md group-hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/keshavashree-logo.png"
              alt="Keshavashree Food Products Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-anton text-2xl md:text-3xl tracking-widest leading-none">
              KESHAVASHREE
            </span>
            <span className="text-sm tracking-widest uppercase text-yellow-300 font-semibold hidden sm:inline-block">
              Food Products • Mysuru
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-white hover:underline underline-offset-8 transition-colors text-xs font-bold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Inquiry Basket Button */}
          <button
            id="inquiry-basket-btn"
            onClick={() => setInquiryOpen(true)}
            className="relative bg-white/15 hover:bg-white/25 text-white p-2.5 rounded-full transition-all flex items-center justify-center"
            title="View Inquiry Basket"
            aria-label="View Inquiries"
          >
            <ShoppingBag className="w-5 h-5" />
            {mounted && totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-gray-900 font-extrabold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
                {totalCount}
              </span>
            )}
          </button>

          {/* Quick Call Button (Desktop) */}
          <a
            id="header-call-btn"
            href="tel:+918553375288"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-[#E53935] font-bold text-xs md:text-sm py-2 px-4 md:py-2.5 md:px-5 rounded-full hover:bg-red-50 transition shadow-md uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            <span>+91 85533 75288</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#E53935] text-white p-6 shadow-2xl flex flex-col justify-between pt-24 overflow-y-auto">
            <div className="space-y-6">
              <div className="border-b border-white/20 pb-4">
                <p className="font-anton text-2xl">KESHAVASHREE</p>
                <p className="text-xs uppercase tracking-widest text-red-200">
                  Traditional Iyengar Foods
                </p>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-wider py-2 flex items-center justify-between border-b border-white/10 hover:text-yellow-200 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/20 space-y-4">
              <a
                href="tel:+918553375288"
                className="w-full flex items-center justify-center gap-2 bg-white text-[#E53935] font-bold py-3 px-6 rounded-full text-center shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 85533 75288</span>
              </a>

              <a
                href="https://wa.me/918553375288?text=Hello%20Keshavashree%20Food%20Products,%20I%20would%20like%20to%20place%20an%20inquiry%20for%20authentic%20traditional%20Iyengar%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full text-center shadow-lg transition-colors"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
