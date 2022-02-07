import { useEffect, useState } from 'react';

export const useAddress = (address) => {
  const [map, setMap] = useState({});
  const { REACT_APP_MAP_REQUEST } = process.env;
  const API = `http://open.mapquestapi.com/geocoding/v1/address?key=${REACT_APP_MAP_REQUEST}&location=${address}`;

  useEffect(() => {
    fetch(API)
      .then((data) => data.json())
      .then((re) => setMap(re.results[0].locations[0].displayLatLng));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return map;
};
