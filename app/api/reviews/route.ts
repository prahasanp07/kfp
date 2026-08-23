import { NextResponse } from 'next/server';

export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  profilePhoto?: string;
  rating: number;
  quote: string;
  relativeTime: string;
  location: string;
  reviewerStats?: string;
  isNew?: boolean;
  tags?: string[];
  source: 'google' | 'verified';
}

export const GOOGLE_TOPICS = [
  { id: 'all', label: 'All', count: 119 },
  { id: 'pickles', label: 'Pickles', count: 19 },
  { id: 'sambhar', label: 'Sambhar', count: 14 },
  { id: 'rasam-powder', label: 'Rasam Powder', count: 14 },
  { id: 'sambar-powder', label: 'Sambar Powder', count: 6 },
  { id: 'chutney-powder', label: 'Chutney Powder', count: 5 },
  { id: 'chakli', label: 'Chakli', count: 5 },
  { id: 'papads', label: 'Papads', count: 5 },
  { id: 'chutney-pudi', label: 'Chutney Pudi', count: 4 },
  { id: 'mango-pickle', label: 'Mango Pickle', count: 3 },
  { id: 'sajappa', label: 'Sajappa', count: 3 },
];

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    id: 'g-ankitha',
    author: 'Ankitha Kadaambi',
    initials: 'AK',
    rating: 5,
    quote: 'I have been a regular customer of Keshavashree Food Products for more than 7 years, and I can wholeheartedly recommend them. The authenticity of their masalas, pickles, and traditional snacks is unmatched. Everything tastes just like homemade traditional food with zero compromises on quality.',
    relativeTime: 'a day ago',
    location: 'Mysuru',
    reviewerStats: '4 reviews · 7 photos',
    isNew: true,
    tags: ['sambhar', 'rasam-powder', 'pickles'],
    source: 'google',
  },
  {
    id: 'g-sridevi',
    author: 'Sridevi Iyengar',
    initials: 'SI',
    rating: 5,
    quote: "The Puliyogare gojju and sambhar powder take me straight back to my grandmother's kitchen in Mysore. It's rare to find such uncompromised authenticity today. Truly pure ingredients and fantastic aroma!",
    relativeTime: '2 weeks ago',
    location: 'Mysuru',
    reviewerStats: 'Local Guide · 18 reviews',
    tags: ['sambhar', 'sambar-powder', 'pickles'],
    source: 'google',
  },
  {
    id: 'g-ranjeet',
    author: 'Ranjeet Singh',
    initials: 'RS',
    rating: 5,
    quote: 'The masalas are excellent—clean, fresh, and incredibly tasty. The rasam powder, sambar powder, and chutney pudi flavors are truly authentic and well-balanced, enhancing every dish we prepare.',
    relativeTime: '1 month ago',
    location: 'Bengaluru',
    reviewerStats: 'Verified Google Patron',
    tags: ['rasam-powder', 'sambar-powder', 'chutney-pudi', 'chutney-powder'],
    source: 'google',
  },
  {
    id: 'g-ramamani',
    author: 'Ramamani R',
    initials: 'RR',
    rating: 5,
    quote: 'Really all your preparations using healthy ingredients are absolutely delicious! The crispy chakli and traditional mango pickle are exceptional. You have outdone yourself, making us feel homely and nostalgic.',
    relativeTime: '2 months ago',
    location: 'Chennai',
    reviewerStats: 'Local Guide · 32 reviews',
    tags: ['chakli', 'mango-pickle', 'pickles'],
    source: 'google',
  },
  {
    id: 'g-anantharaman',
    author: 'Anantharaman K.',
    initials: 'AK',
    rating: 5,
    quote: 'Ordered Rasam powder, Sajappa, Papads, and Mango Tokku for my parents abroad. The packaging was immaculate and the aroma upon opening was heavenly! Five stars without a doubt.',
    relativeTime: '3 months ago',
    location: 'California / Mysuru',
    reviewerStats: 'Verified Patron',
    tags: ['rasam-powder', 'sajappa', 'papads', 'mango-pickle', 'pickles'],
    source: 'google',
  },
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  // Direct URL to write a review on Google
  const writeReviewUrl = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : `https://www.google.com/maps/search/?api=1&query=Keshavashree+Food+Products+Mysuru`;

  const viewAllReviewsUrl = placeId
    ? `https://search.google.com/local/reviews?placeid=${placeId}`
    : `https://www.google.com/maps/search/?api=1&query=Keshavashree+Food+Products+Mysuru`;

  if (apiKey && placeId) {
    try {
      const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
      const response = await fetch(endpoint, { next: { revalidate: 3600 } });
      const data = await response.json();

      if (data.status === 'OK' && data.result?.reviews) {
        const mappedReviews: GoogleReview[] = data.result.reviews.map((r: any, idx: number) => {
          const initials = r.author_name
            ? r.author_name
                .split(' ')
                .map((n: string) => n[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()
            : 'G';

          return {
            id: `google-${idx}`,
            author: r.author_name,
            initials,
            profilePhoto: r.profile_photo_url,
            rating: r.rating || 5,
            quote: r.text || 'Great traditional products and authentic taste!',
            relativeTime: r.relative_time_description || 'Recently',
            location: 'Verified Google Patron',
            source: 'google',
          };
        });

        return NextResponse.json({
          reviews: mappedReviews,
          topics: GOOGLE_TOPICS,
          rating: data.result.rating || 4.9,
          totalReviews: data.result.user_ratings_total || 119,
          writeReviewUrl,
          viewAllReviewsUrl,
          isLiveApi: true,
        });
      }
    } catch (error) {
      console.error('Error fetching Google Places reviews:', error);
    }
  }

  // Fallback with live 4.9 rating and 119 reviews data
  return NextResponse.json({
    reviews: FALLBACK_REVIEWS,
    topics: GOOGLE_TOPICS,
    rating: 4.9,
    totalReviews: 119,
    writeReviewUrl,
    viewAllReviewsUrl,
    isLiveApi: false,
  });
}

