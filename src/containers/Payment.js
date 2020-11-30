import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";

import AppContext from "../context/AppContext.js";

import getTotalAmount from "../utils/getTotalAmount.js";
import "../styles/components/Payment.css";

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  /**
   * configuraciones para paypal
   * client id -> identificador que acreadita que esta ligado a nuestra cuenta de paypal
   */
  const paypalOptions = {
    clientId:
      "ARNX5UWvJr_gzyn5SZ4jP_zHbxiSxTkFGefTACXPhAKEcezfPehKrEbMwcFoLTlYHBatKEPMCUFRCN33",
    intent: "capture",
    currency: "USD",
  };

  //configuramos los estilos que tendra el boton
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  /* const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }; */

  function handlePaymentSuccess(data) {
    console.info(data);
    //cuando recibimos el sucess nos envia el status, por loque debemos valir dicho status
    if (data.status === "COMPLETED") {
      //construimos una nueva orden
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      //creamos funciona para agregar la nueva orden al estado para poder hacer futuras operaciones como almacenarla en una BD
      //debemos añadir addNewOrder al hook de useInitialState y al initialState.js
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={getTotalAmount(cart)}
            onPaymentStart={() => console.info("Start payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.error(error)}
            onPaymentCancel={(data) => console.info(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
