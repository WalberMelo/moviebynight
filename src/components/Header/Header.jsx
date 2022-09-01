import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { Avatar } from "evergreen-ui";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Header() {
  const { cartItems } = useContext(Context);
  const totalCartItems = cartItems.length;

  return (
    <header>
      <Link to="/" className="header-title">
        <h2>NFT Collection</h2>
      </Link>
      <Link to="/whishlist" className="header-favorite">
        <MdOutlineFavoriteBorder />
        FAVORITES
      </Link>
      <Link to="/cart">
        <div className="image-wrapper wrapper">
          {totalCartItems > 0 && <span>{totalCartItems}</span>}
          <GrCart className="cart-head--icon" />
        </div>
      </Link>
      <Link to="/account">
        <Avatar
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
          name="Alan Turing"
          size={30}
        />
      </Link>
    </header>
  );
}

export default Header;
