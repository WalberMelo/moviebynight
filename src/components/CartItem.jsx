import React, { useContext } from "react";
import { Context } from "../Context";
import { BsTrash } from "react-icons/bs";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <BsTrash
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item)}
      />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
