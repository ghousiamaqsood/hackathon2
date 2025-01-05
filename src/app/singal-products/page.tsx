    
//     "use client";
// import Image from "next/image";

// export default function Singalproduts() {
//   return (
//     <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
//       {/* "Singal-products" */}
//       <div className="relative">
//         <div
//           className="absolute text-4x1 font-bold text-gray-400 opacity-50 ml-32"
          
//           style={{
//             top: "-50px",
//           }}
//         >
//           Singal-products
//         </div>
//         {/* logo section*/}
//         <div className="flex items-center justify-center mt-6">
//           <Image
//             src="/sofa.png"
//             alt="Header Logo"
//             width={1150}
//             height={316}
//             className="rounded-lg"
//             style={{
//               width: "95%", 
//               height: "auto", 
//               marginTop: "36px",
//             }}
//           />
//         </div>
//         <div className="flex items-center justify-center mt-6">
//           <Image
//             src="/Group104.png"
//             alt="tag image"
//             width={1150}
//             height={316}
//             className="rounded-lg"
//             style={{
//               width: "95%", 
//               height: "auto", 
//               marginTop: "36px",
//             }}
//           />
//         </div>
//       </div>

//       <div className="mt-4 grid gap-8">
//         <div>
//           <Image
//             src="/Group110.png"
//             alt="card 2"
//             width={1250}
//             height={316}
//             className="rounded-lg mx-auto"
//           />
//         </div>
//       <div className="mt-4 grid gap-8">
//         <div>
//           <Image
//             src="/Group19.png"
//             alt="card 3"
//             width={1250}
//             height={316}
//             className="rounded-lg mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";

export default function SingleProducts() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-sans">
      {/* "Single Products" Heading */}
      <div className="relative">
        <div
          className="absolute text-2xl font-bold text-gray-400 opacity-50 ml-28"
          style={{
            top: "-50px",
          }}
        >
          Single Products
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center mt-2">
          <Image
            src="/sofa.png"
            alt="Header Logo"
            width={1150}
            height={316}
            className="rounded-lg"
            style={{
              width: "95%",
              height: "auto",
              marginTop: "36px",
            }}
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <Image
            src="/Group104.png"
            alt="Tag Image"
            width={1150}
            height={316}
            className="rounded-lg"
            style={{
              width: "95%",
              height: "auto",
              marginTop: "36px",
            }}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-2 grid gap-2">
        <div>
          <Image
            src="/Group110.png"
            alt="Card 2"
            width={1300}
            height={316}
            className="rounded-lg mx-auto"
          />
        </div>
        <div>
          <Image
            src="/Group19.png"
            alt="Card 3"
            width={1300}
            height={316}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
