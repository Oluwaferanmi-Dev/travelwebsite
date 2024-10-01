"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative flex items-center justify-between p-4 border-b bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/images/tripswithgloryylogo.png"
            alt="Travel Agency Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 flex justify-end items-center">
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <nav className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><Link href="/dashboard/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link></li>
            <li><Link href="/dashboard/tours" className="text-gray-700 hover:text-gray-900">Tours</Link></li>
            <li><Link href="/dashboard/blog" className="text-gray-700 hover:text-gray-900">Blog</Link></li>
            <li><Link href="/dashboard/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link></li>
            <li><Link href="/dashboard/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
