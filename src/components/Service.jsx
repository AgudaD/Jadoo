import React from "react";

const Service = ({ image, name, desc }) => {
  return (
    <div className="bg-white rounded-md p-3">
      <img src={image} alt="" />

      <h3>{name}</h3>

      <p>{desc}</p>
    </div>
  );
};

export default Service;
