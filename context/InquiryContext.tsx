'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/data';

export interface InquiryItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (product: Product, size?: string, qty?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, qty: number) => void;
  clearInquiry: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalCount: number;
  openWithProduct: (product: Product) => void;
  selectedProductModal: Product | null;
  setSelectedProductModal: (product: Product | null) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount only to prevent hydration mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kfp_inquiry_basket');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setIsLoaded(true);
  }, []);

  // Save changes to localStorage only after initial load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('kfp_inquiry_basket', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, isLoaded]);

  const addItem = (product: Product, size?: string, qty = 1) => {
    const chosenSize = size || product.availableSizes[0] || 'Standard Pack';
    setItems((prev) => {
      const index = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedSize === chosenSize
      );
      if (index > -1) {
        const updated = [...prev];
        updated[index].quantity += qty;
        return updated;
      }
      return [...prev, { product, selectedSize: chosenSize, quantity: qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, size: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.selectedSize === size
          ? { ...i, quantity: qty }
          : i
      )
    );
  };

  const clearInquiry = () => {
    setItems([]);
  };

  const openWithProduct = (product: Product) => {
    setSelectedProductModal(product);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearInquiry,
        isOpen,
        setIsOpen,
        totalCount,
        openWithProduct,
        selectedProductModal,
        setSelectedProductModal,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
