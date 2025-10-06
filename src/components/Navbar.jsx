import { ListIcon, XIcon } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-2 flex items-center justify-between font-semibold cursor-pointer">
      {/* logo */}
      <img src="/images/Logo.svg" alt="" />

      <div className="hidden lg:flex items-center gap-28">
        <ul className="flex items-center space-x-16">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
        </ul>
        <div className="space-x-8">
          <button className="cursor-pointer">Login</button>
          <button className="bg-transparent border-black border-2 rounded-md px-5 py-1 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>

      {/* icon */}
      <ListIcon size={38} onClick={() => setIsOpen(true)} className="lg:hidden" />

      {/* Mobile menu & backdrop */}
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-20 z-50 transition-opacity duration-500
          ${
            isOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          lg:hidden
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in menu */}
      <div
        className={`
          bg-white lg:hidden h-screen w-[70vw] max-w-xs fixed top-0 right-0 z-60 flex flex-col items-center justify-center text-xl
          transition-transform duration-500 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ boxShadow: isOpen ? "0 0 0 9999px rgba(0,0,0,0.2)" : "none" }}
      >
        <XIcon
          size={38}
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        />

        <ul className="flex flex-col items-center space-y-8 w-full text-center">
          <li className="hover:bg-gray-100 w-full p-2">Destinations</li>
          <li className="hover:bg-gray-100 w-full p-2">Hotels</li>
          <li className="hover:bg-gray-100 w-full p-2">Flights</li>
          <li className="hover:bg-gray-100 w-full p-2">Bookings</li>
        </ul>
        <div className="space-x-8 mt-10">
          <button className="hover:bg-gray-100 px-5 py-1 rounded-md cursor-pointer">
            Login
          </button>
          <button className="bg-transparent border-black border-2 rounded-md px-5 py-1 hover:bg-gray-100 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
