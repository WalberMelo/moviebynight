import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

function CartItem({ item }) {
  const { id, isFavorite, rating, overview, releaseDate, title, url } = item;
  const { removeFromCart } = useContext(Context);

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
        <div>
          <Rating readonly initialValue={displayRating()} size={"12px"} />
        </div>

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
