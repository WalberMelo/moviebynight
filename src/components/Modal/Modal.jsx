import { Rating } from "react-simple-star-rating";
import React from "react";
import { VscEyeClosed } from "react-icons/vsc";

function Modal({ details }) {
  const { id, rating, overview, releaseDate, title } = details;

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
    <div className="showModal" key={id}>
      <div className="closeModal">
        <VscEyeClosed size="20px" />
      </div>
      <h3>{title}</h3>
      <span>{releaseDate}</span>
      <h5>{overview}</h5>
      <div>
        <Rating readonly initialValue={displayRating()} size={"12px"} />
      </div>
      <span>{rating}</span>
    </div>
  );
}

export default Modal;
