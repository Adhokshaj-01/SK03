import React from "react";
import {
  FaBolt,
  FaRoad,
  FaLightbulb,
  FaBatteryFull,
  FaPlug,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Service = () => {
  const serviceData = [
    {
      name: "Supply, erection, testing & commissioning work of Distribution Lines ranging from 11Kv to 33Kv, substations works & U/G Cable laying works",
      icon: <FaBolt size="54px" />, // Represents electrical power and distribution systems
      color: "blue.500",
    },
    {
      name: "Supply, erection, and commissioning of HT and LT Cable at various Government and semi-government departments",
      icon: <FaPlug size="54px" />, // Represents cabling and electrical connections
      color: "purple.500",
    },
    {
      name: "Supply, erection and commissioning of DG Set, cable tray and other electrical requirements of plant (both External and Internal)",
      icon: <FaBatteryFull size="54px" />, // Represents power systems like DG sets
      color: "cyan.500",
    },
    {
      name: "Shifting of existing HT/LT Line & Distribution Transformer due to road widening of National Highway",
      icon: <FaRoad size="54px" />, // Represents road and infrastructure-related works
      color: "green.400",
    },
    {
      name: "Supply, erection, commissioning of street light",
      icon: <FaLightbulb size="54px" />, // Represents lighting and streetlights
      color: "orange.500",
    },
  ];
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] mx-4">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="lg:mx-[15%] mx-[5%] mb-12 max-w-full text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3  text-4xl font-bold leading-[1.2] text-orange-500 sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
                <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                            viewport={{  amount: 0.2 }} // Ensures animation triggers once when 20% of the element is visible
                            className="mt-4 text-justify lg:text-center">
                With over 28 years of expertise, we excel in Erection,
                Commissioning, Testing, LT/HT Installation, Internal
                Electrification, Cabling, and Paneling. Our capabilities extend
                to the shifting of electrical utilities for National Highways
                and MSRDC Roads, ensuring seamless integration and compliance.
                We also provide comprehensive services in Engineering,
                Substation Design, and Project Monitoring, catering to diverse
                industrial projects, including 33KV Substations. Our commitment
                to precision and efficiency makes us a trusted partner for all
                your electrical infrastructure needs.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-wrap justify-center">
          {serviceData.map((service) => (
            <ServiceCard details={service.name} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{  amount: 0.2 }} // Ensures animation triggers once when 20% of the element is visible
      className="w-full px-4 md:w-1/2 lg:w-1/3 border-2 border-dashed border-orange-200"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        viewport={{  amount: 0.2 }}
        className="mb-9 bg-white p-10 md:px-7 xl:px-10 transition ease-in-out"
      >
        <div className="mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl bg-primary">
          {icon}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{  amount: 0.2 }}
          className="text-body-color"
        >
          {details}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

