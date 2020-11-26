import React from "react";

import Products from "../components/Products.js";
//importamos nuestro archivo con datos de prueba
import initialState from "../initialState.js";

function Home() {
  return <Products products={initialState.products} />;
}

export default Home;
