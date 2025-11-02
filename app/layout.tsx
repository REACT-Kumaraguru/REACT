import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/landing/Navigation"; // ✅ Move navbar here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REACT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Load Reenie Beanie handwriting font here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Place Navigation here so it persists across routes */}
        <Navigation />

        {/* ✅ Add top padding so content isn’t hidden behind the fixed navbar */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
