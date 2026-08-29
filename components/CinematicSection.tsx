'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Instagram, Youtube, Sparkles, ExternalLink, Award, Heart } from 'lucide-react';
import { FOUNDER_INFO } from '@/lib/data';

export default function CinematicSection() {
  const [showYoutubeEmbed, setShowYoutubeEmbed] = useState(false);

  return (
    <section id="cinematic" className="bg-gray-900 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-2 bg-red-950/80 border border-red-800/80 px-4 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <p className="text-yellow-300 font-bold tracking-widest uppercase text-xs">
            Media Feature & Live Kitchen Archives
          </p>
        </div>
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anton tracking-wide">
          CINEMATIC GLIMPSES & INTERVIEW
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-sans">
          Watch the featured interview with founder Smt. Vydehi Ranganath and witness the slow, deliberate craft of roasting, stone-pounding, and artisanal packing.
        </p>
      </div>

      {/* Featured YouTube Media Spotlight Card */}
      <div className="max-w-5xl mx-auto mb-14 relative z-10">
        <div className="bg-gradient-to-r from-red-950/90 via-gray-900 to-amber-950/80 border-2 border-red-600/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Video / Thumbnail Viewport */}
            <div className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-gray-700 group">
              {showYoutubeEmbed ? (
                <iframe
                  src={`https://www.youtube.com/embed/${FOUNDER_INFO.youtubeId}?autoplay=1&rel=0`}
                  title="Inspiring Interview with Smt. Vydehi - Keshavashree Food Products"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer flex items-center justify-center group"
                  onClick={() => setShowYoutubeEmbed(true)}
                >
                  <Image
                    src="/assets/vydehi.png"
                    alt="Smt. Vydehi Interview Thumbnail"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                  {/* Play Button Overlay */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E53935] hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-300 drop-shadow">
                      Click to Play Interview
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    YouTube Exclusive
                  </span>
                </div>
              )}
            </div>

            {/* Feature Description */}
            <div className="w-full lg:w-2/5 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 bg-yellow-400/20 text-yellow-300 text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-yellow-400/30">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span>Featured Entrepreneur Story</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-anton text-white tracking-wide uppercase leading-tight">
                From ₹800 to Global Kitchens
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Watch the in-depth interview celebrating <span className="text-yellow-300 font-bold">Smt. Vydehi Ranganath</span>. Discover how she began at age 47 with just ₹800, expanded into a ₹12–13L enterprise, exports traditional masalas & pickles to the USA, Australia, & Canada, and serves hot daily dabbas for Mysuru elders.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={FOUNDER_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Kitchen Video Loops Grid */}
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
              Iron Kadhai Roasting & Stone Pounding
            </span>
            <span className="text-xs text-gray-300">
              Freshly ground whole spices preserving volatile essential oils and therapeutic aroma.
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
              Handcrafted Savories, Pickles & Mixes
            </span>
            <span className="text-xs text-gray-300">
              Freshly fried chakkulis, Vangibath, Mango Tokku & ready mixes packed airtight for long journey freshness.
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
          <span>Follow @mysuru_keshavashree</span>
        </a>

        <a
          id="youtube-channel-btn"
          href={FOUNDER_INFO.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wider"
        >
          <Youtube className="w-5 h-5" />
          <span>Watch Vydehi’s Interview on YouTube</span>
        </a>
      </div>
    </section>
  );
}

