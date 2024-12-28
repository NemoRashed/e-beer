"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/herocard";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <BackgroundBeamsWithCollision>
      {/* Header Section */}
      <h2
        className={`text-2xl relative mt-20 ${
          isOpen ? "z-0" : "z-20"
        } md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight`}
      >
        Connect Directly to Farmers
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-2xl md:text-6xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-500 via-green-500 to-green-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            Fresh, <span className="text-yellow-600">Organic, </span>Delivered!
          </div>
          <div className="relative text-2xl md:text-6xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-green-500 via-green-500 to-green-700 py-4">
            Fresh, <span className="text-yellow-500">Organic,</span> Delivered!
          </div>
        </div>
        {/* Order Button */}
        <div
          onClick={handleBuyNowClick}
          className="text-xl tracking-wider bg-green-500 text-center mx-auto w-44 mt-10 p-3 rounded-full text-white cursor-pointer hover:bg-yellow-500"
        >
          Order Now
        </div>
      </h2>

      {/* Modal Section */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-auto">
            <h2 id="modal-title" className="text-xl font-bold mb-4">
              Register Form
            </h2>
            <form>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="shop-name" className="block mb-1">
                Shop Name
              </label>
              <input
                id="shop-name"
                type="text"
                placeholder="Shop Name"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="location" className="block mb-1">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="number" className="block mb-1">
                Number
              </label>
              <input
                id="number"
                type="number"
                placeholder="Number"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </BackgroundBeamsWithCollision>
  );
}
