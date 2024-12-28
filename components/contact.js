"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Information */}
        <motion.div className="space-y-6 lg:pr-12" variants={itemVariants}>
          <div className="flex flex-col justify-center  mt-10">
            <h1 className=" text-3xl font-extrabold text-gray-800 mb-2">
              Contact us
            </h1>
            <div className=" text-center border-b-2 w-20 border-green-500 shadow-2xl shadow-green-600" />
          </div>
          <p className="text-gray-600 text-lg">
            Have questions or need assistance? We're here to help. Reach out to
            us anytime, and we'll get back to you promptly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <Phone className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                <MapPin className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">
                  123 Business Street, New York, NY
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-8 rounded-lg shadow-md"
          variants={itemVariants}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
