import React, { useState } from "react";
import logo from "../Images/logo/logo.png";
import { Mails } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "./ui/bg.svg";
import RollingNum from "./ui/animation/Roll";
const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative pt-[40px] mx-4">
        {/* Animated SVG Background */}
        {/* <div className="absolute inset-0 w-full h-full opacity-20 -z-10">
            <SVGAnimation />
          </div> */}

        {/*  */}
        <div className="container relative z-10">
          <div className="flex flex-wrap items-center justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full px-4 lg:w-1/2 lg:ml-20"
            >
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Welcome To <br />
                  S.K ELECTRO ENGG. & CO
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  We are a trusted Government-approved Electrical Contractor,
                  specializing in Erection, Commissioning, Testing, LT/HT
                  Installation, Internal Electrification, Cabling, and
                  Paneling....
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-orange-400 border-dashed border-2 border-orange-400"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="w-full lg:w-5/12 flex justify-center lg:justify-end"
            >
              <div className="relative z-10 inline-block mt-4">
                <img
                  src={heroImg}
                  alt="hero"
                  className="max-w-full lg:ml-auto ml-4"
                />
                <span className="absolute -bottom-6 -left-6 z-[-1] hidden lg:block">
                  {/* Small Decorative SVG */}
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="top-0 z-20 flex items-center mx-4 border-b-2 border-orange-200 sticky bg-white">
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <img src={logo} alt="logo" className="h-14" />
//             </a>
//           </div>

//           <div className="flex w-full items-center justify-between px-4">
//             {/* Mobile Menu Button */}
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={`${
//                   open ? "navbarTogglerActive" : ""
//                 } absolute right-6 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-400"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-400"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-orange-400"></span>
//               </button>

//               {/* Navbar Links */}
//               <nav
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
//                   !open && "hidden"
//                 }`}
//               >
//                 <ul className="block lg:flex">
//                   <ListItem NavLink="/#">Home</ListItem>
//                   <ListItem NavLink="/#">Services</ListItem>
//                   <ListItem NavLink="/#">Gallery</ListItem>
//                   <ListItem NavLink="/#">Network</ListItem>
//                   <ListItem NavLink="/#">About</ListItem>
//                   <ListItem NavLink="/#">Careers</ListItem>
//                   <li className="mt-3 lg:hidden">
//                     <a
//                       href="/#"
//                       className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//                     >
//                       <Mails size={18} /> Contact
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="hidden lg:flex justify-end pr-16 lg:pr-0">
//               <a
//                 href="/#"
//                 className="flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//               >
//                 <Mails size={18} /> Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <li>
//       <a
//         href={NavLink}
//         className="flex py-2 text-base font-medium text-dark hover:text-orange-400 lg:ml-10 lg:inline-flex"
//       >
//         {children}
//       </a>
//     </li>
//   );
// };
