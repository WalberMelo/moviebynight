import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Movies from "../pages/Movies/Movies";
import Whishlist from "../pages/Whishlist/Whishlist";
import Header from "../components/Header/Header";
import Registration from "../pages/Registration/Registration";
import Video from "../pages/Intro/Video";

import Checkout from "../components/Checkout/checkout";
// import Login from "../components/login/Login";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Video />} />
        <Route
          path="/"
          element={
            <div>
              <Header /> <Movies />
            </div>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/cart"
          element={
            <div>
              <Header />
              <Cart />
            </div>
          }
        />
        <Route
          path="/whishlist"
          element={
            <div>
              <Header />
              <Whishlist />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Router;
