import React from 'react';
import Deals from "./Deals";
import Catagories from "./Catagories";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Navbar from "./Navbar"


const Home = () => {
  return (
    <div>
      <Navbar />
      <>
      Home
      </>
      <Testimonial />
      <Deals />
      <Catagories />
      <Footer />
    </div>
  )
}

export default Home