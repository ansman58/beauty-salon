import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Studio | Luxury Beauty Salon & Spa",
  description: "Discover your inner radiance at Glow Studio. Premium hair styling, skincare treatments, manicures, and spa services in a luxurious, relaxing environment.",
  keywords: "beauty salon, hair salon, spa, skincare, manicure, pedicure, facial, luxury salon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
