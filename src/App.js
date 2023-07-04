import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";

import Landing from "./components/Landing.js";
import Header from "./components/Header";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";
// import NewGallery from "./components/NewGallery.js";


const App = () => {
  return (
    <BrowserRouter>
      <div className="page-content">
        <div className="overlay"></div>

        <Header />

        <Landing />
        <About />
        <Gallery />
        <Contact />

        <Footer />

      </div>
    </BrowserRouter>
  );
};


export default App;
