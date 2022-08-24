import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite } = useContext(Context);

  /* Render icons based on the hover event */
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

  const cartIcon = hover && <IoIosAddCircleOutline className="cart" />;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon}
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
