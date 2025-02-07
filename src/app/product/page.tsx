import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "hrwyls4k",
  dataset: "production",
  apiVersion: "2023-01-17",
});

interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage?: number;
  imageUrl: string;
}

const truncateDescription = (description: string, length: number = 100) => {
  return description.length > length
    ? `${description.substring(0, length)}...`
    : description;
};

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Cart state added

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-slate-800 mt-2 text-sm">
              {truncateDescription(product.description)}
            </p>
            <p className="text-green-500 font-bold mt-2">${product.price}</p>
            {product.discountPercentage ? (
              <p className="text-sm text-green-600">
                {product.discountPercentage}% OFF
              </p>
            ) : null}
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">
                    ${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is empty. Please add products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
