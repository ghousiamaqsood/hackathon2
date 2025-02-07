"use client";
import Image from "next/image";

export default function Card() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
      {/* "Card" لوگو کے اوپر بائیں جانب */}
      <div className="relative">
        <div
          className="absolute text-2xl font-bold text-gray-400 opacity-50"
          style={{
            top: "-55px", // لوگو کے اوپر فاصلہ
            left: "120px", // بائیں طرف فاصلہ
          }}
        >
          Card
        </div>

        {/* ہیڈر لوگو */}
        <div>
          <h1 className="text-2xl font-bold mb-8 text-center p-6"></h1>
          <Image
            src="/Group 78 (4).png"
            alt="Header Image"
            width={1440}
            height={600}
            className="rounded-lg"
            style={{
              width: "100%", // مکمل چوڑائی
              height: "auto", // تناسب برقرار
              marginTop: "30px",
            }}
          />
        </div>
      </div>

     
      <div className="mt-8">
        <Image
          src="/card2.png"
          alt="Product Section"
          width={1440}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>
      <div className="mt-8">
        <Image
          src="/Frame.png"
          alt="card"
          width={1440}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>
    </div>
  );
}
