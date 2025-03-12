import React from "react";
import abtImg from "./ui/about1.svg";
import abtImg2 from "./ui/about2.svg";
import abtImg3 from "./ui/about3.svg";
import {motion} from 'framer-motion'
const About1 = () => {
  return (
    <>
      <section className="overflow-hidden py-4 lg:py-20  bg-white mx-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img src={abtImg2} alt="" className="w-full rounded-2xl" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={abtImg3} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img src={abtImg} alt="" className="w-full rounded-2xl" />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#FFA500" />
                  </svg>
                        </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-orange-400 sm:text-[40px]/[48px]">
                  ABOUT US
                </h2>
                <motion.p 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} 
                viewport={{  amount: 0.2 }} 
                className="mb-8 text-base text-body-color text-justify">
                  Established on November 3, 1995, SK Group is a trusted,
                  Government-approved Electrical Contractor with nearly three
                  decades of expertise. We specialize in Erection,
                  Commissioning, Testing, LT/HT Installation, Internal
                  Electrification, Cabling, and Paneling, delivering tailored,
                  high-quality electrical solutions to clients in Nagpur and
                  across multiple states. Our team of highly skilled
                  professionals is dedicated to providing safe, efficient, and
                  cost-effective services. Whether for industrial, commercial,
                  or residential projects, we combine precision, reliability,
                  and a customer-centric approach to ensure superior results. At
                  SK Group, we are committed to excellence and timely project
                  execution, making us the preferred partner for all your
                  electrical contracting needs. Trust us to power your projects
                  with innovation, quality, and unmatched expertise.
                </motion.p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
