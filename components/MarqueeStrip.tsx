'use client';

import React from 'react';

export default function MarqueeStrip() {
  const marqueeText =
    'FOUNDED BY SMT. VAIDEHI • 100% PRESERVATIVE-FREE • FROM ₹800 TO GLOBAL KITCHENS • SHIPPED TO USA, AUSTRALIA & CANADA • TIME-HONORED IYENGAR TRADITIONS • SENIOR CITIZEN DABBA CARE • SLOW IRON-ROASTED SPICES • MYSURU HERITAGE • ';

  return (
    <div className="bg-[#E53935] text-white py-3.5 md:py-5 overflow-hidden border-y-2 border-red-700 shadow-inner relative z-20">
      <div className="animate-marquee font-anton text-xl sm:text-2xl md:text-4xl tracking-widest uppercase">
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
      </div>
    </div>
  );
}

