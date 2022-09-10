import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

function Whishlist() {
  const { allPhotos } = useContext(Context);

  const getFavoriteImages = allPhotos.filter((img) => {
    if (img.isFavorite) {
      return img;
    }
  });

  const movies = getFavoriteImages.map((movie) => {
    return (
      <div key={movie.id} className="movies-cart">
        <img src={movie.url} width="130px" />
        <div className="movie-cart">
          <div className="movie-cart--details">
            <h3>
              {movie.title}
              <span> - ({movie.releaseDate})</span>
            </h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <p>My Favorites({movies.length})</p>
      {movies}
    </div>
  );
}

export default Whishlist;

{
  /* <Button onClick={() => toaster.success('Your source is now sending data')}>
  Success
</Button> */
}

// function Whishlist() {
//   const { allPhotos } = useContext(Context);
//   const [favorites, setFavorites] = useState();

//   let totalFavorite; //! Implement total of favorite
//   const favoriteImages = allPhotos.map((img) => {
//     if (img.isFavorite) {
//       // totalFavorite = img.url.length;
//       return (
//         <div key={img.id}>
//           <img src={img.url} width="130px" />;
//         </div>
//       );
//     }
//   });

//   return (
//     <div>
//       <p>My Favorites({totalFavorite})</p>
//       {favoriteImages}
//     </div>
//   );
// }

// export default Whishlist;
