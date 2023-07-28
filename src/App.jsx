import React from 'react';
import Home from "./components/Home";
import Testimonial from './components/Testimonial';
import Deals from './components/Deals';
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonial />
      <Deals />

    </div>
  )
}

export default App