import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import {
  CardProduct1,
  CardProduct2,
  CardProduct4,
  CardProduct5,
} from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => setProduct(response.data));
  }

  function onClickDetail(id) {
    navigate(`/detail/${id}`);
  }

  return (
    <Layout>
      <Carousel />
      <div className="p-20">
        <h1 className="text-3xl font-bold"> Our Best Seller</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {products.map((product) => (
          <CardProduct1
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onClickDetail={() => onClickDetail(product.id)}
            onclick={() => addToCart(product.id)}
          />
        ))}
      </div>
      <div className="mx-20 my-10">
        <h1 className="text-3xl font-bold">
          A day without shopping is like a day without sunshine.
        </h1>
        <h1 className="text-3xl font-bold">Feel better with shopping </h1>
      </div>
      <div className="mx-20 my-10 grid grid-cols-4 gap-4 ">
        <CardProduct2 />
      </div>

      <div className="p-20">
        <div className="grid grid-cols-2 gap-5 lg:grid-rows-1">
          <div className="card lg:card-side w-full bg-white ">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
                alt="Album"
                className="w-full h-80"
              />
            </figure>
            <div className="card-body pt-10">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-start">
                <h1 className="underline">SHOP NOW</h1>
              </div>
            </div>
          </div>
          <div className="card lg:card-side w-full bg-white ">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
                alt="Album"
                className="w-full h-80"
              />
            </figure>
            <div className="card-body pt-10">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-start">
                <p className="underline text-md">WHAT MAKE US DIFFERENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-4 bg-[#f1f5f9] lg:grid-grid-rows ">
        <div className="mx-20 my-20 w-full ">
          <h1 className="text-4xl">Shot Bundles</h1>
          <p className="text-lg pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <p className="text-lg underline pt-10">VIEW ALL</p>
        </div>
        <div className="pt-10 pb-10">
          <CardProduct4 />
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-3xl"> Follow us on instagram</h1>
        <p className="text-md font-bold">@app-store</p>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <CardProduct5 />
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
