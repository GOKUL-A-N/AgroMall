import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
import NoPage from './components/NoPage';
import Vegetables from "./pages/Vegetables"
import Fruits from "./pages/Fruits";
import Meat from "./pages/Meat";
import Spices from "./pages/Spices";
import SkinandHairProducts from './pages/SkinandHairProducts';
import Others from "./pages/Others";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage />} />
        <Route path='/fruits' element={<Fruits />} />
        <Route path='/vegetables' element={<Vegetables />} />
        <Route path='/meat' element={<Meat />} />
        <Route path='/spices' element={<Spices />} />
        <Route path='/skinandhairproducts' element={<SkinandHairProducts />} />
        <Route path='/others' element={<Others />} />
      </Routes>
    </div>
  )
}

export default App