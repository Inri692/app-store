import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import { Btn } from "../components/Button";

import Layout from "../components/Layout";

const Detail = () => {
  return (
    <Layout>
      <div className="flex justify-center m-10">
        <p className="flex flex-row gap-5">
          Home <IoIosArrowForward className="mt-1" /> Item{" "}
          <IoIosArrowForward className="mt-1" /> Nama barang
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-1/6 flex-col mx-10 mt-5 space-y-4">
          <img
            src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
            alt="Shoes"
            className="w-16 "
          />
          <img
            src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
            alt="Shoes"
            className="w-16 "
          />
          <img
            src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
            alt="Shoes"
            className="w-16 "
          />
          <img
            src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
            alt="Shoes"
            className="w-16 "
          />
        </div>
        <div className="w-5/6">
          <div className="card lg:card-side bg-white ">
            <figure className="w-1/2">
              <img
                src="https://asset.kompas.com/crops/PdKQ8JEec1uH477e64QGdeYVWWI=/28x0:612x389/750x500/data/photo/2021/03/29/6061aaa779b88.png"
                className="w-full h-96"
              />
            </figure>
            <div className="mx-8">
              <p>Minibmog</p>
              <h2 className="text-black font-bold capitalize">judul</h2>
              <p className="text-black">price: $ dolla</p>
              <div className="my-5">
                <p className="font-bold capitalize text-black">
                  price: $ dollar
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex items-center">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
                    -
                  </button>
                  <input
                    className="appearance-none bg-gray-300 w-16 text-gray-700 font-bold py-2 px-4 text-center "
                    type="number"
                    defaultValue="1"
                  />
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                    +
                  </button>
                </div>
                <Btn
                  id="btn-add"
                  label="ADD TO CART"
                  className="border-2 border-black mx-5"
                />
              </div>
              <div className="mt-5 text-center">
                <button className="bg-black text-white w-full h-10 rounded-lg">
                  Buy it now
                </button>
              </div>
              <div className="flex flex-row mt-10">
                <button className="flex flex-row gap-2">
                  <BsArrowDownUp className="mt-1 mx-2" />
                  Compare
                </button>

                <button className="flex flex-row gap-2">
                  <AiOutlineQuestionCircle className="mt-1 mx-2" />
                  Ask a question
                </button>
                <button className="flex flex-row gap-2">
                  <AiOutlineShareAlt className="mt-1 mx-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-12 gap-10 text-[#94a3b8]">
        <button className="flex flex-row hover:text-black">
          Product description
        </button>
        <button className="flex flex-row hover:text-black">
          Shipping & Return
        </button>
        <button className="flex flex-row hover:text-black">
          Product riviews
        </button>
      </div>
    </Layout>
  );
};

export default Detail;
