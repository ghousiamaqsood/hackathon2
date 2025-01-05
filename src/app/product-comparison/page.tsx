"use client";
import Image from "next/image";

export default function Card() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
      {/* "Product Comparison" Heading */}
      <div className="relative">
        <h2
          className="absolute text-2xl font-bold text-gray-400 opacity-50"
          style={{
            top: "-120px", // Moves the "Product Comparison" text above the logo
            left: "50%", // Centers the text horizontally
            transform: "translateX(-50%)",
          }}
        >
          product-comparison
        </h2>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-8 text-center">
          Product Comparison
        </h1>
      </div>

      {/* Main Image Section */}
      <div>
        <Image
          src="/Cardcomparison.png"
          alt="Main Image"
          width={1440}
          height={316}
          className="rounded-lg"
        />
      </div>

      {/* Additional Images */}
      <div className="mt-8 grid gap-8">
        <div>
          <Image
            src="/Group165.png"
            alt="Card 2"
            width={1440}
            height={270}
            className="rounded-lg mx-auto"
          />
        </div>
        <div>
          <Image
            src="/Frame16.png"
            alt="Product 2"
            width={1440}
            height={270}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
