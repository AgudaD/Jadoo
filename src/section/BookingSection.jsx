import React from "react";
import { bookingSteps } from "../constants";
import BookingComponent from "../components/BookingComponent";

const BookingSection = () => {
  return (
    <section className="mt-28 text-[#1E1F3D] flex items-center justify-between">
      <div className="space-y-5">
        <h2 className="font-semibold">Easy and Fast</h2>
        <h1 className="text-6xl font-semibold capitalize">
          Book your next trip in 3 easy steps
        </h1>

        <div className="space-y-4">
          {bookingSteps.map((booking, index) => (
            <BookingComponent
              key={index}
              image={booking.image}
              title={booking.title}
              desc={booking.desc}
            />
          ))}
        </div>
      </div>

      <img src="/images/bookingImage.svg" alt="" />
    </section>
  );
};

export default BookingSection;
