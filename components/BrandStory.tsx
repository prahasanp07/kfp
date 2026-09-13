'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Heart,
  Coins,
  Youtube,
  ExternalLink,
  Users,
  Award,
  Clock,
} from 'lucide-react';
import { BRAND_STORY_STEPS, FOUNDER_INFO, STORY_METRICS } from '@/lib/data';

export default function BrandStory() {
  const heritagePillars = [
    {
      title: 'Zero Preservatives',
      desc: 'No artificial additives, vinegar substitutes, or synthetic colorants. Pure natural preservation with sea salt, turmeric, and cold-pressed oils.',
      icon: ShieldCheck,
    },
    {
      title: 'Whole Spice Iron Roasting',
      desc: 'Slow dry-roasting on low flame in seasoned iron kadhais to awaken the authentic volatile aroma and therapeutic qualities of the seeds.',
      icon: Flame,
    },
    {
      title: 'Made to Order Batches',
      desc: 'Every batch of sweets, masalas, and pickles is prepared fresh upon request to guarantee peak fragrance in your kitchen.',
      icon: HeartHandshake,
    },
    {
      title: 'Mysuru Heritage & Tradition',
      desc: 'Rooted in sacred V.V Mohalla, Mysuru — carrying forward centuries of authentic South Indian Iyengar culinary discipline.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#fbf9f4] px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Traditional Motifs in Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-[#E53935]" />
            <p className="text-[#8c2f1b] font-bold tracking-widest uppercase text-xs md:text-sm">
              The Founder’s Journey • Established 2017
            </p>
          </div>
          <h2 className="text-[#E53935] text-4xl sm:text-5xl md:text-7xl font-anton mb-4 tracking-wide uppercase">
            The Soul of Keshavashree
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-serif">
            How a 47-year-old passionate home chef in Mysuru started with ₹800 and built a global legacy of authentic, preservative-free traditional foods.
          </p>
          <div className="w-24 h-1.5 bg-[#E53935] mx-auto rounded-full mt-6" />
        </div>

        {/* 1. Founder Spotlight Hero Card */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-red-50/40 border-2 border-[#E53935]/20 rounded-3xl p-8 sm:p-12 shadow-xl mb-20 relative overflow-hidden">
          {/* Subtle Decorative Stamp */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-8 opacity-10 pointer-events-none">
            <span className="font-anton text-8xl text-[#E53935]">100%</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative p-2.5 sm:p-3 bg-gradient-to-tr from-amber-400 via-[#E53935] to-amber-600 rounded-3xl shadow-2xl group transform hover:scale-[1.02] transition-transform duration-500">
                <div className="w-64 h-72 sm:w-72 sm:h-80 relative rounded-2xl overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src={FOUNDER_INFO.image}
                    alt="Smt. Vydehi Ranganath - Founder of Keshavashree Food Products"
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="bg-white/95 text-gray-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Mysuru, Karnataka
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-2xl sm:text-3xl font-anton text-[#8c2f1b] tracking-wide uppercase">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mt-0.5">
                  {FOUNDER_INFO.role}
                </p>
                <p className="text-xs text-amber-900/80 font-semibold mt-1">
                  Started at Age 47 • Today 56 & Inspiring Thousands
                </p>
              </div>
            </div>

            {/* Right: Inspiring Story Highlights & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-red-100/80 text-[#8c2f1b] text-xs font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider">
                🌟 Inspiring Woman Entrepreneur
              </div>

              <blockquote className="border-l-4 border-[#E53935] pl-4 sm:pl-6 py-1 my-3 text-gray-800 text-base sm:text-lg italic font-serif leading-relaxed">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </blockquote>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                In 2017, with an initial sum of just <span className="font-bold text-[#8c2f1b]">₹800</span>, Smt. Vydehi embarked on her entrepreneurial journey from her home kitchen in Mysuru. Driven by her reverence for grandmother recipes, she committed to zero preservatives, zero artificial colors, and unhurried whole spice dry roasting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FOUNDER_INFO.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* YouTube Media Feature Banner */}
              <div className="mt-6 pt-4 border-t border-amber-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/90 p-4 rounded-2xl border border-amber-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                      As Featured in Media Interview
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                      Watch Smt. Vydehi’s Inspiring Video Feature
                    </p>
                  </div>
                </div>

                <a
                  href={FOUNDER_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-full shadow hover:scale-105 transition-all shrink-0"
                >
                  <span>Watch Interview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Impact Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {STORY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-center items-center"
            >
              <span className="text-[#E53935] font-anton text-3xl sm:text-4xl md:text-5xl tracking-wide block mb-1">
                {metric.value}
              </span>
              <span className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
                {metric.label}
              </span>
              <span className="text-gray-500 text-[11px] sm:text-xs leading-tight">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* 3. The 4 Chapters of Growth */}
        <div className="text-center mb-14">
          <p className="text-[#8c2f1b] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
            Chronicles of Dedication
          </p>
          <h3 className="text-[#E53935] text-3xl sm:text-4xl md:text-5xl font-anton uppercase tracking-wide">
            Four Pillars of Our Heritage
          </h3>
        </div>

        <div className="space-y-20">
          {BRAND_STORY_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center ${isEven ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Side */}
                <div className={isEven ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                  <div className="inline-block bg-red-100 text-[#8c2f1b] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
                    {step.badge}
                  </div>
                  <h4 className="text-[#E53935] text-2xl sm:text-3xl md:text-4xl font-anton mb-4 tracking-wide uppercase">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-serif mb-4">
                    {step.text}
                  </p>
                  <div className="p-3 bg-amber-50 rounded-xl border-l-4 border-amber-500 text-xs sm:text-sm font-semibold text-amber-900">
                    💡 {step.highlight}
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  className={`flex justify-center ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2'
                    }`}
                >
                  <div className="relative p-3 sm:p-4 border-2 border-[#E53935] rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 group">
                    <div className="w-60 h-60 sm:w-72 sm:h-72 relative bg-amber-50 rounded-2xl overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src={step.image}
                        alt={`${step.title} story image`}
                        fill
                        sizes="(max-width: 640px) 240px, 288px"
                        className="object-cover p-1 group-hover:scale-105 transition-transform duration-500 rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Heritage Quality Standards Cards */}
        <div className="mt-28 pt-16 border-t border-amber-900/10">
          <div className="text-center mb-12">
            <h4 className="text-[#8c2f1b] font-anton text-2xl sm:text-3xl uppercase tracking-wider">
              The 4 Sacred Purity Standards
            </h4>
            <p className="text-gray-600 text-sm mt-1 max-w-xl mx-auto">
              Why thousands of families in Mysuru, India, and across oceans trust Keshavashree for their sacred daily kitchen rhythm.
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

