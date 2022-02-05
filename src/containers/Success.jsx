import React, { useContext } from 'react';
import { Map } from '../components/Map';

import { AppContext } from '../context/AppContext';

import '../styles/components/Success.css';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Thank you for your purchase`}</h2>
        <span>Your order will arrive in 3 days to your address.</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};
