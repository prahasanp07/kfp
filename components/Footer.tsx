'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Instagram, Youtube, MapPin, Mail, Clock, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#E53935] text-white pt-16 pb-8 px-6 md:px-12 border-t border-red-800 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Column 1: Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white rounded-xl p-2 inline-block mb-4 shadow-md">
            <Image
              src="/assets/keshavashree-logo.png"
              alt="Keshavashree Food Products Logo"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-red-100 leading-relaxed">
            Preserving the sacred heritage of authentic Iyengar cuisine through time-honored recipes, stone-ground purity, and artisanal care.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-yellow-300 font-semibold">
            <Clock className="w-4 h-4" />
            <span>Open Mon - Sat: 9:00 AM – 8:30 PM</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-anton text-lg mb-4 uppercase tracking-wider text-yellow-300">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-red-100">
            <li>
              <a href="#story" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>Our Heritage Story (Smt. Vaidehi)</span>
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>The Culinary Archive</span>
              </a>
            </li>
            <li>
              <a href="#cinematic" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>Cinematic Process & Interview</span>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/Ab-j5mdwOVg?si=a03yz3UDNio9WeOx" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition-colors flex items-center gap-1.5 font-bold text-yellow-300">
                <span>▶ Watch YouTube Interview</span>
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>Patron Echoes</span>
              </a>
            </li>
            <li>
              <a href="tel:+918553375288" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>Senior Dabba & Bulk Inquiries</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect & Socials */}
        <div>
          <h4 className="font-anton text-lg mb-4 uppercase tracking-wider text-yellow-300">
            Connect & Inquire
          </h4>
          <p className="text-sm text-red-100 mb-3 leading-relaxed">
            Shipping Available Across India & Abroad. Pre-orders for festivals, weddings & functions.
          </p>
          <div className="text-xs text-yellow-200 mb-4 font-semibold space-y-1">
            <p>📞 <a href="tel:+918553375288" className="hover:underline">+91 85533 75288</a></p>
            <p>📞 <a href="tel:+917892006624" className="hover:underline">+91 78920 06624</a></p>
          </div>
          <div className="flex gap-4 items-center">
            {/* Phone Call */}
            <a
              href="tel:+918553375288"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#E53935] flex items-center justify-center transition-all shadow"
              aria-label="Call Keshavashree Food Products"
              title="Call +91 85533 75288"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mysuru.keshavashree/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#E53935] flex items-center justify-center transition-all shadow"
              aria-label="Follow on Instagram"
              title="Instagram @mysuru_keshavashree"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@keshavashreefoodproducts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#E53935] flex items-center justify-center transition-all shadow"
              aria-label="Subscribe on YouTube"
              title="YouTube Channel"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 4: Address */}
        <div>
          <h4 className="font-anton text-lg mb-4 uppercase tracking-wider text-yellow-300">
            Heritage Location
          </h4>
          <div className="text-sm text-red-100 leading-relaxed flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-sans">Keshavashree Food Products</strong>
              D-34/A, 12th Cross Road,<br />
              V.V. Mohalla, Mysuru,<br />
              Karnataka, India - 570 002
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://maps.google.com/?q=D-34/A+12th+Cross+Road+V.V+Mohalla+Mysuru+570002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-yellow-200"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-red-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-red-200 gap-4">
        <p>© 2026 Keshavashree Food Products. All rights reserved.</p>

        <div className="flex items-center gap-2">
          <span>Crafted by PraGana Innovations</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-current text-yellow-300" /> in Mysuru
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-white hover:text-yellow-300 transition-colors uppercase font-bold tracking-wider"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
