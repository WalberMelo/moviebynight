import React, { useState, useEffect } from "react";
//! HIDE API KEY
const api_key = "b6d36fdf08c70b93d670b2ab99ad8b3b";

const Context = React.createContext();

function ContextProvider({ children }) {
  let cartStorage = JSON.parse(localStorage.getItem("products")) || [];

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState(cartStorage);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // let query = "popular";

    const fetchData = async () => {
      let url = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${api_key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllPhotos(
          data.results.map((result) => {
            return {
              id: result.id,
              title: result.title,
              url: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
              overview: result.overview,
              rating: result.vote_average,
              releaseDate: result.release_date,
              isFavorite: false,
            };
          })
        );
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  };

  const checkItemsExist = (arr, val) => {
    return arr.some((arrVal) => val === arrVal);
  };

  const addToCart = (img) => {
    if (checkItemsExist(cartItems, img)) {
      return;
    } else setCartItems((prevImage) => [...prevImage, img]);
  };

  const removeFromCart = (img) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => img !== item)
    );
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  //! Search query movie
  // const [inputImage, setInputImage] = useState("");
  // console.log("inputImage", inputImage);

  // const controlSearchInput = (img) => {
  //   setInputImage(img);
  // };

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
