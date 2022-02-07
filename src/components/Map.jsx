import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/components/Maps.css';

export const Map = ({ data }) => {
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <MapContainer
      center={defaultCenter}
      zoom={10}
      className="Leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter}>
        <Popup>Your address</Popup>
      </Marker>
    </MapContainer>
  );
};
