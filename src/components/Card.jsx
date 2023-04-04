import React from "react";
export const CardProduct1 = ({
  title,
  price,

  image,
  onClickDetail,
}) => {
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

export const CardProduct2 = ({}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <figure>
        <img
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

// export const CardProduct3 = ({}) => {
//   return (
//     <div className="card lg:card-side w-1/2 bg-base-100 shadow-xl mx-20">
//       <figure>
//         <img
//           src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
//           alt="Album"
//         />
//       </figure>
//       <div className="card-body pt-10">
//         <h2 className="card-title">New album is released!</h2>
//         <p>Click the button to listen on Spotiwhy app.</p>
//         <div className="card-actions justify-start">
//           <h1 className="underline">SHOP NOW</h1>
//         </div>
//       </div>
//     </div>
//   );
// };
export const CardProduct4 = ({}) => {
  return (
    <div className="card w-96 bg-[#f1f5f9] mx-20">
      <figure className="w-full">
        <img
          src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Nama Barang</h2>
        <h1 className="font-bold text-2xl">$1.23</h1>
      </div>
    </div>
  );
};

export const CardProduct5 = ({}) => {
  return (
    <div className="card w-96 ">
      <figure className="px-10 pt-10">
        <img
          src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
    </div>
  );
};
