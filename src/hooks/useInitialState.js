import { useState } from "react";

import initialState from "../initialState.js";

/**
 * Este custom hook maneja el estado, recibe un archivo bd local y tiene funciones que permiten adicionar
 * y eliminar un producto del carrito y retornar el estado actualizado.
 */
function useInitialState() {
  //manejamos nuestro esatdo
  const [state, setState] = useState(initialState);

  /**
   * addToCart hace uso de la funcion setState que es la funcion que actualiza el estado
   * @param {*} payload -> dato del producto a incluir a carrito
   */
  const addToCart = (payload) => {
    //logica simular utilizda con redux
    setState({
      //recuperamos el estado
      ...state,
      //traemos el cart que esta en el estado y le agregamos elproducto que estamos comprando
      cart: [...state.cart, payload],
    });
  };

  function removeFromCart(payload, indexToRemove) {
    setState({
      ...state,
      //removemos el item que estamos pasando del cart con filter, obtenemos un cart con los items que no tengan el payload o product
      cart: state.cart.filter(
        (item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  }

  function addToBuyer(payload) {
    setState({
      //recuperamos el state que tengamos en ese momento
      ...state,
      buyer: [...state.buyer, payload],
    });
  }

  function addNewOrder(payload) {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  }

  //retornamos las funciones
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
}

export default useInitialState;
