
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md"; // For Profile Icon
import { CiSearch } from "react-icons/ci"; // For Search Icon
import { CiHeart } from "react-icons/ci"; // For Heart Icon
import { SlBasket } from "react-icons/sl"; // For Basket Icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="absolute bg-white text-black"
      style={{
        width: "1286px", // Header width
        height: "100px", // Header height
        top: "29px", // 29px from the top
        left: "50%", // Center the header horizontally by moving it 50% from the left
        transform: "translateX(-50%)", // Adjust the position back by 50% of its own width to center it
        position: "absolute",
      }}
    >
      <div className="flex items-center justify-between px-2 h-full">
        {/* Logo and "Home" text section */}
        <div className="relative flex items-center justify-center">
          {/* "Home" text placed above the logo */}
          <div
            // className="absolute text-2xl font-bold text-gray-400 opacity-50"
            style={{
              // top: "-35px", // Moves the "Home" text above the logo
              // left: "50%", // Horizontally center the "Home" text
              // transform: "translateX(-50%)", // Ensures that the text is perfectly centered
            }}
          >
            {/* Home */}
          </div>

          {/* Logo */}
          <Image src="/Frame 168.png" alt="Brand Logo" width={185} height={41} />
          <p className="text-base font-bold text-gray-600 ml-3">Furnio</p>
        </div>

        {/* Navigation Links (Center) */}
        <nav className="hidden md:flex space-x-4 mx-auto">
          <Link href="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link href="/blog" className="text-black hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
          <Link href="/shop" className="text-black hover:text-gray-600">
            Shop
          </Link>
          <Link href="/card" className="text-black hover:text-gray-600">
            Card
          </Link>
          <Link href="/singal-products" className="text-black hover:text-gray-600">
          Singal-products
          </Link>
          <Link href="/checkout" className="text-black hover:text-gray-3600">
          Checkout
          </Link>
        
          <Link href="/product-comparison" className="text-black hover:text-gray-600">
          Product-comparison
          </Link>
          <Link href="/cart-sidebar" className="text-black hover:text-gray-600">
          cart-sidebar
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link href="/profile">
            <MdOutlinePerson className="text-black h-6 w-6 cursor-pointer hover:text-gray-500" />
          </Link>
          {/* Search Icon */}
          <Link href="/search">
            <CiSearch className="text-black h-6 w-6 cursor-pointer hover:text-gray-500" />
          </Link>
          {/* Heart Icon */}
          <Link href="/favorites">
            <CiHeart className="text-black h-6 w-6 cursor-pointer hover:text-gray-500" />
          </Link>
          {/* Basket Icon */}
          <Link href="/shop">
            <SlBasket className="text-black h-6 w-6 cursor-pointer hover:text-gray-500" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 text-black w-full absolute top-full left-0 shadow-md">
          <ul className="space-y-4 py-4 text-center">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                href="/blog"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            
            <li>
              <Link
                href="/shop"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                 Shop
              </Link> 
            </li>
            <li>
              <Link
                href="/singal-products"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                 Singal-products
              </Link> 
            </li>
            <li>
              <Link
                href="/Card"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                 card
              </Link> 
            </li>
             <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li> 
             <li>
              <Link
                href="/productcomparison"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                productcomparison
              </Link>
            </li> 
             <li>
              <Link
                href="/checkout"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                Checkout
              </Link>
            </li> 
             <li>
              <Link
                href="/product-comparison"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
                Product-comparison
              </Link>
            </li> 
             <li>
              <Link
                href="/cart-sidebar"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={toggleMenu}
              >
              cart-sidebar
              </Link>
            </li> 
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

