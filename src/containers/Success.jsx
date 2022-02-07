import React, { useContext } from 'react';
import { Map } from '../components/Map';

import { AppContext } from '../context/AppContext';
import { useAddress } from '../hooks/useAddress.js';

import '../styles/components/Success.css';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const map = useAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0]?.name}, Thank you for your purchase`}</h2>
        <span>Your order will arrive in 3 days to your address.</span>
        <div className="Success-map">
          {map && Object.keys(map).length !== 0 ? (
            <Map data={map} />
          ) : (
            'Wait a second please...'
          )}
        </div>
      </div>
    </div>
  );
};
