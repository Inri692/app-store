import React, { useContext, useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";

import { Cartcontext } from "../context/Context";
import Layout from "../components/Layout";

const Detail = () => {
  const [products, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data));
  }

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  // console.log(Globalstate);
  return (
    <Layout>
      <>
        <div className="flex justify-center m-10">
          <p className="flex flex-row gap-5">
            Home <IoIosArrowForward className="mt-1" /> Item
            <IoIosArrowForward className="mt-1" />
            {products.title}
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/6 flex-col mx-10 mt-5 space-y-4">
            <img src={products.image} alt="Shoes" className="w-16 " />
            <img src={products.image} alt="Shoes" className="w-16 " />
            <img src={products.image} alt="Shoes" className="w-16 " />
            <img src={products.image} alt="Shoes" className="w-16 " />
          </div>

          <div className="w-5/6">
            <div className="card lg:card-side bg-white ">
              <figure className="w-1/2">
                <img src={products.image} className="w-full h-auto" />
              </figure>
              <div className="mx-8">
                <p>Minibmog</p>
                <h2 className="text-black font-bold capitalize">
                  {products.title}
                </h2>
                <p className="text-black">price: $ {products.price}</p>
                <div className="mt-5 text-center mt-24">
                  <button
                    className="btn  border-2 border-black bg-white text-black hover:bg-[#475569] rounded-full w-full"
                    onClick={() => dispatch({ type: "ADD", payload: products })}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="btn  bg-black text-white w-full h-10 rounded-lg mt-5"
                    onClick={() => dispatch({ type: "ADD", payload: products })}
                  >
                    Buy it now
                  </button>
                </div>
                <div className="flex sm:flex-row mt-10">
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
      </>

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
