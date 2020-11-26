import React, { useContext } from "react";

import AppContext from "../context/AppContext.js";
import Product from "./Product.js";

import "../styles/components/Products.css";

function Products() {
  const { state, addToCart } = useContext(AppContext);

  //obtenemos los productos del estado
  const { products } = state;

  //funcion para adicionar un producto al carrito. Esta funcion se la pasamos al componente Product para que pueda
  //interactuar con la logica
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
