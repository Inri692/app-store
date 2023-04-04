import React from "react";
export const CardProduct1 = ({ title, price, image, onClickDetail }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-md " onClick={onClickDetail}>
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-48 h-48"
          onClick={onClickDetail}
        />
      </figure>
      <div
        className="card-body items-center text-center"
        onClick={onClickDetail}
      >
        <h2 className="card-title gap-5">{title}</h2>
        <h1 className="font-bold text-2xl">$ {price}</h1>
      </div>
    </div>
  );
};

export const CardProduct2 = ({ title, image, description }) => {
  return (
    <div className="card w-96 bg-base-100 mt-5">
      <figure>
        <img src={image} alt="Shoes" className="w-48 h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const CardProduct4 = ({ title, image, price }) => {
  return (
    <div className="card w-96 bg-[#f1f5f9] mx-3 pt-10">
      <figure className="w-full">
        <img src={image} alt="Shoes" className="w-48 h-48" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h1 className="font-bold text-2xl">$ {price}</h1>
      </div>
    </div>
  );
};

export const CardProduct5 = ({ image }) => {
  return (
    <div className="card w-96 ">
      <figure className="px-5 pt-10">
        <img src={image} alt="Shoes" className="w-48 h-48" />
      </figure>
    </div>
  );
};
