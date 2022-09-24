import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

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

  /* MODAL */
  const [showModal, setShowModal] = useState(false);

  const showMovieModal = (event) => {
    setShowModal(!showModal);
  };

  const closeModal = (event) => {
    console.log(event.currentTarget);
    if (showModal) {
      setShowModal(false);
    }
  };

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
    <div className="movies-container" onClick={closeModal}>
      <div className="cards">
        <div
          className="image-container "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={showMovieModal}
        >
          {heartIcon()}
          {cartIcon()}
          <img src={url} className="image-grid" />
        </div>
        <div className="title">
          <p>{title}</p>
          <span>{`${month} ${day}, ${year}`}</span>
        </div>
      </div>
      <div>{showModal && <Modal details={img} />}</div>
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
