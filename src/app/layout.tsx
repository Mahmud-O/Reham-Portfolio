import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
