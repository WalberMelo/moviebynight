import React, { useContext } from "react";
import { Context } from "../../context/Context";
import userRating from "../../hooks/userRating";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { id, isFavorite, rating, overview, releaseDate, title, url } = item;
  const { removeFromCart } = useContext(Context);

  const date = releaseDate;
  let year;
  function formatDate(num) {
    const newDate = num.split("-");
    year = Number(newDate[0]);
  }
  formatDate(date);

  return (
    <div className="cart-item">
      <BsTrash
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item)}
      />
      <img src={url} width="130px" />
      <div className="cart-movie--details">
        <h2>
          {title}
          {year}
        </h2>
        <h5>{overview}</h5>
        <div>{userRating(rating)}</div>
        <span>{rating}</span>
      </div>
      <p>$ 5.50</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
