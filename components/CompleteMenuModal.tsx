'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Search, Phone, MessageSquare, Plus, Check, FileDown, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import { useInquiry } from '@/context/InquiryContext';

interface CompleteMenuModalProps {
  onClose: () => void;
}

export default function CompleteMenuModal({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const { addItem, setIsOpen: setInquiryOpen } = useInquiry();
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

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

  const handleAdd = (product: Product, size: string) => {
    addItem(product, size, 1);
    setAddedMap((prev) => ({ ...prev, [`${product.id}-${size}`]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [`${product.id}-${size}`]: false }));
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      data-lenis-prevent="true"
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative border border-amber-900/10 overflow-hidden text-left"
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
              { id: 'powders-mixes', label: 'Powders & Mixes' },
              { id: 'pickles', label: 'Pickles' },
              { id: 'savories', label: 'Ready-To-Eat' },
              { id: 'sweets', label: 'Sweets' },
              { id: 'attas', label: 'Attas' },
              { id: 'papads-heritage', label: 'Papads & Pooja' },
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
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-amber-900/10 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-amber-50 shrink-0 border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c2f1b] bg-amber-50 px-2 py-0.5 rounded">
                        {item.categoryLabel}
                      </span>
                      {item.isSignature && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E53935] bg-red-50 px-2 py-0.5 rounded">
                          Signature
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mt-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {item.subtitle} • {item.shelfLife}
                    </p>
                  </div>
                </div>

                {/* Available Sizes & Add Actions */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                  <span className="font-bold text-[#8c2f1b] text-sm sm:text-base">
                    {item.priceEstimate}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {item.availableSizes.map((size) => {
                      const key = `${item.id}-${size}`;
                      const isAdded = addedMap[key];
                      return (
                        <button
                          key={size}
                          onClick={() => handleAdd(item, size)}
                          className={`text-xs px-2.5 py-1.5 rounded-md font-bold transition-all border ${isAdded
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white hover:bg-[#E53935] hover:text-white text-gray-800 border-gray-300'
                            }`}
                          title={`Add ${size} to inquiry`}
                        >
                          {isAdded ? (
                            <span className="flex items-center gap-1">
                              <Check className="w-3 h-3" /> {size}
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Plus className="w-3 h-3" /> {size}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))
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
              className="flex-1 sm:flex-initial bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-all"
            >
              Open Inquiry Basket
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
