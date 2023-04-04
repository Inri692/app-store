import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";

import { Cartcontext } from "../context/Context";

const Navbar = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="navbar h-10 bg-white shadow-xl sticky top-0 z-50 ">
      <div className="navbar-start flex items-center justify-between flex-wrap space-x-6 m-10 hidden md:table-cell">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <div className="flex flex-row items-center ">
              <label>HOME</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-center ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex flex-row items-center ">
              <label>SHOP</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex flex-row items-center ">
              <label>PRODUCT</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex flex-row items-center ">
              <label>PAGES</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex flex-row items-center ">
              <label>BLOG</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <div className="flex flex-row items-center ">
              <label>FEATURES</label>
              <BiChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
          >
            <li>
              <p className="active:text-black">Profile</p>
            </li>
            <li>
              <p>Purchase History</p>
            </li>
            <li>
              <p>Sale History</p>
            </li>
            <li>
              <p>Log Out</p>
              <p>Log in</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost ">
          <p className="mx-2 normal-case text-black text-4xl">Store App</p>
        </Link>
      </div>
      <div className="navbar-end mr-10">
        <div className="flex justify-between hidden md:table-cell">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FiSearch calor="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2 hidden md:table-cell">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <CgProfile color="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2 hidden md:table-cell">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <AiFillStar color="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2">
          <label
            htmlFor="my-modal-3"
            tabIndex={0}
            className="btn btn-ghost btn-circle"
          >
            <BiShoppingBag color="black" size={22} />
          </label>
          {/* modal */}

          <input type="checkbox" id="my-modal-3" className="modal-toggle " />

          <div className="modal">
            <div className="modal-box relative w-96 h-screen">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Shopping Cart</h3>
              {state.map((item, index) => {
                return (
                  <div className="card lg:card-side " key={index}>
                    <figure>
                      <img src={item.image} alt="Album" className="w-32 h-32" />
                    </figure>
                    <div className="card-body ">
                      <h2 className="text-lg">{item.title}</h2>
                      <p>$ {item.price}</p>
                      <div className="flex items-center">
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 "
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({ type: "DECREASE", payload: item });
                            } else {
                              dispatch({ type: "REMOVE", payload: item });
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: item })
                          }
                        >
                          +
                        </button>
                        <h2
                          className="underline mx-2"
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: item })
                          }
                        >
                          Remove
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="absolute bottom-0">
                <div className="flex flex-row mx-20 gap-20 ">
                  <div className="text-lg">
                    <HiOutlinePencil className="mx-3" /> Note
                  </div>
                  <div className="text-lg">
                    <FaShippingFast className="mx-3" /> Shipping
                  </div>
                </div>
                <div className="flex flex-row justify-between p-3">
                  <h1>Sub total</h1>
                  <h1>$ {total}</h1>
                </div>
                <button className="bg-black text-white w-full h-10 rounded-full">
                  Buy it now
                </button>
                <p className="m-3 text-center underline">View Cart</p>
              </div>
            </div>
          </div>

          {/* akhir modal */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
