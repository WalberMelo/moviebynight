import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";

import { Avatar, SearchInput } from "evergreen-ui";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Header() {
  const { cartItems, controlSearchInput } = useContext(Context);
  const totalCartItems = cartItems.length;

  const [inputValue, setInputValue] = useState("");
  // console.log("value:", inputValue);
  //! Transfer inputValue to context throughout function
  () => controlSearchInput(inputValue);

  return (
    <header>
      <Link to="/movies" className="header-title">
        <h2>Movie by Nigth</h2>
      </Link>
      <SearchInput
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search for collection"
      />
      <Link to="/whishlist" className="header-favorite">
        <MdOutlineFavoriteBorder />
        FAVORITES
      </Link>
      <Link to="/cart">
        <div className="image-wrapper wrapper">
          {totalCartItems > 0 && <span>{totalCartItems}</span>}
          {/* <GrCart className="cart-head--icon" /> */}
          <FcShop className="cart-head--icon" />
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
