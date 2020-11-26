import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Information.css";

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              autocomplete="name"
              required
            />
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              autocomplete="email"
              required
            />
            <input
              type="text"
              placeholder="Direccion"
              name="addres"
              autocomplete="addres"
              required
            />
            <input type="text" placeholder="apto" name="apto" />
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              autocomplete="city"
              required
            />
            <input type="text" placeholder="Pais" name="country" />
            <input
              type="text"
              placeholder="Estado"
              name="state"
              autocomplete="state"
              required
            />
            <input
              type="text"
              placeholder="Codigo postal"
              name="cp"
              autocomplete="postal-code"
              required
            />
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              autocomplete="phone"
              required
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
