"use client";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
      {/* "Checkout" */}
      <div className="relative">
        <div
          className="absolute text-2xl font-bold text-gray-400 opacity-50"
          style={{
            top: "-50px", 
            left: "100px", 
          }}
        >
          Checkout
        </div>

        {/* Header logo*/}
        <div>
          <h1 className="text-4xl font-bold text-center p-1"></h1>
          <Image
            src="/Group787.png"
            alt="Header Image"
            width={1300}
            height={1300}
            className="rounded-lg"
            style={{
              width: "100%", 
              height: "100%",
              marginTop: "60px",
            }}
          />
        </div>
      </div>

      {/*Billing section*/}
      <div className="mt-8">
        <Image
          src="/billing.png"
          alt="Billing Section"
          width={1400}
          height={1400}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* farim section*/}
      <div className="mt-8">
        <Image
          src="/Frame 162.png"
          alt="Frame Section"
          width={1440}
          height={1400}
          className="rounded-lg mx-auto"
        />
      </div>

      
      </div>
    
  );
}
