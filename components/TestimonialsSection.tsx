'use client';

import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, ExternalLink, ShieldCheck, CheckCircle2, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoogleReview, GOOGLE_TOPICS } from '@/app/api/reviews/route';

const GoogleIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function TestimonialsSection() {
  const [allReviews, setAllReviews] = useState<GoogleReview[]>([]);
  const [googleRating, setGoogleRating] = useState<number>(4.9);
  const [totalReviews, setTotalReviews] = useState<number>(119);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [writeReviewUrl, setWriteReviewUrl] = useState<string>(
    'https://www.google.com/maps/search/?api=1&query=Keshavashree+Food+Products+Mysuru'
  );
  const [viewAllReviewsUrl, setViewAllReviewsUrl] = useState<string>(
    'https://www.google.com/maps/search/?api=1&query=Keshavashree+Food+Products+Mysuru'
  );

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [favoriteProduct, setFavoriteProduct] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  // Fetch Google Reviews from backend API
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            setAllReviews(data.reviews);
          }
          if (data.rating) setGoogleRating(data.rating);
          if (data.totalReviews) setTotalReviews(data.totalReviews);
          if (data.writeReviewUrl) setWriteReviewUrl(data.writeReviewUrl);
          if (data.viewAllReviewsUrl) setViewAllReviewsUrl(data.viewAllReviewsUrl);
        }
      } catch (err) {
        console.error('Failed to load reviews:', err);
      }
    }

    loadReviews();
  }, []);

  // Filter reviews by selected Google topic chip
  const filteredReviews = allReviews.filter((r) => {
    if (selectedTopic === 'all') return true;
    if (r.tags && r.tags.includes(selectedTopic)) return true;
    const lowerQuote = r.quote.toLowerCase();
    const topicLabel = GOOGLE_TOPICS.find((t) => t.id === selectedTopic)?.label.toLowerCase() || '';
    return lowerQuote.includes(topicLabel) || lowerQuote.includes(selectedTopic.replace('-', ' '));
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const initials =
      authorName
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase() || 'KP';

    const newReview: GoogleReview = {
      id: Date.now().toString(),
      quote: reviewText,
      author: authorName,
      initials,
      rating,
      location: location || 'Mysuru',
      relativeTime: 'Just now',
      reviewerStats: 'Verified Patron',
      isNew: true,
      source: 'verified',
    };

    setAllReviews((prev) => [newReview, ...prev]);
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });

    setTimeout(() => {
      setSubmitted(false);
      setIsReviewModalOpen(false);
      setAuthorName('');
      setReviewText('');
      setLocation('');
      setFavoriteProduct('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-24 bg-white px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#8c2f1b]" />
            <p className="text-[#8c2f1b] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Live Patron Reviews
            </p>
            <span className="w-6 h-0.5 bg-[#8c2f1b]" />
          </div>
          <h2 className="text-[#E53935] text-4xl sm:text-5xl font-anton tracking-wide mb-3">
            ECHOES OF HOME
          </h2>
          <p className="text-gray-600 text-base max-w-md mx-auto">
            Authentic live feedback from patrons across generations.
          </p>
        </div>

        {/* Google Reviews Live Summary Card */}
        <div className="bg-[#fbf9f4] border border-amber-900/10 rounded-2xl p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Overall Rating & Stars */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <GoogleIcon className="w-10 h-10 shrink-0" />
              <div>
                <span className="font-anton text-4xl sm:text-5xl text-gray-900 leading-none">
                  {googleRating.toFixed(1)}
                </span>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                  out of 5.0
                </p>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-amber-900/10 pt-3 sm:pt-0 sm:pl-6">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">
                {totalReviews} verified Google reviews
              </p>
              <p className="text-xs text-gray-500">
                Excellent 4.9★ rating on Google Business
              </p>
            </div>
          </div>

          {/* Right: Direct CTA to Write a Review on Google */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              id="write-google-review-header-btn"
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <GoogleIcon className="w-4 h-4 brightness-200" />
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Google Topic Chips Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" data-lenis-prevent="true">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 shrink-0 mr-1">
              Filter by:
            </span>
            {GOOGLE_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 border ${selectedTopic === topic.id
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-[#E53935] border-gray-200'
                  }`}
              >
                <span>{topic.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedTopic === topic.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {topic.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredReviews.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500 bg-[#fbf9f4] rounded-2xl border border-amber-900/10">
              <p className="font-bold text-gray-700">No reviews found for this filter topic.</p>
              <button
                onClick={() => setSelectedTopic('all')}
                className="mt-2 text-xs font-bold text-[#E53935] hover:underline"
              >
                Show all reviews
              </button>
            </div>
          ) : (
            filteredReviews.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-[#fbf9f4] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-900/5 relative flex flex-col justify-between group"
              >
                {/* Background decorative quote mark */}
                <span className="absolute top-4 left-4 text-7xl text-amber-900/10 font-serif leading-none select-none pointer-events-none">
                  “
                </span>

                <div className="relative z-10">
                  {/* Top Bar: Stars + Google Badge + New Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400 text-lg">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.isNew && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                          New
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-white px-2 py-0.5 rounded-full border border-gray-200 shadow-2xs">
                        <GoogleIcon className="w-3 h-3" />
                        <span>Google Review</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-6 text-sm sm:text-base leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-amber-900/10 relative z-10">
                  {item.profilePhoto ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-200 bg-white">
                      <img
                        src={item.profilePhoto}
                        alt={item.author}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 bg-red-100 text-[#8c2f1b] rounded-full flex items-center justify-center font-anton text-base shadow-inner shrink-0">
                      {item.initials}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-gray-900 text-sm font-sans truncate">
                        {item.author}
                      </h4>
                      <span title="Verified Customer" className="inline-flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 truncate">
                      <span>{item.reviewerStats || item.location || 'Patron'}</span>
                      {item.relativeTime && <span>• {item.relativeTime}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


      </div>

      {/* Direct Feedback Modal */}
      {isReviewModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          data-lenis-prevent="true"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-amber-900/10 text-left"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
              aria-label="Close review modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-anton text-2xl text-gray-900 uppercase">
                  Thank You for Your Reverence!
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Your heartfelt review has been added to our Heritage Patrons archive.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-anton text-2xl text-[#E53935] uppercase tracking-wider">
                    Share Your KFP Experience
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Tell us about the flavor, aroma, and memories from your meal.
                  </p>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${star <= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smt. Lakshmi Srinivas"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mysuru / Bengaluru"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Favorite Item
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Puliyogare Gojju"
                      value={favoriteProduct}
                      onChange={(e) => setFavoriteProduct(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Review / Words *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share how KFP traditional food tasted..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


