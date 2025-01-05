"use client";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-36 font-sans ">
      {/* "Blog" text placed above the logo */}
      <div className="relative ">
        <h2
          className="absolute text-2xl font-bold text-gray-400 opacity-50 "
          style={{
            top: "-120px", // Moves the "Blog" text above the logo
            left: "9%", // Horizontally center the "Blog" text
            transform: "translateX(-50%)", // Ensures that the text is perfectly centered
          }}
        >
          Blog
        </h2>
      </div>

      {/* Header Section */}
      <div >
        <Image
          src="/Group 78 .png"
          alt="Header Image"
          width={1440}
          height={600}
          className="rounded-lg "
          style={{
            width: "100%", // Full width
            height: "auto", // Maintain aspect ratio
            marginTop: "10px",
          }}
        />
      </div>

      {/* Images Section */}
      <div className="mt-8  grid gap-8">
        <Image
          src="/Group 185.png"
          alt="Product Image"
          width={1440}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Additional Image Section */}
      <div className="mt-4 grid gap-4">
        <Image
          src="/Frame 162.png"
          alt="Frame Image"
          width={1440}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>
        
      </div>
    
  );
}

    
