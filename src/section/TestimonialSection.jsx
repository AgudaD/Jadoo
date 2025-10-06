import React from "react";
import { testimonials } from "../constants";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="mt-28 text-[#1E1F3D] flex flex-col gap-16 md:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-4">
        <h2 className="font-semibold uppercase tracking-wide">Testimonials</h2>
        <h1 className="font-semibold text-3xl lg:text-6xl capitalize max-w-[30rem]">What people say about Us.</h1>
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
