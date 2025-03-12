// import About1 from "./components/About";
// import Contact from "./components/Contact";
// import Gallery from "./components/Gallery";
// import Hero from "./components/Home2";
// import Network from "./components/Network";
// import Services from "./components/Services";

// function App() {
//   return (
//    <>
//    <Hero/>
//    <Services/>
//    <About1/>
//    <Gallery/>
//    <Network/>
//    <Contact/>
//    </>
//   );
// }

// export default App;
import React, { useRef } from "react";
import About1 from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Home2";
import Network from "./components/Network";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  // Creating refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const networkRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section smoothly
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Pass scroll function to Navbar */}
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, servicesRef, aboutRef, galleryRef, networkRef, contactRef }} />

      <div ref={heroRef}><Hero /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={aboutRef}><About1 /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={networkRef}><Network /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer/>
    </>
  );
}

export default App;
