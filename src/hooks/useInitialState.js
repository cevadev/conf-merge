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
  function addToCart(payload) {
    //logica simular utilizda con redux
    setState({
      //recuperamos el estado
      ...state,
      //traemos el cart que esta en el estado y le agregamos elproducto que estamos comprando
      cart: [...state.cart, payload],
    });
  }

  function removeFromCart(payload) {
    setState({
      ...state,
      //removemos el item que estamos pasando del cart con filter, obtenemos un cart con los items que no tengan el payload o product
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  }

  //retornamos las funciones
  return {
    addToCart,
    removeFromCart,
    state,
  };
}

export default useInitialState;
