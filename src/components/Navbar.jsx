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
          <button>Login</button>
          <button className="bg-transparent border-black border-2 rounded-md px-5 py-1">
            Sign up
          </button>
        </div>
        <select name="language" id="language">
          <option value="">EN</option>
        </select>
      </div>

      {/* icon */}
      <ListIcon size={38} onClick={() => setIsOpen(!isOpen)} />
      

      {isOpen && (
        <div className="bg-white lg:hidden h-screen w-[30%] fixed top-0 right-0 z-60 flex flex-col items-center justify-center">
            
            <XIcon size={38} className="absolute top-5 right-5" onClick={() => setIsOpen(false)} />


          <ul className="flex flex-col items-center">
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
          <div className="space-x-8">
            <button>Login</button>
            <button className="bg-transparent border-black border-2 rounded-md px-5 py-1">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
