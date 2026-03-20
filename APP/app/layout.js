import { Inter, Playfair_Display } from 'next/font/google';
import '../global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Kenya Chic Inn | Boutique Luxury in Nairobi',
  description: 'Book your stay at Nairobi’s premier boutique inn. Secure crypto payments accepted.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}

