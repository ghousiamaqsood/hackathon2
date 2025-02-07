

"use client";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
      {/* "Shop" text placed above the logo */}
      
      
      <div className="relative">

      </div>
      <div
        className="absolute text-2xl font-bold text-gray-400 opacity-50"
        style={{
          top: "30px", // Moves the "Shop" text above the logo
          left: "14%", // Horizontally center the "Shop" text
          transform: "translateX(-20%)", // Ensures that the text is perfectly centered
        }}
      >
        Shop
      </div>
      {/* Header Section */}
      <div>
        <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>
        {/* Images Section */}
<div className="mt-4 grid gap-8">
  <div>
    <Image
      src="/Group 63.png"
      alt="Product 2"
      width={1400}
      height={300}
      className="rounded-lg"
      style={{
        width: "100%", // Full width
        height: "100%", // Maintain aspect ratio
        marginTop: "0px",
      }}  
    />
  </div>
        <Image
          src="/Group 78 (1).png"
          alt="Header Image"
          width={1440}
          height={316}
          className="rounded-lg"
          style={{
            width: "100%", // Full width
            height: "auto", // Maintain aspect ratio
            marginTop: "0px",
          }}
        />
     </div>


      </div>

      {/* Images Section */}
      <div className="mt-8 grid gap-8">
        <div>
          <Image
            src="/logo.png"
            alt="Product 2"
            width={1440}
            height={270}
            className="rounded-lg mx-auto"
          />
        </div>

       

        <div>
          <Image
            src="/Feature1.png"
            alt="Product 3"
            width={1440}
            height={270}
            className="rounded-lg mx-auto"
            style={{
              width: "100%", // Full width for responsiveness
              maxWidth: "1440px", // As per Figma design
              height: "270px", // Exact Figma height
              paddingTop: "100px", // Figma spacing
              paddingBottom: "100px", // Figma spacing
              background: "#FAF3EA", // Figma color
            }}
          />
          
        </div>
      </div>
    </div>
  );
}
