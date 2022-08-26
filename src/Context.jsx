import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
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

// 1. Add the `cartItems` state to context. (Array)
// 2. Add function to add an image to the cart. (Takes the full image object as parameter)
// 3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)
