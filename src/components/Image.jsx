import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  /* FAVORITE  */
  function heartIcon() {
    if (img.isFavorite) {
      const heartFill = (
        <MdFavorite
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
      return heartFill;
    } else if (hover) {
      const heartOutline = (
        <MdOutlineFavoriteBorder
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
      return heartOutline;
    }
  }

  /* ADD TO CART */
  function cartIcon() {
    const itemsInCart = cartItems.some((item) => item.id === img.id);
    if (itemsInCart) {
      const cartItemExist = (
        <BsFillCartCheckFill
          className="cart"
          onClick={() => removeFromCart(img)}
        />
      );
      return cartItemExist;
    } else if (hover) {
      const addCartIcon = (
        <IoIosAddCircleOutline
          className="cart"
          onClick={() => addToCart(img)}
        />
      );
      return addCartIcon;
    }
  }
  /* REMOVE TO CART */

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
