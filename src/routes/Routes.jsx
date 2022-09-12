import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Movies from "../pages/Movies/Movies";
import Whishlist from "../pages/Whishlist/Whishlist";
import Login from "../components/login/Login";
import Header from "../components/Header/Header";
import Registration from "../pages/Registration/Registration";
import Video from "../pages/Intro/Video";
import Home from "../pages/Home/Home";

function Router() {
  const [token, setToken] = useState();
  if (token) {
    return <Login setToken={setToken} />;
  }

  const introDuration = 6.734;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={introDuration === 6.734 ? <Video /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/movies"
          element={
            <div>
              <Header />
              <Movies />
            </div>
          }
        />
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
