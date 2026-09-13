'use client';

import React, { useEffect, useState } from 'react';
import { X, Sparkles, Phone, CheckCircle2, Heart, Clock, UtensilsCrossed, ShieldCheck, Sun, Moon, Sunrise } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';

export default function DailyDabbaModal() {
  const { isDailyDabbaOpen, setIsDailyDabbaOpen } = useInquiry();
  const [activeTab, setActiveTab] = useState<'all' | 'breakfast' | 'lunch' | 'dinner'>('all');

  useEffect(() => {
    if (!isDailyDabbaOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isDailyDabbaOpen]);

  if (!isDailyDabbaOpen) return null;

  const handleWhatsAppInquiry = (mealCategory?: string) => {
    const mealText = mealCategory ? `regarding the ${mealCategory} menu` : `(Pure Veg Iyengar Breakfast, Lunch & Dinner)`;
    const text = encodeURIComponent(
      `Hello Smt. Vydehi / Keshavashree Food Products! I am interested in inquiring about your Daily Dabba Meal Service ${mealText} in Mysuru. Please let me know the subscription plans, today's menu, and delivery details.`
    );
    window.open(`https://wa.me/918553375288?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      data-lenis-prevent="true"
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl relative border border-amber-900/15 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Close Button - pinned at top right */}
        <button
          onClick={() => setIsDailyDabbaOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-black/60 hover:bg-black text-white p-2 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent="true">
          {/* Video Showcase Header */}
          <div className="relative bg-black overflow-hidden group">
            <video
              src="/videos/lunch_box_service.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/lunch_box_thumb.jpg"
              className="w-full max-h-[340px] sm:max-h-[400px] object-cover mx-auto"
            />
            <div className="absolute top-3 left-4 pointer-events-none">
              <span className="bg-[#E53935] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                Pure Veg • 100% Sattvic
              </span>
            </div>
          </div>

          {/* Modal Header Narrative */}
          <div className="p-5 sm:p-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  No Onion • No Garlic
                </span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  Senior-Citizen Friendly
                </span>
              </div>

              <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-wide text-gray-950">
                Daily Dabba Meal Service
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                Handcrafted daily by <strong>Smt. Vydehi Ranganath</strong> in Mysuru with the purest ingredients, cold-pressed oils, slow-roasted spices, and zero preservatives. Wholesome home meals served hot in tiered, sterilized stainless steel dabbas.
              </p>
            </div>

            {/* Menu Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-gray-100 pb-3">
              {[
                { id: 'all', label: 'All 3 Meals' },
                { id: 'breakfast', label: 'Breakfast (Thindi)', icon: Sunrise },
                { id: 'lunch', label: 'Lunch (Bhojana)', icon: Sun },
                { id: 'dinner', label: 'Dinner (Laghu Aahara)', icon: Moon },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#E53935] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Meal Courses Grid */}
            <div className="space-y-4">
              {/* 1. Breakfast Card */}
              {(activeTab === 'all' || activeTab === 'breakfast') && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-3 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500/15 text-amber-800 flex items-center justify-center font-bold">
                        <Sunrise className="w-4 h-4 text-amber-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                          Breakfast • Pratah Kalada Thindi
                        </h4>
                        <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span>Delivery: 7:30 AM – 9:00 AM</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold">100% Pure Veg</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-lg self-start sm:self-center">
                      Freshly Steamed & Warm
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Light, energized start to the day cooked using pure ghee and mild tempering:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-800">
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Soft Steamed Idlis & Uddina Vada</strong> with fresh coconut chutney & aromatic tiffin sambar.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Melukote Puliyogre / Fragrant Khara Bath</strong> tempered with mustard, roasted cashews & curry leaves.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Ven Pongal & Gothsu / Shavige Bath</strong> made with seasonal vegetables and mild black pepper.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Traditional Akki Roti / Ragi Roti</strong> served with roasted chana pudi & fresh curd.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Lunch Card */}
              {(activeTab === 'all' || activeTab === 'lunch') && (
                <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/50 border border-orange-200/70 space-y-3 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/15 text-orange-800 flex items-center justify-center font-bold">
                        <Sun className="w-4 h-4 text-orange-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                          Lunch • Madhyahnada Poora Bhojana
                        </h4>
                        <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span>Delivery: 11:30 AM – 1:30 PM</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold">Tiered Steel Dabba</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-orange-900 bg-orange-100/70 px-2.5 py-1 rounded-lg self-start sm:self-center">
                      Full Sattvic Balanced Meal
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Wholesome traditional 6-taste (Shadrasa) Iyengar feast prepared with low oil and low spices:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-800">
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Steamed Sona Masuri Rice</strong> cooked fluffy, tender, and easy to digest.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Signature Kalyana Sambar</strong> with fresh country vegetables & stone-ground sambar powder.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Mysore Menasu (Black Pepper) Rasam</strong> or Bele Rasam brewed with fresh curry leaves.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Fresh Coconut Vegetable Palya</strong> (Beans, Carrot, Heerekayi, or Cabbage) & Moong Kosambari.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Thick Curd / Spiced Majjige</strong> (buttermilk with ginger & coriander) to soothe gut health.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-600 font-bold">•</span>
                      <span><strong>Crisp Appalam / Sandige</strong> & artisanal KFP homemade Lemon or Mango Thokku.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Dinner Card */}
              {(activeTab === 'all' || activeTab === 'dinner') && (
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 border border-indigo-200/60 space-y-3 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/15 text-indigo-800 flex items-center justify-center font-bold">
                        <Moon className="w-4 h-4 text-indigo-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                          Dinner • Ratriya Laghu Aahara
                        </h4>
                        <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span>Delivery: 6:45 PM – 8:15 PM</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold">Light on Digestion</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-900 bg-indigo-100/70 px-2.5 py-1 rounded-lg self-start sm:self-center">
                      Comforting & Wholesome
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Specially formulated to promote restful sleep and effortless night-time digestion:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-800">
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Soft Hand-Rolled Phulkas / Chapatis</strong> gently brushed with pure desi cow ghee.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Mild Vegetable Saagu or Homestyle Dal Tadka</strong> cooked without onion or garlic.</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Comfort Variety Rice</strong> (Melukote Puliyogre / Lemon Rice / Mysore Bisi Bele Bath).</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Digestive Jeera Rasam or Cooling Curd Rice</strong> (Mosaru Anna) garnished with pomegranate.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quality & Elder Care Assurance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-gray-900 uppercase">100% Sattvic</h5>
                  <p className="text-[11px] text-gray-600 mt-0.5">Strictly Pure Veg, No Onion, No Garlic, sacred kitchen cleanliness.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-2.5">
                <UtensilsCrossed className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-gray-900 uppercase">Stainless Steel Tiffins</h5>
                  <p className="text-[11px] text-gray-600 mt-0.5">Reusable, sanitized 3-tier steel dabbas; eco-friendly and plastic-free.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-2.5">
                <Heart className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-gray-900 uppercase">Elder Care Care</h5>
                  <p className="text-[11px] text-gray-600 mt-0.5">Custom low-salt, soft-cooked, and mild-spice adjustments upon request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static / Sticky Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-[#fbf9f4] border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" />
            <span>Daily, weekly & monthly subscription plans available in Mysuru.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* WhatsApp CTA Button */}
            <button
              onClick={() => handleWhatsAppInquiry(activeTab === 'all' ? undefined : activeTab)}
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Inquire on WhatsApp</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:+918553375288"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
