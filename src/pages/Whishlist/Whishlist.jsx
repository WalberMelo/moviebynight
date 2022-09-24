import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import userRating from "../../hooks/userRating";

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
        <img src={movie.url} width="130px" height="200px" />
        <div className="movie-cart">
          <div className="movie-cart--details">
            <h3>
              {movie.title}
              <span> - ({movie.releaseDate})</span>
            </h3>
            <p>{movie.overview}</p>
            <div>
              {userRating(movie.rating)}
              {movie.rating}
            </div>
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
