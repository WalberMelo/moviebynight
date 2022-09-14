import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

// const ShowModal = styled.div`
//   position: absolute;
//   top: 35%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: rgb(33, 32, 32);
//   font-size: 14px;
//   padding: 2rem;
//   opacity: 80%;
//   z-index: 100;
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

  //Formatting date from 2020-12-07 to Dec 07, 2020
  const date = releaseDate;
  let month;
  let day;
  let year;
  function formatDate(num) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate = num.split("-");
    const monthly = Number(newDate[1].slice(1));
    month = months[monthly];
    day = Number(newDate[2]);
    year = Number(newDate[0]);
  }
  formatDate(date);

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
      <div className="title">
        <p>{title}</p>
        <span>{`${month} ${day}, ${year}`}</span>
      </div>
      {showDetails && (
        <div className="ShowModal">
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
