import axios from "axios";
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/common/NavBar";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
