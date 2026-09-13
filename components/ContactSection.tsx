'use client';

import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Star, ShieldCheck, Globe, Truck, Heart, Utensils, Play } from 'lucide-react';
import { FOUNDER_INFO } from '@/lib/data';
import { useInquiry } from '@/context/InquiryContext';

export default function ContactSection() {
  const { setIsDailyDabbaOpen } = useInquiry();
  const mapUrl = 'https://maps.google.com/?q=D-34/A+12th+Cross+Road+Vani+Vilas+Mohalla+Mysuru+570002';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=D-34/A+12th+Cross+Road+Vani+Vilas+Mohalla+Mysuru+570002';

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fcfbfa] px-6 md:px-12 relative border-t border-amber-900/5">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Centered at Top of Screen */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8c2f1b]" />
            <p className="text-[#8c2f1b] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Community Care & Global Shipping
            </p>
            <span className="w-2 h-2 rounded-full bg-[#8c2f1b]" />
          </div>
          <h2 className="text-[#E53935] text-4xl sm:text-5xl md:text-6xl font-anton tracking-wide mb-3 uppercase">
            Our Sanctuary in V.V Mohalla, Mysuru
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience our traditional, stone-ground powders and pickles firsthand, or arrange custom bulk orders and senior meal deliveries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Details & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            {/* Senior Citizen Dabba Service Highlight Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-6 rounded-2xl border-2 border-amber-300/80 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-[#8c2f1b]">
                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#8c2f1b]">
                  Senior Citizen &lsquo;Dabba&rsquo; Meal Service
                </h3>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                We take immense pride in preparing fresh, wholesome, low-oil, low-spice homemade meals delivered daily for elderly patrons and senior citizens in our Mysuru community.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="inline-block text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  ✓ Sattvic • Hygienic • Cooked Daily with Care
                </span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDailyDabbaOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#C62828] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Video & View Daily Menus</span>
                </button>
              </div>
            </div>

            {/* Global NRI Shipping & Wholesale Box */}
            <div className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#1a382f]">
                <Globe className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base sm:text-lg font-bold text-[#1a382f] tracking-wide">
                  Export Shipping to USA, Australia & Canada
                </h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                All powders, pickles, and dry savories are packed with vacuum / airtight international standards. We also cater custom festival hampers, weddings, and bulk orders.
              </p>
            </div>

            {/* Address Block */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <div className="w-10 h-10 rounded-full bg-white text-[#8c2f1b] flex items-center justify-center shrink-0 shadow-sm border border-amber-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#8c2f1b]">
                  FLAGSHIP STORE & KITCHEN
                </p>
                <p className="text-gray-900 text-base sm:text-lg font-semibold mt-0.5">
                  D34/A, 12th Cross, V.V Mohalla, Mysuru
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Karnataka, India - 570 002
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                id="contact-call-btn"
                href="tel:+918553375288"
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-[#1b3d32] hover:bg-[#122e25] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 85533 75288</span>
              </a>

              <a
                href="tel:+917892006624"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50/50 text-[#1b3d32] border border-[#1b3d32]/30 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>+91 78920 06624</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white aspect-[4/3] sm:aspect-[16/11] w-full">

              {/* Google Map Place Card Overlay (as in Google Maps widget) */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg border border-gray-100 max-w-[280px] sm:max-w-[340px] text-left">
                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                    ಕೇಶವಶ್ರೀ ಫುಡ್ ಪ್ರಾಡಕ್ಟ್ಸ್
                  </h4>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      title="Open on Google Maps"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      title="Get Directions"
                    >
                      <Navigation className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  D-34/A, 12th Cross Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002
                </p>

                <div className="flex items-center gap-1.5 pt-1 border-t border-gray-100 text-xs">
                  <span className="font-bold text-gray-900">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">(119)</span>
                </div>
              </div>

              {/* Google Maps Iframe */}
              <iframe
                title="Keshavashree Food Products Location Map"
                src="https://maps.google.com/maps?q=D-34/A,+12th+Cross+Road,+Vani+Vilas+Mohalla,+Mysuru,+Karnataka+570002&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

