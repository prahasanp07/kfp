'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Eye, Check, Sparkles, Filter, BookOpen } from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import { useInquiry } from '@/context/InquiryContext';
import CompleteMenuModal from './CompleteMenuModal';

export default function CulinaryArchive() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const { addItem, openWithProduct } = useInquiry();

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'powders-mixes', label: 'Pudis & Mixes' },
    { id: 'attas', label: 'Attas & Flours' },
    { id: 'pickles', label: 'Artisanal Pickles' },
    { id: 'savories', label: 'Ready-To-Eat Savories' },
    { id: 'sweets', label: 'Traditional Sweets' },
    { id: 'papads-heritage', label: 'Others & Heritage' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const DISPLAY_LIMIT = 8; // 2 rows of 4 items on desktop
  const displayedProducts = filteredProducts.slice(0, DISPLAY_LIMIT);
  const remainingCount = Math.max(0, PRODUCTS.length - displayedProducts.length);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, product.availableSizes[0], 1);
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-24 bg-white px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#8c2f1b]" />
            <p className="text-[#8c2f1b] font-bold tracking-widest uppercase text-sm md:text-base">
              Curated Offerings
            </p>
            <span className="w-6 h-0.5 bg-[#8c2f1b]" />
          </div>
          <h2 className="text-[#E53935] text-4xl sm:text-5xl md:text-6xl font-anton tracking-wide">
            THE CULINARY ARCHIVE
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Every blend and delicacy is prepared in artisanal batches according to authentic Iyengar shastra recipes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#E53935] text-white shadow-md scale-105'
                  : 'bg-[#fbf9f4] text-gray-700 hover:bg-red-50 hover:text-[#E53935] border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid - Limited to 2 Rows (8 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openWithProduct(product)}
              className="bg-[#fbf9f4] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between border border-amber-900/5 hover:-translate-y-1.5"
            >
              {/* Product Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative bg-amber-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Badge tags */}
                {product.isSignature && (
                  <span className="absolute top-4 left-4 bg-[#E53935] text-white text-[11px] font-extrabold px-2.5 py-1 rounded shadow-md tracking-wider uppercase">
                    SIGNATURE
                  </span>
                )}
                {product.isBestseller && !product.isSignature && (
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded shadow-md tracking-wider uppercase">
                    HERITAGE BLEND
                  </span>
                )}

                {/* Quick overlay preview button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="bg-white text-gray-900 font-bold text-xs py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" /> View Recipe Details
                  </span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                    {product.categoryLabel}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans group-hover:text-[#E53935] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between mt-auto">
                  <span className="font-extrabold text-sm text-[#8c2f1b]">
                    {product.priceEstimate}
                  </span>

                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                      addedItemMap[product.id]
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#E53935] text-white hover:bg-[#C62828]'
                    }`}
                  >
                    {addedItemMap[product.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Inquire
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Menu CTA - Directly after 2 rows */}
        <div className="text-center mt-14 flex flex-col items-center justify-center gap-3">
          <button
            id="view-complete-menu-btn"
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-3 bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-4 px-10 rounded-full transition-all duration-200 text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <BookOpen className="w-5 h-5 text-yellow-300" />
            <span>View Complete Menu & Price List</span>
          </button>
          
          <p className="text-xs text-gray-500 font-medium">
            Explore all {PRODUCTS.length} authentic powders, pickles, savories & sweets with full price list
          </p>
        </div>
      </div>

      {/* Complete Menu Modal */}
      {isMenuModalOpen && (
        <CompleteMenuModal onClose={() => setIsMenuModalOpen(false)} />
      )}
    </section>
  );
}
