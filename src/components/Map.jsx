import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = () => {
  const mapStyles = {
    height: '50vh',
    with: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796,
  };

  const googleMapsClientID = process.env.GOOGLE_MAPS_CLIENT_ID;

  return (
    <LoadScript googleMapsApiKey={googleMapsClientID}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
