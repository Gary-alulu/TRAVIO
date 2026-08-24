import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travio - Travel Experiences Around the World",
    template: "%s | Travio",
  },
  description:
    "Travio is a modern travel experience application showcasing breathtaking destinations and cultural experiences around the world.",
  icons: {
    icon: [
      { url: "/images/travio%20favicon-01.png", type: "image/png" },
      { url: "/images/travio favicon-01.png", type: "image/png" },
    ],
    shortcut: ["/images/travio%20favicon-01.png"],
    apple: [
      { url: "/images/travio%20favicon-01.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/travio%20favicon-01.png" />
        <link rel="icon" type="image/png" href="/images/travio favicon-01.png" />
        <link rel="shortcut icon" type="image/png" href="/images/travio%20favicon-01.png" />
        <link rel="apple-touch-icon" href="/images/travio%20favicon-01.png" />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
