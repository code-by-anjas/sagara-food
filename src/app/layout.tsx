import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagara Food Menus",
  description: "Makanan Nikmat dengan senyuman penuh semangat!",

  openGraph: {
    title: "Sagara Food Menus",
    description:
      "Lihat daftar menu lengkap SAGARA FOOD — enak, murah, pedas, bikin nagih!",
    url: "https://sagara-food.vercel.app",
    siteName: "Sagara Food",
    images: [
      {
        url: "/og_sagara_food.png",
        width: 1200,
        height: 630,
        alt: "Sagara Food Menu Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // ⭐ Twitter Card (kadang ikut membantu WA)
  twitter: {
    card: "summary_large_image",
    title: "Sagara Food Menus",
    description: "Menu makanan enak, pedas, murah meriah!",
    images: ["/og-sagara.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
