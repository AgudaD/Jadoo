import React from "react";
import { testimonials } from "../constants";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="mt-28 text-[#1E1F3D] flex items-center justify-between">
      <div>
        <h2 className="font-semibold">Testimonials</h2>
        <h1 className="font-semibold text-6xl">What people say about Us.</h1>
      </div>

      <div>
        {testimonials.map((testimony, index) => (
          <TestimonialCard
            key={index}
            image={testimony.image}
            comment={testimony.comment}
            name={testimony.name}
            location={testimony.location}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
