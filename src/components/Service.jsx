import React from "react";

const Service = ({ image, name, desc }) => {
  return (
    <div className="group relative">
      <div className="bg-white rounded-3xl p-6 max-w-[250px] min-h-[200px] flex flex-col text-center text-[#1E1D4C] space-y-5 cursor-pointer hover:shadow-lg transition-all duration-500 ease-in-out overflow-hidden">
        <img src={image} alt={name} className="max-w-[82px] m-auto" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="max-w-[181px]">{desc}</p>
      </div>

      <div className="bg-[#DF6951] w-24 h-24 rounded-tl-2xl rounded-br-2xl absolute -z-10 bottom-[-24px] left-[-24px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
    </div>
  );
};

export default Service;