function getTotalAmount(cart) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  //cart.reduce() funcion de un array que retorna o reduce a un unico valor de un array
  const sum = cart.reduce(reducer, 0);
  return sum;
}

export default getTotalAmount;
