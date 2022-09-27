import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Movies from "../pages/Movies/Movies";
import Whishlist from "../pages/Whishlist/Whishlist";
import Header from "../components/Header/Header";
import { Register } from "../pages/Registration/Register";
import Video from "../pages/Intro/Video";
import { AuthProvider } from "../../src/hooks/useAuth";
import Checkout from "../components/Checkout/checkout";
import Login from "../components/login/Login";
import { ProtectedRoute } from "../components/login/ProtectRoute";

function Router() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/intro" element={<Video />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Header /> <Movies />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
      </AuthProvider>
    </div>
  );
}

export default Router;
