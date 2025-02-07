
"use client";

import React from "react";
import Image from "next/image";
  // یہ وہ راستہ ہے جو آپ نے tsconfig میں سیٹ کیا ہے

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
        <div className="relative">
          {/* Home Text Positioned Over Logo */}
          <div
            className="absolute text-2xl font-bold text-gray-400 opacity-50"
            style={{
              top: "-280px", // Positioned directly over the logo
              left: "7%", // Horizontally centered
              transform: "translateX(-40%)", // Ensures proper centering
            }}
          >
           Home 
          </div>

          {/* Logo Image */}
          <Image
            className="max-w-full h-auto rounded-lg"
            src="/Mask Group.jpg"
            alt="Shop Logo"
            width={1440}
            height={1200}
            priority
            style={{ marginTop: "0px" }} // Removed unnecessary margin
          />
        </div>

        {/* Group 115 Image */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/Browser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="max-w-full h-auto"
            src="/Group 115.png"
            alt="/pitcuer Icons"
            width={1183}
            height={886}
            style={{
              width: "1183px",
              height: "886px",
              marginTop: "32px",
            }}
          />
        </a>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Product Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/Product"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="max-w-full h-auto"
            src="/Our Products.png"
            alt="Our Products Icon"
            width={1236}
            height={446}
            style={{
              width: "1183px",
              height: "886px",
              marginTop: "32px",
            }}
                 />
                   </a>
                    <div className="text-center text-2xl text-blue-500">
                Tailwind CSS is working!
                </div>

        
        {/* Inspirations Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/Inspirations1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="max-w-full h-auto"
            src="/Inspirations1.png"
            alt="Inspirations1 Icon"
            width={1236}
            height={446}
            style={{
              width: "1183px",
              height: "886px",
              marginTop: "32px",
            }}
          />
        </a>

        {/* Share Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="max-w-full h-auto"
            src="/Share.png"
            alt="Share Icon"
            width={1799}
            height={721}
            style={{
              width: "1799px",
              height: "1721px",
              marginTop: "32px",
            }}
          />
        </a>

        
      </footer>
    </div>
  );
}


