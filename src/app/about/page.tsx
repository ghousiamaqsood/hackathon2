


import React from "react";
import Image from "next/image"; // Import Next.js Image component

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      
        {/* Main Banner Image */}
        <div className="w-full">
          <Image
            src="/banner.png"
            alt="About us"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Additional Images */}
        <div className="w-full">
          <Image
            src="/Our Products (3).png"
            alt="Our Products"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src="/Inspirations (3).png"
            alt="Inspirations"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full">
          <Image
            src="/Share (2).png"
            alt="Share"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Learn More Button */}
        <div className="w-full text-center">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Learn More
          </button>
        </div>

      
      
    </section>
  );
};

export default About;
