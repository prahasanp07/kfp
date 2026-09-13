'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, Sparkles, Phone } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { calculateItemPrice, Product } from '@/lib/data';

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

export default function ProductDetailModal() {
  const {
    selectedProductModal,
    setSelectedProductModal,
    items: basketItems,
    addItem,
    updateQuantity,
    removeItem,
    setIsOpen: setInquiryOpen,
    totalCount,
  } = useInquiry();

  useEffect(() => {
    if (!selectedProductModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProductModal]);

  if (!selectedProductModal) return null;

  const productCartItems = basketItems.filter(
    (i) => i.product.id === selectedProductModal.id
  );

  let totalGrams = 0;
  let totalPackets = 0;
  let isGramBased = false;
  let totalPrice = 0;

  for (const item of productCartItems) {
    const s = item.selectedSize.toLowerCase().replace(/\s+/g, '');
    const pricing = calculateItemPrice(selectedProductModal, item.selectedSize);
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

  let totalQtyText = '';
  if (isGramBased && totalGrams > 0) {
    if (totalGrams >= 1000 && totalGrams % 1000 === 0) {
      totalQtyText = `${totalGrams / 1000} kg`;
    } else if (totalGrams >= 1000) {
      totalQtyText = `${totalGrams / 1000} kg (${totalGrams} gms)`;
    } else {
      totalQtyText = `${totalGrams} gms`;
    }
  } else if (totalPackets > 0) {
    totalQtyText = `${totalPackets} ${totalPackets === 1 ? 'pack' : 'packs'}`;
  } else {
    totalQtyText = '0 gms';
  }

  const handleIncrement = (size: string) => {
    const existing = basketItems.find(
      (i) => i.product.id === selectedProductModal.id && i.selectedSize === size
    );
    if (existing) {
      updateQuantity(selectedProductModal.id, size, existing.quantity + 1);
    } else {
      addItem(selectedProductModal, size, 1, false);
    }
  };

  const handleDecrement = (size: string) => {
    const existing = basketItems.find(
      (i) => i.product.id === selectedProductModal.id && i.selectedSize === size
    );
    if (!existing) return;
    if (existing.quantity <= 1) {
      removeItem(selectedProductModal.id, size);
    } else {
      updateQuantity(selectedProductModal.id, size, existing.quantity - 1);
    }
  };

  const handleBasketAction = () => {
    if (productCartItems.length === 0) {
      const defaultSize = selectedProductModal.availableSizes[0] || '1kg';
      addItem(selectedProductModal, defaultSize, 1, false);
    }
    setSelectedProductModal(null);
    setInquiryOpen(true);
  };

  const firstSize = selectedProductModal.availableSizes[0] || '1kg';
  const firstPricing = calculateItemPrice(selectedProductModal, firstSize);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      data-lenis-prevent="true"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-amber-900/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Close Button - pinned at top-right */}
        <button
          onClick={() => setSelectedProductModal(null)}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all hover:scale-110 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent="true">
          {/* Product Image Banner */}
          <div className="relative h-60 sm:h-72 w-full bg-amber-50 overflow-hidden">
            <Image
              src={selectedProductModal.image}
              alt={selectedProductModal.name}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="bg-[#E53935] text-white text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow">
                {selectedProductModal.categoryLabel}
              </span>
              <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-wider mt-2 text-shadow">
                {selectedProductModal.name}
              </h3>
              <p className="text-sm sm:text-base text-yellow-200 font-medium">
                {selectedProductModal.subtitle}
              </p>
            </div>
          </div>

          {/* Product Details Body */}
          <div className="p-5 sm:p-7 space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c2f1b] mb-1.5">
                Authentic Description
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {selectedProductModal.description}
              </p>
            </div>

            {/* Details metadata */}
            <div className="grid grid-cols-2 gap-4 bg-[#fbf9f4] p-4 rounded-xl border border-amber-900/5">
              <div>
                <p className="text-xs text-gray-500 font-medium">Shelf Life</p>
                <p className="text-sm font-bold text-gray-800">{selectedProductModal.shelfLife}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Estimated Price</p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-bold text-[#8c2f1b]">
                    {productCartItems.length > 0
                      ? `₹${totalPrice}`
                      : (firstPricing.unitPrice ? `₹${firstPricing.unitPrice}` : selectedProductModal.priceEstimate)}
                  </span>
                  {productCartItems.length > 0 && (
                    <span className="text-xs text-gray-500 font-medium">
                      ({totalQtyText} total)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-700">
                  Select Package Weight / Size
                </h4>
                {selectedProductModal.priceEstimate.includes('1 kg') && (
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Multiples of 250gms
                  </span>
                )}
              </div>

              {/* Stepper Capsules in Grid */}
              <div className={`grid ${selectedProductModal.availableSizes.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2.5`}>
                {selectedProductModal.availableSizes.map((size) => {
                  const sizePricing = calculateItemPrice(selectedProductModal, size);
                  const existing = basketItems.find(
                    (i) => i.product.id === selectedProductModal.id && i.selectedSize === size
                  );
                  const currentQty = existing ? existing.quantity : 0;

                  return (
                    <div
                      key={size}
                      className={`rounded-xl border flex items-stretch transition-all select-none overflow-hidden ${
                        currentQty > 0
                          ? 'border-[#E53935] bg-red-50/25 shadow-xs ring-1 ring-[#E53935]/30'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      {/* Left: Plus (+) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIncrement(size);
                        }}
                        className="w-9 sm:w-10 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#E53935] active:bg-[#C62828] transition-colors cursor-pointer shrink-0"
                        title={`Add 1 ${size}`}
                        aria-label={`Increment ${size}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      {/* Center: Size label & price & active quantity */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIncrement(size);
                        }}
                        className="flex-1 flex flex-col items-center justify-center py-2 px-1 sm:px-2 border-x border-gray-200 cursor-pointer hover:bg-gray-50/70 transition-colors text-center min-w-0"
                        title={`Click to add ${size}`}
                      >
                        <div className="flex items-center justify-center gap-1.5 max-w-full">
                          <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                            {formatSizeLabel(size)}
                          </span>
                          {currentQty > 0 && (
                            <span className="bg-[#E53935] text-white text-[10px] font-black px-1.5 py-0.2 rounded-full leading-tight shrink-0">
                              ×{currentQty}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap leading-tight mt-0.5">
                          (INR {sizePricing.unitPrice ?? getProductBasePrice(selectedProductModal)})
                        </span>
                      </div>

                      {/* Right: Minus (-) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecrement(size);
                        }}
                        disabled={currentQty === 0}
                        className={`w-9 sm:w-10 flex items-center justify-center transition-colors shrink-0 ${
                          currentQty === 0
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:text-white hover:bg-gray-800 active:bg-black cursor-pointer'
                        }`}
                        title={currentQty === 0 ? 'Not added' : `Decrease 1 ${size}`}
                        aria-label={`Decrement ${size}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Multiples requirement note */}
              {selectedProductModal.availableSizes.includes('250gms') && (
                <div className="mt-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Total requirement:{' '}
                    <strong className="font-bold text-amber-950">
                      {totalQtyText}
                    </strong>{' '}
                    (packed fresh in airtight 250g multiples)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Static / Sticky Modal Footer Controls - Matching Complete Culinary Menu */}
        <div className="p-4 sm:p-5 bg-[#fbf9f4] border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" />
            <span>Custom bulk orders also available upon direct request.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleBasketAction}
              className="flex-1 sm:flex-initial bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Open Inquiry Basket</span>
              {totalCount > 0 && (
                <span className="bg-white text-[#E53935] font-black px-2 py-0.5 rounded-full text-[11px] leading-tight shrink-0">
                  {totalCount}
                </span>
              )}
            </button>

            <a
              href="tel:+918553375288"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-all cursor-pointer whitespace-nowrap shrink-0"
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
