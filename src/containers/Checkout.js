import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppContext from "../context/AppContext.js";

import "../styles/components/Checkout.css";

function Checkout() {
  //del context traemos el state y la funcion removeToCart
  const { state, removeFromCart } = useContext(AppContext);
  //obtenemos cart del state
  const { cart } = state;

  /**
   * funcion que nos permite eliminar un item del cart
   */
  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  /**
   * funcion que calcula el total del cart
   */
  function handleSumTotal() {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    //cart.reduce() funcion de un array que retorna o reduce a un unico valor de un array
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Lista de pedido - Store Conf Merch</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {/**validamos que haya productos en el cart para mostrar los items */}
          {cart.length > 0 ? (
            <h3>Lista de pedidos: </h3>
          ) : (
            <h3>Sin pedidos que mostrar</h3>
          )}
          {cart.map((item, index) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>$. {item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item, index)}>
                {/**colocamos icono de font awesome de eliminar item */}
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {/**validamos que hay por lo menos un producto en el cart para mostrar total y continuar pedido */}
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio total: $. ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continua pedido</button>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Checkout;
