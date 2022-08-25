import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

function Header() {
  const { cartItems } = useContext(Context);
  const totalCartItems = cartItems.length;

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <div className="image-wrapper wrapper">
          {totalCartItems > 0 && <span>{totalCartItems}</span>}
          <GrCart className="cart-head" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
