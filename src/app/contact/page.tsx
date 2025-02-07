
"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans bg-white">
      {/* Header Section */}
      <div className="relative">
        <h1 className="absolute text-2xl font-bold text-gray-400 opacity-50" style={{ top: "-60px", left: "110px" }}>
          Contact
        </h1>
        <h1 className="text-2l font-bold mb-8 text-center"></h1>
      </div>

      {/* Main Contact Image */}
      <div className="relative">
        <Image
          src="/Group 78.png"
          alt="Contact picture"
          width={1440}
          height={955}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Images Section */}
      <div className="mt-8 grid gap-8">
        <Image
          src="/Group 162 (1).png"
          alt="Product Logo"
          width={1440}
          height={270}
          className="rounded-lg mx-auto"
        />
        <div className="p-10 bg-[#FAF3EA] rounded-lg">
          <Image
            src="/Feature1.png"
            alt="Feature 1 Image"
            width={1440}
            height={270}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>

      

        
         
        
    </div> 
  );
}
