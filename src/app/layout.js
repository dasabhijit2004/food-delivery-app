import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "FoodieExpress | Fast, Fresh & Delicious",
  description:
    "FoodieExpress is a modern food delivery platform built with Next.js. Browse restaurants, order your favorite meals, and get them delivered fast. Experience seamless ordering, real-time tracking, and secure payments.",
  keywords: "food delivery, online food order, Next.js food app, fast delivery, restaurant app",
  openGraph: {
    title: "FoodieExpress | Fast, Fresh & Delicious",
    description:
      "Order food online from your favorite restaurants and get it delivered hot and fresh. Built with Next.js for speed and performance.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FoodieExpress - Fast, Fresh & Delicious",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
