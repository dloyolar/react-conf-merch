import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Information.css';

import { AppContext } from '../context/AppContext';

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      dept: formData.get('dept'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      zip: formData.get('zip'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Dept" name="dept" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal Code" name="zip" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to={'/checkoutt'}>Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
