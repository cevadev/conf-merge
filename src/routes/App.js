import React from "react";
//traemos los elementos necesarios de react-router-dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout.js";
import Home from "../containers/Home.js";
import Checkout from "../containers/Checkout.js";
import Information from "../containers/Information.js";
import Payment from "../containers/Payment.js";
import Success from "../containers/Success.js";
import NotFound from "../containers/NotFound.js";

import AppContext from "../context/AppContext.js";
import useInitialState from "../hooks/useInitialState.js";

/**
 * encapsulamos toda la navegacion de la app en el BrowserRouter
 * Switch permite acceder al recurso que coincida con exactitud la ruta elegida
 * manejamos las rutas que tendrá la app
 */
function App() {
  //useInitialState nos retorna el estado y dos funciones que vamos a utilizar en el contexto de la app cuando lo necesitemos
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          {/**aqui Switch pasa cada una de las vistas como hijos al componente Layout */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
