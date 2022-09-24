import { Rating } from "react-simple-star-rating";

function userRating(rating) {
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
      <Rating readonly initialValue={displayRating()} size={"12px"} />
    </div>
  );
}

export default userRating;
