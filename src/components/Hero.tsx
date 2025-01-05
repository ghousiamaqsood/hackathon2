
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center text-center mt-6">
      {/* Hero Image */}
      <Image
        src="/Group115.png"
        alt="Hero Image"
        width={1440}
        height={900}
        className="object-cover"
      />
      
      {/* {/* Products Section */}
     <Image
        src="/Our Products.png"
        alt="Our Products"
        width={900}
        height={500}
        className="object-cover"
      /> 

      {/* Inspirations Section */}
      <Image
        src="/inspirations1.png"
        alt="Inspirations"
        width={900}
        height={500}
        className="object-cover"
      />  
    </section>
  );
};
 export default Hero;
 
