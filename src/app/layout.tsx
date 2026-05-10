import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Reham | Senior Flutter Developer — Crafting Elegant Cross-Platform Experiences",
  description:
    "Portfolio of Reham, a senior mobile app developer specializing in Flutter and Dart. Building premium, high-performance cross-platform mobile experiences.",
  keywords: [
    "mobile app developer",
    "Flutter developer",
    "Dart",
    "cross-platform",
    "mobile engineer",
    "iOS developer",
    "Android developer",
  ],
  openGraph: {
    title: "Reham | Senior Flutter Developer",
    description:
      "Engineering elegant mobile experiences for iOS, Android, and Web using Flutter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}
