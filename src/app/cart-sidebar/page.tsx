
import React from 'react';
import Image from 'next/image';

const Contzct = () => {
  const cartItems = [
    {
      id: 1,
      image: '/sofa1.png',
      price: 'Rs. 250,000.00',
    },
    {
      id: 2,
      image: '/sofa2.png',
      price: 'Rs. 270,000.00',
    },
  ];

  return (
    <div className="relative min-h-screen flex justify-start items-start px-8 py-10">
      {/* Left Section - Logo and Images */}
      <div className="flex flex-col items-start gap-8 w-full">
        {/* Logo Section */}
        <div className="w-full relative">
          <Image
            src="/Group1041.png"
            alt="Logo"
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
          />

          Shopping Cart Overlay
          <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-6 w-72 h-auto max-h-[500px] overflow-y-auto z-10">
            {/* Shopping cart ki width 72 aur height auto set ki */}
            <h2 className="text-lg font-bold text-center border-b pb-4">Shopping Cart</h2>
            <div className="space-y-6 mt-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src="/Group150.png"
                    alt="Cart Item"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <span className="text-yellow-600 font-semibold">{item.price}</span>
                  <button className="text-red-600 hover:text-red-800">✖</button>
                </div>
              ))}
            </div>

            {/* Buttons Section (All in one line with equal width) */}
            <div className="flex justify-between mt-4">
              <button className="bg-transparent  text-black py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-900 w-full mr-2">
                Cart
              </button>
              <button className="bg-transparent text-black py-2 px-4 rounded-lg border border-blue-300 hover:border-blue-500 w-full mr-2">
                Checkout
              </button>
              <button className="bg-transparent text-black py-2 px-4 rounded-lg border border-green-300 hover:border-green-500 w-full">
                Compare
              </button>
            </div>
            {/* Buttons are now in a single row, with equal width, transparent background, thin borders, and rounded corners */}
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col gap-6 w-full relative">
          <Image
            src="/Group110.png"
            alt="Statement Image"
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
          />
          <Image
            src="/Group91.png"
            alt="Group 91 Image"
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contzct;
