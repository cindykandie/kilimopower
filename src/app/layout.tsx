import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const satoshi = localFont({
  src: "../styles/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Kilimo Power | Power Your Farm. Cut Costs. Harvest More.",
  description:
    "Kenya's #1 farm technology platform. Solar pumps, backup systems and farm machinery delivered anywhere in Kenya. Pay After Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${plusJakartaSans.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F7F5]">{children}</body>
    </html>
  );
}
