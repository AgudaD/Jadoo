import React from "react"

const Navbar = () => {
  return (
    <nav className="px-4 py-2 flex items-center justify-between font-semibold">
        <img src="/Logo.svg" alt="" />
        
        <div className="flex items-center gap-28">
            <ul className="flex items-center space-x-16">
                <li>Destinations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
            </ul>
            <div className="space-x-8">
                <button>Login</button>
                <button className="bg-transparent border-black border-2 rounded-md px-5 py-1">Sign up</button>
            </div>
            <select name="language" id="language">
                <option value="">EN</option>
            </select>
        </div>
    </nav>
  )
}

export default Navbar