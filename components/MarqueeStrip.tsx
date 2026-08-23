'use client';

import React from 'react';

export default function MarqueeStrip() {
  const marqueeText =
    'TASTY - HYGIENIC - AROMATIC • 100% HOMEMADE • AUTHENTIC HERITAGE • MADE TO ORDER • NO PRESERVATIVES • TIME-HONORED IYENGAR TRADITIONS • MYSURU • ';

  return (
    <div className="bg-[#E53935] text-white py-4 md:py-6 overflow-hidden border-y-2 border-red-700 shadow-inner relative z-20">
      <div className="animate-marquee font-anton text-2xl sm:text-3xl md:text-5xl tracking-widest uppercase">
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
        <span className="shrink-0 px-4">{marqueeText}</span>
      </div>
    </div>
  );
}
