'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Search, Phone, MessageSquare, Plus, Minus, Check, FileDown, Sparkles } from 'lucide-react';
import { PRODUCTS, Product, calculateItemPrice } from '@/lib/data';
import { useInquiry } from '@/context/InquiryContext';

interface CompleteMenuModalProps {
  onClose: () => void;
}

function SignatureStarBadge() {
  return (
    <div
      className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 pointer-events-none select-none transform -rotate-3"
      title="Signature Dish"
    >
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 120 72"
          className="w-12 sm:w-14 h-auto drop-shadow-2xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Compact 5-point star to indicate signature dish */}
          <polygon
            points="60,3 74,23 116,24 83,45 96,69 60,53 24,69 37,45 4,24 46,23"
            fill="#FEF3C7"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text
            x="60"
            y="39"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#92400E"
            fontSize="12.5"
            fontWeight="800"
            letterSpacing="0.2"
            fontFamily="var(--font-sans), sans-serif"
          >
            Signature
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function CompleteMenuModal({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const {
    items: basketItems,
    addItem,
    updateQuantity,
    removeItem,
    setIsOpen: setInquiryOpen,
    totalCount,
  } = useInquiry();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const filtered = PRODUCTS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCat = selectedCat === 'all' || p.category === selectedCat;

    return matchesSearch && matchesCat;
  });

  const handleIncrement = (product: Product, size: string) => {
    const existing = basketItems.find(
      (i) => i.product.id === product.id && i.selectedSize === size
    );
    if (existing) {
      updateQuantity(product.id, size, existing.quantity + 1);
    } else {
      addItem(product, size, 1, false);
    }
  };

  const handleDecrement = (product: Product, size: string) => {
    const existing = basketItems.find(
      (i) => i.product.id === product.id && i.selectedSize === size
    );
    if (!existing) return;
    if (existing.quantity <= 1) {
      removeItem(product.id, size);
    } else {
      updateQuantity(product.id, size, existing.quantity - 1);
    }
  };

  const formatSizeLabel = (size: string) => {
    const s = size.toLowerCase().replace(/\s+/g, '');
    if (s === '250gms') return '250 gms';
    if (s === '500gms') return '500 gms';
    if (s === '750gms') return '750 gms';
    if (s === '1kg') return '1 Kg';
    return size;
  };

  const getProductBasePrice = (product: Product): number => {
    const match = product.priceEstimate.match(/₹\s*(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const getProductSummary = (product: Product) => {
    const productCartItems = basketItems.filter((i) => i.product.id === product.id);
    if (productCartItems.length === 0) {
      const base = getProductBasePrice(product);
      return {
        qtyText: '—',
        priceText: base > 0 ? `INR ${base}` : product.priceEstimate,
        hasItems: false,
      };
    }

    let totalGrams = 0;
    let totalPackets = 0;
    let isGramBased = false;
    let totalPrice = 0;

    for (const item of productCartItems) {
      const s = item.selectedSize.toLowerCase().replace(/\s+/g, '');
      const pricing = calculateItemPrice(product, item.selectedSize);
      totalPrice += (pricing.unitPrice || 0) * item.quantity;

      if (s.includes('250')) {
        totalGrams += 250 * item.quantity;
        isGramBased = true;
      } else if (s.includes('500')) {
        totalGrams += 500 * item.quantity;
        isGramBased = true;
      } else if (s.includes('750')) {
        totalGrams += 750 * item.quantity;
        isGramBased = true;
      } else if (s.includes('1kg')) {
        totalGrams += 1000 * item.quantity;
        isGramBased = true;
      } else {
        totalPackets += item.quantity;
      }
    }

    let qtyText = '';
    if (isGramBased && totalGrams > 0) {
      if (totalGrams >= 1000 && totalGrams % 1000 === 0) {
        qtyText = `${totalGrams / 1000} Kg`;
      } else if (totalGrams >= 1000) {
        qtyText = `${totalGrams / 1000} Kg (${totalGrams} gms)`;
      } else {
        qtyText = `${totalGrams} gms`;
      }
    } else if (totalPackets > 0) {
      qtyText = `${totalPackets} ${totalPackets === 1 ? 'pack' : 'packs'}`;
    } else {
      qtyText = '—';
    }

    return {
      qtyText,
      priceText: `INR ${totalPrice}`,
      hasItems: true,
    };
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      data-lenis-prevent="true"
    >
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl relative border border-amber-900/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Modal Header */}
        <div className="bg-[#E53935] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-xl">
            <p className="text-yellow-300 font-bold uppercase tracking-widest text-xs mb-1">
              Keshavashree Food Products • Mysuru
            </p>
            <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-wider">
              Complete Culinary Menu
            </h3>
            <p className="text-red-100 text-sm mt-2">
              Authentic traditional Iyengar preparations handcrafted with freshly stone-ground spices and zero artificial preservatives.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 bg-[#fbf9f4] border-b border-amber-900/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Box & Counter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search masala, pickle, sweet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]"
              />
            </div>
            <span className="hidden md:inline-block text-xs font-bold text-gray-500 whitespace-nowrap bg-white px-2.5 py-2 rounded-xl border border-gray-200">
              {filtered.length} Items
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0" data-lenis-prevent="true">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'powders-mixes', label: 'Pudis & Mixes' },
              { id: 'attas', label: 'Attas' },
              { id: 'pickles', label: 'Pickles' },
              { id: 'savories', label: 'Ready-To-Eat' },
              { id: 'sweets', label: 'Sweets' },
              { id: 'papads-heritage', label: 'Others' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCat === cat.id
                    ? 'bg-[#E53935] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-4"
          data-lenis-prevent="true"
        >
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="font-bold">No products match your search.</p>
              <p className="text-xs mt-1">Try searching for sambar, pickle, gojju, or ladoo.</p>
            </div>
          ) : (
            filtered.map((item) => {
              const summary = getProductSummary(item);
              return (
                <div
                  key={item.id}
                  className="relative bg-white border border-amber-900/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between hover:shadow-lg transition-all"
                >
                  {item.isSignature && <SignatureStarBadge />}

                  {/* Left: Product Image */}
                  <div className="relative w-24 h-28 sm:w-28 sm:h-36 rounded-2xl overflow-hidden bg-amber-50 shrink-0 border border-gray-100 shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Middle: Product Information */}
                  <div className="flex-1 min-w-0 pr-0 sm:pr-6">
                    <div>
                      <span className="inline-block border border-gray-300 bg-gray-50/80 text-gray-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-gray-900 text-lg sm:text-2xl mt-2 tracking-tight">
                      {item.name}
                    </h3>

                    <div className="mt-2.5">
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        Authentic Description
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1 line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 font-medium mt-3 flex items-center gap-2">
                      <span>{item.subtitle}</span>
                      <span>•</span>
                      <span>{item.shelfLife}</span>
                    </p>
                  </div>

                  {/* Right: Size Selection Grid & Dynamic Totals */}
                  <div className="w-full md:w-72 lg:w-80 shrink-0 border-t md:border-t-0 pt-4 md:pt-10 border-gray-100">
                    <div className={`grid ${item.availableSizes.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                      {item.availableSizes.map((size) => {
                        const sizePricing = calculateItemPrice(item, size);
                        const existing = basketItems.find(
                          (i) => i.product.id === item.id && i.selectedSize === size
                        );
                        const currentQty = existing ? existing.quantity : 0;

                        return (
                          <div
                            key={size}
                            className={`rounded-xl border flex items-stretch transition-all select-none overflow-hidden ${
                              currentQty > 0
                                ? 'border-[#E53935] bg-red-50/20 shadow-xs ring-1 ring-[#E53935]/30'
                                : 'border-gray-300 bg-white hover:border-gray-400'
                            }`}
                          >
                            {/* Left: Plus (+) */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIncrement(item, size);
                              }}
                              className="w-7 sm:w-8 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#E53935] active:bg-[#C62828] transition-colors cursor-pointer shrink-0"
                              title={`Add 1 ${size}`}
                              aria-label={`Increment ${size}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>

                            {/* Center: Size label & price & active quantity */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIncrement(item, size);
                              }}
                              className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 border-x border-gray-200 cursor-pointer hover:bg-gray-50/70 transition-colors text-center min-w-0"
                              title={`Click to add ${size}`}
                            >
                              <div className="flex items-center justify-center gap-1 max-w-full">
                                <span className="text-[11px] sm:text-xs font-bold text-gray-900 truncate">
                                  {formatSizeLabel(size)}
                                </span>
                                {currentQty > 0 && (
                                  <span className="bg-[#E53935] text-white text-[9px] font-black px-1.5 py-0.2 rounded-full leading-tight shrink-0">
                                    ×{currentQty}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium whitespace-nowrap leading-tight mt-0.5">
                                (INR {sizePricing.unitPrice ?? getProductBasePrice(item)})
                              </span>
                            </div>

                            {/* Right: Minus (-) */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDecrement(item, size);
                              }}
                              disabled={currentQty === 0}
                              className={`w-7 sm:w-8 flex items-center justify-center transition-colors shrink-0 ${
                                currentQty === 0
                                  ? 'text-gray-300 cursor-not-allowed'
                                  : 'text-gray-700 hover:text-white hover:bg-gray-800 active:bg-black cursor-pointer'
                              }`}
                              title={currentQty === 0 ? 'Not added' : `Decrease 1 ${size}`}
                              aria-label={`Decrement ${size}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Total Qty & Price summary */}
                    <div className="mt-3.5 pt-3 border-t border-gray-100 flex flex-col gap-1 text-xs sm:text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-500">Total Qty:</span>
                        <span className="font-bold text-gray-900">{summary.qtyText}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-500">Price:</span>
                        <span className="font-extrabold text-[#8c2f1b] text-sm sm:text-base">
                          {summary.priceText}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-[#fbf9f4] border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span>Custom bulk orders also available upon direct request.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                setInquiryOpen(true);
              }}
              className="flex-1 sm:flex-initial bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Open Inquiry Basket</span>
              {totalCount > 0 && (
                <span className="bg-white text-[#E53935] font-black px-2 py-0.5 rounded-full text-[11px] leading-tight">
                  {totalCount}
                </span>
              )}
            </button>

            <a
              href="tel:+918553375288"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-all"
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
