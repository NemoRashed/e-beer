"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaDollarSign } from "react-icons/fa";
import Farm from "@/components/images/farm.jpg";
import Farmtool from "@/components/images/farmtool.jpg";
import Farmtool1 from "@/components/images/farmtool1.jpg";
import React, { useState } from "react";

export default function FundCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const cards = [
    {
      name: "Abdi Ali Hassan",
      description:
        "Waxaan u baahanahay seed aan beertayda ku beero, fadlan iga caawi walaal oo ila beer. Waxaan kaloo u baahanahay cagaf aan ku qodo dhulka si aan ugu diyaariyo beero waaweyn oo miro badan laga helo. Caawimadaada waxay noqon doontaa furaha horumarka beertayda iyo nolosha qoyskayga.",
      location: "Awbarkhadle",
      phone: "+252 63 000000",
      amount: "$2000",
      src: Farm,
    },
    {
      name: "Abdi Ali Hassan",
      description:
        "Waxaan u baahanahay seed aan beertayda ku beero, fadlan iga caawi walaal oo ila beer. Waxaan kaloo u baahanahay cagaf aan ku qodo dhulka si aan ugu diyaariyo beero waaweyn oo miro badan laga helo. Caawimadaada waxay noqon doontaa furaha horumarka beertayda iyo nolosha qoyskayga.",
      location: "Awbarkhadle",
      phone: "+252 63 000000",
      amount: "$2000",
      src: Farmtool,
    },
    {
      name: "Abdi Ali Hassan",
      description:
        "Waxaan u baahanahay seed aan beertayda ku beero, fadlan iga caawi walaal oo ila beer. Waxaan kaloo u baahanahay cagaf aan ku qodo dhulka si aan ugu diyaariyo beero waaweyn oo miro badan laga helo. Caawimadaada waxay noqon doontaa furaha horumarka beertayda iyo nolosha qoyskayga.",
      location: "Awbarkhadle",
      phone: "+252 63 000000",
      amount: "$2000",
      src: Farmtool1,
    },
    // ... add more card objects as needed
  ];

  return (
    <div className="mt-28">
      <div className="flex flex-col justify-center items-center mb-3 ">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
          Go fund Page
        </h1>
        <div className="border-b-2 w-20 border-green-500 shadow-2xl shadow-green-600" />
      </div>

      <div>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center  gap-5 mb-6"
          >
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl hover:scale-105 transition-transform duration-300 ease-in-out">
              {/* Card Content */}
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="w-full sm:w-1/3 bg-gray-200 rounded-lg h-48 sm:h-48 flex justify-center items-center overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt="Farm"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full sm:w-2/3 px-4 flex flex-col justify-between mt-4 sm:mt-0">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {card.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                  </div>
                  {/* Buttons and Go Fund */}
                  <div className="flex flex-wrap items-center justify-between mt-4">
                    <div className="flex gap-2 justify-between mb-3">
                      <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
                        <FaMapMarkerAlt /> {card.location}
                      </button>
                      <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
                        <FaPhoneAlt /> {card.phone}
                      </button>
                      <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
                        <FaDollarSign /> {card.amount}
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 active:scale-95 transition-all duration-200"
                    onClick={handleOpenModal}
                  >
                    Go Fund
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for payment form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Payment Information</h2>
            {/* Payment form fields */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4"
                  placeholder="123"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
