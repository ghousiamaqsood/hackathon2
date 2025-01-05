import React from 'react';
import Image from 'next/image'; // Ensure to import the Image component

const Footer = () => {
  return (
    <div>
      <Image
        src="/footer 1.png" // Ensure the image path is correct
        alt="Footer"
        width={1440}
        height={600}
        className="w-full h-auto" // Add the correct class if needed
      /> 
    </div>
  );
}

export default Footer;
