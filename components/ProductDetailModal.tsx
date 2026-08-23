'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ShieldCheck, Heart, Share2, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';

export default function ProductDetailModal() {
  const { selectedProductModal, setSelectedProductModal, addItem } = useInquiry();
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!selectedProductModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProductModal]);

  if (!selectedProductModal) return null;

  const currentWeight = selectedWeight || selectedProductModal.availableSizes[0] || 'Standard Pack';

  const handleAdd = () => {
    addItem(selectedProductModal, currentWeight, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedProductModal(null);
    }, 1200);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Keshavashree Food Products! I am interested in inquiring about ${selectedProductModal.name} (${currentWeight} x ${quantity}). Please let me know the availability and delivery details.`
    );
    window.open(`https://wa.me/918553375288?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      data-lenis-prevent="true"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl relative border border-amber-900/10 text-left"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductModal(null)}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Banner */}
        <div className="relative h-72 sm:h-80 w-full bg-amber-50 overflow-hidden">
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
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-[#8c2f1b] mb-2">
              Authentic Description
            </h4>
            <p className="text-gray-700 leading-relaxed text-base">
              {selectedProductModal.description}
            </p>
          </div>

          {/* Key Ingredients */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-gray-500 mb-2.5 flex items-center gap-1.5">
              {/* <Sparkles className="w-4 h-4 text-amber-600" /> */}
              Handpicked Ingredients & Pure Spices
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProductModal.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-semibold px-3 py-1 rounded-lg"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Details metadata */}
          <div className="grid grid-cols-2 gap-4 bg-[#fbf9f4] p-4 rounded-xl border border-amber-900/5">
            <div>
              <p className="text-xs text-gray-500 font-medium">Shelf Life</p>
              <p className="text-sm font-bold text-gray-800">{selectedProductModal.shelfLife}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Price Estimate</p>
              <p className="text-sm font-bold text-[#8c2f1b]">{selectedProductModal.priceEstimate}</p>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-gray-600 mb-2">
              Select Package Weight
            </h4>
            <div className="flex flex-wrap gap-3">
              {selectedProductModal.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedWeight(size)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentWeight === size
                    ? 'bg-[#E53935] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2.5 text-gray-600 hover:bg-gray-200 font-bold"
              >
                -
              </button>
              <span className="px-4 py-2.5 font-bold text-gray-800 text-center min-w-10">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2.5 text-gray-600 hover:bg-gray-200 font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold uppercase tracking-wider text-sm transition-all shadow-md ${added
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E53935] hover:bg-[#C62828] text-white'
                }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" /> Added to Inquiry Basket
                </>
              ) : (
                <>Add to Inquiry Basket</>
              )}
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
