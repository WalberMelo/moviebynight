import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import PropTypes, { func } from "prop-types";
import { Rating } from "react-simple-star-rating";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

// const ShowModal = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #4b403d;
//   color: #f3f3f3;
//   opacity: 90%;
//   margin: 0 auto;
//   z-index: 1000;
// `;

function Image({ img }) {
  const { id, isFavorite, rating, overview, releaseDate, title, url } = img;

  const [hover, setHover] = useState(false);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  /* SELECT FAVORITE  */
  function heartIcon() {
    if (img.isFavorite) {
      const heartFill = (
        <MdFavorite className="favorite" onClick={() => toggleFavorite(id)} />
      );
      return heartFill;
    } else if (hover) {
      const heartOutline = (
        <MdOutlineFavoriteBorder
          className="favorite"
          onClick={() => toggleFavorite(id)}
        />
      );
      return heartOutline;
    }
  }

  /* ADD TO CART */
  function cartIcon() {
    const itemsInCart = cartItems.some((item) => item.id === id);
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

  const [showDetails, setShowDetails] = useState(false);
  const showMovieDetails = (event) => {
    console.log(event.currentTarget);
    setShowDetails(!showDetails);
  };

  function displayRating() {
    if (rating <= 2) {
      return 1;
    } else if (rating <= 4) {
      return 2;
    } else if (rating <= 7) {
      return 3;
    } else if (rating <= 8) {
      return 4;
    } else if (rating <= 10) {
      return 5;
    }
  }

  return (
    <div>
      <div
        className="image-container "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={showMovieDetails}
      >
        {heartIcon()}
        {cartIcon()}
        <img src={url} className="image-grid" />
      </div>
      {showDetails && (
        <div className="details">
          <h3>{title}</h3>
          <span>{releaseDate}</span>
          <h5>{overview}</h5>
          <div>
            <Rating readonly initialValue={displayRating()} size={"12px"} />
          </div>

          <span>{rating}</span>
        </div>
      )}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    rating: PropTypes.number,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default Image;
