import React, { useEffect, useRef } from "react";
import { trustLogos } from "../constants";
import { gsap } from "gsap";

const NewsLetterSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
  const slider = carouselRef.current;
  let totalWidth = slider.scrollWidth / 2;

  
  let tween = gsap.to(slider, {
    x: -totalWidth,
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % -totalWidth}px`,
    },
  });

  const handleResize = () => {
    tween.kill();
    totalWidth = slider.scrollWidth / 2;
    tween = gsap.to(slider, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % -totalWidth}px`,
      },
    });
  };

  window.addEventListener("resize", handleResize);

  return () => {
    tween.kill();
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <div className="mt-28 text-[#1E1F3D]">
      {/* ✅ Trust Logos Carousel */}
      <section className="overflow-hidden px-6 sm:px-10 md:px-20">
        <div
          ref={carouselRef}
          className="flex items-center gap-8 sm:gap-12 md:gap-16 w-max"
        >
          {[...trustLogos, ...trustLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-10 sm:h-12 md:h-16 w-20 sm:w-28 md:w-32 flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-h-8 sm:max-h-10 md:max-h-12 w-auto object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Newsletter Section */}
      <section className="relative bg-[#DFD7F9] rounded-lg rounded-tl-[7rem] p-6 sm:p-10 mt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold max-w-[50rem] m-auto leading-snug">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-20">
          <div className="relative w-full sm:w-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                  stroke="#39425D"
                  strokeLinecap="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="20"
                  height="17"
                  rx="4.5"
                  stroke="#39425D"
                />
              </svg>
            </span>

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white rounded-md p-3 pl-10 placeholder-[#39425D] w-full sm:w-80"
            />
          </div>

          <button className="bg-gradient-to-r from-orange-200 to-orange-500 py-3 px-6 text-white rounded-lg w-full sm:w-auto">
            Subscribe
          </button>
        </form>

        {/* Decorative Images */}
        <img
          src="/images/newsletterbottom.svg"
          alt=""
          className="hidden lg:block absolute bottom-0 left-0 w-[14rem]"
        />
        <img
          src="/images/newslettertop.svg"
          alt=""
          className="hidden lg:block absolute top-0 right-0 w-[10rem]"
        />
        <img
          src="/images/senderIcon.svg"
          alt=""
          className="absolute -top-3 -right-3 w-12"
        />
        <img
          src="/images/newsletterunderlay.svg"
          alt=""
          className="absolute -bottom-5 -right-15 w-24 -z-10"
        />
      </section>
    </div>
  );
};

export default NewsLetterSection;
