import  Image from "next/image" ;
export default function  ShoppingCar () {
return(

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
        Shopping-cart
      </div>
      {/* Header Section */}
      <div>
        <h1 className="text-4xl font-bold mb-8 text-center">Shopping-card</h1>
        {/* Images Section */}
<div className="mt-4 grid gap-8">
  <div>
    <Image
      src="/sopping-card.jpg"
      alt="Product 2"
      width={1440}
      height={3160}
      className="rounded-lg"
      style={{
        width: "100%", // Full width
        height: "100%", // Maintain aspect ratio
        marginTop: "0px",
      }}  
    />
  </div>
        
          
        </div>
      </div>
    </div>
  );
}


