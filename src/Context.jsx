import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  /* GET FROM LOCAL STORAGE */
  let cartStorage = JSON.parse(localStorage.getItem("products")) || [];

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState(cartStorage);

  /* FETCH API DATA */
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  /* SENT TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

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
