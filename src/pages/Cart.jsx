import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main className="cart-page">
      <h2>Check out</h2>
      {cartItemsElements}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
