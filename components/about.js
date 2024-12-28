"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Beero Casri ah",
    description:
      "Waxaan ku dadaaleynaa inaan si joogto ah u soo saarno farsamooyinka ugu casrisan ee beeraha.",
    icon: "🌾",
  },
  {
    name: "Tayada",
    description:
      "Waxaan ku hawlanahay in aan bixino wax soo saarka iyo adeegyada tayada ugu sareeya leh.",
    icon: "✅",
  },
  {
    name: "Beeraleyda",
    description: "Beeraleydu waa udub dhexaadka wax kasta oo aan qabano.",
    icon: "👨‍🌾",
  },
  {
    name: "Daryeelka Deegaanka",
    description:
      "Waxaan u heellan nahay in aan saameyn togan ku yeelano deegaanka dabiiciga ah.",
    icon: "🌍",
  },
];

function FeatureItem({ feature, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
          <span className="text-2xl">{feature.icon}</span>
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
          {feature.name}
        </p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">
        {feature.description}
      </dd>
    </motion.div>
  );
}

export default function AboutContent() {
  return (
    <div className="py-12 bg-gray-50 px-5 md:px-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">
            Qiimaha Nagu Dheehan
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Waxa Nagu Hagiya Guusha
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Qiimaheena asaasiga ah ayaa hagaya go'aamadeenna oo dhan iyo wax
            kasta oo aan soo saarno.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <FeatureItem key={feature.name} feature={feature} index={index} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
