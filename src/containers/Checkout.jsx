import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, current) => accumulator + current.price;
    return cart.reduce(reducer, 0);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Order list:</h3>
        ) : (
          <h3>You dont have any product yet 😔</h3>
        )}
        {cart.map((item, i) => (
          <div className="Checkout-item" key={i}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Total price:  $ ${handleSumTotal()}`}</h3>
          <Link to={'/checkout/information'}>
            <button type="button">Continue order</button>
          </Link>
        </div>
      )}
    </div>
  );
};
