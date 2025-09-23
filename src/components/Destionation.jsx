import React from "react";

const Destination = ({ image, location, duration, price, icon }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm drop-shadow-md">
        <img class="rounded-t-xl w-full h-[20rem] object-cover" src={image} alt={location} />
      <div class="p-5">
        <div className="flex items-center justify-between text-lg">
          <h2>{location}</h2>
          <p>{price}</p>
        </div>
        

        <div className="flex items-center gap-3 mt-3">
          <img src={icon} alt={"location icon"} className="w-5 h-5" />
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
