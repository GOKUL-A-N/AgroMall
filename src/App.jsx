import React from 'react';
import Home from "./components/Home";
import Testimonial from './components/Testimonial';
import Deals from './components/Deals';
import Navbar from "./components/Navbar";
import Catagories from './components/Catagories';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonial />
      <Deals />
      <Catagories />
      <Footer />
    </div>
  )
}

export default App