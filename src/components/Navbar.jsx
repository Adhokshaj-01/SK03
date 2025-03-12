import React, { useState, useEffect } from "react";
import logo from "../Images/logo/logo.png";
import { Mails, SidebarClose } from "lucide-react";

const Navbar = ({ scrollToSection, refs }) => {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="top-0 z-20 flex items-center mx-4 border-b-2 border-orange-200 sticky bg-white">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="w-60 max-w-full px-4">
            <a href="#home" className="block w-full py-5">
              <img src={logo} alt="logo" className="h-14" />
            </a>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            {/* Mobile Menu Button */}
            <div>
              <button
                onClick={() => setOpen(true)}
                className="absolute right-6 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="block h-[2px] w-[30px] bg-orange-400 my-[6px]"></span>
                <span className="block h-[2px] w-[30px] bg-orange-400 my-[6px]"></span>
                <span className="block h-[2px] w-[30px] bg-orange-400 my-[6px]"></span>
              </button>
            </div>

            {/* Desktop Navigation (Unchanged) */}
            <nav className={`absolute right-4 top-full w-full max-w-[250px] bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${!open && "hidden"}`}>
              <ul className="flex space-x-10">
                <ListItem onClick={() => scrollToSection(refs.heroRef)}>Home</ListItem>
                <ListItem onClick={() => scrollToSection(refs.servicesRef)}>Services</ListItem>
                <ListItem onClick={() => scrollToSection(refs.aboutRef)}>About</ListItem>
                <ListItem onClick={() => scrollToSection(refs.galleryRef)}>Gallery</ListItem>
                <ListItem onClick={() => scrollToSection(refs.networkRef)}>Network</ListItem>
              </ul>
            </nav>

            {/* Contact Button (Desktop) */}
            <div className="hidden lg:flex justify-end pr-16 lg:pr-0">
              <button
                onClick={() => scrollToSection(refs.contactRef)}
                className="flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                <Mails size={18} /> Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gray-800 p-5 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-50 shadow-lg`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:bg-gray-200 rounded-full"
        >
          <SidebarClose size={20} />
        </button>

        {/* Navigation Links */}
        <ul className="mt-10 space-y-4">
          <ListItem onClick={() => { scrollToSection(refs.heroRef); setOpen(false); }}>Home</ListItem>
          <ListItem onClick={() => { scrollToSection(refs.servicesRef); setOpen(false); }}>Services</ListItem>
          <ListItem onClick={() => { scrollToSection(refs.aboutRef); setOpen(false); }}>About</ListItem>
          <ListItem onClick={() => { scrollToSection(refs.galleryRef); setOpen(false); }}>Gallery</ListItem>
          <ListItem onClick={() => { scrollToSection(refs.networkRef); setOpen(false); }}>Network</ListItem>
        </ul>

        {/* Contact Button (Inside Drawer) */}
        <div className="mt-6">
          <button
            onClick={() => {
              scrollToSection(refs.contactRef);
              setOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3 text-white w-full hover:bg-opacity-90"
          >
            <Mails size={18} /> Contact
          </button>
        </div>
      </div>

      {/* Overlay (Click to Close Drawer) */}
      {open && (
        <div
          className="fixed inset-0 bg-orange-200 bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

const ListItem = ({ children, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="block w-full text-left py-2 text-base font-medium text-dark hover:text-orange-400"
      >
        {children}
      </button>
    </li>
  );
};

export default Navbar;
