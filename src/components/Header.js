import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext.js";

import "../styles/components/Header.css";

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          {/**colocamos icono de font awesome de carrito de compras */}
          <i className="fas fa-shopping-basket" />
        </Link>
        {/**logica para mostrar cuantos productos están activos en el cart*/}
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;
