import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Photos from "./pages/Photos/Photos";
import Whishlist from "./pages/Whishlist/Whishlist";

function Routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Photos />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/whishlist" element={<Whishlist />} />
    </Routes>
  );
}

export default Routes;
