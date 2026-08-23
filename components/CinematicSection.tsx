'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Instagram, Youtube, Sparkles, Volume2, Maximize2 } from 'lucide-react';

export default function CinematicSection() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  return (
    <section id="cinematic" className="bg-gray-900 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-red-500" />
          <p className="text-gray-400 font-bold tracking-widest uppercase text-xs sm:text-sm">
            The Process from 7+ years
          </p>
          <span className="w-8 h-0.5 bg-red-500" />
        </div>
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anton tracking-wide">
          CINEMATIC GLIMPSES
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base font-sans">
          Witness the slow, deliberate craft of roasting, stone-pounding, and artisanal packing in our kitchen.
        </p>
      </div>

      {/* Video and Visuals Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left: Authentic Rasam Powder Grinding Video */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-black group">
          <video
            src="/assets/rasam-powder.MOV"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          <span className="absolute top-3 left-4 bg-red-600/90 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            Live Kitchen Process
          </span>
          <div className="absolute bottom-4 left-5 right-5 pointer-events-none">
            <span className="text-amber-400 font-anton text-lg tracking-wider block uppercase">
              Stone Roasting & Powdering
            </span>
            <span className="text-xs text-gray-300">
              Freshly ground whole spices preserving essential volatile aroma & flavor oils.
            </span>
          </div>
        </div>

        {/* Right: Authentic Product Spread & Packaging Video */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-black group">
          <video
            src="/assets/group-2.MOV"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          <span className="absolute top-3 left-4 bg-[#E53935] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            Artisanal Fresh Batches
          </span>
          <div className="absolute bottom-4 left-5 right-5 pointer-events-none">
            <span className="text-yellow-300 font-anton text-lg tracking-wider block uppercase">
              Handcrafted Savories & Delicacies
            </span>
            <span className="text-xs text-gray-300">
              Freshly fried chakkulis, sweets & ready mixes prepared in hygienic traditional batches.
            </span>
          </div>
        </div>
      </div>

      {/* Social Follow Actions */}
      <div className="text-center mt-14 flex flex-wrap justify-center items-center gap-4 relative z-10">
        <a
          id="instagram-follow-btn"
          href="https://www.instagram.com/mysuru.keshavashree/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wider"
        >
          <Instagram className="w-5 h-5" />
          <span>Follow the Story @mysuru_keshavashree</span>
        </a>

        <a
          id="youtube-channel-btn"
          href="https://www.youtube.com/@keshavashreefoodproducts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wider"
        >
          <Youtube className="w-5 h-5" />
          <span>Subscribe on YouTube</span>
        </a>
      </div>
    </section>
  );
}
