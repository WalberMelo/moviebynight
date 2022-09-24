import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import CartItem from "../../components/CartItems/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  console.log(cartItems);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  //Calculate total price using hard code price 5.99 to all products
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  //Place Order to the Server
  const [buttonText, setButtonText] = useState("Place Order");

  return (
    <main className="cart-page">
      <h2>Check out</h2>
      {cartItemsElements}
      <p className="total-cost">Total:{totalCostDisplay}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <Link to="/checkout">
            <button>{buttonText}</button>
          </Link>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
