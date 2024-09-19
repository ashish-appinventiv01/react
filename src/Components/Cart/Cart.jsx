import React, { useContext } from 'react';
import { UserContext } from "../Context/ContextAPI/ContextAPI";
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  const  cart = useSelector((state) => state.cart);

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className='cart-item'>
              <div className='cart-item-info'>
                <img src={product.img}></img>
                <p className='product-name'>{product.productName}</p>
                <p className='product-quantity'>Quantity: {product.quantity}</p>
              </div>
              {index < cart.length - 1 && <hr className='separator' />} {/* Line after each product */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
