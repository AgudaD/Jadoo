import React from "react";
import { trustLogos } from "../constants";

const NewsLetterSection = () => {
  return (
    <div className="mt-28 text-[#1E1F3D]">
      {/* Trust Section */}
      <section className="flex items-center justify-between px-20">
        {trustLogos.map((logo, index) => (
          <img key={index} src={logo} alt="" />
        ))}
      </section>

      {/* Newsletter */}
      <section className="relative bg-[#DFD7F9] rounded-lg rounded-tl-[7rem] p-10 mt-32">
        <h1 className="text-4xl text-center font-semibold max-w-[50rem] m-auto">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>

        <form className="flex items-center justify-center gap-4 mt-20">
          <div className="relative">
            {/* Icon */}
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
                  stroke-linecap="round"
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
              className="bg-white rounded-md p-3 pl-10 placeholder-[#39425D] w-full"
            />
          </div>

          <button className="bg-gradient-to-r from-orange-200 to-orange-500 py-3 px-6 text-white rounded-lg">
            Subscribe
          </button>
        </form>

        <img
          src="/images/newsletterbottom.svg"
          alt=""
          className="absolute bottom-0 left-0 w-[14rem]"
        />
        <img
          src="/images/newslettertop.svg"
          alt=""
          className="absolute top-0 right-0 w-[10rem]"
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
