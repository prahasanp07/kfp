'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, MessageSquare, Phone, MapPin, Send, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useInquiry } from '@/context/InquiryContext';

export default function OrderInquiryDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, clearInquiry, totalCount } = useInquiry();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    let itemsList = items
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}* (${item.selectedSize}) - Qty: ${item.quantity}`
      )
      .join('\n');

    const message = `Namaskara Keshavashree Food Products! 🪔\n\nI would like to place an inquiry/order for authentic Iyengar products:\n\n${itemsList}\n\n*Customer Details:*\n• Name: ${customerName || 'Patron'}\n• Contact: ${customerPhone || 'Not specified'}\n• Delivery City / Address: ${deliveryLocation || 'Mysuru / Delivery'}\n${specialInstructions ? `• Note: ${specialInstructions}\n` : ''}\nPlease let me know the total amount, preparation time, and shipping details. Dhanyavadagalu!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918553375288?text=${encoded}`;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSent(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setIsSent(false);
        setIsOpen(false);
      }, 1000);
    }, 400);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity"
      data-lenis-prevent="true"
    >
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex" data-lenis-prevent="true">
        <div 
          className="w-full max-w-md bg-white shadow-2xl flex flex-col justify-between relative z-10 text-left overflow-hidden"
          data-lenis-prevent="true"
        >
          {/* Drawer Header */}
          <div className="bg-[#E53935] text-white px-5 sm:px-6 py-5 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wider">
                  Inquiry Basket
                </h3>
                <p className="text-xs text-red-100 font-medium">
                  {totalCount} item{totalCount !== 1 ? 's' : ''} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white p-2 rounded-full hover:bg-white/15 transition-colors shrink-0 -mr-1"
              aria-label="Close inquiry drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body Items List */}
          <div 
            className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-4"
            data-lenis-prevent="true"
          >
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8c2f1b]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-anton text-xl text-gray-800 uppercase mb-2">
                  Your Basket is Empty
                </h4>
                <p className="text-sm text-gray-500 max-w-xs mx-auto mb-6">
                  Explore our culinary archive to add homemade powders, artisanal pickles, and sweets.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full shadow"
                >
                  Browse Menu Offerings
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 text-xs text-gray-500">
                  <span>Selected Products</span>
                  <button
                    onClick={clearInquiry}
                    className="text-[#E53935] hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="bg-[#fbf9f4] border border-amber-900/10 rounded-xl p-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white shrink-0 border border-gray-200">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        Pack: {item.selectedSize}
                      </p>
                      <p className="text-xs font-bold text-[#8c2f1b]">
                        {item.product.priceEstimate}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.selectedSize)
                      }
                      className="text-gray-400 hover:text-red-600 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Inquiry Form */}
                <form onSubmit={handleSendWhatsApp} className="pt-4 space-y-3 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Your Contact & Delivery Details
                  </p>

                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />

                  <input
                    type="text"
                    placeholder="Delivery City / Area (e.g. Mysuru, Bengaluru)"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />

                  <textarea
                    rows={2}
                    placeholder="Notes (e.g. less spice, gift packing, date needed)"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg
                      className="w-5 h-5 fill-current shrink-0"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Send Order via WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer Hotline */}
          <div className="p-4 bg-[#fbf9f4] border-t border-amber-900/10 flex items-center justify-between text-xs shrink-0">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Phone className="w-4 h-4 text-[#E53935] shrink-0" />
              <span className="truncate">Or Call: +91 85533 75288</span>
            </div>
            <a
              href="tel:+918553375288"
              className="bg-[#E53935] text-white font-bold px-3.5 py-1.5 rounded-lg text-xs hover:bg-[#C62828] shrink-0 shadow-sm"
            >
              Call Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
