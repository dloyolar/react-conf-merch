import React from 'react';
import { Helmet } from 'react-helmet';

export const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dloyolar" />
      <meta name="twitter:creator" content="@dloyolar" />
      <meta name="twitter:title" content="Conf Store" />
      <meta name="twitter:description" content="Conf Store" />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/practicaldev/image/fetch/s--ItM6k2Vz--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vx1ntk1reuhqo3tafbo.png"
      />
      <meta property="og:title" content="Conf Store" />
      <meta property="og:description" content="Conf Store" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/practicaldev/image/fetch/s--ItM6k2Vz--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vx1ntk1reuhqo3tafbo.png"
      />
      <meta property="og:site_name" content="Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
    </Helmet>
  );
};
