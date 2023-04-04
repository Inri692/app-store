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
  const [product, setProducts] = useState([]);
  const [product3, setProduct3] = useState([]);
  const [product4, setProduct4] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
    fetchData4();
  }, []);

  function fetchData() {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => setProduct(response.data));
  }
  function fetchData2() {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((response) => setProducts(response.data));
  }
  function fetchData3() {
    axios
      .get("https://fakestoreapi.com/products?limit=3")
      .then((response) => setProduct3(response.data));
  }
  function fetchData4() {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => setProduct4(response.data));
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
      <div className="grid sm:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <CardProduct1
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onClickDetail={() => onClickDetail(product.id)}
          />
        ))}
      </div>
      <div className="mx-20 my-10">
        <h1 className="text-3xl font-bold">
          A day without shopping is like a day without sunshine.
        </h1>
        <h1 className="text-3xl font-bold">Feel better with shopping </h1>
      </div>
      <div className="mx-5 my-10 grid sm:grid-cols-4 gap-4 ">
        {product.map((data) => (
          <CardProduct2
            key={data.id}
            title={data.title}
            image={data.image}
            description={data.description}
          />
        ))}
      </div>

      <div className="p-20">
        <div className="grid sm:grid-cols-2 gap-5 ">
          <div className="card lg:card-side w-full bg-white ">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
                alt="ok"
                className="w-full h-80"
              />
            </figure>
            <div className="card-body pt-10">
              <h2 className="card-title">New item is released!</h2>
              <p>Click the button to see our new items.</p>
              <div className="card-actions justify-start">
                <h1 className="underline">SHOP NOW</h1>
              </div>
            </div>
          </div>
          <div className="card lg:card-side w-full bg-white ">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
                alt="ok"
                className="w-full h-80"
              />
            </figure>
            <div className="card-body pt-10">
              <h2 className="card-title">New item is released!</h2>
              <p>Click the button to see our new items.</p>
              <div className="card-actions justify-start">
                <p className="underline text-md">WHAT MAKE US DIFFERENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 sm:grid grid-cols-4 gap-4 bg-[#f1f5f9] lg:grid-grid-rows ">
        <div className="mx-20 my-20 w-full ">
          <h1 className="text-4xl">Shot Bundles</h1>
          <p className="text-lg pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg underline pt-10">VIEW ALL</p>
        </div>

        {product3.map((data) => (
          <CardProduct4
            key={data.id}
            title={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
      </div>
      <div className="text-center mt-20">
        <h1 className="text-3xl"> Follow us on instagram</h1>
        <p className="text-md font-bold">@app-store</p>
      </div>
      <div className="grid sm:grid-cols-5 ">
        {product4.map((data) => (
          <CardProduct5 key={data.id} image={data.image} />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
