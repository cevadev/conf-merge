import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Products from "../components/Products.js";
//importamos nuestro archivo con datos de prueba
import initialState from "../initialState.js";

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Conf Merch - Products</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@harpazos" />
        <meta name="twitter:creator" content="@harpazos" />
        <meta name="twitter:title" content="Conf Store" />
        <meta name="twitter:description" content="Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Conf Store" />
        <meta property="og:description" content="Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="https://store-merch.web.app/" />
        <meta property="og:site_name" content="Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </Fragment>
  );
}

export default Home;
