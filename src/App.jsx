import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Photos from "./pages/Photos/Photos";
import Whishlist from "./pages/Whishlist/Whishlist";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishlist" element={<Whishlist />} />
      </Routes>
    </div>
  );
}

export default App;
