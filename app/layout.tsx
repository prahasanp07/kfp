import type { Metadata } from 'next';
import { Anton, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keshavashree.com'),
  title: 'Keshavashree Food Products (KFP) | Tasty, Hygienic, Aromatic Iyengar Foods',
  description: 'Authentic homemade traditional Iyengar food products, masalas, pickles, and heritage bath mixes crafted with passion in Mysuru since 2017.',
  keywords: [
    'Keshavashree Food Products',
    'KFP Mysuru',
    'Iyengar Food Products',
    'Puliyogare Gojju',
    'Authentic Sambar Powder',
    'Rasam Powder',
    'Mysore Pickles',
    'Besan Ladoo',
    'Homemade Masalas'
  ],
  openGraph: {
    title: 'Keshavashree Food Products (KFP)',
    description: 'Tasty - Hygienic - Aromatic. Traditional Homemade Iyengar Food Products.',
    type: 'website',
    images: ['/assets/keshavashree-logo.png'],
  },
  icons: {
    icon: [
      { url: '/assets/keshavashree-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/keshavashree-logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/assets/keshavashree-logo.png',
    apple: '/assets/keshavashree-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fbf9f4] text-[#333333] selection:bg-[#E53935] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
