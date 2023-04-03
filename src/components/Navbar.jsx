import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar h-10 bg-white shadow-xl sticky top-0 z-50">
      <div className="navbar-start flex items-center justify-between flex-wrap p-10">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
        <div className="dropdown dropdown-end">
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
        <div className="dropdown dropdown-end">
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
        <div className="flex justify-between">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FiSearch calor="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <CgProfile color="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <AiFillStar color="black" size={22} />
          </label>
        </div>
        <div className="flex justify-between mx-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BiShoppingBag color="black" size={22} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
