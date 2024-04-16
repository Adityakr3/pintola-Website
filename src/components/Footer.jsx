import React from "react";
import { FiFacebook } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const Links = [
    { icons: <FiFacebook /> },
    { icons: <SlSocialInstagram /> },
    { icons: <RiTwitterXFill /> },
    { icons: <AiOutlineYoutube /> },
    { icons: <CiLinkedin /> },
  ];

  const BoxLinks1 = [
    "All Products",
    "Peanut Butter",
    "Breakfast Cereals",
    "Premium Nut Butters",
    "Wholegrain Rice Cakes",
    "Wood Pressed Oil",
  ];

  const BoxLinks2 = [
    "About Us",
    "Blogs",
    "Privacy Policy",
    "Terms of Service",
    "FAQs",
    "Refund & Cancellation Policy",
    "Shipping Policy",
    "Return Order",
  ];

  return (
    <div className="w-full h-96 flex  bg-[#fdf7f0] px-20">
      <div className="container1 w-[18vw] h-auto p-6 flex justify-between">
        <div>
          <img
            src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_e0a75445-bd35-450f-895e-ece13c165b78_200x.png?v=1668503333"
            alt=""
            srcset=""
          />
          <div className="socialMedia mt-6">
            <p className="text-gray-600 font-thin text-sm">Follow Us:</p>
            <div className="socialLinks flex gap-3 mt-8 text-gray-600 text-xl">
              {Links?.map((elem, idx) => {
                return <span>{elem.icons}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container2 flex justify-between  w-[36vw] p-7 ml-3 ">
        <div className="box1 w-[19vw]">
          <h1 className="text-2xl text-[#85776f]">Shop</h1>
          <div className="mt-4">
            {BoxLinks1?.map((elem) => {
              return (
                <p className="hover:text-deep-orange-500 flex flex-col pt-1 text-[#85776f]">
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
        <div className="box2 w-[19vw]">
          <h1 className="text-2xl text-[#85776f]">Pintola</h1>
          <div className="mt-4">
            {BoxLinks2?.map((elem) => {
              return (
                <p className="hover:text-deep-orange-500 flex flex-col pt-1 text-[#85776f]">
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container3 flex justify-between  w-[42vw] p-7 mr-8">
        <div className="box1 w-[19vw]">
          <h1 className="text-2xl text-[#85776f]">Stay in the loop</h1>
          <div className="mt-4">
            <input
              className="border-1 w-64 border-brown-50"
              type="text"
              placeholder="email"
            />
            <button className="bg-black w-64 p-2 mt-6 text-white">
              Sign Up
            </button>
          </div>
        </div>
        <div className="box2 w-[15vw] ml-16">
          <h1 className="text-2xl text-[#85776f]">
            Download Product Catalogue
          </h1>
          <div className="mt-4">
            <button className="bg-black px-6 py-2 mt-2 text-white">
             Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
