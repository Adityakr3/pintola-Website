import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Store from "../pages/Store";

const Navigation = () => {  
  const WebLink = [
    "Store",
    "Why Pintola?",
    "Recipes",
    "About Us",
    "Contact Us",
    "Track Your Order",
  ];
  const Links = [
    { parts: "HELLO, SIGN IN", comp: <CgProfile /> , link:"login" },
    { parts: "SEARCH", comp: <CiSearch/> },
    { parts: "CART" ,comp: <IoCartOutline/>, link:"cart"},
    { parts: "CONTACT" ,comp: <FaHeadphonesAlt/> , link:"contact"},
  ];
  return (
    <div className="text-gray-50">
      <div className="nav1 w-full h-auto bg-[#e36e35] p-3 text-slate-100 text-xs">
        <p className="flex gap-2 items-center justify-center">
          <span>
            <BsHandbag />
          </span>{" "}
          Use FIRST15 & Get FLAT 15% OFF on Your First Order!
        </p>
      </div>
      <div className="nav2 w-full h-22 bg-[#fcf7ef] p-4 flex items-center  justify-evenly">
         <Link to="/" >
         <img
          className="w-42 h-12"
          src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347"
          alt=""
          srcset=""
        />
         </Link>
        <div className="flex items-center gap-4 text-slate-400  font-thin text-base text-[#85776f]">
          {WebLink?.map((elem, idx) => {
            if (idx == 0) {
              return (
                <Link
                  className="hover:text-orange-500 flex items-center justify-center"
                  key={idx}
                  to="store"
                >
                  {elem} <IoIosArrowDown className="hover:rotate-180 w-8 h-6" />
                </Link>
              );
            } else if (idx == 5) {
              return (
                <Link
                  className=" w-18 h-8 text-white bg-[#e36e35] p-5 flex items-center justify-center rounded-full"
                  key={idx}
                  to="#"
                >
                  {elem}
                </Link>
              );
            } else
              return (
                <Link className="hover:text-orange-500" key={idx} to="#">
                  {elem}
                </Link>
              );
          })}
        </div>
        <div className="flex gap-2 text-slate-400 font-light text-[11px]  justify-center text-[#85776f]">
          {Links?.map((elem, idx) => {
            return(
              <Link  key={idx}
              to={elem.link} className="flex flex-col items-center hover:text-orange-500 cursor-pointer">
                    <span className="text-base">{elem.comp}</span>
                    <span>{elem.parts}</span>
               </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
