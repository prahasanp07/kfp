'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, HeartHandshake, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { BRAND_STORY_STEPS } from '@/lib/data';

export default function BrandStory() {
  const heritagePillars = [
    {
      title: 'Zero Preservatives',
      desc: 'No artificial additives, vinegar substitutes, or synthetic colorants. Pure natural preservation with salt, turmeric, and cold-pressed oils.',
      icon: ShieldCheck,
    },
    {
      title: 'Whole Spice Roasting',
      desc: 'Slow dry-roasting on low flame in seasoned iron kadhais to awaken the authentic volatile aroma of the seeds.',
      icon: Flame,
    },
    {
      title: 'Made to Order',
      desc: 'Every batch of sweets, masalas, and pickles is prepared fresh upon request to guarantee peak fragrance in your kitchen.',
      icon: HeartHandshake,
    },
    {
      title: 'Mysuru Heritage',
      desc: 'Rooted in sacred V.V Mohalla, Mysuru — carrying forward centuries of South Indian culinary discipline.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#fbf9f4] px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#8c2f1b] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">
            Origin • 2017
          </p>
          <h2 className="text-[#E53935] text-4xl sm:text-5xl md:text-7xl font-anton mb-6 tracking-wide uppercase">
            The Archive of Tradition
          </h2>
          <div className="w-24 h-1.5 bg-[#E53935] mx-auto rounded-full" />
        </div>

        {/* Narrative Flow */}
        <div className="space-y-24">
          {/* Step 1: Birth of KFP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-red-100 text-[#8c2f1b] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
                Milestone • 2017
              </div>
              <h3 className="text-[#E53935] text-3xl sm:text-4xl md:text-5xl font-anton mb-6 tracking-wide">
                BIRTH OF KFP
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-serif">
                KFP emerged from a simple desire with small investment serving authentic Iyengar food items into a contemporary archival experience. Like a handwritten recipe passed down through generations, Keshavashree Food Products (KFP) is a testament to authenticity.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative p-3 sm:p-4 border-2 border-[#E53935] rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative bg-amber-50 rounded-xl overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={BRAND_STORY_STEPS[0].image}
                    alt="Birth of KFP Story Icon"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: The Passion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative p-3 sm:p-4 border-2 border-[#E53935] rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative bg-amber-50 rounded-xl overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={BRAND_STORY_STEPS[1].image}
                    alt="The Passion Story Icon"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-red-100 text-[#8c2f1b] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
                Artisanal Craftsmanship
              </div>
              <h3 className="text-[#E53935] text-3xl sm:text-4xl md:text-5xl font-anton mb-6 tracking-wide">
                THE PASSION
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-serif">
                A lifelong love for authentic Iyengar recipes passed down through generations — no shortcuts, no preservatives. Every blend, every pickle, and every powder is an artifact of this heritage—meticulously crafted.
              </p>
            </div>
          </div>

          {/* Step 3: The Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-red-100 text-[#8c2f1b] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
                Our Sole Purpose
              </div>
              <h3 className="text-[#E53935] text-3xl sm:text-4xl md:text-5xl font-anton mb-6 tracking-wide">
                THE MISSION
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-serif">
                To bring the comfort of homemade Iyengar food to families who miss the taste of tradition. Handcrafted powders, pickles, snacks, dabba meals, and ready-to-eat items, made fresh to order.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative p-3 sm:p-4 border-2 border-[#E53935] rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative bg-amber-50 rounded-xl overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={BRAND_STORY_STEPS[2].image}
                    alt="The Mission Story Icon"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Quality Standards Cards */}
        <div className="mt-28 pt-16 border-t border-amber-900/10">
          <div className="text-center mb-12">
            <h4 className="text-[#8c2f1b] font-anton text-2xl sm:text-3xl uppercase tracking-wider">
              The 4 Sacred Purity Standards
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              Why thousands of families trust Keshavashree for their daily rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heritagePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-gray-900 text-base mb-2">
                      {pillar.title}
                    </h5>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed Authenticity</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
