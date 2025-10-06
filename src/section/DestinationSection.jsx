import React from "react";

import Destionation from "../components/Destionation";
import { destinations } from "../constants";

const DestinationSection = () => {
  return (
    <section className="relative mt-20 text-[#1E1F3D]">
      <div className="text-center space-y-5 text-[#1E1F3D]">
        <h2 className="text-2xl font-semibold">Top Selling</h2>
        <h1 className="text-3xl lg:text-5xl font-bold">Top Destinations</h1>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-12 md:px-24">
        {destinations.map((destination, index) => (
          <Destionation
            key={index}
            image={destination.image}
            location={destination.location}
            duration={destination.duration}
            price={destination.price}
            icon={destination.icon}
          />
        ))}

        <img
          src="/images/Decore.svg"
          alt=""
          className="hidden lg:block absolute bottom-15 right-12 -z-10"
        />
      </div>
    </section>
  );
};

export default DestinationSection;
