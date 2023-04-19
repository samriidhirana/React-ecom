import React from "react";
import FormatPrice from '../../Helpers/FormatPrice'
import CartAmount from "../CartAmount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../contexts/cart-context";

const CartItem = ({ id, name, image, color, price, amount }) => {
    const {deleteCartItem, setDecrease, setIncrease} = useCartContext();
 
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color :</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* ---price--- */}
      <div className="cart-hide">
        <p><FormatPrice price={price} /></p>
      </div>

      {/* --quantity-- */}
      <CartAmount
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      {/* --subtotal-- */}
      <div className="cart_hide">
        <p><FormatPrice price = {price * amount} /></p>
      </div>

      {/* ---remove icon---- */}
      <div>
        <FaTrash className="remove_icon" onClick={() => deleteCartItem(id)} />
      </div>
      
    </div>
    
  );
};

export default CartItem;
