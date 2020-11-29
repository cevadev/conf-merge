import React, { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AppContext from "../context/AppContext.js";

import "../styles/components/Information.css";

function Information() {
  //obtenemos del Context el state e incluimos una nueva funcion para el comprador
  const { state, addToBuyer } = useContext(AppContext);

  //manejamos el formulario y su referencia
  const form = useRef(null);

  //obtenemos el cart del estado
  const { cart } = state;

  //history nos permitira hacer el push de la informacion
  const history = useHistory();

  /**
   * funcion que captura la informacion del formulario para hacer el pago
   */
  function handleSubmit() {
    //utilizamos la funcion formData para leer la info de todo el formulario manejado por la variable form
    const formData = new FormData(form.current);

    //objeto buyer que maneja la estructura del comprador
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    //le pasamos a la funcion addToBuyer(buyer) el objeto buyer con los datos del cliente
    addToBuyer(buyer);
    //enviamos la informacion (push) a la siguiente pagina
    history.push("/checkout/payment");
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          {/**hacemos referencia a nuestra variable form */}
          <form ref={form}>
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
              name="address"
              autocomplete="address"
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
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            {/**logica del boton pagar */}
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{`$.${item.price}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
