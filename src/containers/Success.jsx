import React from 'react';

import '../styles/components/Success.css';

export const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Diego, Thank you for your purchase</h2>
        <span>Your order will arrive in 3 days to your address.</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};
