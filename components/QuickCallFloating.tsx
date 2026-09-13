'use client';

import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';

export default function QuickCallFloating() {
  const { totalCount, setIsOpen, setIsDailyDabbaOpen } = useInquiry();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
      {/* Floating Basket Button */}
      {totalCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#E53935] hover:bg-[#C62828] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 active:scale-95 transition-all border-2 border-white animate-bounce-subtle cursor-pointer"
          title="Open Inquiry Basket"
          aria-label="View Inquiry Cart"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 font-extrabold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow">
            {totalCount}
          </span>
        </button>
      )}

      {/* Daily Lunch Box / Dabba Service Floating Button */}
      <div className="relative flex flex-col items-center group cursor-pointer pt-2">
        {/* Badge above the icon with #FCE016 background */}
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#FCE016] text-gray-950 font-black text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md border border-amber-600/30 whitespace-nowrap z-10 pointer-events-none">
          Daily Dabba
        </span>

        <button
          type="button"
          onClick={() => setIsDailyDabbaOpen(true)}
          className="w-14 h-14 bg-gradient-to-tr from-amber-400 via-orange-500 to-[#E53935] p-1 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-white shrink-0 cursor-pointer"
          title="Watch Daily Dabba Video & Menus"
          aria-label="Daily Lunch Box Service"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner">
            <img
              src="/assets/lunch-box.png"
              alt="Daily Lunch Box (Dabba) Service"
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </button>
      </div>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/918553375288?text=Hello%20Keshavashree%20Food%20Products!%20I%20would%20like%20to%20inquire%20about%20your%20traditional%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-white"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Inquiry"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+918553375288"
        className="bg-white text-[#E53935] hover:bg-gray-100 p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#E53935]"
        title="Call Keshavashree Food Products (+91 85533 75288)"
        aria-label="Call +91 85533 75288"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
