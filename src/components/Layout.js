import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";

import "../styles/components/Layout.css";

/**
 * Pasamos a la funcion un componente children que va hacer render
 */
function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
