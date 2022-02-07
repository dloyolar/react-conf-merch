import React from 'react';

import { Products } from '../components/Products';
import { Seo } from '../components/Seo';
import initialState from '../initialState';

export const Home = () => {
  return (
    <>
      <Seo title={'Conf Merch - Products'} />
      <Products products={initialState.products} />
    </>
  );
};
